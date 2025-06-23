"use strict";
var founders = [" Bruce Wayne ", " Barry Allen ", " Diana Prince "];
//class for introduction
var introduction = /** @class */ (function () {
    function introduction() {
        this.manager = "Clark Kent";
    }
    introduction.prototype.intro = function () {
        var fun = function () {
            var founderNames = "";
            // Write the code to get founders array and return in a founderNames variable
            for (var i = 0; i < founders.length; i++) {
                founderNames += founders[i];
                if (i < founders.length - 1) {
                    founderNames += ",";
                }
            }
            return founderNames;
        };
        var content = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Infotech Quiz Portal or  better known as IQP is a fully operational web application for people, who are looking for a way to test their knowledge on different programming languages. It is over a decade old and the core members are\n            ".concat(fun(), ". The Admin of this awesome endeavor is ").concat(founders[0], " and the web manager is ").concat(this.manager, ".");
        document.getElementById("intro").innerHTML = content;
    };
    ;
    return introduction;
}());
//introFun will be called from HTML-page onload
function introFun() {
    //Write the code to instantiate the class and invoke the intro function
    var introObject = new introduction();
    introObject.intro();
}
