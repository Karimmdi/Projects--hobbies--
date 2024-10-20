// let x;
// // Array Literal:
// const number = [12, 15, 33, 48,39];



// // Array  constractor:
// const fruits = new Array('Banan', 'Apple', 'Orange','pinapple');


// x = number[0];
// x = `My favorite fruit is ${fruits[3]}`
// x = fruits;
// fruits[2] = 'pear';
// fruits[fruits.length] = 'bluberry';


// console.log(x);





// // Array Methods:
// let z;
// const arr = [30, 60, 76, 98, 200];
// // arr.push(100); // lisää yhden elementin array;n loppun

// // arr.pop() // poistaa yhden elementin veemeisessa indeksissa

// // arr.unshift(99); // lisää tuo 99 tohon ensimmäiseen eli "0"  indeksin paikalla.

// // arr.shift(); // tämä poista tuo 99 "0" indeksista

// // arr.reverse(); // nimensä mukaan kääntä array elementit päikseen. 

// z = arr.includes(20); //tarkistaa onko luku "20" array:ssa

// z = arr.indexOf(76); // nyt kun on käytetty tuo reverse method, konsolissa näkyy 76 indeksiksi 2! 

// // z = arr.slice(1, 4); //[ 60, 76, 98 ] tässä on tärkeä tietää että slice ei muokka alkuperäistä taulukkoa, vaan tavallaan kopio siti uuten taulukoon.
// //slice leikkaa sieltä mistä määrätään, mutta ei sisällyttää loppupää
// // esimerkki: arr.slice[1,4] tekee[x, 60, 76, 98, x ] eli tässä se alkaa 60, loppu 98;n
// //                         indeksi 0  1   2   3   4


// // z = arr.splice(1, 4); // [ 60, 76, 98, 200 ] [ 30 ], splice leikkaa nuo elementit alkuperäisestä taulukosta. 
// // splice ottaa mukaan tuo mainittu välit eli 1-4 mukaanlukien tuo 4 myös,
// console.log(z, arr)




//                 ****Nesting array****
let y;

const fruitz = ['apple', 'peach', 'pear'];
const berries = ['strawberry', 'blueberry', 'raspberry'];

// fruitz.push(berries);

//  y = fruitz[3][1]; // tässä on haettu tietty elementi, joka on "blueberry", kahden
 // indeksin avulla, johtuu siitä, kun tuolla on kaksi taulukko sisäkkäin, tuo "3" indeksi
 // pointtaa ensin berries taulukkoon, ja "1"on berries taulukkoon indeksi, joka on "blueberry"


const allFruits = [fruitz, berries];
y = allFruits[1][0]; // täälä tuo [1] viitta tuohon berries array;n joka sijaitsee allFruits array;n toisessa indeksissa.

// concat & spread arrays:
// eli otetaan yhtä/useat array;n jäsentä ja siiretään toiseen array;n
y = fruitz.concat(berries)
//tuloksena: [ 'apple', 'peach', 'pear', 'strawberry', 'blueberry', 'raspberry' ]
// Eli saadaan yhtä array;tä joka, sisältää nuo kaikki jäsenet.

//spread operator
y = [...fruitz, ...berries]; // Tekee sama-asiaa kuin concat operaatori. 
// eli nuo ...+array tarkoittaa array;n sisällä olevat jäsenet. 
// jos y = [...fruitz, berries] niin tässä tapauksessa olisi y;n array jossa on fruitz;n jäsenet + berries array;nä.


// Flatten arrays:

const arrr = [1, 2, [3, 4], 5, [6, 7], 8];
z =  arrr.flat(); // tämä myös yhdistää yhteen kaikki array;jen jäsenet, yhteen array;n tässä tuohon z array;n sisään.

// Array;n methodit:

w = Array.from('1234567'); // Eli tämä methodi tekee array annetusta string;sta
// tuloksena: w = ['1', '2', '3','4', '5', '6','7']


//array of, on myös kätevä tapa  yhdistää, vaikka monta muuttujan arvon, yhteen array;n
b = 12;
c = 13;
d = 14;
// r = Array.of(b, c, d)




// console.log(w, r);

// Haaste:

const array = [1, 2, 3, 4, 5,];
// resault = [6, 5, 4, 3, 2, 1, 0]:

n = array.unshift(0);
n = array.push(6);
n = array.reverse()
n = array.flat();

console.log(n);

// Haaste 2

const list1 = [1, 2, 3, 4, 5];
const list2 = [5, 6, 7, 8, 9, 10];

// list3 = list1.pop(); Tapa 1: 
// list3 = list1.concat(list2);

//Tapa 2:
list3 = list1.slice(0, 4).concat(list2);

//Tapa 3;
list4 = [...list1, ...list2];
list4.splice(4, 1);


console.log(list3,list4);



