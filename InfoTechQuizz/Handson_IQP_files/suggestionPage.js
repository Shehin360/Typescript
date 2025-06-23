"use strict";
var suggestionList = [];
var identification = "Anonymous";
function storeVal(value) {
    if (value && value.trim() !== "") {
        identification = value.trim();
    }
}
function final() {
    var performanceText = localStorage.performanceDetails || "Unknown";
    var result = "Your performance is <span class=\"text-danger\">\n\t".concat(performanceText, "\n\t</span>, based on your scores. \n    Please do fill up the details mentioned below.");
    document.getElementById("performance").innerHTML = result;
}
function addSuggestion() {
    //Write the code to get the suggestion details entered in the fields of the SuggestionPage
    //and make use of the done function given below to render the appropriate informations on the screen.
    var nameInput = document.querySelector('input[type="text"]');
    var employeeIdInput = document.querySelector('input[type="number"]');
    var suggestionInput = document.getElementById("suggestion");
    var userIdentification = identification;
    var suggestionText = "";
    // Get name or employee ID
    if (nameInput && nameInput.value.trim() !== "") {
        userIdentification = nameInput.value.trim();
    }
    else if (employeeIdInput && employeeIdInput.value.trim() !== "") {
        userIdentification = employeeIdInput.value.trim();
    }
    // Get suggestion
    if (suggestionInput && suggestionInput.value.trim() !== "") {
        suggestionText = suggestionInput.value.trim();
        suggestionList.push(suggestionText);
    }
    // Call done function with user identification and suggestion
    done(userIdentification, suggestionText);
}
function done() {
    var feedback = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        feedback[_i] = arguments[_i];
    }
    var finalStatement = "<pre class=\"alert alert-success\"><strong>Employee Name or Id:</strong> <span class=\"text-danger\">".concat(feedback[0], "</span>\n<strong>Suggestions:</strong><span class=\"text-danger\"> ").concat(feedback[1] ? feedback[1] : "None", "</span>\n                        <strong>Thank You for using the app!</strong></pre");
    var finalElement = document.getElementById("final");
    if (finalElement) {
        finalElement.innerHTML = finalStatement;
    }
}
