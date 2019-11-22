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



    // DiscountField defineres ud fra value i HTML, den er tom.
    var discountField=document.getElementById("discountCodeField").value;
    var totalPrice = 0;
    var discount=0;
    //var couponsUsed=0; skal evt. bruges til at prisen ikke overskrives hvis der allerede er aktiveret en rabatkode

    // Dette for-loop gennemgår arrayet i item for dets længde
    for (var x = 0; x < item.length; x++) {

        //Hvis der ikke indstastes en rabatkode udregnes samlet pris for kurven.

        if (discountField=="") {
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
        if (discountField=="burger10" && cheeseburger.productQuantity>0){
            document.getElementById("discountError").innerHTML=""
            discount=(cheeseburger.productQuantity*cheeseburger.productPrice)/10;
            console.log(discount);
            //totalPrice = item[x].product_Price + totalPrice;
            document.getElementById("activatedCoupons").innerHTML="Aktiverede rabatter" + "<br>" + "<b>Burger10:</b> Giver 10% rabat på din burger(e)"
        }

        if (discountField=="rice10" && rice.productQuantity>0) {
            document.getElementById("discountError").innerHTML=""
            discount=(rice.productQuantity*rice.productPrice)/10;
            console.log(discount);
            //totalPrice = item[x].product_Price + totalPrice;
            document.getElementById("activatedCoupons").innerHTML="Aktiverede rabatter" + "<br>" + "<b>rice10:</b> Giver 10% rabat på din ris"
        }

        if (discountField=="water10" && water.productQuantity>0){
            document.getElementById("discountError").innerHTML=""
            discount=(water.productQuantity*water.productPrice)/10;
            console.log(discount);
            //totalPrice = item[x].product_Price + totalPrice;
            document.getElementById("activatedCoupons").innerHTML="Aktiverede rabatter" + "<br>" + "<b>water10:</b> Giver 10% rabat på din vand"
        }

        if (discountField=="ALL10"){
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

function goToCustomerInfo() {
    if (item.length!==0){
    const currentPage=window.location="index.html";
    window.close(currentPage);
    const customerPage=window.location="Customer.html";
    window.open(customerPage);}
    else alert("Du skal købe noget makker");
}