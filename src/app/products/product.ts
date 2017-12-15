export class Product{
    

    constructor(private _id?:number,private _pName?:string,private _qty?:number,private _price?:number){        
    }
    public get Id(){return this._id;}
    public set Id(value){this._id=value;}

    public get PName(){ return this._pName;}
    public set PName(value){this._pName=value;}

    public get Qty(){ return this._qty;}
    public set Qty(value){this._qty=value;}

    public get Price(){ return this._price;}
    public set Price(value){this._price=value;}
}