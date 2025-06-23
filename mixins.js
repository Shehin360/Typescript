"use strict";
console.log("Hello from mixins.ts");
var Phone = /** @class */ (function () {
    function Phone() {
    }
    Phone.prototype.sayImAPhone = function () {
        console.log("I am a phone");
    };
    return Phone;
}());
var DisplayDevice = /** @class */ (function () {
    function DisplayDevice() {
    }
    DisplayDevice.prototype.sayImADisplayDevice = function () {
        console.log("I am an DisplayDevice ");
    };
    return DisplayDevice;
}());
var SmartPhone = /** @class */ (function () {
    function SmartPhone() {
    }
    return SmartPhone;
}());
function applyMixins(derivedCtor, constructors) {
    constructors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                Object.create(null));
        });
    });
}
applyMixins(SmartPhone, [Phone, DisplayDevice]);
var smPhone1 = new SmartPhone;
smPhone1.sayImAPhone();
smPhone1.sayImADisplayDevice();
