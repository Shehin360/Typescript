// STANDALONE VERSION FOR BROWSER USE
var suggestionListStandalone: string[] = [];
var identificationStandalone: any = "Anonymous";

// ADDED: This function stores the user input (name or employee ID) 
// It's called from the HTML onkeyup event when user types in input fields
function storeValStandalone(value: string): void {
    if(value && value.trim() !== ""){
        identificationStandalone = value.trim();
    }
}

function finalStandalone() {
    // CHANGED: Get performance data from localStorage (stored from quiz page)
    // Uses logical OR operator to provide fallback if no data exists
    let performanceText = localStorage.performanceDetails || "Unknown";
    let result = `Your performance is <span class="text-danger">
	${performanceText}
	</span>, based on your scores. 
    Please do fill up the details mentioned below.`;

    // CHANGED: Added non-null assertion operator (!) to tell TypeScript 
    // that we're confident the element exists
    let performanceElement = document.getElementById("performance");
    if (performanceElement) {
        performanceElement.innerHTML = result;
    }
}

function addSuggestionStandalone() {
   // COMPLETED: Get the suggestion details entered in the fields of the SuggestionPage
   // and make use of the done function given below to render the appropriate informations on the screen.
   
   // ADDED: Get references to the input elements using DOM selectors
   // Type casting to HTMLInputElement to access .value property
   let nameInput = document.querySelector('input[type="text"]') as HTMLInputElement;
   let employeeIdInput = document.querySelector('input[type="number"]') as HTMLInputElement;
   let suggestionInput = document.getElementById("suggestion") as HTMLInputElement;
     // ADDED: Initialize variables to store user data
   let userIdentification = identificationStandalone;
   let suggestionText = "";
   
   // ADDED: Priority logic - check name first, then employee ID
   // Get name or employee ID (name takes priority if both are filled)
   if(nameInput && nameInput.value.trim() !== ""){
       userIdentification = nameInput.value.trim();
   } else if(employeeIdInput && employeeIdInput.value.trim() !== ""){
       userIdentification = employeeIdInput.value.trim();
   }
     // ADDED: Get suggestion text and add to suggestions list
   if(suggestionInput && suggestionInput.value.trim() !== ""){
       suggestionText = suggestionInput.value.trim();
       suggestionListStandalone.push(suggestionText); // Store in global array for future use
   }
     // ADDED: Call the provided done function with collected data
   // Uses spread operator (...) to pass multiple arguments
   doneStandalone(userIdentification, suggestionText);
}

function doneStandalone(...feedback: any[]) {
    // UNCHANGED: Template string for final display message
    let finalStatement = `<pre class="alert alert-success"><strong>Employee Name or Id:</strong> <span class="text-danger">${feedback[0]}</span>
<strong>Suggestions:</strong><span class="text-danger"> ${feedback[1] ? feedback[1] : "None"}</span>
                        <strong>Thank You for using the app!</strong></pre>`;
    
    // CHANGED: Added null safety check instead of direct assignment
    // This prevents TypeScript errors and runtime crashes if element doesn't exist
    let finalElement = document.getElementById("final");
    if(finalElement){
        finalElement.innerHTML = finalStatement;
    }
}
