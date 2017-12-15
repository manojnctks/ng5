import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {DataService} from '../data.service';
import { Customer } from '../customer/Customer';
import { Product } from '../products/product';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  customers:Customer[]=[];
  products:Product[]=[];
  product:Product;
  btnText:string="Find Item";
  msg:string;
  errorMsg:string;
  id:number;
  qty:number;
  pName:string;
  constructor(private route:ActivatedRoute,private router:Router,private _data:DataService) { 
    this.route.params.subscribe(res=> console.log(res.id));
  }

  ngOnInit() {  
     this._data.product.subscribe(res=>this.products=res) ;
     this._data.customer.subscribe(res=>this.customers=res) ;
  }

  findItem(pName:string){
     this.product=new Product();
     this.product = this.products.find(c=>c.PName==pName);    
    this.msg="Available....";
  }

  purchase(qty:number){
    if(qty<=this.product.Qty)
    { 
      this.product.Qty-=qty;
      this._data.changeCustomer(this.products);
    }
    else
    {
      this.errorMsg="Sorry qty not available";
    }

  }


}
