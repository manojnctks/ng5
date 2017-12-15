import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Customer } from './customer/Customer';
import { Product } from './products/product';

@Injectable()
export class DataService {

  private products=new BehaviorSubject<any>([new Product(101,'Cinthol',102,19),new Product(103,'Taza Tea',10,109),new Product(104,'Cibaca',22,59),new Product(105,'Ponds',10,67)]);
  private customers=new BehaviorSubject<any>([new Customer('Manoj',29,'ff'),new Customer('Vinod',39,'Female'),new Customer('Anunjay',31,'Female')]);
  
  customer= this.customers.asObservable();
  product=this.products.asObservable();

  constructor() { }
  
  changeCustomer(customer){
    this.customers.next(customer);
  }

  changeProducts(product){
    this.products.next(product);
  }
}
