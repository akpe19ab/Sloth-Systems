"use strict";
var item = [];



class Product {
    constructor(productName, productID, productPrice) {
        this.productName = productName;
        this.productID = productID;
        this.productPrice = productPrice;
    }

    addProduct(productName, productID, productPrice) {

        var ProductName = this.productName;
        var ProductID = this.productID;
        var ProductPrice = this.productPrice;

        var newProduct = {
            product_Name: null,
            product_ID: 0,
            product_Price: 0,
        };

        newProduct.product_Name = ProductName;
        newProduct.product_ID = ProductID;
        newProduct.product_Price = ProductPrice;

        item.push(newProduct);

    }

   /* removeProduct(productID) {

        for (var x = 0; x < item.length; x++)

            if (item[x].product_ID === productID) {
                item.slice(x, 1);
            }
    } */
}


class Food extends Product {
}

//Instantierer et produkt under klassen "Food"
let burger = new Food ("Burger", 2, 45);

// Aktiverer funtionen addProduct;
burger.addProduct();

// Viser item;
console.log(JSON.stringify(item));



// Nedarvning af Product: "Drinks"
class Drinks extends Product {
}
//Instantierer et produkt under klassen "Food"

let water = new Drinks ("Water", 5, 20);

// Aktiverer funtionen addProduct;
water.addProduct();

// Viser item;
console.log(JSON.stringify(item));




// Nedarvning af Product: "Extras"
class Extras extends Product {
}
//Instantierer et produkt under klassen "Food"
let rice = new Extras ("Rice", 10, 30);

// Aktiverer funtionen addProduct;
rice.addProduct();

// Viser item;
console.log(JSON.stringify(item));




// Aktiverer funktionen removeProduct for water
//burger.removeProduct();

// Viser item;
//console.log(JSON.stringify(item));




