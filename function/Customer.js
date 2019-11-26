 // Formålet med at oprette en variabel der er et array er at kunne opbevare kundeinformationer. MB
var savedCustomer = [];

//Formålet med at oprette en klasse er at definere hvilke informationer en "kunde" består af
 //Klassen er ud fra en constructor givet 3 parametre der synes relevante for den ønskede funktion i programmet MB
class Customer {
    constructor(customerName,customerNumber,customerMail) {

        this.customerName = name;
        this.customerNumber = number;
        this.customerMail = mail;
    }

    //Der oprettes en metode under klassen der aktiveres fra onclick-html
    //Formålet med denne er at standardisere slutbrugerens inout i en HTML-form. MB
    submitCustomerInfomation() {

        // alert("Navn: " + document.getElementById("user_name").value + "\n" + "Nummer: " + document.getElementById("user_number").value + "\n" + "Mail: " +document.getElementById("user_mail").value);
        // Er kun relevant for at få et output på skærmen ift. hvad der er blevet indtastet (ikke godkendt).

        //Her defineres en variabel er indeholder alle gyldie bogstaver
        //Den bruges til at kontrollere input fra slutbrugeren længere nede i koden MB
        var alphabetLowerCase = "abcdefghijklmnopqrstuvwxyzæøå";
        //Her defineres en variabel hvis formål er at fange om brugerens input er acceptabelt
        //I try/catch metoderne sættes den til 1, hvis catch bliver executed sådan at vi ved at input har en fejl MB
        var validated=0;

        // Bruger try-catch-metode for navn, "name" er nedarvet fra klassen men defineret længere nede i koden
        //For at kunne knytte klasse parameteren op til HTML dokumentet MB
        try {
            if (name === "") throw "Felt skal udfyldes";
            if (name.length > 255) throw "Overskrider maks antal tegn";
            if (!isNaN(name)) throw "Der kan kun skrives bogstaver";

            //localeCompare sammenligner name og variablen alphabetlowercase alfabetisk
            //Der er 3 udfald
            // 1. Hvis name er "højest" =-1, 2. hvis name==alphabetLowerCase =0 3. hvis name er "lavest = 1
            //Denne logik er ikke fejlfri:
            //Input den fejlagtigt ift. hensigt accepterer: π (tegn for pi) MB
            if (name.toLowerCase().localeCompare(alphabetLowerCase) < 0) throw "Der kan kun skrives bogstaver";

        }
        catch(error){
            alert("Fejl ved navn: " + error);
            //Som nævnt tidligere i koden sættes validated variabel til 1 for at registrere en fejl, dette gentages i try/catch. MB
            validated=1;
        }

        // Bruger try-catch-metode for telefonnummer MB
        try {
            if (number === "") throw "Felt skal udfyldes";

            // Laver number om til en string, for at finde antallet af cifre.
            // Dette gør også at tegn (som ikke er et number) ikke kan laves til en string (+ - , . osv.) MB
            if (number.toString().length !==8) throw "Telefonnummer skal være 8 cifre, bestående af tal mellem 1-9";

            //Kontrollerer om input ikke er et tal og kaster en fejl hvis dette ikke er. MB
            if (isNaN(number)) throw "Der kan kun skrives tal";
        }
        catch(error){
            alert("Fejl ved tlf.nr: " + error);
            validated=1;
        }

        // Bruger try-catch-metode for e-mail. MB
        try {
            if (mail === "") throw "Felt skal udfyldes";
            if (mail.length > 255) throw "Overskrider maks antal tegn";

            // indexOf returnerer positionen hvor den finder en angiven værdi og returnerer -1 hvis søgningen ikke finder noget
            // indexOf skal være <0 pga ovenstående logik eller ikke 0 da det så er forrest i linjen (f.eks: @live.dk). MB
            if (mail.indexOf("@") < 0 || mail.indexOf("@") == 0) throw "Mail skal indeholde ét @ og må ikke være forrest på linjen";

            // Søger efter et punktum, dog kan man indtaste flere punktummer. MB
            if (mail.indexOf(".") < 0) throw "Mail skal indeholde punktum (.)";

            //Hvis indexOF ikke er -1 betyder det så at der findes et mellemrum i input. MB
            if (mail.indexOf(" ") != -1) throw "Mellemrum er ikke tilladt";
        }   // Man kan stadig lave flere @, denne skal nok løses med samme "metode" som "punktum-problemet". MB


        catch(error){
            alert("Fejl ved mail: " + error);
            validated=1;
        }

        // Her definerer vi en kunde ud fra 4 parametre og introducerer et nyt parameter ift. klassen. MB
        var newCustomer = {
            customer_Name: null,
            customer_Number: 0,
            customer_Mail: null,
            customer_ID: 0,
        };

        newCustomer.customer_Name = name;
        newCustomer.customer_Number = number;
        newCustomer.customer_Mail = mail;

        // Tilfældigt tal mellem 1-100.
        // Kan bruges til afsnit om evt. forbedringer og udvikling af system.
        //Her skal der ikke laves random men en tæller der giver det sidst udstedte customer_ID+1 MB
        newCustomer.customer_ID = Math.floor(Math.random() * 100);


        // Et if-statement der sørger for at vi kun videre i codeflow hvis try/catch ikke har ændret validated variblen så den er 0
        //Hvis denne block executes skubbes variablen newCustomer op i vores savedCustomer array
        //den kalder også goToPayment funktionen for at avancere i flowet. MB
        if (validated===0){
            savedCustomer.push(newCustomer);
            alert(JSON.stringify(savedCustomer));
            goToPayment();
        }}
}

// funktion kaldes fra DOM ved onClick
 //Formål med denne er at instatiere et nyt object "customer" hvis parametre er defineret ud fra DOM
 // Hvorefter den kalder metoden submitCustomerInformation fra klassen. MB
function Submit() {

    name = document.getElementById("user_name").value;
    number = document.getElementById("user_number").value;
    mail = document.getElementById("user_mail").value;
    alert("test")
    let customer = new Customer (name,number,mail);
    customer.submitCustomerInfomation();
}

//Formålet med denne funktion er at avancere i vores flow dvs. gå videre i et nyt stadie i vores program
 //Den kaldes fra en if-sætning i metoden submitCustomerInformation for at sikre "conditional execution". MB
function goToPayment() {
    const currentPage=window.location="Customer.html";
    window.close(currentPage);
    const paymentPage=window.location="payment.html";
    window.open(paymentPage);
}

//Ved demonstration er det vigtigt at vide at window.close kun kan lukke faner der er åbnet af et script
 //hvilket betyder at vi skal gennemgå flow i kronologisk rækkefølge for at et flow har åbnet dem og det fungerer som ønsket