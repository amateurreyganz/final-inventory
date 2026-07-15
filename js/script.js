 let total = 0;
let items = 0;

function addProduct(name, price){

    const cart = document.getElementById("cart");

    const li = document.createElement("li");

    li.innerHTML = `${name} - ₱${price}`;

    cart.appendChild(li);

    total += price;
    items++;

    document.getElementById("total").innerHTML = total;
    document.getElementById("sales").innerHTML = total;
    document.getElementById("items").innerHTML = items;
}