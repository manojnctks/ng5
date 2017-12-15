export class Customer{
    _name:string = "";
    _age:number=0;
    _gender:string;    
    constructor(name:string,age:number,gender:string){
        this._age=age;
        this._gender=gender;
        this._name=name;
    }
    public get Name(){ return this._name;}
    public set Name(value){this._name=value;}

    public get Age(){ return this._age;}
    public set Age(value){this._age=value;}

    public get Gender(){ return this._gender;}
    public set Gender(value){this._gender=value;}
}