import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'cms-add-customer',
    templateUrl: 'add.customer.component.html',
    styleUrls: ['add.customer.component.css']
})

export class AddCustomerComponent implements OnInit {
    customerForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    createForm() {
        this.customerForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            age: ['', Validators.required],
            phone: ['', Validators.required],
            email: ['', Validators.required],
            image: ['', Validators.required],
        });
    }

    submitForm(){
        console.log(this.customerForm);
    }
    clearForm(){
        this.customerForm.reset();
        this.createForm();
    }
    ngOnInit() { }
}