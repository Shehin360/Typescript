"use strict";
var User = {
    name: "shehin",
    email: "shehin@gmail.com",
    isActive: true
};
function createUser(name, email, isPaid) {
    console.log("Name: ".concat(name, ", Email: ").concat(email, ", Is Active: ").concat(isPaid));
}
function createCourse() {
    return { name: "reactJS", price: 500 };
}
function user5(user) {
    return { name: " ", email: "", isActive: true };
}
user5({ name: "", email: "", isActive: true });
// function createUser1(U:User1){}
var myUser = {
    _id: "123",
    name: "mr H",
    email: "H@gmail.com",
    isActive: false
};
myUser.email = "haboon @gmail.com";
