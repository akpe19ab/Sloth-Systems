console.log(delivery.deliverySelected);

class DeliveryInfo {
    /* Definerer klassens constructor med properties der nedarves fra superklassen,
     * og properties der er unikke for 'Delivery'. (Constructor funktion, 102)
     * Kalder superklassens constructor med super-keyword, hvormed Delivery nedarver attributter og metoder fra 'Product'. (Extends, 113)
     * (this.-keyword s. 99)
     */
    constructor(deliveryMethod, deliveryTime, deliveryAddress, deliveryRegion, deliveryCity, deliveryComment) {
        this.deliveryMethod = deliveryMethod;
        this.deliveryTime = deliveryTime;
        this.deliveryAddress = deliveryAddress;
        this.deliveryRegion = deliveryRegion;
        this.deliveryCity = deliveryCity;
        this.deliveryComment = deliveryComment;}
    // Deklarerer unikke metoder for 'Delivery'-klassen.
    // Metode der anvender alert til at vise dialogbox med en string om at leveringsinfo er registreret samt værdierne
    // bundet til de forskellige klasse-attributter.
    // Anvender escape character til at lave newline i string. (escape character newline, 14)
    // alert funktion (221),
    deliveryInfoSucced(){
        alert("Leveringsoplysninger er blevet registreret:"
            + "\n Leveringsmetode: " + this.deliveryMethod
            + "\n Leveringstidspunkt: " + this.deliveryTime
            + "\n Adresse: " + this.deliveryAddress
            + "\n Post nr.: " + this.deliveryRegion
            + "\n By: " + this.deliveryCity
            + "\n Evt. kommentar til levering: " + this.deliveryComment
        );
    }

    // Metode der virker på samme måde som deliveryInfoSucced()
    // men viser kun de info der er nødvendig for hvis kunde selv afhenter bestilling.
    pickUpInfoSucced() {
        alert("Oplysninger for afhentning af bestilling er blevet registreret:"
            + "\n Leveringsmetode: " + this.deliveryMethod
            + "\n Afhentningstidspunkt: " + this.deliveryTime
            + "\n Evt. kommentar til levering: " + this.deliveryComment
        );
    }
}

// Kreerer et nyt Map bundet til variabel, for at have en let data struktur til at opbevare og tilgå registrerede
// leveringsoplysninger.
// mapDelivery bruges til senere hen at gemme en instantiering af et delivery-objekt.
// Når en kunde har registreret korrekte oplysninger gemmes oplysningerne som properties til et nyt
// delivery-objekt der med .set-metoden gemmes i vores Map. Objektet gemmes i Map med en key med en tilknyttet
// værdi der indeholder selve delivery-objektet. (Maps, 104)
// let-keyword, binding, assignment operator (23)
let mapDelivery = new Map();

/* Funktion der validerer leveringsoplysninger i form-felterne i HTML-dokumentet.
 * Definerer variable for de inputfelter der påkræves at være udfyldt med leverings/afhentningsoplysninger.
 * Conditional statement der tjekker om felterne er korrekt udfyldt.
 * Hvis true så instantieres et nyt objekt med de valide informationer, der pushes til deliverySaved Map'et.
 */
//lige nu har jeg både alert og .innerHTML der viser fejlteksten
function validateDeliveryInformation() {
    // Definerer variable i toppen  pga. scoping
    // Anvender DOM-properties (.options, .selectedIndex, .text, .value) for at tilgå
    // værdierne i input-felterne. Disse bindes til en variabel og bruges til validation.

    /*--------------Deklaration af variable-------------------*/
    let objHours = document.getElementById("delivery_time-hours");
    let selectedHours  = objHours.options[objHours.selectedIndex].text;
    let objMin = document.getElementById("delivery_time-minutes");
    let selectedMinutes = objMin.options[objMin.selectedIndex].text;
    let deliveryTime = `${selectedHours}:${selectedMinutes}`;
    var address = document.getElementById("delivery_address").value;
    var region = document.getElementById("delivery_region").value;
    var city = document.getElementById("delivery_city").value;
    var comment = document.getElementById("delivery_comment").value;

    // Variable bindes til DOM-paragraffer for hver specifik fejlmeddelelse.
    let paraValMethod = document.getElementById("validate-del-method");
    let paraValTime= document.getElementById("validate-del-time");
    let paraValComment = document.getElementById("validate-del-comment");
    let paraValAddress = document.getElementById("validate-address");
    let paraValRegion = document.getElementById("validate-region");
    let paraValCity = document.getElementById("validate-city");

    // Variabel bindes til DOM-element for paragraf, hvor meddelelse vises, når levering er registreret korrekt.
    let paraDelRegistered = document.getElementById("delivery-registered");


    // Definerer variablen delRadioBtn der bindes til radiobuttons-noderne vha. DOM-metoden querySelectorAll().                // querySelectorAll,322
    // delRadioBtn er en NodeList der indeholder to objekter for hver radiobtn-node.                                       // NodeList, 227
    // Radiobtns værdier skal tilgås, for at validere om leveringsmetode er blevet valgt.
    // NodelIst property .length anvendes for at returnere antallet af items i delRadioBtn.
    let delRadioBtn = document.querySelectorAll("[name=delivery-methods]");
    let len = delRadioBtn.length;
    let radioInput = false;

//Validation af hele leverings/afhentningsformen
    // Definerer variblen 'formValid' der bruges til at validere formen for leverings/oplysninger som kunde har indtastet.
    // Definerer værdien til booleansk udtryk 'true' som initiel værdi. Hvis der fanges en fejl vil den ændres til "false"
    // Hvis formValids booleanske værdi er falsk betyder det, at én eller flere felter, som kunde skal udfylde,
    // ikke er udfyldt korrekt, hvormed fejlbesked vil blive alerted. Alle fejl gemmes i validationMessage. Hvis formValid
    // er true er alle påkrævede felter udfyldt korrekt og de gemmes i deliverySaved-Map'et.
    // !!!! Lige nu er der både en alert + fejlmeddelselser vises i HTML vha. DOM-metode .innerHTML.****
    let formValid = true;
    let validationMessage = "";


//Validation af leveringsmetode
    // For-loop med det formål at undersøge om kunden har valgt leveringsmetode og derved om radiobtns er checked.
    // Itererer gennem hver node i Nodelist. Bruger DOM-attributten .checked på hvert index i for-loop, dvs.
    // Anvender DOM property .checked til at for hver radiobtn undersøge om den er checked eller ej.
    // Bruger variabel deklareret til en booleansk værdi der sættes til true hvis én radiobtn er checked, og false hvis ikke.

    // !!! Kunne bare bruge delivery.deliverySelected som er defineret i funktionen deliveryMethodSelected
    for (var i = 0; i < len; i++) {                                                      // H: Virker ikke hvis man bruger "use strict;
        if (delRadioBtn[i].checked) {                                                     // ReferenceError: "i is not deifined"
            radioInput = true;
        }
    }
    // if-else statement der anvender radioInput's boolean værdi til at kontrollere om radiobtn er blevet checked
    // Hvis false er ingen radiobutton blevet valgt
    // Anvender DOM-property .innerHTML til at sætte værdien af den respektive paragraf til validation af leveringsmetode
    // Hvis leveringsmetode er valgt og radioInput er true skrives der ingen fejlmeddelelse i HTML-dokument.
    if (radioInput === false) {
        validationMessage += "Du skal vælge leveringsmetode\n ";
        formValid= false;
        paraValMethod.innerHTML = "Vælg leveringsmetode";
    } else {
        paraValMethod.innerHTML = null;
    }

//Validation: Leverings/afhentningstid
    // Anvender DOM property .selectedIndex for at undersøge om der er valgt et element i drop-down list.
    let hoursIndex = objHours.selectedIndex;
    let minIndex = objMin.selectedIndex;

    // Anvender nested if-statement, da validation af leverings/afhentningstid kun skal eksekveres
    // hvis kunde har valgt leveringsmetode. Det nestede if-statement vil kun eksekvere hvis boolean er true.
    // Logisk OR-operator anvendes til at kontrollere at der er valgt timer og minutter, dvs. begge drop-down
    // lister har en selected option. Hvis false, vises fejlmeddelelse vha. innerHTML-property
    if (radioInput === true) {
        if (hoursIndex === 0 || minIndex === 0) {
            validationMessage += "Du skal vælge et gyldigt leverings/afhentningstidspunkt\n";
            formValid = false;
            paraValTime.innerHTML = "Vælg gyldigt leverings/afhentningstidspunkt";
        } else {
            paraValTime.innerHTML = null;
        }
    }
//Validation: comment
    // If-statement der anvender relation operator til at undersøge om input i kommentarfelt overskrider
    // max antal tegn. Kommentaren er en string der derfor kaldes med metoden .length for at undersøge længde.
    if (comment.length > 255) {
        paraValComment.innerHTML = "Overskrider maks på 255 antal tegn";
    } else {
        paraValComment.innerHTML = null;
    }

//Validation: leveringsaddresse
    // Nested if-statement anvendes da addresse kun er påkrævet hvis "levering" er valgt,
    // if-statement kontrollerer at delivery-objektets deliverySelected attribut er true hvormed 'levering' er blevet valgt.
    // Indre if-stament tjekker om feltet for addresse er blevet udfyldt korrekt.

    // FOr at kontrollere at der ikke kun er indtastet white spaces anvendes string metoden trim() på variablen
    // 'address' der binder en string. Bruger dernæst identity operator for at checke om den efter trim er en empty.
    if (delivery.deliverySelected === true) {
        if (address === null || address === "" || address.trim()==="") {                                           // !!!!!!! Den kontrollerer ikke hvis man skriver mellemrum
            validationMessage += "Du skal indtaste addresse\n";
            formValid = false;
            paraValAddress.innerHTML = "Udfyld addressefelt";
        } else {
            paraValAddress.innerHTML = null;
        }
    }

//Validation: post nr.
    // Nested if-statement, da post nr. kun er påkrævet hvis kunde har valgt 'levering'
    // Kontrollerer at felt er udfyldt
    if (delivery.deliverySelected === true) {
        if (region === "" || region === null || region.trim()==="") {       // ZIP code input is empty
            validationMessage += "Du mangler at udfylde post nr.\n";
            formValid = false;
            paraValRegion.innerHTML = "Udfyld post nr.";

            // Kalder isNaN-funktionen i et if statement for at kontrollere at der kun er indtastet
            // tal da post nr kun kan bestå af tal.
        } else if (isNaN(region)) {
            validationMessage += "Post nr. kan kun bestå af tal\n";
            formValid = false;
            paraValRegion.innerHTML = "Post nr. kan kun bestå af tal";


            // Post nr. kan kun bestå af 4 cifre
        } else if (region.length !== 4) {
            validationMessage += "Post nr. skal bestå af 4 cifre\n";
            formValid = false;
            paraValRegion.innerHTML = "Post nr. skal bestå af 4 cifre";
        } else {
            paraValRegion.innerHTML = null;
        }
    }

//Validation: by
    // Nested if-statement, da by kun er påkrævet ved valg af 'levering'
    if (delivery.deliverySelected === true) {
        if (city === "" || city === null || city.trim()==="") {
            validationMessage += "Du skal udfylde by\n";
            formValid = false;
            paraValCity.innerHTML = "Udfyld by";


            // Anvender not-operator på isNaN-funktionen der skal kontrollere at der ikke er indtastet et tal
            // !!!!virker ikke optimalt =>  KUN hvis der udelukkende indtastet et tal
        } else if (!isNaN(city)) {
            validationMessage += "By kan ikke indeholde tal\n";
            formValid = false;
            paraValCity.innerHTML = "By kan ikke indeholde tal";

        } else {
            paraValCity.innerHTML = null;
        }
    }
// Validation af leverings/afhentningsformen
    // Kontrollerer om både formValid er true og at der er valgt 'levering' vha. logisk AND-operator.
    // Hvis alle felter er udfyldt korrekt og der er valgt 'levering' instantieres nyt delivery-objekt med
    // de indtastede oplysninger.
    if (formValid && delivery.deliverySelected === true) {
        let deliveryObj = new DeliveryInfo(
            "Levering",
            deliveryTime,
            address,
            region,
            city,
            comment
        );

        // Kalder Delivery-klassens metode der alerter de registrerde leveringsoplysninger, hvis validation
        // er approved.
        deliveryObj.deliveryInfoSucced();
        // Anvender Map set()-metoden for at tilføje det instantierede deliveryObj til savedDelivery-Map.
        // ELementet deliveryObj gemmes som et objekt i Map'et. key defineres som værdien af delivery-objektets
        // product-ID attribut og selve deliveryObj-objektet som værdi.
        mapDelivery.set(delivery.productID, deliveryObj);
        console.log(mapDelivery);

        // Bekræftelse på leveringsoplysninger er registreret skrives i HTML-paragraf.
        paraDelRegistered.innerHTML="Leveringsoplysninger er gemt.";
        console.log("Leveringsoplysninger er registreret");

        // else if der nu tjekker om der er valgt 'afhentning'. Der sker det samme som ovenstående.
        // De validerede oplysninger defineres dog til attributterne af et pick-up objekt
        // der også er en instanitering af Delivery-klassen. Addresse, post nr, og by gemmes ikke.
    } else if (formValid && delivery.deliverySelected === false) {

        //instanitering af instance af Delivery-objekt med afhentningsoplysninger
        let pickupObj = new DeliveryInfo (
            "Afhentning",
            deliveryTime,
            null,
            null,
            null,
            comment
        );

        //Kalder Delivery-metode til alert af registrerede oplysninger
        pickupObj.pickUpInfoSucced();

        // Gemmer objekt i Map vha. set() og udskriver map i konsol.
        mapDelivery.set(delivery.productID, pickupObj);
        console.log(mapDelivery);
        // console.log(JSON.stringify(mapDelivery));

        // Bekræftelse på afhentningsoplysninger er registreret skrives i HTML-paragraf.
        paraDelRegistered.innerHTML="Leveringsoplysninger er gemt.";
        console.log("Leveringsoplysninger er registreret");

        // Else statement der eksekveres hvis form ikke er valideret
        // ALert med fejlbeskeder
        // Fejlbesked i HTML-dokument om at leveringsoplysninger ikke er gemt
    } else {
        alert(validationMessage);
        paraDelRegistered.innerHTML="Leveringsoplysninger er ikke gemt!!!.";
        return false
    }
}

//Funktion der først tjekker om man har gemt oplysninger én gang
function submitDeliveryInfo() {
    if (mapDelivery.size!==0) {
        alert("Oplysninger er allerede gemt. Tryk 'Rediger oplysninger', hvis du ønsker at ændre i de gemte oplysninger");
    } else {
        validateDeliveryInformation();
    }
}

//Funktion der kan ændre oplysninger
function changeDeliveryInfo() {
    let paraDelRegistered = document.getElementById("delivery-registered");
    if (mapDelivery.delete("1")) {
        mapDelivery.clear();
        paraDelRegistered.innerHTML="Leveringsoplysninger er ikke gemt.";
    } else {
        alert("Du har ikke gemt nogle oplysninger endnu");
    }
    console.log(mapDelivery);
}

//Eventlistener der aktiverer funktionen submitDelInfo når man trykker på knappen "gem oplysninger"
document.getElementById('submit-delivery-information').addEventListener("click", () => {
    submitDeliveryInfo();
});

//Eventlistener der aktiverer changeDeliveryInfo når der trykkes på knap "rediger"
document.getElementById('edit-delivery-information').addEventListener("click", () => {
    changeDeliveryInfo();
});



