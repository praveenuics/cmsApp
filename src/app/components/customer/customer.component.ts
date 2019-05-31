import { Component, OnInit, Input } from '@angular/core';
import { customer } from '../customers/customers.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  @Input() inputCust: customer;
  constructor() { }

  ngOnInit() {
  }

}
