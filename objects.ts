const User = {
    name:"shehin",
    email:"shehin@gmail.com",
    isActive:true
}

function createUser(name:string,email:string,isPaid:boolean){
    console.log(`Name: ${name}, Email: ${email}, Is Active: ${isPaid}`);
}
function createCourse():{name:string, price: number}{
    return{name :"reactJS",price : 500}
}

//type

type User ={
    name: string;
    email: string;
    isActive: boolean;
}

function user5(user:User ):User {
    return {name:" ",email:"",isActive:true}
}

user5({name:"",email:"",isActive:true})

type User1 = {
    readonly _id :string;
    name: string;
    email: string;
    isActive: boolean;
    creditCarddetails?:number;
}

// function createUser1(U:User1){}

let myUser:User1 = {
    _id:"123",
    name:"mr H",
    email:"H@gmail.com",
    isActive: false
}
myUser.email = "haboon @gmail.com"
// myUser._id = "22" error occured

//mixin
type cardNumber ={
    cardNumber:string
}

type cardDate ={
    carddate:string
}

type cardDetails = cardNumber & cardDate &{
    cvv:number

}

