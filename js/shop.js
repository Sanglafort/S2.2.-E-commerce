// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

let cartList = []

var total = 0;


function checkQuantity() {
    for (let i = 0; i < cartList.length; i++) {
        let currentProduct = cartList[i];

        let found= false;

        // Si el producto está en el carrito, se cambia a encontrado (found = true) y se le añade 1 más a la cantidad (quantity + 1).
        for (j = 0; j < cart.length; j++) {
            if (cart[j].id === currentProduct.id) {
                cart[j].quantity++
                found = true;
                break;
            }
        }
        // Si no está añadido al carrito, se añade creando un nuevo objeto con todas la propiedades de products más la propiedad quantity: 1.
        if (!found) {
            let newCartItem = {
                id: currentProduct.id,
                name: currentProduct.name,
                price: currentProduct.price,
                type: currentProduct.type,
                quantity: 1,
            }
            cart.push(newCartItem);
        }
    }
    console.table(cart);
}


// Exercise 1
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array
function buy(id) {
    debugger
    for (let i = 0; i < products.length; i++) {
        if(products[i].id === id) {
            cartList.push(products[i]);
            console.log("Se ha añadido un producto al carrito.")
            calculateTotal(cartList);
        }       
    }
    checkQuantity()
    document.getElementById("count_product").innerHTML = cartList.length; 
}


// Exercise 2
function cleanCart() {
    cart = [];
    cartList = [];

    console.log("El carrito está vacío.");
    document.getElementById("count_product").innerHTML = cartList.length; 
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    total = 0;
    for (let i = 0; i < cartList.length; i++) {
        total += cartList[i].price;
    }
    console.log("El precio total es de $" + total);
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    
}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}