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












////////////////////////////////////////////////////////////////////////////////////////////////////////

//Optimering: javascript reduce dom access (ikke gjort endnu)
// Nedarvning af Product: "Delivery"
// HUSK - man skal ikke kumne vælge levering hvis ikke man har valgt produkter

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

}

//Instantierer et produkt under klassen "Delivery"
let delivery = new Delivery("Delivery", 15, 45, null, "", "", "");


/*Laver en funktion der sætter "deliverySelected" til true/False alt efter hvilken radiobutton man tjekker*/
function deliveryYesNo() {
    if (document.getElementById('yesDelivery').checked) {
        delivery.setdeliverySelected(true);
    } else {
        delivery.setdeliverySelected(false);
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
        document.getElementById('ifNoDelivery').style.visibility = 'visible';
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
    if (delivery.deliverySelected !== null) {
        if (hoursIndex === 0 || minIndex === 0) {
            validation_message += "Please choose a valid delivery time\n ";
            form_valid = false;
            document.getElementById("validationDelTime").innerHTML = "Please choose a valid delivery time";
        } else {
            document.getElementById("validationDelTime").innerHTML = null;
        }
    }

    //Error in validation alert
    if (form_valid && delivery.deliverySelected  === true) {
        //Alert if validation is approved
        //Using the alert function to show user entered the information

        alert("Leveringsmetode er blevet registreret:"
            +"\nAddress: " + delivery.deliveryAddress
            +"\nPost nr.: " + delivery.deliveryRegion
            +"\nLeveringstidspunkt/afhentningstidspunkt: " + delivery.deliveryTime
            +"\nEventuel kommentar: " + delivery.deliveryComment);

    } else if (form_valid && delivery.deliverySelected  === false) {
        alert("Oplysninger for afhentning af bestilling er blevet registreret:"
            +"\nLeveringstidspunkt/afhentningstidspunkt: " + delivery.deliveryTime
            +"\nEventuel kommentar: " + delivery.deliveryComment);
    } else {
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
//Eventlistener der kalder funktionerne for Delivery
document.getElementById("submitDeliveryInformation").addEventListener("click", () => {
    validateDeliveryInformation();
    showDelivery();
    setDeliveryInformation();

});


function showDelivery() {
    alert(JSON.stringify(delivery)); // Dette er kun relevant for console.log
}




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
        document.getElementById("displayed_items").innerHTML += delivery.productQuantity + " X " + delivery.productName + " " + delivery.productPrice*water.productQuantity + " KR. " + "<br>";
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
    document.getElementById("discount").innerHTML= "Rabat " + discount + " KR.";
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





