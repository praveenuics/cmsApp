import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AddCustomerComponent } from './components/addCustomer/add.customer.component';
import { AppHeaderComponent } from './components/appHeader/app.header.component';
import { CustomersComponent } from './components/customers/customers.component';
import { routes } from './app.routing';
import { CustomersService } from './components/customers/customers.service';

@NgModule({
  declarations: [
    AppComponent, AppHeaderComponent,
    CustomerComponent,
    AddCustomerComponent, CustomersComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
