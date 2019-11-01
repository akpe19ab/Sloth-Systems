
function submitInfo() {

    var name, number, mail, alphabetLowerCase;

    name = document.getElementById("user_name").value;
    number = document.getElementById("user_number").value;
    mail = document.getElementById("user_mail").value;
    alphabetLowerCase = "abcdefghijklmnopqrstuvwxyzæøå";


    // Bruger try-catch-metode for navn
    try {
        if (name === "") throw "Felt skal udfyldes";
        if (name.length > 255) throw "Overskrider maks antal tegn";
        if (!isNaN(name)) throw "Der kan kun skrives bogstaver"; //Behøves ikke?
        if (name.toLowerCase().localeCompare(alphabetLowerCase) < 0) throw "Der kan kun skrives bogstaver"; // Stadig ikke HELT sikker på hvordan localeCompare fungerer.
        // https://www.w3schools.com/jsref/jsref_localecompare.asp  /* Man kan stadig skrive ex: π */
        // https://www.w3resource.com/javascript/form/email-validation.php
        // Forsøger at få A-Za-z til at virke, og tilføjer derefter Æ,Ø,Å
    }
    catch(error){
        alert("Fejl ved navn: " + error);
    }

    // Bruger try-catch-metode for telefonnummer
    try {
        if (number === "") throw "Felt skal udfyldes";
        if (number.toString().length !==8) throw "Telefonnummer skal være 8 cifre, bestående af tal mellem 1-9"; // Laver number om til en string, for at finde antallet af cifre. Dette gør også at tegn (som ikke er et number) ikke kan laves til en string (+ - , . osv.)
        if (isNaN(number)) throw "Der kan kun skrives tal"; // https://stackoverflow.com/questions/469357/html-text-input-allow-only-numeric-input
    }
    catch(error){
        alert("Fejl ved tlf.nr: " + error);
    }

    // Bruger try-catch-metode for e-mail
    try {
        if (mail === "") throw "Felt skal udfyldes";
        if (mail.length > 255) throw "Overskrider maks antal tegn";
        if (mail.indexOf("@") > 0 || mail.indexOf("")  ) throw "Mail skal indeholde ét @ og må ikke være forrest på linjen"; // Hvis "@" ikke kan findes på linjen (indexOf() returner -1, hvis tegnet ikke findes. Hvilket er under 0)
        if (mail.indexOf(".") < 0) throw "Mail skal indeholde punktum (.)";
        if (mail.indexOf(" ") != -1) throw "Mellemrum er ikke tilladt"; // indexOf() retunerer -1, hvis ikke " "(mellemrum) findes i stringen. Derfor hvis " " findes i stringen, vil der komme en fejlmeddelelse.
    }   // Man kan lave flere @ og have @ forrest på mailen.
    catch(error){
        alert("Fejl ved mail: " + error);
    }

alert("Navn: " + document.getElementById("user_name").value + "\n" + "Nummer: " + document.getElementById("user_number").value + "\n" + "Mail: " +document.getElementById("user_mail").value);
    // Er kun relevant for at få et output på skærmen.
    // Oplysningerne skal føres til lokal storage.
}