// Product constructor
function Product(name, price) {
    var itemname = name;   // Private property
    var itemprice = price; // Private property

    this.getName = function() {
        return itemname;
    };

    this.getPrice = function() {
        return itemprice;
    };
}

// ShoppingCart constructor
function ShoppingCart() {
    var items = []; // Private property

    this.addItem = function(product) {
        items.push(product);
    };

    this.removeItem = function(productName) {
        var indexToRemove = -1;
        for (var i = 0; i < items.length; i++) {
            if (items[i].getName() === productName) {
                indexToRemove = i;
                break;
            }
        }
        if (indexToRemove !== -1) {
            items.splice(indexToRemove, 1);
        }
    };

    this.getTotal = function() {
        var total = 0;
        for (var i = 0; i < items.length; i++) {
            total += items[i].getPrice();
        }
        return total;
    };

    this.getCartItems = function() {
        var cartItems = [];
        for (var i = 0; i < items.length; i++) {
            cartItems.push({
                name: items[i].getName(),
                price: items[i].getPrice()
            });
        }
        return cartItems;
    };
}

// Usage
const product1 = new Product("Sailor Specs", 200);
const product2 = new Product("Ramin Card", 310);
const product3 = new Product("Rolyce Royce", 120);

var cart = new ShoppingCart();
cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product3);

console.log("Initial Cart Items:", cart.getCartItems());
console.log("Total Price:", cart.getTotal());

cart.removeItem('Ramin Card');
console.log("Updated Cart Items:", cart.getCartItems());
console.log("Total Price:", cart.getTotal());
