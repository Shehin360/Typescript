class User{
    public email:string
    name:string
   private readonly city:number
    constructor(email:string,name:string,city:number){
        this.email = email;
        this.name =name ;
        this.city=city

        
    }
}

const shan = new User("shan@gmail.com","shan",64548)

console.log(shan)
// shan.city  throws error

class User2{
    protected _courcecount = 1
    //   private _courcecount = 1

  constructor(
    public email:string,
    public name:string,
    private city:number
    ){
        
    }

    get aetAppleEmail():string{
    return this.email
}
get coureccount():number{
    return this._courcecount
}

set courcecount(cource: number){
    if(cource <= 1){
        throw new Error("cource not found")
    }
    this._courcecount = cource;
}

}

class subuser extends User2{
    isFamily : boolean = true
    changecourcecount (){
        this._courcecount = 4
    }
}

