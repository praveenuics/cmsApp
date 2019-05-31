import { Component, OnInit, Input } from '@angular/core';
import { customer, customers } from './customers.model';

@Component({
    selector: 'app-customers',
    templateUrl: 'customers.component.html'
})

export class CustomersComponent implements OnInit {

    public cust: customer[] = customers;

    constructor() { }

    ngOnInit() { }
}