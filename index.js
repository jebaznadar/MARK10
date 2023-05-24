const billAmount =  document.querySelector("#bill-amount"); 
const nextButton = document.querySelector("#next-button");
const checkButton  = document.querySelector("#check-button");
const cashGiven = document.querySelector("#cash-given");
const errorMessage = document.querySelector("#error-message")
const noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [ 2000, 500, 100, 20, 10, 5, 1];
const changeTable = document.querySelector(".change-table")
const cashGivenInput = document.querySelector(".cash-input")

nextButton.addEventListener("click", function validateBillAmount(){
    hideError();
    cashGivenInput.style.display = "none";
    changeTable.style.display = "none ";
     
    if (billAmount.value > 0){
    nextButton.style.display = "none" ; 
    cashGivenInput.style.display = "block"  ;
    
   }
   else{
    
    showError("enter bill amount value greater than zero ")
    
   }
} ) ;

checkButton.addEventListener("click", function validateBillAndCashAmount (){
   clearNoOfNotes();
   hideError();
    if (billAmount.value >0 && cashGiven > 0 ){
        
        if(cashGiven.value >= billAmount.value){
            
          const amountToBeReturned = cashGiven.value - billAmount.value;
          calculatedChange(amountToBeReturned);
          changeTable.style.display ="block";

        }
        else{
            
            showError( "do you want to wash plates?")
           
        }

    }
    else{
          
        showError("Enter valid bill amount and cash given to continue ")
        
    }
});


 function calculatedChange(amountToBeReturned){
    for(let i=0; i < availableNotes.length ; i++ ){
        numberOfNotes = Math.trunc( amountToBeReturned / availableNotes[i]);
       amountToBeReturned =  amountToBeReturned % availableNotes[i];
       noOfNotes[i].innerText = numberOfNotes;

    }
 } 
function hideError(){
    errorMessage.style.display ="none" ;
    
}
function showError(text){
    errorMessage.style.display = "block";
    errorMessage.innerText= text;
    changeTable.style.display = "none";
    cashGivenInput.style.display = "none"
}
function clearNoOfNotes(){
    for(let i=0; i<availableNotes.length;i++){
        noOfNotes[i].style.display = "" ;
    }
}