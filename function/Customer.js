var savedCustomer = [];

class Customer {
    constructor(customerName,customerNumber,customerMail) {

        this.customerName = name;
        this.customerNumber = number;
        this.customerMail = mail;
    }

    submitCustomerInfomation() {

       // alert("Navn: " + document.getElementById("user_name").value + "\n" + "Nummer: " + document.getElementById("user_number").value + "\n" + "Mail: " +document.getElementById("user_mail").value);
        // Er kun relevant for at få et output på skærmen ift. hvad der er blevet indtastet (ikke godkendt).

        var alphabetLowerCase = "abcdefghijklmnopqrstuvwxyzæøå";
        var validated=0;

        // Bruger try-catch-metode for navn
        try {
            if (name === "") throw "Felt skal udfyldes";
            if (name.length > 255) throw "Overskrider maks antal tegn";
            if (!isNaN(name)) throw "Der kan kun skrives bogstaver"; //Behøves ikke?
            if (name.toLowerCase().localeCompare(alphabetLowerCase) < 0) throw "Der kan kun skrives bogstaver"; // Stadig ikke HELT sikker på hvordan localeCompare fungerer.
            // https://www.w3schools.com/jsref/jsref_localecompare.asp  /* Man kan stadig skrive ex: π */
            // https://www.w3resource.com/javascript/form/email-validation.php

        }
        catch(error){
            alert("Fejl ved navn: " + error);
            validated=1;
        }

        // Bruger try-catch-metode for telefonnummer
        try {
            if (number === "") throw "Felt skal udfyldes";
            if (number.toString().length !==8) throw "Telefonnummer skal være 8 cifre, bestående af tal mellem 1-9"; // Laver number om til en string, for at finde antallet af cifre. Dette gør også at tegn (som ikke er et number) ikke kan laves til en string (+ - , . osv.)
            if (isNaN(number)) throw "Der kan kun skrives tal"; // https://stackoverflow.com/questions/469357/html-text-input-allow-only-numeric-input
        }
        catch(error){
            alert("Fejl ved tlf.nr: " + error);
            validated=1;
        }

        // Bruger try-catch-metode for e-mail
        try {
            if (mail === "") throw "Felt skal udfyldes";
            if (mail.length > 255) throw "Overskrider maks antal tegn";
            if (mail.indexOf("@") < 0 || mail.indexOf("@") == 0) throw "Mail skal indeholde ét @ og må ikke være forrest på linjen"; // Hvis "@" ikke kan findes på linjen (indexOf() returner -1, hvis tegnet ikke findes. Hvilket er under 0)
            if (mail.indexOf(".") < 0) throw "Mail skal indeholde punktum (.)";
            if (mail.indexOf(" ") != -1) throw "Mellemrum er ikke tilladt"; // indexOf() retunerer -1, hvis ikke " "(mellemrum) findes i stringen. Derfor hvis " " findes i stringen, vil der komme en fejlmeddelelse.
        }   // Man kan stadig lave flere @, hvilket ikke bør være muligt.
            // Kan man lave en metode til at der kun kan være ét "." efter @?

        catch(error){
            alert("Fejl ved mail: " + error);
            validated=1;
        }

        // Samme fremgangsmåde som ved addproduct()
        var newCustomer = {
            customer_Name: null,
            customer_Number: 0,
            customer_Mail: null,
            customer_ID: 0,
        };

        newCustomer.customer_Name = name;
        newCustomer.customer_Number = number;
        newCustomer.customer_Mail = mail;
        newCustomer.customer_ID = Math.floor(Math.random() * 100); // Tilfældigt tal mellem 1-100.
        // Kan bruges til afsnit om evt. forbedringer og udvikling af system.
        //Her skal der ikke laves random men en tæller der tjekker om nummeret er taget MB

        if (validated===0){
        savedCustomer.push(newCustomer);
        alert(JSON.stringify(savedCustomer));
        goToPayment();
    }}
}

// Samme fremgangsmåde som ved addproduct(), (scoping)
function Submit() {

    name = document.getElementById("user_name").value;
    number = document.getElementById("user_number").value;
    mail = document.getElementById("user_mail").value;

    let customer = new Customer (name,number,mail);
    customer.submitCustomerInfomation();
}

function goToPayment() {
    const currentPage=window.location="Customer.html";
    window.close(currentPage);
     const paymentPage=window.location="payment.html";
    window.open(paymentPage);


    alert("Pis");
}