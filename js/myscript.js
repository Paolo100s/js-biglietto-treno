// variabili
let km, age, price, totalPrice;
const priceKm = 0.21;

// km da percorrere
km = parseInt (prompt ("Quanti km percorrerai?"));

// età del passeggero
age = parseInt (prompt ("Quanti anni hai?"));

// prezzo in base ai km
price = (km * priceKm);

// eventuale sconto
if (age < 18) {
    totalPrice = price - (price / 100 * 20);
} else if (age > 65) {
    totalPrice = price - (price / 100 * 40);
} else {
    totalPrice = price
}

// prezzo finale
message = 
`
${totalPrice.toFixed(2)} ${"€"}
`

// output
document.getElementById("biglietto").innerHTML = "Il prezzo del biglietto è " + message