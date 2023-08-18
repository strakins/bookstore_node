// Product constructor
function Product(name, price) {
    let itemname = name;   
    let itemprice = price; 

    this.getName = function() {
        return itemname;
    };

    this.getPrice = function() {
        return itemprice;
    };
}

// Shoppingcart constructor
function ShoppingCart() {
    let items = []; 

    this.addItem = function(product) {
        items.push(product);
    };

    this.removeItem = function(productName) {
        let indexToRemove = -1;
        for (let i = 0; i < items.length; i++) {
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
        let total = 0;
        for (let i = 0; i < items.length; i++) {
            total += items[i].getPrice();
        }
        return total;
    };

    this.getCartItems = function() {
        let cartItems = [];
        for (let i = 0; i < items.length; i++) {
            cartItems.push({
                name: items[i].getName(),
                price: items[i].getPrice()
            });
        }
        return cartItems;
    };
}

// Product Lists
const product1 = new Product("Sailor Specs", 200);
const product2 = new Product("Ramin Card", 310);
const product3 = new Product("Rolyce Royce", 120);
const product4 = new Product("Smart Table", 250);

let cart = new ShoppingCart();
cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product3);
cart.addItem(product4);

console.log("Initial Cart Items: ", cart.getCartItems());
console.log("Total Price: $",cart.getTotal());

cart.removeItem('Ramin Card');
console.log("Updated Cart Items: ", cart.getCartItems());
console.log("Upated Total Price: $",cart.getTotal());
