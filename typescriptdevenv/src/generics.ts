function identityone<Type>(val:Type):Type{
    return val
}
//or

function identitytwo<T>(val:T):T{
    return val
}

//arrow function

const getMoeSearchProducts = <T>(product: T[]): T =>{
    const myindex =6
    return product[myindex]

}
