// Definerer variabel der henter totalprisen på ordren fra sessionStorage ud fra specifik key.
// Viser totalPrice i html-dokument

let totalPrice = JSON.parse(sessionStorage.getItem("totalOrderPrice"));
document.getElementById("totalPriceWithDiscount").innerHTML = totalPrice;


// Formålet med at oprette en variabel der er et array er at kunne opbevare kreditinformationer. MB
var creditCards=[];


// Formålet med at oprette en klasse er at definere hvilke informationer en "betaling" består af
// Klassen er ud fra en constructor givet 6 parametre der synes relevante for den ønskede funktion i programmet MB
class payment {
    constructor(cardNumber,expiryDateMonth,expiryDateYear,CVC,cardHoldersName,paymentID) {
        this.cardNumber = cardNumber;
        this.expiryDateMonth = expiryDateMonth;
        this.expiryDateYear = expiryDateYear;
        this.CVC = CVC;
        this.cardHoldersName = cardHoldersName;
        this.paymentID=paymentID;
    }
    /* Rest af gammel kode, jeg startede med at løse det metoder men kom væk fra det og lavede funktioner istedet
    Jeg ville helst have løst med en metode for at kunne indrage klassen bedst muligt, men mangelfuld dokumentation
    da jeg ændrede gør at jeg ikke kan huske hvordan det så ud eller hvorfor jeg lavede funktioner istedet
    Det kan måske inddrages i opgaven ift. noget dokumentation eller noget lignende. MB
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
*/}

// Denne funktion burde nok være en metode i klassen for at fremvise lidt bedre arbejde med klasser
// Men som forklaret tidligere i koden er det nu en funktion der tilgengæld fungerer virker fint
// Hvis den skal laves til en metode kan man bruge meget lignende logik som funktionen Submit() i customer.js
// Da det essentielt er samme metode og formål denne funktion har. MB
function validateCreditCard() {

    // Her defineres et par variabler ud fra DOM som der skal køres try/catch på
    var cardNumber=document.getElementById("cardNumber").value;
    var expiryDateMonth=document.getElementById("expiryDateMonth").value;
    var expiryDateYear=document.getElementById("expiryDateYear").value;
    var CVC=document.getElementById("CVC").value;
    var cardHoldersName=document.getElementById("cardHoldersName").value;

    // Der oprettes også en variabel validated som bruges til at kontrollere om der executes et catch block
    // Hvis jeg skriver var foran validated bliver den ikke sat til q i catch block'en
    // Jeg aner ikke hvorfor det ikke virker med var, men nedenstående fungerer altså fint... MB
    validated=0;

    // Try/catch for at teste slutbruger input i DOM felt der er defineret som cardnumber
    // Det skal siges at disse try/catch blocks ikke har fået nok opmærksomhed til at det er fejlfrit, langtfra.. MB
    try{
        if (cardNumber ==="") throw "Udfyld kortnummer";
        if (cardNumber.toString().length !== 16) throw "Kortnummer skal bestå af 16 cifre";
        if (isNaN(cardNumber)===true) throw "Kortnummer skal bestå af tal";
    }
    catch (error) {
        alert(error);
        validated=1;
    }

    // Try/catch for DOM-input expiryDateMonth
    // Jeg har løst mange af problemstillingerne med input i dette felt med funktionen corrrectDates og lidt i html med max værdier
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

    // Try/catch for DOM input i CVC
    try{
        if (CVC==="") throw "Udfyld CVC";
        if (CVC.toString().length !==3) throw "CVC skal bestå af 3 tal";
        if (isNaN(CVC)===true) throw "CVC skal være udelukkende tal";
    }
    catch (error) {
        alert(error);
        validated=1;
    }

    // Try/catch for cardHoldersName, mangler tjek for:
    // 1. Hvis string indeholder tal (eksl operatorer som f.eks. bindestreg der gerne må være med
    // 2. Hvis man indtaster mellemrum fejler den men får beskeden et navn må ikke være tal, evt. fiks det.
    // Her kan man igen drage inspiration fra customer.js try/catch block for mail. MB
    try {
        if (cardHoldersName==="") throw "Udfyld venligst kortholders navn";
        if (isNaN(cardHoldersName)===false) throw "Et navn må ikke være et tal";
    }
    catch (error) {
        alert(error);
        validated=1;
    }

    // Formål med denne linje er at hvis validated ikke er blevet ændret af en catch block skal vi avancere i codeflow
    // Ved at igangsætte funktionen saveCreditCard(). MB
    if (validated===0){
        saveCreditCard()
    }
}

// Funktionen der tilretter forkerte input i felterne expiryDateMonth og -Year. bliver kaldt ved onblur fra payment.html
// onblur kører et script når brugeren ikke længere har markeret feltet i html formen.
// Det var lidt mere overskueligt at lave function til denne da man hurtigt ved hjælp af if statements kunne løse
// De mest væsentlige problemer uden at skulle kaste en fejl til slutbrugeren hele tiden men istedet overskrive deres input
// Forskellen og brugen af if og try/catch kan diskuteres ud fra dette eksempel. MB
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

// funktion bliver kaldt af validateCreditCard men ud fra et conditional statement i denne.
// Formålet med funktionen her er at skubbe input vi har fået fra brugeren i html op i et array for at gemme det
// Det ville være meget nærliggende at bruge local storage så de ikke ligger i et array. MB
function saveCreditCard(){

    // Instatierer et nyt objekt ud fra klassens parametre og DOM input. MB
    var newCreditCard= new payment(document.getElementById("cardNumber").value
        ,document.getElementById("expiryDateMonth").value
        ,document.getElementById("expiryDateYear").value
        ,document.getElementById("CVC").value
        ,document.getElementById("cardHoldersName").value);

    creditCards.push(newCreditCard);
    console.log(JSON.stringify(creditCards));

    // Kalder en ny funktion der dog sker hver gang saveCreditCard kaldes
    // grunden til opdeling er at det er mere overskueligt at dele op da formålene med funktioner er ret forskellige. MB
    acceptOrder();
}


/*  Den oprindelig funktion - udvidet så der vises oplysninger på ordre - ligger under "Order.js".
Hvis denne ikke er kommenteret ud virker den stadig (og man ikke bruger "order.js)=>
alert kommer med "ordrebekræftelse" når kunde trykker "betal".

// Denne funktion kaldes af saveCreditCard og sørger for at slutbrugeren avancerer i vores flow. MB
function acceptOrder() {
    var popUp= window.open("","_self");

    // Her kunne det være fedt hvis vi havde storage så vi kunne vise info fra tester.js og customer.js og rent
    // faktisk vise en kvittering for hvad man har købt
    popUp.document.write("Dette er din bekræftelse på din bestilling"+"<br>");
    popUp.document.write("Du bliver nu ført tilbage til forsiden");
    createOrder();

    // Her kaldes en ny funktion dette sker hver gang acceptOder executer men jeg har valgt at splitte op i 2
    // funktioner for overskueligheds skyld
    // set timeout forsinker kaldet til den nye funktion sådan at vi kan fremvise ovenstående strings
    // hvis der ikke er timeout går det så hurtigt at man ikke ligger mærke til det
    setTimeout(redirectToFrontPage,3000);

}

// Laver en "cirkelslutning" sådan at vi kommer tilbage til vores forside "index.html" når betalingen er gennemført
// og i den virkelige verden en kunde vil være færdig med at bruge vores hjemmeside
function redirectToFrontPage() {
    var frontPage=window.location="index.html";
    window.open(frontPage);
}



// Ordrebekræftelse der henter de gemte værdier fra sessionStorage ud fra de respektive keys og deres værdier.
function createOrder() {
    let customerInfo = JSON.parse(sessionStorage.getItem("customerInformation"));
    let deliveryInfo = JSON.parse(sessionStorage.getItem("deliveryInformation"));
    let totalPrice = JSON.parse(sessionStorage.getItem("totalOrderPrice"));
    let now = new Date();
    let orderDate = `${now.getDate()}/${now.getMonth()+1}-${now.getFullYear()}`;
    let orderID = customerInfo[0]["customer_ID"];
    let name = customerInfo[0]["customer_Name"];
    let email = customerInfo[0]["customer_Mail"];
    let phone = customerInfo[0]["customer_Number"];
    let dispatchType = deliveryInfo[0]["deliveryMethod"];
    let time = deliveryInfo[0]["deliveryTime"];
    let comment = deliveryInfo[0]["deliveryComment"];
    let address = deliveryInfo[0]["deliveryAddress"];
    let region = deliveryInfo[0]["deliveryRegion"];
    let city = deliveryInfo[0]["deliveryCity"];

    alert(`Hej ${name}. Tak for din bestilling!
    Ordrebekræftelse:
    Dato for bestilling: ${orderDate}
    Samlet pris på ordre: ${totalPrice} kr.
    Ordre-ID: ${orderID}
    Leveringsmetode: ${dispatchType}
    Tidspunkt for levering/afhentning: ${time}
    E-mail: ${email}
    Telefonnr.: ${phone}
    Evt. kommentar til bestilling: ${comment}
    Leveringsaddresse: ${address}, ${region}, ${city}.
    `);
}

// Laver en "cirkelslutning" sådan at vi kommer tilbage til vores forside "index.html" når betalingen er gennemført
// og i den virkelige verden en kunde vil være færdig med at bruge vores hjemmeside
function redirectToFrontPage() {
    var frontPage=window.location="index.html";
    window.open(frontPage);
}
*/
