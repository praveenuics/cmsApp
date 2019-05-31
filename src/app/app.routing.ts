import {Routes} from '@angular/router';
import {CustomersComponent} from './components/customers/customers.component';
import {AddCustomerComponent} from './components/addCustomer/add.customer.component';
export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: CustomersComponent },
    { path: 'add', component: AddCustomerComponent }
 ];