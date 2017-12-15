import { Component, OnInit, Provider } from '@angular/core';
import { Product } from './product';
import {DataService} from '../data.service';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProviderMeta } from '@angular/compiler';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [
    trigger('products',[
      transition('* => *',[
        query(':enter',style({ opacity:0 }), {optional: true}),
        query(':enter',stagger('300ms',[
          animate('.6s ease-in',keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35%)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0%)', offset: 1}),
          ]))
        ]),{optional: true}),

        query(':leave',stagger('300ms',[
          animate('.6s ease-in',keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
          ]))
        ]),{optional: true})
      ])
    ])
  ]
})


export class ProductsComponent implements OnInit {

  products:Product[]=[];
  prodObj:Product;
  itemCount:number = 4;
  btnText:string = "Add an Item";
  btnRemove:string ="Remove an Item";

  id:number;
  pName:string;
  qty:number;
  price:number;

  constructor(private rout:ActivatedRoute,private router:Router,private _data:DataService) { }

  ngOnInit() {
    this._data.product.subscribe(res=>this.products=res);
    this.itemCount=this.products.length;
    this._data.changeProducts(this.products);
  }

  addItem(){ 
    this.prodObj=new Product(this.id,this.pName,this.qty,this.price);
    this.products.push(this.prodObj);
    //this.goalText='';
    this.itemCount=this.products.length;
    this._data.changeProducts(this.products);
  }

  removeItems(i:number){
    this.products.splice(i,1);
    this.itemCount=this.products.length;
    this._data.changeProducts(this.products);
  }

}
