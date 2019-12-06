// DeliveryInfo.js

// Formålet med at oprette klassen 'DeliveryInfo' er at definere hvilke attributter som "leveringsinformation" består af.
// Klassen defineres med en constructor med 6 properties der synes relevante for den ønskede funktion i programmet. /HG
class DeliveryInfo {
    // Definerer klassens constructor med properties. (Constructor funktion, 102), (this.-keyword s. 99)
    constructor(deliveryMethod, deliveryTime, deliveryAddress, deliveryRegion, deliveryCity, deliveryComment) {
        this.deliveryMethod = deliveryMethod;
        this.deliveryTime = deliveryTime;
        this.deliveryAddress = deliveryAddress;
        this.deliveryRegion = deliveryRegion;
        this.deliveryCity = deliveryCity;
        this.deliveryComment = deliveryComment;}

    // Der deklareres unikke metoder for 'DeliveryInfo'-klassen, der kaldes i funktionen validateDeliveryInformation().
    // Formålet er at brugeren får en alert, når de indtastede oplysninger er valideret og registreret.
    // Metoden anvender alert til at vise dialogbox med en string om at leveringsinfo er registreret samt værdierne
    // bundet til de respektive attributter. /HG
    deliveryInfoSucced(){
        alert("Leveringsoplysninger er blevet registreret:"
            + "\n Leveringsmetode: " + this.deliveryMethod
            + "\n Leveringstidspunkt: " + this.deliveryTime
            + "\n Adresse: " + this.deliveryAddress
            + "\n Post nr.: " + this.deliveryRegion
            + "\n By: " + this.deliveryCity
            + "\n Evt. kommentar til levering: " + this.deliveryComment
        );
    }

    // Metode der virker på samme måde som deliveryInfoSucced().
    // Formålet er at der kun skal vises nødvendig info ved valg af "Afhentning" som leveringsmetode. (uden addresse, post nr. by)/HG
    pickUpInfoSucced() {
        alert("Oplysninger for afhentning af bestilling er blevet registreret:"
            + "\n Leveringsmetode: " + this.deliveryMethod
            + "\n Afhentningstidspunkt: " + this.deliveryTime
            + "\n Evt. kommentar til levering: " + this.deliveryComment
        );
    }
}

// Deklarerer et array med formålet at have en let data struktur til at opbevare og tilgå registrerede
// leveringsoplysninger. Dermed bruges et array til senere hen at opbevare en instantiering af et deliveryInfo-objekt.
// Når en kunde har registreret korrekte oplysninger gemmes oplysningerne som properties til et nyt
// delivery-objekt der pushes til arrayet./HG
var savedDelivery = [];


// Deklaration af funktion med formål at validere leveringsoplysninger i form-felterne i HTML-dokumentet.
// Definerer variable ud fra DOM inputfelter, der påkræves at være udfyldt med leverings/afhentningsoplysninger.
// Anvender conditional statement for at kontrollere at felterne er korrekt udfyldt.
// Hvis hele formen er 'true' instantieres et nyt objekt med de valide informationer, der gemmes i Map defineret tidligere.
// !!!! Lige nu er der både en alert + fejlmeddelselser vises i HTML vha. DOM-metode .innerHTML./HG                                ****

function validateDeliveryInformation() {
    // Anvender DOM-properties (.options, .selectedIndex, .text, .value) for at tilgå værdierne i input-felterne.
    // Disse bindes til en variabel og bruges til validation./HG
    let objHours = document.getElementById("delivery_time-hours");
    let selectedHours  = objHours.options[objHours.selectedIndex].text;
    let objMin = document.getElementById("delivery_time-minutes");
    let hoursIndex = objHours.selectedIndex;
    let minIndex = objMin.selectedIndex;
    let selectedMinutes = objMin.options[objMin.selectedIndex].text;
    let deliveryTime = `${selectedHours}:${selectedMinutes}`;
    let address = document.getElementById("delivery_address").value;
    let region = document.getElementById("delivery_region").value;
    let city = document.getElementById("delivery_city").value;
    let comment = document.getElementById("delivery_comment").value;

    // Variable bindes til DOM-paragraffer for visning af respektiv fejlmeddelelse. /HG
    let paraValMethod = document.getElementById("validate-del-method");
    let paraValTime= document.getElementById("validate-del-time");
    let paraValComment = document.getElementById("validate-del-comment");
    let paraValAddress = document.getElementById("validate-address");
    let paraValRegion = document.getElementById("validate-region");
    let paraValCity = document.getElementById("validate-city");

    // Variabel bindes til DOM-element for paragraf, hvor meddelelse vises, når levering er registreret korrekt. /HG
    let paraDelRegistered = document.getElementById("delivery-registered");

    // Definerer variablen delRadioBtn der bindes til radiobuttons-noderne vha. DOM-metoden querySelectorAll().                           // querySelectorAll,322
    // delRadioBtn er en NodeList der indeholder to objekter for hver radiobtn-node. Formålet er, at Radiobtns .checked                    // NodeList, 227
    // property skal tilgås, for at validere om leveringsmetode er blevet valgt.
    // NodeList property .length anvendes for at returnere antallet af items i delRadioBtn. /HG
    let delRadioBtn = document.querySelectorAll("[name=delivery-methods]");
    console.log(delRadioBtn);
    let len = delRadioBtn.length;
    let radioInput = false;

// Validation af hele leverings/afhentningsformen
    // Deklarerer variblen 'formValid' der bruges til at validere formen for leverings/oplysninger som kunde har indtastet.
    // Værdien defineres til boolsk udtryk 'true' som initiel værdi. Hvis if-statement fanger fejl vil den ændres til "false"
    // Hvis formValids boolske værdi er 'false' betyder det, at én eller flere felter, som kunde skal udfylde,
    // ikke er udfyldt korrekt, hvormed fejlbesked vil blive alerted. Alle fejl gemmes i validationMessage. Hvis formValid
    // er true er alle påkrævede felter udfyldt korrekt og de gemmes som et instantieret objekt i deliverySaved-array'et. /HG
    let formValid = true;
    let validationMessage = "";

// Validation af leveringsmetode
    // For-loop med formål at undersøge om kunde har valgt leveringsmetode og dermed om radiobtns er checked.
    // Itererer gennem hver node i Nodelist. Bruger DOM-attributten .checked på hvert index i for-loop,
    // til at for hver radiobtn undersøge om den er checked eller ej.
    // Bruger variabel deklareret til en boolsk værdi der sættes til 'true' hvis én radiobtn er checked, og 'false' hvis ikke. /HG

    // Alternativt kunne have brugt 'delivery.deliverySelected' som er defineret i funktionen deliveryMethodSelected().**
    for (var i = 0; i < len; i++) {
        if (delRadioBtn[i].checked) {
            radioInput = true;
        }
    }
    // if-else statement der anvender boolean værdi til at kontrollere om radiobtn er blevet checked.
    // Hvis false er ingen radiobutton blevet valgt.
    // Anvender DOM-property .innerHTML til at sætte værdien af den respektive paragraf til validation af leveringsmetode.
    // Hvis leveringsmetode er valgt og radioInput er true skrives der ingen fejlmeddelelse i HTML-dokument. /HG
    if (radioInput === false) {
        validationMessage += "Du skal vælge leveringsmetode\n ";
        formValid= false;
        paraValMethod.innerHTML = "Vælg leveringsmetode";
    } else {
        paraValMethod.innerHTML = null;
    }

// Anvender nested if-else, da validation af leverings/afhentningstid og kommentar kun skal eksekveres
// hvis kunde har valgt leveringsmetode, men skal gælde for både valg af 'levering' og 'afhentning'.
// Det nestede if-statement vil kun eksekvere hvis boolean er 'true'. /HG
    if (radioInput === true) {

// Validation: Leverings/afhentningstid
        // Anvender DOM property .selectedIndex for at undersøge om der er valgt et element i drop-down list.
        // Logisk OR-operator anvendes til at kontrollere at der er valgt 'timer' og 'minutter', dvs. begge drop-down
        // lister har en selected option. Hvis 'false', vises fejlmeddelelse vha. Element-property .innerHTML. /HG
        if (hoursIndex === 0 || minIndex === 0) {
            validationMessage += "Du skal vælge et gyldigt leverings/afhentningstidspunkt\n";
            formValid = false;
            paraValTime.innerHTML = "Vælg gyldigt leverings/afhentningstidspunkt";
        } else {
            paraValTime.innerHTML = null;
        }

// Validation: comment
        // If-statement der anvender relational operator til at undersøge om input i kommentarfelt overskrider
        // max antal tegn. Kommentaren er en string der derfor kaldes med metoden .length for at kontrollere længde.
        if (comment.length > 255) {
            paraValComment.innerHTML = "Overskrider maks på 255 antal tegn";
        } else {
            paraValComment.innerHTML = null;
        }
}

// Nested if-else statement anvendes da addresse, post nr. og by kun er påkrævet hvis "levering" er valgt.

// Validation: leveringsaddresse
    // if-statement kontrollerer at delivery-objektets deliverySelected attribut er 'true' hvormed 'levering' er blevet valgt.
    // Indre if-stament tjekker om feltet for addresse er blevet udfyldt korrekt.
    // For at kontrollere at der ikke kun er indtastet white spaces anvendes string metoden trim() på variablen
    // 'address' der binder en string. Bruger dernæst identity operator for at checke om den efter trim er en empty.
    if (delivery.deliverySelected === true) {
        if (address === null || address === "" || address.trim()==="") {                                           // Den kontrollerer ikke hvis man skriver mellemrum
            validationMessage += "Du skal indtaste addresse\n";                                                    // Dette er løst vha. trim(). /HG
            formValid = false;
            paraValAddress.innerHTML = "Udfyld addressefelt";
        } else {
            paraValAddress.innerHTML = null;
        }

// Validation: post nr.
         // Kontrollerer at felt er udfyldt, som ovenfor.
        if (region === "" || region === null || region.trim()==="") {
            validationMessage += "Du mangler at udfylde post nr.\n";
            formValid = false;
            paraValRegion.innerHTML = "Udfyld post nr.";

        // Kalder isNaN-funktionen i et if statement for at kontrollere at der kun er indtastet
        // tal da post nr kun kan bestå af tal.
        } else if (isNaN(region)) {
            validationMessage += "Post nr. kan kun bestå af tal\n";
            formValid = false;
            paraValRegion.innerHTML = "Post nr. kan kun bestå af tal";


        // Post nr. kan kun bestå af 4 cifre
        } else if (region.length !== 4) {
            validationMessage += "Post nr. skal bestå af 4 cifre\n";
            formValid = false;
            paraValRegion.innerHTML = "Post nr. skal bestå af 4 cifre";
        } else {
            paraValRegion.innerHTML = null;
        }

// Validation: by
        // Kontrollerer felt ikke er tomt
        if (city === "" || city === null || city.trim()==="") {
            validationMessage += "Du skal udfylde by\n";
            formValid = false;
            paraValCity.innerHTML = "Udfyld by";

        // Anvender not-operator på isNaN-funktionen der skal kontrollere at der ikke er indtastet et tal
        // !!!!virker ikke optimalt =>  KUN hvis der udelukkende indtastet et tal.
        } else if (!isNaN(city)) {
            validationMessage += "By kan ikke indeholde tal\n";
            formValid = false;
            paraValCity.innerHTML = "By kan ikke indeholde tal";

        } else {
            paraValCity.innerHTML = null;
        }
    }

// Validation af leverings/afhentningsformen
    // Kontrollerer om både formValid er true og at der er valgt 'levering' vha. logisk AND-operator.
    // Hvis alle felter er udfyldt korrekt og der er valgt 'levering' instantieres nyt delivery-objekt med
    // de indtastede oplysninger.
    if (formValid && delivery.deliverySelected === true) {
        let deliveryObj = new DeliveryInfo(
            "Levering",
            deliveryTime,
            address,
            region,
            city,
            comment
        );
        // Anvender .push for at tilføje det instantierede deliveryObj til savedDelivery-arrayet.
        savedDelivery.push(deliveryObj);

        // Gemmer savedDelivery-array med deliveryObj-objektet i sessionStorage og printer array i konsol for kontrol.
        sessionStorage.setItem("deliveryInformation", JSON.stringify(savedDelivery));
        console.log(JSON.parse(sessionStorage.getItem("deliveryInformation")));


        // Kalder Delivery-klassens metode der alerter de registrerde leveringsoplysninger, hvis validation
        // er approved.
        deliveryObj.deliveryInfoSucced();

        // Bekræftelse på leveringsoplysninger er registreret skrives i HTML-paragraf.
        paraDelRegistered.innerHTML="Leveringsoplysninger er gemt.";
        console.log("Leveringsoplysninger er registreret");

        // else if der nu tjekker om der er valgt 'afhentning'. Der sker det samme som ovenstående.
        // De validerede oplysninger defineres dog til attributterne af et pick-up objekt
        // der også er en instanitering af DeliveryInfo-klassen. Addresse, post nr, og by gemmes ikke.
    } else if (formValid && delivery.deliverySelected === false) {
        // Instanitering af DeliveryInfo-objekt med afhentningsoplysninger
        let pickupObj = new DeliveryInfo (
            "Afhentning",
            deliveryTime,
            "",
            "",
            "",
            comment
        );
        // Pusher det nye instantierede objekt til savedDelivery-array.
        savedDelivery.push(pickupObj);

        // Gemmer savedDelivery-array med pickupObj-objektet i sessionStorage for at oplysninger kan tilgås
        // i ordrebekræftelse. Printer array i konsol for kontrol.
        sessionStorage.setItem("deliveryInformation", JSON.stringify(savedDelivery));
        console.log(JSON.parse(sessionStorage.getItem("deliveryInformation")));

        // Kalder Delivery-metode til alert af registrerede oplysninger
        pickupObj.pickUpInfoSucced();

        // Bekræftelse på afhentningsoplysninger er registreret skrives i HTML-paragraf.
        paraDelRegistered.innerHTML="Leveringsoplysninger er gemt.";
        console.log("Leveringsoplysninger er registreret");

        // Else-statement der eksekveres hvis form ikke er valideret.
        // Alert med fejlbeskeder gemt i 'validationMessage'.
        // Fejlbesked i HTML-dokument om at leveringsoplysninger ikke er gemt.
    } else {
        alert(validationMessage);
        paraDelRegistered.innerHTML="Leveringsoplysninger er ikke gemt!!!.";
        return false
    }
}


// Funktion der først tjekker om man har gemt oplysninger én gang, så der kun gemmes ét objekt med oplysninger
// i savedDelivery-array.
function submitDeliveryInfo() {
    if (savedDelivery.length!==0) {
        alert("Oplysninger er allerede gemt. Tryk 'Rediger oplysninger', hvis du ønsker at ændre i de gemte oplysninger");
        console.log("Rediger oplysninger er valgt")
    }   else {
        validateDeliveryInformation();
    }
}

// Funktion der kan ændre i gemte oplysninger ved at slette det gemte objekt i array. Formålet er, at
// kunde kan redigere, hvis der var skrevet forkerte oplysninger og der kun gemmes ét korrekt objekt i array'et.
function changeDeliveryInfo() {
    let paraDelRegistered = document.getElementById("delivery-registered");

    // If-statement der skal tjekke om der i forvejen er gemt et objekt. Anvender .length-property.
    // Hvis 'true' har kunden tidligere gemt oplysninger, og det gemte objekt slettes vha. .splice-metoden.
    // Udnytter arrayets mutability (Haverbakee, s. 63-64)
    if (savedDelivery.length===1) {
        savedDelivery.splice(0,1);
        paraDelRegistered.innerHTML="Leveringsoplysninger er ikke gemt.";

    // else-statement, der eksekveres, hvis der ikke er gemt et delivery-objekt i arrayet.
    } else {
        alert("Du har ikke gemt nogle oplysninger endnu");
    }
    // Printer det gemte array i konsollen for kontrol.
    console.log(savedDelivery);
}

// Eventlistener der kalder funktionen submitDelInfo() når man trykker på knappen "gem oplysninger".
document.getElementById('submit-delivery-information').addEventListener("click", () => {
    submitDeliveryInfo();
});

// Eventlistener der kalder changeDeliveryInfo() når der trykkes på knap "rediger".
document.getElementById('edit-delivery-information').addEventListener("click", () => {
    changeDeliveryInfo();
});





