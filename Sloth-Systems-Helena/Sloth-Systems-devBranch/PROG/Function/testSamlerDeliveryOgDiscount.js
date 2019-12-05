"use strict";
var item = []; // Kurv

//Tilføjer en global variabel der tæller antal for cheeseburgers valgt
var countCheeseburger = 0;
var countRice=0;
var countWater=0;

/* Laver en funktion showOrder(), der viser item på html-siden  */
// Mathias: Har erstattet denne funktion med displayItems

function showOrder() { // Funktionen virker fint indtil, man kommer over 3 produkter? console.log fungerer hel fint

    // Dette er kun relevant for console.log
    console.log(""); //Laver "linebreak" i console.log
    console.log("Kurv");



    // Dette for-loop sletter al indhold i kurven.
    for (var x = 0; x <= item.length; x++) {
        document.getElementById("basketNames" + x).innerHTML = "";
        document.getElementById("basketPrices" + x).innerHTML = "";
    }


    // Dette for-loop indsætter item i kurven.
    for (var x = 0; x < item.length; x++) {
        document.getElementById("basketNames" + x).innerHTML = item[x].product_Name;
        document.getElementById("basketPrices" + x).innerHTML = item[x].product_Price + " kr";
    }



    // Dette er kun relevant for console.log (Dette for-loop viser kurv i console.log)
    for (var z = 0; z < item.length; z++) {
        console.log("Navn for produkt: " + item[z].product_Name, "   ", "Pris for produkt: " + item[z].product_Price + " kr");
    }
}

//Har erstattet showOrder med denne funktion der virker uanset antal.
// Bliver kaldt fra onclick HTML

function calculateQuantity(){

}

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

    //Tilkføjer denne linje så delivery også bliver vist
    if (delivery.deliverySelected === true) {
        document.getElementById("displayed_items").innerHTML += delivery.productName + " " + delivery.productPrice + " KR. " + "<br>";
    }

    // Kører et loop for produkterne i array item, Dette loop gør også at var=i bliver defineret så det kan bruges i if statements

    //Indsætter item i HTML og laver et line break så det bliver en liste
    //  document.getElementById("displayed_items").innerHTML += " X " +  + item[i].product_Name + " " + item[i].product_Price + " KR." + "<br>"

}

function calculateTotalPrice() {
    // Dette er kun relevant for console.log
    console.log(""); //Laver "linebreak" i console.log
    console.log("Total pris af kurv ");



    // Discountfield defineres ud fra value i HTML, den er tom.
    var discountfield=document.getElementById("discountCodeField").value;
    var totalPrice = 0;
    var discount=0;
    //var couponsUsed=0; skal evt. bruges til at prisen ikke overskrives hvis der allerede er aktiveret en rabatkode

    // Dette for-loop gennemgår arrayet i item for dets længde
    for (var x = 0; x < item.length; x++) {

        //Hvis der ikke indstastes en rabatkode udregnes samlet pris for kurven.

        if (discountfield=="") {
            totalPrice = item[x].product_Price + totalPrice;
        }

        //Hvis der indstastes noget udregnes prisen på hele kurven
        //Uden denne Else vil prisen blive 0 hvis man indtaster en ikke aktiv rabatkode, fordi ingen af if statements vil execute prisudregningen
        //Hvis der indtastes en kode giver den en fejlmeddelses, hvis et if statement nedenunder er sandt, overskriver det fejlmeddelsen
        else{
            totalPrice = item[x].product_Price + totalPrice;
            document.getElementById("activatedCoupons").innerHTML=""
            document.getElementById("discountError").innerHTML="Koden du har indtastet er ikke gyldig."
        }

        //Hvis der indtastes noget i rabatkode feltet der matcher med en rabatkode udregnes discount.
        //Discount bliver udregnet og pga. ovenstående if/else har vi allerede udregnet totalPrice
        //Disse if statements "sletter" også else sætningens fejlmeddelelse.
        //Der findes 4 rabatkoder. 1. "burger10" 2. "rice10" 3. "water10" 4. "ALL10"
        if (discountfield=="burger10" && countCheeseburger>0){
            document.getElementById("discountError").innerHTML=""
            discount=(countCheeseburger*cheeseburger.productPrice)/10;
            console.log(discount);
            //totalPrice = item[x].product_Price + totalPrice;
            document.getElementById("activatedCoupons").innerHTML="Aktiverede rabatter" + "<br>" + "<b>Burger10:</b> Giver 10% rabat på din burger(e)"
        }

        if (discountfield=="rice10" && countRice>0) {
            document.getElementById("discountError").innerHTML=""
            discount=(countRice*rice.productPrice)/10;
            console.log(discount);
            //totalPrice = item[x].product_Price + totalPrice;
            document.getElementById("activatedCoupons").innerHTML="Aktiverede rabatter" + "<br>" + "<b>rice10:</b> Giver 10% rabat på din ris"
        }

        if (discountfield=="water10" && countWater>0){
            document.getElementById("discountError").innerHTML=""
            discount=(countWater*water.productPrice)/10;
            console.log(discount);
            //totalPrice = item[x].product_Price + totalPrice;
            document.getElementById("activatedCoupons").innerHTML="Aktiverede rabatter" + "<br>" + "<b>water10:</b> Giver 10% rabat på din vand"
        }

        if (discountfield=="ALL10"){
            document.getElementById("discountError").innerHTML=""
            discount=totalPrice/10;
            console.log(discount);
            //totalPrice = item[x].product_Price + totalPrice;
            document.getElementById("activatedCoupons").innerHTML="Aktiverede rabatter" + "<br>" + "<b>ALL10:</b> Giver 10% rabat på hele din ordre"
        }

    }

    //Denne variabel er den egentlige totalpris
    var totalPriceDiscount = totalPrice-discount;

    document.getElementById("basketTotalPrice").innerHTML = "Pris for produkter " + totalPrice + " kr";
    document.getElementById("discount").innerHTML= "Rabat " + discount + " KR."
    document.getElementById("totalPriceWithDiscount").innerHTML= "Total pris " + totalPriceDiscount + "KR.";


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

//Validation: deliveryMethod
    /*if-else statement that controls whether the “radioInput” variable has been set = a radio button has been checked, or if no delivery method has been given.*/
    if (radioInput === false) {
        validation_message += "Please select delivery Method\n ";
        form_valid = false;
        document.getElementById("validationDelMethod").innerHTML = "Please select delivery Method";
    } else {
        document.getElementById("validationDelMethod").innerHTML = null;
    }

//Validation: deliveryAddress
    //Use if statement to check if an address has been typed:
    if (delivery.deliverySelected === true) {                                       // Checking if delivery has been selected, else not relevant
       if (delivery.deliveryAddress === null || delivery.deliveryAddress === "") {
            validation_message += "Please fill out 'address'\n";
            form_valid = false;
           document.getElementById("validationAddress").innerHTML = "Please fill out address";
       } else {
           document.getElementById("validationAddress").innerHTML =  null;
       }

    }
    //Validation: deliveryRegion - lige nu har jeg både alert og .innerHTML der viser fejlteksten
    //Checking if the zipcode no. contains only numbers and is not blank. Using the NaN-function () (Not-a-Number) inside an if statement to determine whether or not the entered regionCode only contains numbers:
    if (delivery.deliverySelected === true) {                                        // ZIP code information only relevant if delivery has been selected
        if (delivery.deliveryRegion === "" || delivery.deliveryRegion === null) {       // ZIP code input is empty
            validation_message += "Please fill out 'ZIP code'\n";
            form_valid = false;
            document.getElementById("validationRegion").innerHTML = "Please fill out 'ZIP code'";

        } else if (isNaN(delivery.deliveryRegion)) {                                    // ZIP code must only contain numbers
            validation_message += "The ZIP code can only consist of numbers! \n";
            form_valid = false;
            document.getElementById("validationRegion").innerHTML = "The ZIP code can only consist of numbers!";

        } else if (delivery.deliveryRegion.length !== 4) {                              // ZIP code must consist of 4 digits
            validation_message += "ZIP code must contain of 4 digits'\n";
            form_valid = false;
            document.getElementById("validationRegion").innerHTML = "ZIP code must consist of 4 digits'";
        } else {
            document.getElementById("validationRegion").innerHTML =  null;
        }
    }

    //Validation: deliveryTime
    var hoursIndex = document.getElementById("delivery_time-hours").selectedIndex;
    var minIndex= document.getElementById("delivery_time-minutes").selectedIndex;
    if (hoursIndex === 0 || minIndex === 0) {
        validation_message += "Please choose a valid delivery time\n ";
        form_valid = false;
        document.getElementById("validationDelTime").innerHTML = "Please choose a valid delivery time";
    } else {
        document.getElementById("validationDelTime").innerHTML =  null;
    }

    //Error in validation alert
    if (form_valid) {
        //Alert if validation is approved
        //Using the alert function to show user entered the information

        alert("Leveringsmetode er blevet registreret:"
            +"\nAddress: " + delivery.deliveryAddress
            +"\nPost nr.: " + delivery.deliveryRegion
            +"\nLeveringstidspunkt/afhentningstidspunkt: " + delivery.deliveryTime
            +"\nEventuel kommentar: " + delivery.deliveryComment
        );
    }
    else {
        alert(validation_message);
        return false;
    }

    return (form_valid);

}



/* Function der sætter værdien af addresse, postnr og evt kommentar - tilføjes til deliveryobjektet.*/
function setDeliveryInformation() {
    delivery.setdeliveryAddress(document.getElementById("delivery_address").value);

    delivery.setdeliveryRegion(document.getElementById("delivery_region").value);

    delivery.setdeliveryComment(document.getElementById("delivery_comment").value);

    var objHours = document.getElementById("delivery_time-hours");
    var selectedHours  = objHours.options[objHours.selectedIndex].text;

    var objMin = document.getElementById("delivery_time-minutes");
    var selectedMinutes = objMin.options[objMin.selectedIndex].text;

    var deliveryTime = `${selectedHours}:${selectedMinutes}`;

    delivery.setdeliveryTime(deliveryTime);

    console.log(JSON.stringify(delivery)); // Dette er kun relevant for console.log

}
document.getElementById("testButton").addEventListener("click", () => {
    validateDeliveryInformation();
    showDelivery();
    setDeliveryInformation();

});


function showDelivery() {
    alert(JSON.stringify(delivery)); // Dette er kun relevant for console.log
}

