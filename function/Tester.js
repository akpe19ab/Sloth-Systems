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
        console.log(JSON.stringify(item));

    }
    removeProduct() {
        this.productQuantity--;
        //Prøv at brug for/of loop.
        for (var x = 0; x < item.length; x++)

            if (item[x].product_ID === this.productID) {
                item.splice(x, 1);
                break; // Uden break(stopper for-loopet) vil for-loopet fortsætte efter, at der er blevet fjernet et produkt.
            }
        console.log(JSON.stringify(item));
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
    constructor(productName, productID, productPrice, initialProductQuantity, deliverySelected, deliveryTime, deliveryAddress, deliveryRegion, deliveryCity, deliveryComment) {
        super(productName, productID, productPrice, initialProductQuantity);
        this.deliverySelected = deliverySelected;
        this.deliveryTime = deliveryTime;
        this.deliveryAddress = deliveryAddress;
        this.deliveryRegion = deliveryRegion;
        this.deliveryCity = deliveryCity;
        this.deliveryComment = deliveryComment;
    }
}

let mapDelivery = new Map();

//Instantierer et produkt under klassen "Delivery"
let delivery = new Delivery("Levering", "1", "45", 0, null, null, null, null, null, null);


function deliveryMethodSelected() {
    let yesDelRadioBtn = document.getElementById('yes-delivery');
    let noDelRadioBtn = document.getElementById('no-delivery');

    if  (yesDelRadioBtn.checked === true && noDelRadioBtn.checked ===false ) {
        delivery.deliverySelected = true;
        document.getElementById('if-yes-delivery').style.visibility = 'visible';
        document.getElementById('if-no-delivery').style.visibility = 'visible';

    } else if (yesDelRadioBtn.checked === false && noDelRadioBtn.checked ===true) {
        delivery.deliverySelected = false;
        document.getElementById('if-no-delivery').style.visibility = 'visible';
        document.getElementById('if-yes-delivery').style.visibility = 'hidden';

    } else {
        delivery.deliverySelected = null;
    }
}

/*Funktionen "deliveryFee" vil tilføje leveringsgebyer, hvis man har trykket på "Vælg levering" hvormed "deliverySelected=true".
 Hvis man derimod trykker "hent selv" vil den igen fjerne leveringsgebyr, da "deliverySelected=false". */
function deliveryFee() {
    if (delivery.deliverySelected  === true) {
        delivery.addProduct();
        console.log(JSON.stringify(item)); // Dette er kun relevant for console.log
    } else if (delivery.productQuantity > 0 ) {
        //   } else if (delivery.productQuantity > 0 && delivery.deliverySelected  === false ) {
        delivery.removeProduct();
        console.log(JSON.stringify(item)); // Dette er kun relevant for console.log
    } else {
        delivery.productQuantity=0;
    }
}

function delMethodFunctions() {
    deliveryMethodSelected();
    deliveryFee();
    displayItems();
    calculateTotalPrice();
}
let noDelRadioBtn = document.getElementById('no-delivery');
let yesDelRadioBtn = document.getElementById('yes-delivery');
noDelRadioBtn.addEventListener("change", delMethodFunctions);
yesDelRadioBtn.addEventListener("change", delMethodFunctions);

/* Bad practise to attach event listeners in af for loop
https://gomakethings.com/why-you-shouldnt-attach-event-listeners-in-a-for-loop-with-vanilla-javascript/
let delRadioBtn = document.getElementsByClassName('select-delivery-method');
//For loop der knytter eventlisteners på radiobuttons
for(i = 0; i<delRadioBtn.length; i++){
    delRadioBtn[i].addEventListener('change', () => {
        deliveryMethodSelected();
        deliveryFee();
        displayItems();
        calculateTotalPrice();
    });
}
*/

//Validation of delivery information
function validateDeliveryInformation() {
    let objHours = document.getElementById("delivery_time-hours");
    let selectedHours  = objHours.options[objHours.selectedIndex].text;
    let objMin = document.getElementById("delivery_time-minutes");
    let selectedMinutes = objMin.options[objMin.selectedIndex].text;
    let deliveryTime = `${selectedHours}:${selectedMinutes}`;
    let address = document.getElementById("delivery_address").value;
    let region = document.getElementById("delivery_region").value;
    let city = document.getElementById("delivery_city").value;
    let comment = document.getElementById("delivery_comment").value;

    // Declaring variables to the HTML <p> elements with the validation error ID
    let paraValMethod = document.getElementById("validate-del-method");
    let paraValTime= document.getElementById("validate-del-time");
    let paraValComment = document.getElementById("validate-del-comment");
    let paraValAddress = document.getElementById("validate-address");
    let paraValRegion = document.getElementById("validate-region");
    let paraValCity = document.getElementById("validate-city");
    let paraDelRegistered = document.getElementById("delivery-registered");

    //Accessing value of radiobuttons - if delivery method has been selected
    let delRadioBtn = document.getElementsByClassName('select-delivery-method');
    let len = delRadioBtn.length;
    let radioInput = false;

    /*--------------Validate Information-------------------*/
//Validation of form
    let form_valid = true;
    let validation_message = "";

//Validation: deliveryMethod
    //checked property checks if a checkbox is checked or not
    for (i = 0; i < len; i++) {
        if (delRadioBtn[i].checked) {
            radioInput = true;
        }
    }
    /*if-else statement that controls whether the “radioInput” variable has been set = a radio button has been checked, or if no delivery method has been given.*/
    if (radioInput === false) {
        validation_message += "Please select delivery Method\n ";
        form_valid = false;
        paraValMethod.innerHTML = "Please select delivery Method";
    } else {
        paraValMethod.innerHTML = null;
    }

//Validation: deliveryTime
    let hoursIndex = objHours.selectedIndex;
    let minIndex = objMin.selectedIndex;
    if (delivery.deliverySelected !== null) {
        if (hoursIndex === 0 || minIndex === 0) {
            validation_message += "Please choose a valid delivery time\n ";
            form_valid = false;
            paraValTime.innerHTML = "Please choose a valid delivery time";
        } else {
            paraValTime.innerHTML = null;
        }
    }
//Validation: deliveryComment
    if (comment.length > 255) {
        paraValComment.innerHTML = "Overskrider maks på 255 antal tegn";
    } else {
        paraValComment.innerHTML = null;
    }

//Validation: deliveryAddress
    //Use if statement to check if an address has been typed:
    if (delivery.deliverySelected === true) {                             // Checking if delivery has been selected, else not relevant
        if (address === null || address === "") {
            validation_message += "Please fill out 'address'\n";
            form_valid = false;
            paraValAddress.innerHTML = "Please fill out address";
        } else {
            paraValAddress.innerHTML = null;
        }
    }

//Validation: deliveryRegion - lige nu har jeg både alert og .innerHTML der viser fejlteksten
    //Checking if the zipcode no. contains only numbers and is not blank. Using the NaN-function () (Not-a-Number) inside an if statement to determine whether or not the entered regionCode only contains numbers:
    if (delivery.deliverySelected === true) {                                           // ZIP code information only relevant if delivery has been selected
        if (region === "" || region === null) {       // ZIP code input is empty
            validation_message += "Please fill out 'ZIP code'\n";
            form_valid = false;
            paraValRegion.innerHTML = "Please fill out 'ZIP code'";

        } else if (isNaN(region)) {                                    // ZIP code must only contain numbers
            validation_message += "The ZIP code can only consist of numbers! \n";
            form_valid = false;
            paraValRegion.innerHTML = "The ZIP code can only consist of numbers!";

        } else if (region.length !== 4) {                              // ZIP code must consist of 4 digits
            validation_message += "ZIP code must contain of 4 digits'\n";
            form_valid = false;
            paraValRegion.innerHTML = "ZIP code must consist of 4 digits'";
        } else {
            paraValRegion.innerHTML = null;
        }
    }

//Validation: deliveryCity
    if (delivery.deliverySelected === true) {                                        // ZIP code information only relevant if delivery has been selected
        if (city === "" || city === null) {       // ZIP code input is empty
            validation_message += "Please fill out 'City'\n";
            form_valid = false;
            paraValCity.innerHTML = "Please fill out 'City'";

        } else if (!isNaN(city)) {                                    // ZIP code must only contain numbers
            validation_message += "City cannot contain numbers \n";
            form_valid = false;
            paraValCity.innerHTML = "City cannot contain numbers";

        } else {
            paraValCity.innerHTML = null;
        }
    }

    //Error in validation alert
    if (form_valid && delivery.deliverySelected === true) {
        //Alert if validation is approved
        //Using the alert function to show user entered the information
        //Behøves ikke alert - kan slettes
        paraDelRegistered.innerHTML="Leveringsoplysninger er gemt."

        alert("Leveringsmetode er blevet registreret:"
            + "\nAddress: " + address
            + "\nPost nr.: " + region
            + "\nLeveringstidspunkt/afhentningstidspunkt: " + deliveryTime
            + "\nEventuel kommentar: " + comment);
        let deliveryObj = new Delivery (
            delivery.productName,
            delivery.productID,
            delivery.productPrice,
            delivery.productQuantity,
            delivery.deliverySelected,
            deliveryTime,
            address,
            region,
            city,
            comment
        );

        console.log("Leveringsoplysninger er registreret");

        mapDelivery.set(delivery.productID, deliveryObj);
        console.log(mapDelivery);
        // console.log(JSON.stringify(mapDelivery));

    } else if (form_valid && delivery.deliverySelected === false) {
        alert("Oplysninger for afhentning af bestilling er blevet registreret:"
            + "\nLeveringstidspunkt/afhentningstidspunkt: " + deliveryTime
            + "\nEventuel kommentar: " + comment);

        paraDelRegistered.innerHTML="Leveringsoplysninger er gemt."

        let deliveryObj = new Delivery (
            delivery.productName,
            delivery.productID,
            delivery.productPrice,
            delivery.productQuantity,
            delivery.deliverySelected,
            deliveryTime,
            null,
            null,
            null,
            comment
        );
        console.log("Leveringsoplysninger er registreret");

        mapDelivery.set(delivery.productID, deliveryObj);
        console.log(mapDelivery);
        // console.log(JSON.stringify(mapDelivery));

    } else {
        alert(validation_message);
        return false;
    }
}

//Funktion der først tjekker om man har gemt oplysninger én gang
function submitDelInfo() {
    if (mapDelivery.size!==0) {
        alert("Oplysninger er allerede gemt. Tryk 'Rediger oplysninger', hvis du ønsker at ændre i de gemte oplysninger");
    } else {
        validateDeliveryInformation();
    }
}

//Eventlistener der aktiverer funktionen submitDelInfo når man trykker på knappen "gem oplysninger"
document.getElementById('submit-delivery-information').addEventListener("click", () => {
    submitDelInfo();
});





//Funktion der kan ændre oplysninger
function changeDeliveryInfo() {
    if (mapDelivery.delete("1")){
        mapDelivery.clear();
    } else {
        alert("Du har ikke gemt nogle oplysninger endnu");
    }
    console.log(mapDelivery);
}

//Eventlistener der aktiverer changeDeliveryInfo når der trykkes på knap "rediger"
document.getElementById('edit-delivery-information').addEventListener("click", () => {
    changeDeliveryInfo();
});





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
        document.getElementById("displayed_items").innerHTML += delivery.productQuantity + " X " + delivery.productName + " " + delivery.productPrice*delivery.productQuantity + " KR. " + "<br>";
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
    var discount = 0;
    //var couponsUsed=0; skal evt. bruges til at prisen ikke overskrives hvis der allerede er aktiveret en rabatkode

    // Dette for-loop gennemgår arrayet i item for dets længde
    for (var x = 0; x < item.length; x++) {

        //Hvis der ikke indstastes en rabatkode udregnes samlet pris for kurven.
        if (discountField==="") {
            totalPrice = item[x].product_Price + totalPrice;
        }

        //Hvis der indstastes noget udregnes prisen på hele kurven
        //Uden denne Else vil prisen blive 0 hvis man indtaster en ikke aktiv rabatkode, fordi ingen af if statements vil execute prisudregningen
        //Hvis der indtastes en kode giver den en fejlmeddelses, hvis et if statement nedenunder er sandt, overskriver det fejlmeddelsen
        else{
            totalPrice = item[x].product_Price + totalPrice;
            document.getElementById("activatedCoupons").innerHTML="";
            document.getElementById("discountError").innerHTML="Koden du har indtastet er ikke gyldig.";
        }

        //Hvis der indtastes noget i rabatkode feltet der matcher med en rabatkode udregnes discount.
        //Discount bliver udregnet og pga. ovenstående if/else har vi allerede udregnet totalPrice
        //Disse if statements "sletter" også else sætningens fejlmeddelelse.
        //Der findes 4 rabatkoder. 1. "burger10" 2. "rice10" 3. "water10" 4. "ALL10"
        if (discountField==="burger10" && cheeseburger.productQuantity>0){
            document.getElementById("discountError").innerHTML="";
            discount=(cheeseburger.productQuantity*cheeseburger.productPrice)/10;
            console.log(discount);
            //totalPrice = item[x].product_Price + totalPrice;
            document.getElementById("activatedCoupons").innerHTML="Aktiverede rabatter" + "<br>" + "<b>Burger10:</b> Giver 10% rabat på din burger(e)"
        }

        if (discountField==="rice10" && rice.productQuantity>0) {
            document.getElementById("discountError").innerHTML="";
            discount=(rice.productQuantity*rice.productPrice)/10;
            console.log(discount);
            //totalPrice = item[x].product_Price + totalPrice;
            document.getElementById("activatedCoupons").innerHTML="Aktiverede rabatter" + "<br>" + "<b>rice10:</b> Giver 10% rabat på din ris"
        }

        if (discountField==="water10" && water.productQuantity>0){
            document.getElementById("discountError").innerHTML="";
            discount=(water.productQuantity*water.productPrice)/10;
            console.log(discount);
            //totalPrice = item[x].product_Price + totalPrice;
            document.getElementById("activatedCoupons").innerHTML="Aktiverede rabatter" + "<br>" + "<b>water10:</b> Giver 10% rabat på din vand"
        }

        if (discountField==="ALL10"){
            document.getElementById("discountError").innerHTML="";
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




// Funktion der tjekker om man både har valgt varer OG har valgt leveringsmetode. Hvis sandt, så sendes man til betaling
function validateCart() {
    var cartValidated = true;
    try {
        if (item.length === 0 && delivery.deliverySelected===null && mapDelivery.size === 0 ) throw "Du skal lægge varer i kurven og vælge leveringsmetode";
        if (item.length !== 0 && delivery.deliverySelected===null) throw "Du skal vælge leveringsmetode";
        if (item.length === 1 && delivery.deliverySelected ===true && mapDelivery.size ===0) throw "Du kan ikke vælge levering uden at have varer i kurven.";
        if (item.length === 0 && delivery.deliverySelected ===false && mapDelivery.size ===0) throw "Du kan ikke vælge afhentning uden at have varer i kurven.";
        if (item.length === 1 && delivery.deliverySelected ===true && mapDelivery.size === 1 ) throw "Du kan ikke vælge levering uden at have lagt varer i kurven";
        if (item.length === 0 && delivery.deliverySelected ===false && mapDelivery.size === 1) throw "Du kan ikke vælge afhentning uden at have lagt varer i kurven";
        if (item.length >=1  && delivery.deliverySelected !==null && mapDelivery.size === 0 ) throw "Leverings/afhentningsoplysninger er ikke gemt";

    } catch (error) {
        alert("Hov - du kan ikke gå videre endnu: " + error);
        cartValidated = false;
    }
    if (cartValidated===true) {
        goToCustomerInfo();
    }
}

//Funktion der fører kunden videre til siden for udfyldning af kundeoplysninger
function goToCustomerInfo() {
    const currentPage=window.location="index.html";
    window.close(currentPage);
    const customerPage=window.location="Customer.html";
    window.open(customerPage);
}



//Eventlistener der kalder funktionen validateCart.
document.getElementById('order_button').addEventListener("click", () => {
    validateCart()
});


