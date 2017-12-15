import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent} from './orders/orders.component';

const routes: Routes = [
{
  path:'',component: HomeComponent
},
{
  path:'product',component: ProductsComponent
},
{
  path: 'about', component: AboutComponent 
},
{
  path: 'customer',component:CustomerComponent
},
{
  path: 'order',component:OrdersComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
