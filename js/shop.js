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
    cart = [];

    for (let i = 0; i < cartList.length; i++) {
        let currentProduct = cartList[i];

        let productIndex = cart.findIndex((product) => product.id === currentProduct.id)
        // console.log(productIndex);

        if (productIndex === -1) {
            currentProduct.quantity = 1
            cart.push(currentProduct)
        } else {
            cart[productIndex].quantity += 1
        }
    }
    console.table(cart);
}


// Exercise 1
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array
function buy(id) {
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

    console.clear()
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
    applyPromotionsCart();
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    for (let i = 0; i < cart.length; i++) {
        let product = cart[i];

        if (product.hasOwnProperty("offer") && product.quantity >= product.offer.number) {
            product.subtotalWithDiscount = product.quantity * product.price * (product.offer.percent/100);
            total -= product.subtotalWithDiscount;
     
            console.log(`-> El descuento por "${product.name}" es de $` + product.subtotalWithDiscount.toFixed(2));
        } else {
            product.subtotalWithDiscount = 0;
        }   
    }
}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    let printedCart = [];
    
    for (let i = 0; i < cart.length; i++) {
        let product = cart[i];

        let discount = (product.price * product.quantity) - product.subtotalWithDiscount;

        printedCart.push(
            `<tr>
				<th>${product.name}</th>
				<td>${product.price.toFixed(2)}</td>
				<td>${product.quantity}</td>
				<td>${discount}</td>
                <td><a type="button" onclick="removeFromCart(${product.id})"><i class="fa fa-trash" aria-hidden="true"></i></a></td>
			</tr>`
        );
    }
    document.getElementById("cart_list").innerHTML = printedCart.join("");

    document.getElementById("total_price").innerHTML = total.toFixed(2);

}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}