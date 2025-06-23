// STANDALONE VERSION FOR BROWSER USE
// UNCHANGED: Array of founders with their names
var foundersHomePage = [" Bruce Wayne ", " Barry Allen ", " Diana Prince "];
//class for introduction
var IntroductionHomePage = /** @class */ (function () {
    function IntroductionHomePage() {
        // UNCHANGED: Private property for manager name
        this.manager = "Clark Kent";
    }
    IntroductionHomePage.prototype.intro = function () {
        // ADDED: Arrow function to process founders array
        // Returns a formatted string of all founder names
        var fun = function () {
            var founderNames = ""; // COMPLETED: Write the code to get founders array and return in a founderNames variable
            // Loop through founders array and concatenate names with commas
            for (var i = 0; i < foundersHomePage.length; i++) {
                founderNames += foundersHomePage[i];
                // Add comma between names (except for the last one)
                if (i < foundersHomePage.length - 1) {
                    founderNames += ",";
                }
            }
            return founderNames;
        }; // UNCHANGED: Template literal for the main content
        var content = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Infotech Quiz Portal or  better known as IQP is a fully operational web application for people, who are looking for a way to test their knowledge on different programming languages. It is over a decade old and the core members are\n            ".concat(fun(), ". The Admin of this awesome endeavor is ").concat(foundersHomePage[0], " and the web manager is ").concat(this.manager, ".");
        // CHANGED: Added null safety check to prevent runtime errors
        // Get the intro element and only set innerHTML if it exists
        var introElement = document.getElementById("intro");
        if (introElement) {
            introElement.innerHTML = content;
        }
    };
    return IntroductionHomePage;
}());
//introFun will be called from HTML-page onload
function introFunHomePage() {
    // COMPLETED: Write the code to instantiate the class and invoke the intro function
    // Create an instance of the introduction class and call its intro method
    var introObject = new IntroductionHomePage();
    introObject.intro();
}
