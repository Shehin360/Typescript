"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(email, name, city) {
        this.email = email;
        this.name = name;
        this.city = city;
    }
    return User;
}());
var shan = new User("shan@gmail.com", "shan", 64548);
console.log(shan);
// shan.city  throws error
var User2 = /** @class */ (function () {
    //   private _courcecount = 1
    function User2(email, name, city) {
        this.email = email;
        this.name = name;
        this.city = city;
        this._courcecount = 1;
    }
    Object.defineProperty(User2.prototype, "aetAppleEmail", {
        get: function () {
            return this.email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User2.prototype, "coureccount", {
        get: function () {
            return this._courcecount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User2.prototype, "courcecount", {
        set: function (cource) {
            if (cource <= 1) {
                throw new Error("cource not found");
            }
            this._courcecount = cource;
        },
        enumerable: false,
        configurable: true
    });
    return User2;
}());
var subuser = /** @class */ (function (_super) {
    __extends(subuser, _super);
    function subuser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFamily = true;
        return _this;
    }
    subuser.prototype.changecourcecount = function () {
        this._courcecount = 4;
    };
    return subuser;
}(User2));
