// STANDALONE VERSION FOR BROWSER USE - Interface and enum definitions included inline
// UNCHANGED: Enum to map scores to performance levels
// Each performance level has a corresponding score threshold
var PerformanceQuiz;
(function (PerformanceQuiz) {
    PerformanceQuiz[PerformanceQuiz["Needs Improvement"] = 0] = "Needs Improvement";
    PerformanceQuiz[PerformanceQuiz["Good"] = 25] = "Good";
    PerformanceQuiz[PerformanceQuiz["Very Good"] = 35] = "Very Good";
    PerformanceQuiz[PerformanceQuiz["Excellent"] = 50] = "Excellent";
})(PerformanceQuiz || (PerformanceQuiz = {}));
// UNCHANGED: Page class that implements basic form submission
var page = /** @class */ (function () {
    function page() {
        // UNCHANGED: Score property to track user's quiz performance
        this.score = 0;
    }
    page.prototype.submit = function () {
        // COMPLETED: Write the code to calculate the score based on the selected radio button.
        // ADDED: Reset score before calculation
        this.score = 0;
        // ADDED: Check Q1 - TypeScript compiler uses "type inference" when type not given
        // Each correct answer adds 10 points to the total score
        if (document.getElementById("a1").checked) {
            this.score += 10;
        }
        // ADDED: Check Q2 - Correct way to open link in new window is target="_blank"
        if (document.getElementById("a2").checked) {
            this.score += 10;
        }
        // ADDED: Check Q3 - Both Classes and modules are backported from ECMAScript 6
        if (document.getElementById("a3").checked) {
            this.score += 10;
        }
        // ADDED: Check Q4 - Both <LI> and <OL> tags are used for number lists
        if (document.getElementById("a4").checked) {
            this.score += 10;
        }
        // ADDED: Check Q5 - "Any" type is used for weakly/dynamically-typed structures
        if (document.getElementById("a5").checked) {
            this.score += 10;
        }
        // CHANGED: Updated link to point to SuggestionPage.html instead of final.html
        var res = "<span class=\"alert alert-success\">Your score is ".concat(this.score, " !   <a class=\"btn btn-success\" href=\"SuggestionPage.html\">Click here to Proceed</a> </span>"); // UNCHANGED: Store performance details in localStorage for next page
        // Uses conditional logic to convert score to performance level text
        var performanceLevel;
        if (this.score >= 50) {
            performanceLevel = "Excellent";
        }
        else if (this.score >= 35) {
            performanceLevel = "Very Good";
        }
        else if (this.score >= 25) {
            performanceLevel = "Good";
        }
        else {
            performanceLevel = "Needs Improvement";
        }
        localStorage.performanceDetails = performanceLevel;
        // CHANGED: Added non-null assertion operator (!) for type safety
        document.getElementById("result").innerHTML = res;
    };
    return page;
}());
// UNCHANGED: Global function called from HTML onclick event
function invokeSubmitQuiz() {
    // UNCHANGED: Create page instance and call submit method
    var pageObject = new page();
    pageObject.submit();
}
