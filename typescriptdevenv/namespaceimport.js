"use strict";
/// <reference path="./namespacedemo.ts" />
var util = Utility.Payment;
var paymentAmount = util.CalculateAmount(1255, 6);
console.log("Amount to be paid: ".concat(paymentAmount));
var discount = Utility.MaxDiscountAllowed(6);
console.log("Maximum discount allowed is: ".concat(discount));
