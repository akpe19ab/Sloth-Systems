//
//Declaring the Product class and the class properties
class Product {
    constructor(productName,productID,productPrice,productDescription) {
        this.productName = productName;
        this.productID = productID;
        this.productPrice = productPrice;
        this.productDescription = productDescription;
    }

    getproductName () {
        return this.productName;
    }

    getproductID () {
        return this.productID;
    }

    getproductPrice () {
        return this.productPrice;
    }

    getproductDescription () {
        return this.productDescription;
    }

}

// Nedarvning af Product: "Food"

class Food extends Product {
}
//Instantierer et produkt under klassen "Food"

let burger = new Food ("Burger", 02, 45, "Lækker burger");


//console.log for at teste
console.log(burger.getproductName());
console.log(burger.getproductID());
console.log(burger.getproductPrice());
console.log(burger.getproductDescription());




// Nedarvning af Product: "Drinks"
class Drinks extends Product {
}
//Instantierer et produkt under klassen "Food"

let water = new Drinks ("Water", 05, 20, "Mineralvand");

//console.log for at teste
console.log(water.getproductName());
console.log(water.getproductID());
console.log(water.getproductPrice());
console.log(water.getproductDescription());






// Nedarvning af Product: "Extras"
class Extras extends Product {
}
//Instantierer et produkt under klassen "Food"
let rice = new Extras ("Rice", 10, 30, "Ekstra ris");

//console.log for at teste
console.log(rice.getproductName());
console.log(rice.getproductID());
console.log(rice.getproductPrice());
console.log(rice.getproductDescription());




// Nedarvning af Product: "Delivery"
class Delivery extends Product {
    constructor(selectDelivery,deliveryFee,deliveryID,deliveryRegion,deliveryTime) {
        super();
        this.selectDelivery = selectDelivery;
        this.deliveryFee = deliveryFee;
        this.deliveryID = deliveryID;
        this.deliveryRegion = deliveryRegion;
        this.deliveryTime = deliveryTime;

    }

    getselectDelivery () {
        return this.selectDelivery;
    }

    getdeliveryFee () {
        return this.deliveryFee;
    }

    getdeliveryID () {
        return this.deliveryID;
    }

    getdeliveryRegion () {
        return this.deliveryRegion;
    }
    getdeliveryTime () {
        return this.deliveryTime;
    }

}
//Instantierer et produkt under klassen "Food"

let delivery = new Delivery("Yes", 50, "Gadenavn nr 2", 2400, "12:05");

//console.log for at teste
console.log(delivery.getselectDelivery());
console.log(delivery.getdeliveryFee());
console.log(delivery.getdeliveryID());
console.log(delivery.getdeliveryRegion());
console.log(delivery.getdeliveryTime());

