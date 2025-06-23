"use strict";
class User {
    constructor(email, name, city) {
        this.email = email;
        this.name = name;
        this.city = city;
    }
}
const shan = new User("shan@gmail.com", "shan", 64548);
console.log(shan);
// shan.city  throws error
class User2 {
    //   private _courcecount = 1
    constructor(email, name, city) {
        this.email = email;
        this.name = name;
        this.city = city;
        this._courcecount = 1;
    }
    get aetAppleEmail() {
        return this.email;
    }
    get coureccount() {
        return this._courcecount;
    }
    set courcecount(cource) {
        if (cource <= 1) {
            throw new Error("cource not found");
        }
        this._courcecount = cource;
    }
}
class subuser extends User2 {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changecourcecount() {
        this._courcecount = 4;
    }
}
