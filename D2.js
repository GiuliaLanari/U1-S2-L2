/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
{
  const num1 = 2;
  const num2 = 10;
  if (num1 > num2) {
    console.log("il numero più grande è", num1);
  } else if (num2 > num1) {
    console.log("il numero più grande è", num2);
  } else {
    ("i numeri hanno lo stesso valore!");
  }

  /* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
  const num3 = 3;
  if (num3 !== 5) {
    console.log("not egual");
  }

  /* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
  const num4 = 25;
  if (num4 % 5 === 0) {
    console.log("è perfetamente divisibile per 5");
  }

  /* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
  const num5 = 16;
  const num6 = 15;

  if (num5 === 8) {
    console.log("num5 è uguale a 8", num5 === 8);
  } else if (num6 === 8) {
    console.log("num6 è uguale a 8", num6 === 8);
  } else if (num5 + num6 === 8) {
    console.log("la somma è uguale a 8", num5 + num6 === 8);
  } else if (num5 - num6 === 8) {
    console.log("la sottrazione è uguale a 8", num5 - num6 === 8);
  } else {
    console.log("num5 e num6 non sono uguali a 8");
  }
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart = 40;
let spedizione = 10;
let totPay = totalShoppingCart + spedizione;

if (totalShoppingCart < 50) {
  console.log("spesa di spedizione aggiunta", totPay);
} else {
  console.log("le spese di spedizione sono gratis!", totalShoppingCart);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let totalShoppingCart2 = 80;
totalShoppingCart2 = totalShoppingCart2 * 0.8;
let spedizione2 = 10;
let totPay2 = totalShoppingCart2 + spedizione2;

if (totalShoppingCart2 > 50) {
  alert("spedizione gratuita!");
} else totalShoppingCart2 < 50;
{
  alert(totalShoppingCart2 + 10);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

const num7 = 50;
const num8 = 10;
const num9 = 5;

if (num7 >= num8) {
  if (num9 >= num7) {
    console.log(num9, num7, num8);
  } else {
    if (num9 >= num8) {
      console.log(num7, num9, num8);
    } else {
      console.log(num7, num8, num9);
    }
  }
} else {
  if (num9 >= num8) {
    console.log(num9, num8, num7);
  } else {
    if (num9 >= num7) {
      console.log(num8, num9, num7);
    } else {
      console.log(num8, num7, num9);
    }
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
const testo = "CIAO!";
if (testo === "nunber") {
  console.log("è un numero!");
} else {
  console.log("non è un numero!");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
const num10 = 400;
if (num10 % 2 === 0) {
  console.log("il numero è pari!");
} else "il numero è dispari!";

/* ESERCIZIO 10
Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
*/
let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop();
console.log(me);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
let myArry = [];
myArry.push(1);
myArry.push(2);
myArry.push(3);
myArry.push(4);
myArry.push(5);
myArry.push(6);
myArry.push(7);
myArry.push(8);
myArry.push(9);
myArry.push(10);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
myArry[9] = 100;
console.log(myArry);
