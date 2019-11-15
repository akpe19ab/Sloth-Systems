var creditCards=[];



class payment {

    constructor(cardNumber,expiryDateMonth,expiryDateYear,CVC,cardHoldersName,paymentID) {
        this.cardNumber = cardNumber;
        this.expiryDateMonth = expiryDateMonth;
        this.expiryDateYear = expiryDateYear
        this.CVC = CVC;
        this.cardHoldersName = cardHoldersName;
        this.paymentID=paymentID;
    }



//Metode funktionen validate() kalder
// Indeholder en del try/catch men mangler dog de sidste tjek



    }

    //Funktion der kalder metoden fra klassen
 /*function validation() {
     console.log(1);
     this.cardNumber = document.getElementById("cardNumber").value;
     CVC=document.getElementById("CVC").value;
     cardHoldersName=document.getElementById("cardHoldersName").value;

     let newcreditCard = new creditCard(cardNumber, expiryDateMonth, expiryDateYear, CVC, cardHoldersName)
     newcreditCard.validateCreditCard()


 }*/

function validateCreditCard() {

    var cardNumber=document.getElementById("cardNumber").value;
    var expiryDateMonth=document.getElementById("expiryDateMonth").value;
    var expiryDateYear=document.getElementById("expiryDateYear").value;
    var CVC=document.getElementById("CVC").value;
    var cardHoldersName=document.getElementById("cardHoldersName").value;
    validated=0;


    //Nedenstående kode virker men har deaktiveret det fordi det er irriterende at taste ind hver gang man vil teste
    //Try/catch for cardNumber
  /*  try{
        if (cardNumber ==="") throw "Udfyld kortnummer";
        if (cardNumber.toString().length !== 16) throw "Kortnummer skal bestå af 16 cifre";
        if (isNaN(cardNumber)===true) throw "Kortnummer skal bestå af tal";

    }
    catch (error) {
        alert(error);
        validated=1;

    }
//Try/catch for ExpiryDateMonth, jeg har løst forkert input i funktionen corrrectDates og lidt i html med max værdier
    try{
        if (expiryDateMonth==="") throw "Udfyld udløbsdato måned";

    }
    catch(error){
        alert(error);
        validated=1;
    }

    try{
        if (expiryDateYear==="") throw "Udfyld udløbsdato år";

    }
    catch(error){
        alert(error);
        validated=1;
    }

    //Try/catch for CVC

    try{
        if (CVC==="") throw "Udfyld CVC";
        if (CVC.toString().length !==3) throw "CVC skal bestå af 3 tal";
        if (isNaN(CVC)===true) throw "CVC skal være udelukkende tal";
    }
    catch (error) {
        alert(error);
        validated=1;
    }


//Try/catch for cardHoldersName, mangler tjek for:
//1. Hvis string indeholder tal (eksl operatorer som f.eks. bindestreg der gerne må være med
//2. Hvis man indtaster mellemrum fejler den men får beskeden et navn må ikke være tal, evt. fiks det.
    try {
        if (cardHoldersName==="") throw "Udfyld venligst kortholders navn";
        if (isNaN(cardHoldersName)===false) throw "Et navn må ikke være et tal";

    }
    catch (error) {
        alert(error);
        validated=1;
    }*/
    if (validated===0){
        saveCreditCard()
    }
}

// Funktionen der tilretter forkerte input i felterne expiryDateMonth og -Year. bliver kaldt ved onblur
//onblur: Execute a JavaScript when a user leaves an input field:
 function correctDates() {

     var expiryDateMonth = document.getElementById("expiryDateMonth").value;

     if (expiryDateMonth > 12 || expiryDateMonth < 01) {
         document.getElementById("expiryDateMonth").value = "";
     }
         var expiryDateYear = document.getElementById("expiryDateYear").value;

         if (expiryDateYear > 30 || expiryDateYear < 19) {
             document.getElementById("expiryDateYear").value= "";
         }

 }

 //Eventuelt tilføj til noget local storage så vi kan vise at vi kan gemme deres oplysninger
function saveCreditCard(){

    var newCreditCard= new payment(document.getElementById("cardNumber").value
        ,document.getElementById("expiryDateMonth").value
        ,document.getElementById("expiryDateYear").value
        ,document.getElementById("CVC").value
        ,document.getElementById("cardHoldersName").value);

    creditCards.push(newCreditCard);
    console.log(JSON.stringify(creditCards));
    acceptOrder();
}

//Tilføj ordre evt. fra sessionstorage
function acceptOrder() {
    var popUp= window.open("","_self");
    popUp.document.write("Dette er din bekræftelse på din bestilling" +"<br>");
    popUp.document.write("Du bliver nu ført tilbage til forsiden");
    setTimeout(redirectToFrontPage,3000);


}

function redirectToFrontPage() {
    var frontPage=window.location="index.html";
    window.open(frontPage);
}