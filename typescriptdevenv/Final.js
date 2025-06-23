var Utility;
(function (Utility) {
    var Payment;
    (function (Payment) {
        function CalculateAmount(price, quantity) {
            return price * quantity;
        }
        Payment.CalculateAmount = CalculateAmount;
    })(Payment = Utility.Payment || (Utility.Payment = {}));
    function MaxDiscountAllowed(noOfProduct) {
        if (noOfProduct > 5) {
            return 40;
        }
        else {
            return 10;
        }
    }
    Utility.MaxDiscountAllowed = MaxDiscountAllowed;
    function privateFunc() {
        console.log('This is private...');
    }
})(Utility || (Utility = {}));
/// <reference path="./namespacedemo.ts" />
var util = Utility.Payment;
var paymentAmount = util.CalculateAmount(1255, 6);
console.log("Amount to be paid: ".concat(paymentAmount));
var discount = Utility.MaxDiscountAllowed(6);
console.log("Maximum discount allowed is: ".concat(discount));
