
// Formålet med at oprette 'Order'-klassen er at definere hvilke attributter (informationer) som en "ordre" består af.
// Orderklassen anvendes, når kunde har bekræftet betaling og dermed placerer sin ordre.
// Klassen defineres med en constructor med 3 properties der synes relevante for den ønskede funktion i programmet. /HG
class Order {
    constructor(orderID, orderDate, totalPrice, orderItems) {
        this.orderID = orderID;
        this.orderDate = orderDate;
        this.totalPrice = totalPrice;
        this.orderItems = orderItems;
    }
    // Metode der laver en alert med de definerede property-values når kunden bekræfter sin betaling.
    orderConfirmation() {
        alert(`Tak for din bestilling!
            Dato for bestilling: ${this.orderDate}
            Ordre-ID: ${this.orderID}
            Total pris: ${this.totalPrice} kr.`);
    }
}

// Denne funktion kaldes af saveCreditCard() (i Payment.js) og sørger for at slutbrugeren avancerer i vores flow. MB
function acceptOrder() {
    var popUp= window.open("","_self");

// Ordrebekræftelse, der henter de gemte værdier fra sessionStorage ud fra de respektive keys og deres værdier.
    let customerInfo = JSON.parse(sessionStorage.getItem("customerInformation"));
    let deliveryInfo = JSON.parse(sessionStorage.getItem("deliveryInformation"));
    let orderItems=JSON.parse(sessionStorage.getItem("itemInformation"));
    let totalPrice = JSON.parse(sessionStorage.getItem("totalOrderPrice"));
    let now = new Date();
    let orderDate = `${now.getDate()}/${now.getMonth()+1}-${now.getFullYear()}`;
    let orderID = customerInfo[0]["customer_ID"];
    let name = customerInfo[0]["customer_Name"];
    let email = customerInfo[0]["customer_Mail"];
    let phone = customerInfo[0]["customer_Number"];
    let dispatchType = deliveryInfo[0]["deliveryMethod"];
    let time = deliveryInfo[0]["deliveryTime"];
    let comment = deliveryInfo[0]["deliveryComment"];
    let address = deliveryInfo[0]["deliveryAddress"];
    let region = deliveryInfo[0]["deliveryRegion"];
    let city = deliveryInfo[0]["deliveryCity"];

    // Ordrebekræftelse der viser info fra tester.js, delivery.js, customer.js
    // Der er dog ikke selve produkterne, for hvad kunde har købt //HG
    popUp.document.write(`
    <br>Hej ${name}. Tak for din ordre! 
    <br> Dette er din ordrebekræftelse på din bestilling:<br>
    <br>Dato for bestilling: ${orderDate}
    <br>Ordre-ID: ${orderID}
    <br>Leveringsmetode: ${dispatchType}
    <br>Tidspunkt for levering/afhentning: ${time}
    <br>E-mail: ${email}
    <br>Telefonnr.: ${phone}
    <br>Evt. kommentar til bestilling: ${comment}
    <br>Leveringsaddresse: ${address}, ${region}, ${city}. 
    `);

    // Instantierer nyt objekt fra Order-klassen, der bruges til at lave en ordrebekræftelse.
    let order = new Order(
        orderID,
        orderDate,
        totalPrice,
        orderItems
    );

    // Kalder metode fra Order-klassen, der alerter oplysninger på ordre.
    order.orderConfirmation();
    console.log(order.orderItems);

    // Her kaldes en ny funktion dette sker hver gang acceptOder() executer men jeg har valgt at splitte op i 2
    // funktioner for overskueligheds skyld
    // set timeout forsinker kaldet til den nye funktion sådan at vi kan fremvise ovenstående strings
    // hvis der ikke er timeout går det så hurtigt at man ikke lægger mærke til det
    setTimeout(redirectToFrontPage,300000);
}

// Laver en "cirkelslutning" sådan at vi kommer tilbage til vores forside "index.html" når betalingen er gennemført
// og i den virkelige verden en kunde vil være færdig med at bruge vores hjemmeside.
function redirectToFrontPage() {
    var frontPage=window.location="index.html";
    window.open(frontPage);
}

