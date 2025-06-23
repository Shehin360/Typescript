"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login = /** @class */ (function () {
    function login() {
    }
    login.prototype.submit = function () {
        //Write the code to perform the validation and accordingly navigate to QuizPage or 
        //render validation error messages.
        var username = document.getElementById("name").value;
        var password = document.getElementById("password").value;
        var nameError = document.getElementById("nameError");
        var passError = document.getElementById("passError");
        // Clear previous error messages
        if (nameError)
            nameError.innerHTML = "";
        if (passError)
            passError.innerHTML = "";
        var isValid = true;
        // Validate username
        if (!username || username.trim() === "") {
            if (nameError)
                nameError.innerHTML = "Username is required!";
            isValid = false;
        }
        // Validate password
        if (!password || password.trim() === "") {
            if (passError)
                passError.innerHTML = "Password is required!";
            isValid = false;
        }
        else if (password.length < 6) {
            if (passError)
                passError.innerHTML = "Password must be at least 6 characters!";
            isValid = false;
        }
        // If validation passes, navigate to quiz page
        if (isValid) {
            window.location.href = "QuizPage.html";
        }
    };
    return login;
}());
var objectCreate;
(function (objectCreate) {
    objectCreate.loginObject = new login();
})(objectCreate || (objectCreate = {}));
function invokeSubmit() {
    objectCreate.loginObject.submit();
}
