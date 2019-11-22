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
