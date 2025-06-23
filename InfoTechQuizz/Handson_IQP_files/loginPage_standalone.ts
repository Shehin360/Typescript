// STANDALONE VERSION FOR BROWSER USE - Interface definition included inline
// UNCHANGED: Login class that implements basic form submission
class login {
    submit(): void {
        // COMPLETED: Write the code to perform the validation and accordingly navigate to QuizPage or 
        // render validation error messages.
        
        // ADDED: Get user input values from the form elements
        // Type casting to HTMLInputElement to access .value property safely
        let username = (document.getElementById("name") as HTMLInputElement).value;
        let password = (document.getElementById("password") as HTMLInputElement).value;
        
        // ADDED: Get error display elements for showing validation messages
        let nameError = document.getElementById("nameError");
        let passError = document.getElementById("passError");
        
        // ADDED: Clear any previous error messages before new validation
        if(nameError) nameError.innerHTML = "";
        if(passError) passError.innerHTML = "";
        
        // ADDED: Flag to track overall validation status
        let isValid = true;
        
        // ADDED: Username validation - check if empty or only whitespace
        if(!username || username.trim() === ""){
            if(nameError) nameError.innerHTML = "Username is required!";
            isValid = false;
        }
        
        // ADDED: Password validation - check if empty and minimum length
        if(!password || password.trim() === ""){
            if(passError) passError.innerHTML = "Password is required!";
            isValid = false;
        } else if(password.length < 6){
            if(passError) passError.innerHTML = "Password must be at least 6 characters!";
            isValid = false;
        }
        
        // ADDED: Navigate to quiz page only if all validations pass
        if(isValid){
            window.location.href = "QuizPage.html";
        }
    }
}

// UNCHANGED: Namespace to organize and encapsulate login object
namespace objectCreate {
    // UNCHANGED: Export login instance for global access
    export var loginObject = new login();
}

// UNCHANGED: Global function called from HTML onclick event
function invokeSubmitLogin() {
    // UNCHANGED: Delegate to the login object's submit method
    objectCreate.loginObject.submit();
}
