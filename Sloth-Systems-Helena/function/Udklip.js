class Product {
    constructor(productName, productID, productPrice) {
        this.productName = productName;
        this.productID = productID;
        this.productPrice = productPrice;
    }

    /* Laver en metode addProduct() der tilføjer et produkt til item. Helt simpelt tager funktionen addProduct(),
    de tre constructors (productName,productID,productPrice) og koger ned til et objekt (newProduct),
    som bliver pushet til arrayet item. Dette gør at de tre constructors er samlet på en plads i arrayet, istedet for eksempelvis 3 */

    addProduct(productName, productID, productPrice) {

        var newProduct = {
            product_Name: null,
            product_ID: 0,
            product_Price: 0,
        };

        newProduct.product_Name = this.productName; //Sætter newProducts product_Name til at være lig produktets productName
        newProduct.product_ID = this.productID; //Sætter newProducts product_ID til at være lig produktets productID
        newProduct.product_Price = this.productPrice; //Sætter newProducts product_Price til at være lig produktets productPrice

        item.push(newProduct); //Pusher newProduct til arrayet item


    }

    removeProduct(productName, productID, productPrice) {

        //Prøv at brug for/of loop.
        for (var x = 0; x < item.length; x++)

            if (item[x].product_ID === this.productID) {
                item.splice(x, 1);
                break; // Uden break(stopper for-loopet) vil for-loopet fortsætte efter, at der er blevet fjernet et produkt.
            }
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////


class Food extends Product {
}

//Instantierer et produkt under klassen "Food"
let cheeseburger = new Food ("Cheeseburger", 2, 80);

// Aktiverer funtionen addProduct for cheeseburger;
function addCheeseburger() {
    countCheeseburger++
    cheeseburger.addProduct();
    console.log(JSON.stringify(item)); // Dette er kun relevant for console.log
}

// Laver en funktion removeCheeseburger() der aktiverer metoden removeProduct() for water;
function removeCheeseburger() {
    countCheeseburger--;
    //Hvis countCheeseBruger er lavere end 0 "resetter den til 0 igen
    if (countCheeseburger < 0){
        countCheeseburger=0;
    }
    cheeseburger.removeProduct();
    console.log(JSON.stringify(item)); // Dette er kun relevant for console.log
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Remove funktionen
function removeRice() {
    //Hvis countRice er lavere end 0 "resetter den til 0 igen
    countRice--;
    if (countRice <0 ){
        countRice =0;
    }
    rice.removeProduct();
    console.log(JSON.stringify(item)); // Dette er kun relevant for console.log
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Hele koden
"use strict";
var item = []; // Kurv

//Tilføjer en global variabel der tæller antal for cheeseburgers valgt
var countCheeseburger = 0;
var countRice = 0;
var countWater = 0;

/* Laver en funktion showOrder(), der viser item på html-siden  */
// Mathias: Har erstattet denne funktion med displayItems

function showOrder() { // Funktionen virker fint indtil, man kommer over 3 produkter? console.log fungerer hel fint

    // Dette er kun relevant for console.log
    console.log(""); //Laver "linebreak" i console.log
    console.log("Kurv");



    // Dette for-loop sletter al indhold i kurven.
    for (let x = 0; x <= item.length; x++) {
        document.getElementById("basketNames" + x).innerHTML = "";
        document.getElementById("basketPrices" + x).innerHTML = "";
    }


    // Dette for-loop indsætter item i kurven.
    for (let x = 0; x < item.length; x++) {
        document.getElementById("basketNames" + x).innerHTML = item[x].product_Name;
        document.getElementById("basketPrices" + x).innerHTML = item[x].product_Price + " kr";
    }



    // Dette er kun relevant for console.log (Dette for-loop viser kurv i console.log)
    for (let z = 0; z < item.length; z++) {
        console.log("Navn for produkt: " + item[z].product_Name, "   ", "Pris for produkt: " + item[z].product_Price + " kr");
    }
}

//Har erstattet showOrder med denne funktion der virker uanset antal.
// Bliver kaldt fra onclick HTML



function displayItems() {

    document.getElementById("displayed_items").innerHTML = "";
    if (countCheeseburger > 0) {
        document.getElementById("displayed_items").innerHTML += countCheeseburger + " X " + cheeseburger.productName + " " + cheeseburger.productPrice + " KR." + "<br>"

    }

    if (countWater > 0) {
        document.getElementById("displayed_items").innerHTML += countWater + " X " +  water.productName + " " + water.productPrice + " KR. " + "<br>";
    }

    if (countRice > 0){
        document.getElementById("displayed_items").innerHTML += countRice + " X " + rice.productName + " " + rice.productPrice + " KR. " + "<br>";

        // Fjerner først evt. værdi i HTML
        //document.getElementById("displayed_items").innerHTML="";
    }
    // Kører et loop for produkterne i array item, Dette loop gør også at var=i bliver defineret så det kan bruges i if statements

    //Indsætter item i HTML og laver et line break så det bliver en liste
    //  document.getElementById("displayed_items").innerHTML += " X " +  + item[i].product_Name + " " + item[i].product_Price + " KR." + "<br>"

}

function calculateTotalPrice(){

    // Dette er kun relevant for console.log
    console.log(""); //Laver "linebreak" i console.log
    console.log("Total pris af kurv ");


    // Dette for-loop viser total price for kurv.
    var totalPrice = 0;
    for (let x = 0; x < item.length; x++) {
        totalPrice += item[x].product_Price;
    }

    document.getElementById("basketTotalPrice").innerHTML = totalPrice + " kr";


    // Dette er kun relevant for console.log (Dette viser total price i console.log)
    console.log("Den totale pris er: " + totalPrice + " kr"); //(denne er derfor kun for at skabe overblik)
    console.log("-----------------------------------------------");
}


////////////////////////////////////////////////////////////////////////////////////////////////////////

class Product {
    constructor(productName, productID, productPrice) {
        this.productName = productName;
        this.productID = productID;
        this.productPrice = productPrice;
    }

    /* Laver en metode addProduct() der tilføjer et produkt til item. Helt simpelt tager funktionen addProduct(),
    de tre constructors (productName,productID,productPrice) og koger ned til et objekt (newProduct),
    som bliver pushet til arrayet item. Dette gør at de tre constructors er samlet på en plads i arrayet, istedet for eksempelvis 3 */

    addProduct() {

        var newProduct = {
            product_Name: this.productName, //Sætter newProducts product_Name til at være lig produktets productName
            product_ID: this.productID, //Sætter newProducts product_ID til at være lig produktets productID
            product_Price: this.productPrice, //Sætter newProducts product_Price til at være lig produktets productPrice
        };

        item.push(newProduct); //Pusher newProduct til arrayet item


    }
    removeProduct() {

        //Prøv at brug for/of loop.
        for (var x = 0; x < item.length; x++)

            if (item[x].product_ID === this.productID) {
                item.splice(x, 1);
                break; // Uden break(stopper for-loopet) vil for-loopet fortsætte efter, at der er blevet fjernet et produkt.
            }
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////


class Food extends Product {
}

//Instantierer et produkt under klassen "Food"
let cheeseburger = new Food ("Cheeseburger", 2, 80);

// Aktiverer funtionen addProduct for cheeseburger;
function addCheeseburger() {
    countCheeseburger++
    cheeseburger.addProduct();
    console.log(JSON.stringify(item)); // Dette er kun relevant for console.log
}

// Laver en funktion removeCheeseburger() der aktiverer metoden removeProduct() for water;
function removeCheeseburger() {
    countCheeseburger--;
    //Hvis countCheeseBruger er lavere end 0 "resetter den til 0 igen
    if (countCheeseburger < 0){
        countCheeseburger=0;
    }
    cheeseburger.removeProduct();
    console.log(JSON.stringify(item)); // Dette er kun relevant for console.log
}



////////////////////////////////////////////////////////////////////////////////////////////////////////



// Nedarvning af Product: "Drinks"
class Drinks extends Product {
}

//Instantierer et produkt under klassen "Food"
let water = new Drinks ("Water", 5, 20);

// Laver en funktion addWater() der aktiverer metoden addProduct() for water;
function addWater() {
    countWater++;
    water.addProduct();
    console.log(JSON.stringify(item)); // Dette er kun relevant for console.log
}

// Laver en funktion removeWater() der aktiverer metoden removeProduct() for water;
function removeWater() {
    countWater--;
    //Hvis countWater er lavere end 0 "resetter den til 0 igen
    if (countWater < 0){
        countWater =0;
    }
    water.removeProduct();
    console.log(JSON.stringify(item)); // Dette er kun relevant for console.log
}



////////////////////////////////////////////////////////////////////////////////////////////////////////




// Nedarvning af Product: "Extras"
class Extras extends Product {
}

//Instantierer et produkt under klassen "Food"
let rice = new Extras ("Rice", 10, 15);

/* Laver en funktion addRice() der aktiverer metoden addProduct() for rice. Dette er gjort, da rice.addProduct()
ikke kan kaldes direkte grundet scoopingen. addProduct() er en metode til klassen Product, som rice har inherited
 fra sin klasse, Extras, som er en nedarvning af Products. */
function addRice() {
    countRice++;
    rice.addProduct();
    console.log(JSON.stringify(item)); // // Dette er kun relevant for console.log
}

/* Laver en funktion removeRice() der aktiverer metoden removeProduct() for rice. Dette er gjort, da rice.removeProduct()
ikke kan kaldes direkte grundet scoopingen. removeProduct() er en metode til klassen Product, som rice har inherited
 fra sin klasse, Extras, som er en nedarvning af Products. */
function removeRice() {
    //Hvis countRice er lavere end 0 "resetter den til 0 igen
    countRice--;
    if (countRice <0 ){
        countRice =0;
    }
    rice.removeProduct();
    console.log(JSON.stringify(item)); // Dette er kun relevant for console.log
}




////////////////////////////////////////////////////////////////////////////////////////////////////////

//fra Helenas "delivery"

////////////////////////////////////////////////////////////////////////////////////////////////////////


//Optimering: javascript reduce dom access

// Nedarvning af Product: "Delivery"

class Delivery extends Product {
    constructor(productName, productID, productPrice, deliverySelected, deliveryAddress, deliveryRegion, deliveryComment, deliveryTime) {
        super(productName, productID, productPrice);
        this.deliverySelected = deliverySelected;
        this.deliveryAddress = deliveryAddress;
        this.deliveryRegion = deliveryRegion;
        this.deliveryComment = deliveryComment;
        this.deliveryTime = deliveryTime;
    }
    setdeliverySelected(x) {
        this.deliverySelected = x;
    }

    setdeliveryAddress (x) {
        this.deliveryAddress = x;
    }

    setdeliveryRegion(x) {
        this.deliveryRegion = x;
    }
    setdeliveryComment(x) {
        this.deliveryComment = x;
    }

    setdeliveryTime(x) {
        this.deliveryTime = x;
    }

    getdeliverySelected() {
        return this.deliverySelected;
    }

    getdeliveryAddress() {
        return this.deliveryAddress;
    }

    getdeliveryRegion() {
        return this.deliveryRegion;
    }
    getdeliveryComment () {
        return this.deliveryComment;
    }

    getdeliveryTime () {
        return this.deliveryTime;
    }

}

//Instantierer et produkt under klassen "Delivery"
let delivery = new Delivery("Delivery", 15, 45, null, "", "", "");


/*Laver en funktion der sætter "deliverySelected" til true/False alt efter hvilken radiobutton man tjekker*/
function deliveryYesNo() {
    if (document.getElementById('yesDelivery').checked) {
        delivery.setdeliverySelected(true);
        delivery.getdeliverySelected();
    } else {
        delivery.setdeliverySelected(false);
        delivery.getdeliverySelected();
    }
}
function deliveryYesOrNo() {
    var deliveryYesNo = document.getElementsByClassName("deliveryMethodSelected");
    for (i=0; i < deliveryMethodSelected.length; i++) {
        if (yesDelivery)
            }
}

/*Funktionen "deliveryFee" vil tilføje leveringsgebyer, hvis man har trykket på "Vælg levering" hvormed "deliverySelected=true".
 Hvis man derimod trykker "hent selv" vil den igen fjerne leveringsgebyr, da "deliverySelected=false". */
function deliveryFee() {
    if (delivery.deliverySelected  === true) {
        delivery.addProduct();
        console.log(JSON.stringify(item)); // Dette er kun relevant for console.log
    } else {
        delivery.removeProduct();
        console.log(JSON.stringify(item)); // Dette er kun relevant for console.log
    }
}

/*Function der viser info i HTML hvor man skal udfylde på baggrund af om man vælger levering eller hent selv*/
function deliveryMethodClicked () {
    if (document.getElementById('yesDelivery').checked) {
        document.getElementById('ifYesDelivery').style.visibility = 'visible';
        document.getElementById('ifNoDelivery').style.visibility = 'hidden';
    } else {
        document.getElementById('ifNoDelivery').style.visibility = 'visible';
        document.getElementById('ifYesDelivery').style.visibility = 'hidden';
    }
}


/* Function der sætter værdien af addresse, postnr og evt kommentar - tilføjes til deliveryobjektet.*/
function test() {
    delivery.setdeliveryAddress(document.getElementById("delivery_address").value);
    delivery.getdeliveryAddress();


    delivery.setdeliveryRegion(document.getElementById("delivery_region").value);
    delivery.getdeliveryRegion();


    delivery.setdeliveryComment(document.getElementById("delivery_comment").value);
    delivery.getdeliveryComment();


    console.log(JSON.stringify(delivery)); // Dette er kun relevant for console.log

}



//Deklarerer funktionen "validateInformation" der validerer brugerens indtastede leveringsoplysninger*/
//BIS exercise 8

function validateDeliveryInformation() {

    //Accessing value of radiobuttons - if delivery method has been selected
    var radioButtons = document.getElementsByClassName('deliveryMethodSelected');
    var deliveryMethodSelected = "";
    var len = radioButtons.length;
    var radioInput = false;
    var i = null;

    //checked property checks if a checkbox is checked or not
    for (i=0; i<len; i++) {
        if (radioButtons[i].checked) {
            deliveryMethodSelected = radioButtons[i].value;
            radioInput = true;
        }
    }

    /*--------------Validate Information-------------------*/
//Validation of form
    var form_valid = true;
    var validation_message = "";

//Validation: rating
    /*if-else statement that controls whether the “radioInput” variable has been set = a radio button has been checked, or if no delivery method has been given.*/
    if (radioInput === false) {
        validation_message += "Please select delivery Method\n ";
        form_valid = false;
    }

//Validation: deliveryAddress
    //Use if statement to check if an address has been typed:
    if (delivery.deliverySelected === true) {                                       // Checking if delivery has been selected, else not relevant
        if (delivery.deliveryAddress === null || delivery.deliveryAddress === "") {
            validation_message += "Please fill out 'address'\n";
            form_valid = false;
        }
    }

    //Validation: deliveryRegion
    //Checking if the zipcode no. contains only numbers and is not blank. Using the NaN-function () (Not-a-Number) inside an if statement to determine whether or not the entered regionCode only contains numbers:
    if (delivery.deliverySelected === true) {                                        // ZIP code information only relevant if delivery has been selected
        if (delivery.deliveryRegion === "" || delivery.deliveryRegion === null) {       // ZIP code input is empty
            validation_message += "Please fill out 'ZIP code'\n";
            form_valid = false;

        } else if (isNaN(delivery.deliveryRegion)) {                                    // ZIP code must only contain numbers
            validation_message += "The ZIP code can only consist of numbers! \n";
            form_valid = false;

        } else if (delivery.deliveryRegion.length !== 4) {                              // ZIP code must consist of 4 digits
            validation_message += "ZIP code must contain of 4 digits'\n";
            form_valid = false;
        }
    }


    //Error in validation alert
    if (form_valid) {
        //Alert if validation is approved
        //Using the alert function to show user entered the information

        alert("Address " + delivery.deliveryAddress
            + "Delivery method has been selected"
        );
    }
    else {
        alert(validation_message);
        return false;
    }

    return (form_valid);

}

function showDelivery() {
    alert(JSON.stringify(delivery)); // Dette er kun relevant for console.log
}




function getOption() {
    var objHours = document.getElementById("delivery_time-hours");
    var selectedHours  = objHours.options[objHours.selectedIndex].text;

    var objMin = document.getElementById("delivery_time-minutes");
    var selectedMinutes = objMin.options[objMin.selectedIndex].text;

    var deliveryTime = `${selectedHours}:${selectedMinutes}`;
    alert(deliveryTime);

}

function createDelivery() {
    var deliveryObj = new Delivery(
        document.getElementById("delivery_address").value,
        document.getElementById("delivery_region").value,
        document.getElementById("delivery_comment").value,
    );
    console.log(deliveryObj);
}
    
    /*
///ANDEN der anvender try/catch og kun viser fejlmeddelelser med alert!!!!!

// Deklaration af funktion med formål at validere leveringsoplysninger i form-felterne i HTML-dokumentet.
// Definerer variable ud fra DOM inputfelter, der påkræves at være udfyldt med leverings/afhentningsoplysninger.
// Anvender exeption handling for at kontrollere at felterne er korrekt udfyldt.
// Hvis hele formen er 'true' instantieres et nyt objekt med de valide informationer, der gemmes i Map defineret tidligere.
function validateDeliveryInformation() {
    // Definerer variable i toppen pga. scoping.
    // Anvender DOM-properties (.options, .selectedIndex, .text, .value) for at tilgå værdierne i input-felterne.
    // Disse bindes til en variabel og bruges til validation.
    let objHours = document.getElementById("delivery_time-hours");
    let selectedHours  = objHours.options[objHours.selectedIndex].text;
    let objMin = document.getElementById("delivery_time-minutes");
    let selectedMinutes = objMin.options[objMin.selectedIndex].text;
    let deliveryTime = `${selectedHours}:${selectedMinutes}`;
    var address = document.getElementById("delivery_address").value;
    var region = document.getElementById("delivery_region").value;
    var city = document.getElementById("delivery_city").value;
    var comment = document.getElementById("delivery_comment").value;


    // Variabel bindes til DOM-element for paragraf, hvor meddelelse vises, når levering er registreret korrekt.
    let paraDelRegistered = document.getElementById("delivery-registered");


    // Definerer variablen delRadioBtn der bindes til radiobuttons-noderne vha. DOM-metoden querySelectorAll().                // querySelectorAll,322
    // delRadioBtn er en NodeList der indeholder to objekter for hver radiobtn-node. Formålet er, at Radiobtns værdier                                  // NodeList, 227
    // skal tilgås, for at validere om leveringsmetode er blevet valgt.
    // NodeList property .length anvendes for at returnere antallet af items i delRadioBtn.
    let delRadioBtn = document.querySelectorAll("[name=delivery-methods]");
    let len = delRadioBtn.length;
    let radioInput = false;

//Validation af hele leverings/afhentningsformen
    // Deklarerer variblen 'formValid' der bruges til at validere formen for leverings/oplysninger som kunde har indtastet.
    // Værdien defineres til booleansk udtryk 'true' som initiel værdi. Hvis try/catch fanger fejl vil den ændres til "false"
    // Hvis formValids booleanske værdi er falsk betyder det, at én eller flere felter, som kunde skal udfylde,
    // ikke er udfyldt korrekt, hvormed fejlbesked vil blive alerted. Alle fejl gemmes i validationMessage. Hvis formValid
    // er true er alle påkrævede felter udfyldt korrekt og de gemmes som et instantieret objekt i deliverySaved-Map'et.
    // !!!! Lige nu er der både en alert + fejlmeddelselser vises i HTML vha. DOM-metode .innerHTML.****
    let formValid = true;
    let validationMessage ="";

//Validation af leveringsmetode
    // For-loop med formål at undersøge om kunde har valgt leveringsmetode og dermed om radiobtns er checked.
    // Itererer gennem hver node i Nodelist. Bruger DOM-attributten .checked på hvert index i for-loop, dvs.
    // Anvender DOM property .checked til at for hver radiobtn undersøge om den er checked eller ej.
    // Bruger variabel deklareret til en booleansk værdi der sættes til 'true' hvis én radiobtn er checked, og 'false' hvis ikke.

    // !!! Kunne bare bruge delivery.deliverySelected som er defineret i funktionen deliveryMethodSelected
    for (var i = 0; i < len; i++) {                                                      // H: Virker ikke hvis man bruger "use strict;
        if (delRadioBtn[i].checked) {                                                     // ReferenceError: "i is not deifined"
            radioInput = true;
        }
    }
    // try/catch blok der anvender boolean værdi til at kontrollere om radiobtn er blevet checked.
    // Hvis false er ingen radiobutton blevet valgt og increment operator bruges til at tilføje fejlmeddelelse til
    // variablen validationMessage.
    try {
        if (radioInput === false) throw "\nDu skal vælge leveringsmetode "
        }
    catch(error) {
            validationMessage += error;
            formValid = false;
        }

//Validation: Leverings/afhentningstid
    // Anvender DOM property .selectedIndex for at undersøge om der er valgt et element i drop-down list.
    let hoursIndex = objHours.selectedIndex;
    let minIndex = objMin.selectedIndex;

    // Anvender nested try/catch i if-statement, da validation af leverings/afhentningstid kun skal eksekveres
    // hvis kunde har valgt leveringsmetode, men skal gælde for både valg af 'levering' og 'afhentning'.
    // Det nestede try/catch vil kun eksekvere hvis ydre if-statement er true.
    // Logisk OR-operator anvendes til at kontrollere at der er valgt 'timer' og 'minutter', dvs. begge drop-down
    // lister har en selected option.

    if (delivery.deliverySelected !== null) {
        try {
            if (hoursIndex === 0 || minIndex === 0) throw "\nDu skal vælge et gyldigt leverings/afhentningstidspunkt";


        //Validation: comment
            // If-statement der anvender relational operator til at undersøge om input i kommentarfelt overskrider
            // max antal tegn. Kommentaren er en string der derfor kaldes med metoden .length for at kontrollere længde.

            if (comment.length > 255) throw "\nKommentar overskrider maks på 255 antal tegn";
        }
        catch(error) {
            validationMessage += error;
            formValid = false;
        }
    }

//Validation: leveringsaddresse
    // Nested if-statement anvendes da addresse, post nr. og by kun er påkrævet hvis "levering" er valgt.
    // if-statement kontrollerer at delivery-objektets deliverySelected attribut er 'true' hvormed 'levering' er blevet valgt.
    // Indre if-stament tjekker om feltet for addresse er blevet udfyldt korrekt.
    // For at kontrollere at der ikke kun er indtastet white spaces anvendes string metoden trim() på variablen
    // 'address' der binder en string. Bruger dernæst identity operator for at checke om den efter trim er en empty.

    if (delivery.deliverySelected=== true) {
        try {
            if (address === null || address === "" || address.trim() === "")            // !!!!!!! Den kontrollerer ikke hvis man skriver mellemrum
                throw "\nDu skal indtaste addresse";

//Validation: post nr.
    // Kontrollerer at felt er udfyldt.

            if (region === "" || region === null || region.trim() === "")        // ZIP code input is empty
                throw "\nDu mangler at udfylde post nr.";

            // Kalder isNaN-funktionen i et if statement for at kontrollere at der kun er indtastet
            // tal, da post nr kun kan bestå af tal.
            if (isNaN(region)) throw "\nPost nr. kan kun bestå af tal";

            // Post nr. kan kun bestå af 4 cifre
            if (region.length !== 4) throw "\nPost nr. skal bestå af 4 cifre";


//Validation: by
            // Kontrollerer at felt ikke er tomt
            if (city === "" || city === null || city.trim()==="") throw "\nDu skal udfylde by";

            // Anvender not-operator på isNaN-funktionen der skal kontrollere at der ikke er indtastet et tal
            // !!!!virker ikke optimalt =>  KUN hvis der udelukkende indtastet et tal
            if (!isNaN(city)) throw "\nBy kan ikke indeholde tal";

        }
        // catch block der fanger fejl i den respektive try block, gælder kun for valg af 'levering'.
        catch(error) {
            validationMessage += error;
            formValid = false;
        }
    }

// Validation af leverings/afhentningsformen vha. conditional statement
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

        // localStorage.setItem("deliveryInformation", JSON.stringify(mapDelivery.get("1")));
        //console.log(JSON.parse(localStorage.getItem("deliveryInformation")));

        // Bekræftelse på leveringsoplysninger er registreret skrives i HTML-paragraf.
        paraDelRegistered.innerHTML="Leveringsoplysninger er gemt.";
        console.log("Leveringsoplysninger er registreret");

        // else if, der eksekveres hvis kunde har valgt 'afhentning'. Da vil ske samme som ovenstående.
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


        // Bekræftelse på afhentningsoplysninger er registreret skrives i HTML-paragraf.
        paraDelRegistered.innerHTML="Leveringsoplysninger er gemt.";
        console.log("Leveringsoplysninger er registreret");

        // else-statement der eksekveres hvis form ikke er valideret
        // Alert med fejlbeskeder
        // Fejlbesked i HTML-dokument om at leveringsoplysninger ikke er gemt
    } else {
        alert("fejl!: " + validationMessage);
        paraDelRegistered.innerHTML="Leveringsoplysninger er ikke gemt!!!.";
        return false
    }
}
*/
    
    
