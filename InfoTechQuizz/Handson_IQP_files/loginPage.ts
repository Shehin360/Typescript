import {clickResponse} from "./submitModule";

class login implements clickResponse
{
  
    submit():void
    {
        //Write the code to perform the validation and accordingly navigate to QuizPage or 
		//render validation error messages.
    }

    

}

namespace objectCreate
{
    export var loginObject=new login();
}

function invokeSubmit()
{
    objectCreate.loginObject.submit();
}