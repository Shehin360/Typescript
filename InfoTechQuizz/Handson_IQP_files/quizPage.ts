import {clickResponse} from "./submitModule";
enum performance{"Needs Improvement"=0,"Good"=25,"Very Good"=35,"Excellent"=50}

class page implements clickResponse
{
    score:number=0;

    submit() :void
    {
    //Write the code to calculate the score based on the selected radio button.
	
    let res=`<span class="alert alert-success">Your score is ${this.score} !   <a class="btn btn-success" href="final.html">Click here to Proceed</a> </span>`;

    localStorage.performanceDetails=performance[this.score];
 
    document.getElementById("result").innerHTML=res;
  

    }
}
function invokeSubmit()
{
    let pageObject=new page();
    pageObject.submit();
}

