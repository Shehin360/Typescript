// STANDALONE VERSION FOR BROWSER USE - Interface definition included inline
// UNCHANGED: Login class that implements basic form submission
var login = /** @class */ (function () {
    function login() {
    }
    login.prototype.submit = function () {
        // COMPLETED: Write the code to perform the validation and accordingly navigate to QuizPage or 
        // render validation error messages.
        // ADDED: Get user input values from the form elements
        // Type casting to HTMLInputElement to access .value property safely
        var username = document.getElementById("name").value;
        var password = document.getElementById("password").value;
        // ADDED: Get error display elements for showing validation messages
        var nameError = document.getElementById("nameError");
        var passError = document.getElementById("passError");
        // ADDED: Clear any previous error messages before new validation
        if (nameError)
            nameError.innerHTML = "";
        if (passError)
            passError.innerHTML = "";
        // ADDED: Flag to track overall validation status
        var isValid = true;
        // ADDED: Username validation - check if empty or only whitespace
        if (!username || username.trim() === "") {
            if (nameError)
                nameError.innerHTML = "Username is required!";
            isValid = false;
        }
        // ADDED: Password validation - check if empty and minimum length
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
        // ADDED: Navigate to quiz page only if all validations pass
        if (isValid) {
            window.location.href = "QuizPage.html";
        }
    };
    return login;
}());
// UNCHANGED: Namespace to organize and encapsulate login object
var objectCreate;
(function (objectCreate) {
    // UNCHANGED: Export login instance for global access
    objectCreate.loginObject = new login();
})(objectCreate || (objectCreate = {}));
// UNCHANGED: Global function called from HTML onclick event
function invokeSubmitLogin() {
    // UNCHANGED: Delegate to the login object's submit method
    objectCreate.loginObject.submit();
}
