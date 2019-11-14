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

    }
    removeProduct() {
        this.productQuantity--;
        //Prøv at brug for/of loop.
        for (var x = 0; x < item.length; x++)

            if (item[x].product_ID === this.productID) {
                item.splice(x, 1);
                break; // Uden break(stopper for-loopet) vil for-loopet fortsætte efter, at der er blevet fjernet et produkt.
            }
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
}

// Funktion der udregner den totale pris af valgte items.
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
