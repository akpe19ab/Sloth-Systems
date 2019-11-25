let item = [];
class Product {
    constructor(productName, productID, productPrice, initialProductQuantity) {
        this.productName = productName;
        this.productID = productID;
        this.productPrice = productPrice;
        this.productQuantity = initialProductQuantity;
    }

    /* Laver en metode addProduct() der tilføjer et produkt til item. Helt simpelt tager funktionen addProduct(),
    de tre constructors (productName,productID,productPrice) og koger ned til et objekt (newProduct),
    som bliver pushet til arrayet item. Dette gør at de tre constructors er samlet på en plads i arrayet, istedet for eksempelvis 3 */

    addProduct() {
        this.productQuantity++;
        var newProduct = {
            product_Name: this.productName, //Sætter newProducts product_Name til at være lig produktets productName
            product_ID: this.productID, //Sætter newProducts product_ID til at være lig produktets productID
            product_Price: this.productPrice, //Sætter newProducts product_Price til at være lig produktets productPrice
        };

        item.push(newProduct); //Pusher newProduct til arrayet item
        console.log(JSON.stringify(item));

    }
    removeProduct() {
        this.productQuantity--;
        //Prøv at brug for/of loop.
        for (var x = 0; x < item.length; x++)

            if (item[x].product_ID === this.productID) {
                item.splice(x, 1);
                break; // Uden break(stopper for-loopet) vil for-loopet fortsætte efter, at der er blevet fjernet et produkt.
            }
        console.log(JSON.stringify(item));
    }
    ArrayCounter() {
        for (let x = 0; x < itemlist.length; x++) {

        }
        this.addProduct();
        console.log(JSON.stringify(item));
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////
// Nedarvning af klasser

class Food extends Product {
}

//Instantierer et produkt under klassen "Food"
let cheeseburger = new Food ("Cheeseburger", 2, 80, 0);

class Drinks extends Product {
}

let water = new Drinks("Water", 1, 20, 0);

class Extras extends Product {
}

let rice = new Extras("Rice", 3, 15, 0);





//---------------------------------------------------------------------------------------
// Delivery subclass

//Optimering: javascript reduce dom access (ikke gjort endnu)
// Nedarvning af Product: "Delivery"
// HUSK - man skal ikke kumne vælge levering hvis ikke man har valgt produkter

/* Deklarerer subklassen 'Delivery' som nedarvning der extender superklassen 'Product'.
 * (Klassenotation og deklaration, s. 102, extend 113)
 */
class Delivery extends Product {

    /* Definerer klassens constructor med properties der nedarves fra superklassen,
     * og properties der er unikke for 'Delivery'. (Constructor funktion, 102)
     * Kalder superklassens constructor med super-keyword, hvormed Delivery nedarver attributter og metoder fra 'Product'. (Extends, 113)
     * (this.-keyword s. 99)
     */

    constructor(productName, productID, productPrice, initialProductQuantity, deliverySelected, deliveryTime, deliveryAddress, deliveryRegion, deliveryCity, deliveryComment) {
        super(productName, productID, productPrice, initialProductQuantity);
        this.deliverySelected = deliverySelected;
        this.deliveryTime = deliveryTime;
        this.deliveryAddress = deliveryAddress;
        this.deliveryRegion = deliveryRegion;
        this.deliveryCity = deliveryCity;
        this.deliveryComment = deliveryComment;
    }

    // Deklarerer unikke metoder for 'Delivery'-klassen.

    // Metode der anvender alert til at vise dialogbox med en string om at leveringsinfo er registreret samt værdierne
    // bundet til de forskellige klasse-attributter.
    // Anvender escape character til at lave newline i string. (escape character newline, 14)
    // alert funktion (221),
    deliveryInfoSucced() {
        alert("Leveringsoplysninger er blevet registreret:"
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


// Instantierer et objekt af klassen 'Delivery' med properties fra 'Delivery'-klassen, der definerer hvad et
// objekt i klassen 'Delivery' består af.
// Objektet 'delivery' er prædefineret og fungerer som et "produkt" hvis kunden vælger levering eller afhentning.
// Dens definerede værdier anvendes også til validation af info, som brugeren indtaster i HTML.
// Sætter en del af properties lig den empty value 'null' da disse ændres når bruger indtaster valide værdier. (null, 18)
let delivery = new Delivery(
    "Levering",
    "1",
    45,
    0,
    null,
    null,
    null,
    null,
    null,
    null
);


/* Funktion med formål at tjekke hvilken leveringsmetode kunden har valgt (levering/afhentning) efter hvilken radiobutton
 * der er tjekket.(radiobutton, 322)
 * Definerer variable vha. .get
 * Anvender assignment operator til at definere variable til værdien af en specifik node i HTML DOM'en.
 * DOM metoden .getElementById bruges til at finde den specifikke node for hver af de to radiobuttons.
 * Bruger conditional execution i form af if- else if - else statement: først et if-else der assigner "deliverySelected"
 * til en boolean (true/false) alt efter hvilken radiobutton der er tjekket af.
* */

/*Funktionen "deliveryFee" vil tilføje leveringsgebyer, hvis man har trykket på "Vælg levering" hvormed "deliverySelected=true".
 Hvis man derimod trykker "hent selv" vil den igen fjerne leveringsgebyr, da "deliverySelected=false".*/
function deliveryMethodSelected() {
    let yesDelRadioBtn = document.getElementById('yes-delivery');
    let noDelRadioBtn = document.getElementById('no-delivery');

    // Conditional statement der tjekker hvilken leveringsmetode kunden har valgt.
    // if-statement der anvender operatorer der tjekker om radiobtn for levering har en checked-property lig true OG
    // radiobtn for afhentning dermed er false.
    // Hvis radiobtn for levering har checked boolean værdi lig true (levering) skal felter til udfyldning af leveringsoplysninger
    // være synlige.
    // delivery-objektets property "deliverySelected" assignes til den booleanske værdi 'true'.
    // getElementByID-metoden anvendes til at mutere noden med det specifikke ID så dens style bliver synlig eller skjult.

    if  (yesDelRadioBtn.checked === true && noDelRadioBtn.checked ===false ) {                                               // (logisk operator &&, 17), (identity/strictly equal to operator, 19), (boolean, 16)
        delivery.deliverySelected = true;
        document.getElementById('if-yes-delivery').style.visibility = 'visible';                                   // (style, 236)
        document.getElementById('if-no-delivery').style.visibility = 'visible';


        // else if der tjekker modsat af første radiobtn. delivery-objektets property assignes til 'true'
        // Hvis kunde vælger "afhentning" skal addresse, post nr. og by ikke være synlig.
    } else if (yesDelRadioBtn.checked === false && noDelRadioBtn.checked ===true) {
        delivery.deliverySelected = false;
        document.getElementById('if-no-delivery').style.visibility = 'visible';
        document.getElementById('if-yes-delivery').style.visibility = 'hidden';

        // else statement der assigner objektets property til null hvis ingen radiobtns er tjekket
        // bruges til at validere om kunden har valgt leveringsmetode eller ej.
    } else {
        delivery.deliverySelected = null;
    }

    // Anvender if else statement for at tjekke om der skal tilføjes leveringsgebyer til den totale pris.

    // if-statement der kalder superklassens metode addProduct hvis der er valgt levering
    // delivery-objektet pushes dermed i item-array.
    if (delivery.deliverySelected  === true) {
        delivery.addProduct();
        console.log(JSON.stringify(item)); // Dette er kun relevant for console.log


        // Comparison operator sørger for at removeProduct kun kaldes, hvis der allerede er et delivery-objekt i item.
        // Hvis true, kaldes removeProduct-metoden og dermed fjernes leveringsobjekt fra item-array.
    } else if (delivery.productQuantity > 0 ) {                                                                             // comparison operator, 17
        delivery.removeProduct();
        console.log(JSON.stringify(item)); // Dette er kun relevant for console.log

        // Hvis kunden endnu ikke har valgt leveringsmetode er delivery.deliverySelected lig null, og
        // delivery-objektets productQuantity-attribut assignes til 0.
    } else {
        delivery.productQuantity=0;
    }
}

// Deklarerer funktion der kalder flere funktioner i et nested scope (nested scope, 42)
function delMethodFunctions() {
    deliveryMethodSelected();
    displayItems();
    calculateTotalPrice();
}


// Tilføjer eventlistener på radiobuttons for leveringsmetode
// Anvender addEventListener metoden til at registrere event handler på de to radiobuttons.
// Eventet defineres ved typen "change", så når radiobtn ændres ved at den tjekkes af, så
// kaldes funktionen hvormed leveringsmetoden registreres.
let noDelRadioBtn = document.getElementById('no-delivery');
let yesDelRadioBtn = document.getElementById('yes-delivery');
noDelRadioBtn.addEventListener("change", delMethodFunctions);                                                    // addEventListener, 244)
yesDelRadioBtn.addEventListener("change", delMethodFunctions);



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
    console.log(delRadioBtn);


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
        validationMessage += "Please select delivery Method\n ";
        formValid= false;
        paraValMethod.innerHTML = "Please select delivery Method";
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
            validationMessage += "Please choose a valid delivery time\n ";
            formValid = false;
            paraValTime.innerHTML = "Please choose a valid delivery time";
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
    if (delivery.deliverySelected === true) {                                               // Checking if delivery has been selected, else not relevant
        if (address === null || address === "" || address.trim()==="") {                                           // !!!!!!! Den kontrollerer ikke hvis man skriver mellemrum
            validationMessage += "Please fill out 'address'\n";
            formValid = false;
            paraValAddress.innerHTML = "Please fill out address";
        } else {
            paraValAddress.innerHTML = null;
        }
    }
    console.log(address.length);



//Validation: post nr.
    // Nested if-statement, da post nr. kun er påkrævet hvis kunde har valgt 'levering'
    // Kontrollerer at felt er udfyldt
    if (delivery.deliverySelected === true) {
        if (region === "" || region === null || region.trim()==="") {       // ZIP code input is empty
            validationMessage += "Please fill out 'ZIP code'\n";
            formValid = false;
            paraValRegion.innerHTML = "Please fill out 'ZIP code'";

         // Kalder isNaN-funktionen i et if statement for at kontrollere at der kun er indtastet
         // tal da post nr kun kan bestå af tal.
        } else if (isNaN(region)) {
            validationMessage += "The ZIP code can only consist of numbers! \n";
            formValid = false;
            paraValRegion.innerHTML = "The ZIP code can only consist of numbers!";


        // Post nr. kan kun bestå af 4 cifre
        } else if (region.length !== 4) {
            validationMessage += "ZIP code must contain of 4 digits'\n";
            formValid = false;
            paraValRegion.innerHTML = "ZIP code must consist of 4 digits'";
        } else {
            paraValRegion.innerHTML = null;
        }
    }

//Validation: by
    // Nested if-statement, da by kun er påkrævet ved valg af 'levering'
    if (delivery.deliverySelected === true) {
        if (city === "" || city === null || city.trim()==="") {
            validationMessage += "Please fill out 'City'\n";
            formValid = false;
            paraValCity.innerHTML = "Please fill out 'City'";


        // Anvender not-operator på isNaN-funktionen der skal kontrollere at der ikke er indtastet et tal
        // !!!!virker ikke optimalt =>  KUN hvis der udelukkende indtastet et tal
        } else if (!isNaN(city)) {
            validationMessage += "City cannot contain numbers \n";
            formValid = false;
            paraValCity.innerHTML = "City cannot contain numbers";

        } else {
            paraValCity.innerHTML = null;
        }
    }

// Validation af leverings/afhentningsformen
    // Kontrollerer om både formValid er true og at der er valgt 'levering' vha. logisk AND-operator.
    // Hvis alle felter er udfyldt korrekt og der er valgt 'levering' instantieres nyt delivery-objekt med
    // de indtastede oplysninger.
    if (formValid && delivery.deliverySelected === true) {
        let deliveryObj = new Delivery (
            delivery.productName,
            delivery.productID,
            delivery.productPrice,
            delivery.productQuantity,
            delivery.deliverySelected,
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
        let pickupObj = new Delivery (
            delivery.productName,
            delivery.productID,
            delivery.productPrice,
            delivery.productQuantity,
            delivery.deliverySelected,
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





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Anvendte funktioner:

// Funktion til at vise valgte items
function displayItems() {
    document.getElementById("displayed_items").innerHTML = "";
    if (cheeseburger.productQuantity > 0) {
        document.getElementById("displayed_items").innerHTML += cheeseburger.productQuantity + " X " + cheeseburger.productName + " " + cheeseburger.productPrice*cheeseburger.productQuantity + " KR." + "<br>"
    }

    if (water.productQuantity > 0) {
        document.getElementById("displayed_items").innerHTML += water.productQuantity + " X " + water.productName + " " + water.productPrice*water.productQuantity + " KR. " + "<br>";
    }
    if (rice.productQuantity > 0) {
        document.getElementById("displayed_items").innerHTML += rice.productQuantity + " X " + rice.productName + " " + rice.productPrice*rice.productQuantity + " KR. " + "<br>";

        // Fjerner først evt. værdi i HTML
        //document.getElementById("displayed_items").innerHTML="";
    }
    if (delivery.productQuantity > 0) {
        document.getElementById("displayed_items").innerHTML += delivery.productQuantity + " X " + delivery.productName + " " + delivery.productPrice*delivery.productQuantity + " KR. " + "<br>";
    }
}

// Funktion der udregner den totale pris af valgte items.
function calculateTotalPrice(){

    // Dette er kun relevant for console.log
    console.log(""); //Laver "linebreak" i console.log
    console.log("Total pris af kurv ");


    // DiscountField defineres ud fra value i HTML, den er tom.
    var discountField=document.getElementById("discountCodeField").value;
    var totalPrice = 0;
    var discount = 0;
    //var couponsUsed=0; skal evt. bruges til at prisen ikke overskrives hvis der allerede er aktiveret en rabatkode

    // Dette for-loop gennemgår arrayet i item for dets længde
    for (var x = 0; x < item.length; x++) {

        //Hvis der ikke indstastes en rabatkode udregnes samlet pris for kurven.
        if (discountField==="") {
            totalPrice = item[x].product_Price + totalPrice;
        }

        //Hvis der indstastes noget udregnes prisen på hele kurven
        //Uden denne Else vil prisen blive 0 hvis man indtaster en ikke aktiv rabatkode, fordi ingen af if statements vil execute prisudregningen
        //Hvis der indtastes en kode giver den en fejlmeddelses, hvis et if statement nedenunder er sandt, overskriver det fejlmeddelsen
        else{
            totalPrice = item[x].product_Price + totalPrice;
            document.getElementById("activatedCoupons").innerHTML="";
            document.getElementById("discountError").innerHTML="Koden du har indtastet er ikke gyldig.";
        }

        //Hvis der indtastes noget i rabatkode feltet der matcher med en rabatkode udregnes discount.
        //Discount bliver udregnet og pga. ovenstående if/else har vi allerede udregnet totalPrice
        //Disse if statements "sletter" også else sætningens fejlmeddelelse.
        //Der findes 4 rabatkoder. 1. "burger10" 2. "rice10" 3. "water10" 4. "ALL10"
        if (discountField==="burger10" && cheeseburger.productQuantity>0){
            document.getElementById("discountError").innerHTML="";
            discount=(cheeseburger.productQuantity*cheeseburger.productPrice)/10;
            console.log(discount);
            //totalPrice = item[x].product_Price + totalPrice;
            document.getElementById("activatedCoupons").innerHTML="Aktiverede rabatter" + "<br>" + "<b>Burger10:</b> Giver 10% rabat på din burger(e)"
        }

        if (discountField==="rice10" && rice.productQuantity>0) {
            document.getElementById("discountError").innerHTML="";
            discount=(rice.productQuantity*rice.productPrice)/10;
            console.log(discount);
            //totalPrice = item[x].product_Price + totalPrice;
            document.getElementById("activatedCoupons").innerHTML="Aktiverede rabatter" + "<br>" + "<b>rice10:</b> Giver 10% rabat på din ris"
        }

        if (discountField==="water10" && water.productQuantity>0){
            document.getElementById("discountError").innerHTML="";
            discount=(water.productQuantity*water.productPrice)/10;
            console.log(discount);
            //totalPrice = item[x].product_Price + totalPrice;
            document.getElementById("activatedCoupons").innerHTML="Aktiverede rabatter" + "<br>" + "<b>water10:</b> Giver 10% rabat på din vand"
        }

        if (discountField==="ALL10"){
            document.getElementById("discountError").innerHTML="";
            discount=totalPrice/10;
            console.log(discount);
            //totalPrice = item[x].product_Price + totalPrice;
            document.getElementById("activatedCoupons").innerHTML="Aktiverede rabatter" + "<br>" + "<b>ALL10:</b> Giver 10% rabat på hele din ordre"
        }

    }

    //Denne variabel er den egentlige totalpris
    var totalPriceDiscount = totalPrice-discount;

    document.getElementById("basketTotalPrice").innerHTML = "Pris for produkter " + totalPrice + " kr";
    document.getElementById("discount").innerHTML= "Rabat " + discount + " KR.";
    document.getElementById("totalPriceWithDiscount").innerHTML= "Total pris " + totalPriceDiscount + "KR.";


    // Dette er kun relevant for console.log (Dette viser total price i console.log)
    console.log("Den totale pris er: " + totalPrice + " kr"); //(denne er derfor kun for at skabe overblik)
    console.log("-----------------------------------------------");
}



//H: har optimeret så den tjekker for flere ting inden man kan gå videre
// Funktion der tjekker om man både har valgt varer OG har valgt leveringsmetode.
// Try-catch, exeption handling der kontrollerer kunde har udfyldt oplysninger og valgt produkter.
// Hvis sandt, så sendes man til betaling
function validateCart() {
    var cartValidated = true;

    try {
        if (item.length === 0 && delivery.deliverySelected===null && mapDelivery.size === 0 ) throw "Du skal lægge varer i kurven og vælge leveringsmetode";
        if (item.length !== 0 && delivery.deliverySelected===null) throw "Du skal vælge leveringsmetode";
        if (item.length === 1 && delivery.deliverySelected ===true && mapDelivery.size ===0) throw "Du kan ikke vælge levering uden at have varer i kurven.";
        if (item.length === 0 && delivery.deliverySelected ===false && mapDelivery.size ===0) throw "Du kan ikke vælge afhentning uden at have varer i kurven.";
        if (item.length === 1 && delivery.deliverySelected ===true && mapDelivery.size === 1 ) throw "Du kan ikke vælge levering uden at have lagt varer i kurven";
        if (item.length === 0 && delivery.deliverySelected ===false && mapDelivery.size === 1) throw "Du kan ikke vælge afhentning uden at have lagt varer i kurven";
        if (item.length >=1  && delivery.deliverySelected !==null && mapDelivery.size === 0 ) throw "Leverings/afhentningsoplysninger er ikke gemt";

    } catch (error) {
        alert("Hov - du kan ikke gå videre endnu: " + error);
        cartValidated = false;
    }

    if (cartValidated===true) {
        goToCustomerInfo();
    }
}

//Funktion der fører kunden videre til siden for udfyldning af kundeoplysninger
function goToCustomerInfo() {
    const currentPage=window.location="index.html";
    window.close(currentPage);
    const customerPage=window.location="Customer.html";
    window.open(customerPage);
}



//Eventlistener der kalder funktionen validateCart.
document.getElementById('order_button').addEventListener("click", () => {
    validateCart()
});


