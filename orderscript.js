const orderQty = document.querySelectorAll(".qty");
const orderListDiv = document.getElementById("orderlist");
const items = {
    miso: { price: 250},
    frice: { price: 150},
    chashu: { price: 280},
    gyoza: { price: 130},
    kakita: { price: 250},
    katsu: { price: 290},
    onigiri: { price: 100},
    shoyu: { price: 250},
    dango: { price: 120},
}

function addDiv(menuDish, index) {
    const inputValue = orderQty[index].value.trim();
    if (inputValue === "") {
        alert("Please Insert Order Quantity!");
        return;
    }
    if (isNaN(parseInt(inputValue))) {
        alert("Invalid Quantity!");
        return;
    }

    const newDiv = document.createElement("div");
    newDiv.className = "card order";
    newDiv.innerHTML = "<h3 class='menu'>" + menuDish + "</h3><p class='amount'>Qty:" + inputValue + "</p>";
    orderListDiv.appendChild(newDiv);
}

let totalPrice = 0;

const buttons = document.querySelectorAll(".addOrder");
buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const itemName = button.getAttribute("data-item");
        const orderTotalPrice = parseInt(orderQty[index].value) * items[itemName].price;
        totalPrice += orderTotalPrice;

        document.getElementById("ordertotal").textContent = totalPrice;
    });
});

function payOrder() {
    const totalPrice = parseFloat(document.getElementById("ordertotal").textContent);
    const payment = parseFloat(document.getElementById("payment").value);
    const change = payment - totalPrice;
    if (isNaN(change) || change < 0) {
        alert('Not Enough Balance. Please try again.');
    } else {
        alert("Thanks for Ordering! Here's your " + change + " pesos Change.");
        window.location.reload();
    }
}