//  https://codereview.stackexchange.com/questions/168814/shopping-cart-in-pure-javascript


var item = [];

// addProduct(productName, productID, productPrice) {

var productName = "Marcus"; //document.getElementByID("productName").value;
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
//  }

console.log(item)


