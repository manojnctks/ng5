import { Component, OnInit } from '@angular/core';
import {Customer} from './Customer';
import { error } from 'selenium-webdriver';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  animations: [
    trigger('customers',[
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
export class CustomerComponent implements OnInit {
itemCount:number = 4;
btnText:string = "Add an Item";
btnRemove:string ="Remove an Item";
//customers:Array<Customer>;
customers:Customer[]=[];
custObj:Customer;
 name:string;
 age:number;
 gender:string;

 errorMsg="";

  constructor(private rout:ActivatedRoute,private router:Router,private _data:DataService) { }

  ngOnInit() {                
    this._data.customer.subscribe(res=>this.customers=res);
    this.itemCount=this.customers.length; 
    this._data.changeCustomer(this.customers);
    //this.customers=[new Customer('Manoj',29,'Female'),new Customer('Vijay',39,'Female'),new Customer('Hari',19,'Male'),new Customer('Juber',29,'Female')];
  }

  addItem(){ 
    if(this.age<18) 
    {
      this.errorMsg="Please enter age more than 18";
      return;
    }
    else 
    this.errorMsg='';
    this.custObj=new Customer(this.name,this.age,this.gender);
    this.customers.push(this.custObj);
    //this.goalText='';
    this.itemCount=this.customers.length;
    this._data.changeCustomer(this.customers);
  }

  removeItem(){
    this.customers.pop();
    this.itemCount=this.customers.length;
  }
  removeItems(i:number){
    this.customers.splice(i,1);
    this.itemCount=this.customers.length;
    this._data.changeCustomer(this.customers);
  }
  sendMeABout(){
    this.router.navigate(['about']);
  }
  }


