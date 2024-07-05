
var qty1 = document.getElementById("qty1");
var price1 = document.getElementById("price1");

var qty2 = document.getElementById("qty2");
var price2 = document.getElementById("price2");

var qty3 = document.getElementById("qty3");
var price3 = document.getElementById("price3");

var qty4 = document.getElementById("qty4");
var price4 = document.getElementById("price4");

var qty5 = document.getElementById("qty5");
var price5 = document.getElementById("price5");

var qty6 = document.getElementById("qty6");
var price6 = document.getElementById("price6");

var carts = document.getElementById("carts");
var total = document.getElementById("total");
var cash = document.getElementById("cash");
var change = document.getElementById("change");

function calculateOrder() {
    carts.textContent = "";
    var totalPrice = 0;

    if (parseFloat(qty1.value) > 0) {
        var order = qty1.value.toString() + ' pcs x ' + price1.textContent + ' ----- ' + product1.textContent + ' ----- Php ' + (parseFloat(qty1.value) * parseFloat(price1.textContent)) + '\n';
        carts.textContent += order;
        totalPrice += parseFloat(qty1.value) * parseFloat(price1.textContent);
    }

    if (parseFloat(qty2.value) > 0) {
        var order = qty2.value.toString() + ' pcs x ' + price2.textContent + ' ----- ' + product2.textContent + ' ----- Php ' + (parseFloat(qty2.value) * parseFloat(price2.textContent)) + '\n';
        carts.textContent += order;
        totalPrice += parseFloat(qty2.value) * parseFloat(price2.textContent);
    }

    if (parseFloat(qty3.value) > 0) {
        var order = qty3.value.toString() + ' pcs x ' + price3.textContent + ' ----- ' + product3.textContent + ' ----- Php ' + (parseFloat(qty3.value) * parseFloat(price3.textContent)) + '\n';
        carts.textContent += order;
        totalPrice += parseFloat(qty3.value) * parseFloat(price3.textContent);
    }

    if (parseFloat(qty4.value) > 0) {
        var order = qty4.value.toString() + ' pcs x ' + price4.textContent + ' ----- ' + product4.textContent + ' ----- Php ' + (parseFloat(qty4.value) * parseFloat(price4.textContent)) + '\n';
        carts.textContent += order;
        totalPrice += parseFloat(qty4.value) * parseFloat(price4.textContent);
    }

    if (parseFloat(qty5.value) > 0) {
        var order = qty5.value.toString() + ' pcs x ' + price5.textContent + ' ----- ' + product5.textContent + ' ----- Php ' + (parseFloat(qty5.value) * parseFloat(price5.textContent)) + '\n';
        carts.textContent += order;
        totalPrice += parseFloat(qty5.value) * parseFloat(price5.textContent);
    }

    if (parseFloat(qty6.value) > 0) {
        var order = qty6.value.toString() + ' pcs x ' + price6.textContent + ' ----- ' + product6.textContent + ' ----- Php ' + (parseFloat(qty6.value) * parseFloat(price6.textContent)) + '\n';
        carts.textContent += order;
        totalPrice += parseFloat(qty6.value) * parseFloat(price6.textContent);
    }

    total.value = totalPrice.toFixed(2); 
}


qty1.addEventListener("keyup", calculateOrder);
qty2.addEventListener("keyup", calculateOrder);
qty3.addEventListener("keyup", calculateOrder);
qty4.addEventListener("keyup", calculateOrder);
qty5.addEventListener("keyup", calculateOrder);
qty6.addEventListener("keyup", calculateOrder);

cash.addEventListener("keyup", function () {
    var cashAmount = parseFloat(cash.value);
    var totalAmount = parseFloat(total.value);

    if (!isNaN(cashAmount) && !isNaN(totalAmount)) {
        var changeAmount = cashAmount - totalAmount;
        change.value = changeAmount.toFixed(2);
    } else {
        change.value = ""; 
    }
});