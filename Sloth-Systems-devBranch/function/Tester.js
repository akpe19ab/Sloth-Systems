"use strict";
var item = []; // Kurv


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



function displayItems() {
    // Fjerner først evt. værdi i HTML
    document.getElementById("displayed_items").innerHTML="";

// Kører et loop for produkterne i array item
    for (var i=0; i < item.length; i++) {
        //Indsætter item i HTML og laver et line break så det bliver en liste
        document.getElementById("displayed_items").innerHTML += item[i].product_Name + " " + item[i].product_Price + " KR." + "<br>"
    }}

function calculateTotalPrice(){

    // Dette er kun relevant for console.log
    console.log(""); //Laver "linebreak" i console.log
    console.log("Total pris af kurv ");


    // Dette for-loop viser total price for kurv.
    var totalPrice = 0;
    for (var x = 0; x < item.length; x++) {
        totalPrice = item[x].product_Price + totalPrice;
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
    cheeseburger.addProduct();
    console.log(JSON.stringify(item)); // Dette er kun relevant for console.log
}

// Laver en funktion removeCheeseburger() der aktiverer metoden removeProduct() for water;
function removeCheeseburger() {
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
    water.addProduct();
    console.log(JSON.stringify(item)); // Dette er kun relevant for console.log
}

// Laver en funktion removeWater() der aktiverer metoden removeProduct() for water;
function removeWater() {
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
    rice.addProduct();
    console.log(JSON.stringify(item)); // // Dette er kun relevant for console.log
}

/* Laver en funktion removeRice() der aktiverer metoden removeProduct() for rice. Dette er gjort, da rice.removeProduct()
ikke kan kaldes direkte grundet scoopingen. removeProduct() er en metode til klassen Product, som rice har inherited
 fra sin klasse, Extras, som er en nedarvning af Products. */
function removeRice() {
    rice.removeProduct();
    console.log(JSON.stringify(item)); // Dette er kun relevant for console.log
}




