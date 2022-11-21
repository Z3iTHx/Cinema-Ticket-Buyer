const buyBtn = document.getElementsByClassName("buy-btn");
const addBtn = document.getElementsByClassName("add-btn");
const priceBox = document.getElementById("total-price");
const ticketBox = document.getElementsByClassName("ticket-box")
const ticketForm = document.getElementsByClassName("ticket-box-form");

buyBtn[0].addEventListener("click", showPrice);

function showPrice() {
    priceBox.innerHTML = "20$";
}

addBtn[0].addEventListener("click", addTicket);

function addTicket() {
    ticketBox.innerHTML += ticketForm;
}