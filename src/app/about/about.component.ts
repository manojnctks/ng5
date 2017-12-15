import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {DataService} from '../data.service';
import { Customer } from '../customer/Customer';
import { Product } from '../products/product';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  // customers:Customer[]=[];
  // products:Product[]=[];
  constructor(private route:ActivatedRoute,private router:Router,private _data:DataService) { 
    this.route.params.subscribe(res=> console.log(res.id));
  }

  ngOnInit() {  
    // this._data.product.subscribe(res=>this.products=res) ;
    // this._data.customer.subscribe(res=>this.customers=res) ;
  }

  sendMeHome(){
    this.router.navigate(['']);
  }

}
