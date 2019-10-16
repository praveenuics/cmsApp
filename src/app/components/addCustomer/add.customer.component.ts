import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { CustomersService } from "../customers/customers.service";
import { customer } from "../customers/customers.model";
import { Router } from "@angular/router";

@Component({
  selector: "cms-add-customer",
  templateUrl: "add.customer.component.html",
  styleUrls: ["add.customer.component.css"]
})
export class AddCustomerComponent implements OnInit {
  customerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _custService: CustomersService,
    private _router: Router
  ) {
    this.createForm();
  }

  createForm() {
    this.customerForm = this.fb.group({
      id: null,
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      age: ["", Validators.required],
      phone: ["", Validators.required],
      email: ["", Validators.required],
      image: ["", Validators.required]
    });
  }

  submitForm() {
    if (this.customerForm.valid) {
      let custObj: customer = this.customerForm.value;
      custObj["id"] = this.customerForm.value.firstName[0] + "123";

      this._custService.AddNewCustomer(custObj);

      this._router.navigate(["/home"]);
    }
  }
  clearForm() {
    this.customerForm.reset();
    this.createForm();
  }
  ngOnInit() {}
}
