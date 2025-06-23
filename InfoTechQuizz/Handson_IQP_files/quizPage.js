"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var performance;
(function (performance) {
    performance[performance["Needs Improvement"] = 0] = "Needs Improvement";
    performance[performance["Good"] = 25] = "Good";
    performance[performance["Very Good"] = 35] = "Very Good";
    performance[performance["Excellent"] = 50] = "Excellent";
})(performance || (performance = {}));
var page = /** @class */ (function () {
    function page() {
        this.score = 0;
    }
    page.prototype.submit = function () {
        //Write the code to calculate the score based on the selected radio button.
        this.score = 0;
        // Check Q1 - correct answer is "type inference" (a1)
        if (document.getElementById("a1").checked) {
            this.score += 10;
        }
        // Check Q2 - correct answer is target="_blank" (a2)
        if (document.getElementById("a2").checked) {
            this.score += 10;
        }
        // Check Q3 - correct answer is "Both Classes and modules" (a3)
        if (document.getElementById("a3").checked) {
            this.score += 10;
        }
        // Check Q4 - correct answer is "<LI> and <OL>" (a4)
        if (document.getElementById("a4").checked) {
            this.score += 10;
        }
        // Check Q5 - correct answer is "Any" (a5)
        if (document.getElementById("a5").checked) {
            this.score += 10;
        }
        var res = "<span class=\"alert alert-success\">Your score is ".concat(this.score, " !   <a class=\"btn btn-success\" href=\"SuggestionPage.html\">Click here to Proceed</a> </span>");
        localStorage.performanceDetails = performance[this.score];
        document.getElementById("result").innerHTML = res;
    };
    return page;
}());
function invokeSubmit() {
    var pageObject = new page();
    pageObject.submit();
}
