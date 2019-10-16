import { Component, OnInit, Input } from "@angular/core";
import { customer, customers } from "./customers.model";
import { CustomersService } from "./customers.service";

@Component({
  selector: "app-customers",
  templateUrl: "customers.component.html"
})
export class CustomersComponent implements OnInit {
  public cust: customer[];

  constructor(private _custService: CustomersService) {}

  ngOnInit() {
    this.cust = this._custService.GetCustomers();
  }
}
