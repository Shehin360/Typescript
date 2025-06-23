interface auser {
    email:string
    userId:number
    startTrail():string
}

const c_user:auser ={email:"dude@gmail.com",userId:101, startTrail:() =>{
    return "hello user"
}
}