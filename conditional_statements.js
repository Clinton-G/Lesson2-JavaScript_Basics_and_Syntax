let user = {
    isLoggedIn: false,
    username: 'guest'
};

let cart = [];

let products = [
    {name: 'apple', price: 0.5},
    {name: 'green_bean', price: 0.5},
    {name: 'chips', price: 1.0},
    {name: 'pepsi', price: 2.5}
];

function displayProducts() {
    console.log('Available Products Are:');
    for (let product of products) {
        console.log(product.name + ' - $' + product.price);
    }
}

function addToCart(productName) {
    if (!user.isLoggedIn) {
        console.log('Must Be Logged In To Shop');
        return;
    }

    let product = products.find(p => p.name === productName);
    if (product) {
        cart.push(product);
        console.log(product.name, 'Has Been Added to the Cart.');
    } else {
        console.log('Product Not Found.');
    }
}

function calculateTotal() {
    let total = 0;
    for (let item of cart) {
        total += item.price;
    }
    console.log('Total Cost: ' + total.toFixed(2));
}

