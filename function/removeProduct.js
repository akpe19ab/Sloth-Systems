// https://www.w3schools.com/js/js_array_methods.asp

/* https://love2dev.com/blog/javascript-remove-from-array/
(Removing Array Items By Value Using Splice)  */


var item = [];

// addProduct(productName, productID, productPrice, productDescription) {

var productName = "Marcus"; // document.getElementByID("productName").value;
var productID = 124123; // document.getElementByID("productID").value;
var productPrice = 100; // document.getElementByID("productPrice").value;

var newProduct = {
    product_Name: null,
    product_ID: 0,
    product_Price: 0,

};

newProduct.product_Name = productName;
newProduct.product_ID = productID;
newProduct.product_Price = productPrice;


item.push(newProduct);

// }


var productName2 = "Sucram";
var productID = 124123;
var productPrice2 = 500;

var newProduct2 = {
    product_Name: null,
    product_ID: 0,
    product_Price: 0,
};

newProduct2.product_Name = productName2;
newProduct2.product_ID = productID;
newProduct2.product_Price = productPrice2;

item.push(newProduct2);


console.log(JSON.stringify(item))


///////////////////////////// RemoveProduct  //////////////////////////////


for (var x=0; x< item.length; x++)

    if (item.length=0){
        alert("Der er intet produkt, som kan fjernes fra ordren")
        } else {
        (item[x].product_ID === newProduct.product_ID) {
            item.splice(x, 1);
        }
    }

console.log(JSON.stringify(item))







