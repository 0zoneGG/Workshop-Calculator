//get user input
window.onload = init
let principalField, interestRateField, loanLengthField, answerField;

function init()
{
    document.getElementById("buttonSubmit").addEventListener("click",calculateMortgage)
    
     answerField = document.getElementById("answerField")
     principalField = document.getElementById("principalField")
     interestRate = document.getElementById("interestRate")
     loanLengthField = document.getElementById("loanLength")
}
//this is where we will calculate monthly payments
function calculateMortgage(){

    let principal = parseFloat(principalField.value);
    let interest = parseFloat(interestRate.value)/100;
    let loanLength = parseFloat(loanLengthField.value);
 

   //convert interestRate
    let monthlyInterestRate = interest / 12;

    //calculate monthly payment
    let numberOfPayment = loanLength * 12;
    let monthlyPayment =(principal*monthlyInterestRate) / (1- Math.pow(1 + monthlyInterestRate, -numberOfPayment));

    //calculate total interest paid
    let totalInterestPay = (monthlyPayment * numberOfPayment)-principal
    console.log(totalInterestPay, monthlyPayment)

    answerField.value="Monthly Payment = " + monthlyPayment.toFixed(2) + " Total Intrest Paid = " + totalInterestPay.toFixed(2);
}


//Display results