import { Injectable } from "@angular/core";
import { customers, customer } from "./customers.model";

@Injectable()
export class CustomersService {
  public cust: customer[] = customers;

  constructor() {}

  GetCustomers(): customer[] {
    return this.cust;
  }

  AddNewCustomer(obj: customer) {
    this.cust.push(obj);
  }
}
