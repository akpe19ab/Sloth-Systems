"use strict";
var item = [];



class Product {
    constructor(productName, productID, productPrice) {
        this.productName = productName;
        this.productID = productID;
        this.productPrice = productPrice;
    }

    /* Laver en funktion addProduct() der tilføjer et produkt til item. Helt simpelt tager funktionen addProduct(),
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

        console.log(JSON.stringify(item));
    }

  /* removeProduct(productName, productID, productPrice) {

        for (var x = 0; x < item.length; x++)

            if (item[x].product_ID === this.productID) {
                item.slice(x, 1);
            }
    } */

   calculateTotalPrice() {
        var totalPrice = 0;

        for (var x = 0; x < item.length; x++) {
            totalPrice = item[x].product_Price + totalPrice;
        }
    }
}






class Food extends Product {
}

//Instantierer et produkt under klassen "Food"
let burger = new Food ("Burger", 2, 45);

// Aktiverer funtionen addProduct for burger;
// burger.addProduct();

// Viser item;
//console.log(JSON.stringify(item));






// Nedarvning af Product: "Drinks"
class Drinks extends Product {
}
//Instantierer et produkt under klassen "Food"

let water = new Drinks ("Water", 5, 20);

// Aktiverer funtionen addProduct water;
//water.addProduct();

// Viser item;
//console.log(JSON.stringify(item));






// Nedarvning af Product: "Extras"
class Extras extends Product {
}
//Instantierer et produkt under klassen "Food"
let rice = new Extras ("Rice", 10, 30);

// Aktiverer funtionen addProduct for rice;
//rice.addProduct();

// Viser item;
//console.log(JSON.stringify(item));



// Aktiverer funktionen removeProduct for water
//burger.removeProduct();

// Viser item;
//console.log(JSON.stringify(item));



// https://designmodo.com/demo/shopping-cart/   ( CalculateTotalQuantity )



