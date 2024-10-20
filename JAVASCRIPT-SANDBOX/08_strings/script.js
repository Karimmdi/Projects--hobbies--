// let x;
// const name = 'Jhon';
// const age = 25;

// // x = 'Hello, my name is ' + name + ' and i am ' + age + ' years old';


// //Template Literals
// x = `Hello my name is ${name} and I am ${age} years old.` ; 

// // String properties and method

// const s = new String('Hello world');
// x = typeof s;

// x = s.length;

// //Accesses value by key "index"
// x = s[1];

// x = s.__proto__;

// x = s.toLocaleUpperCase();

// x = s.charAt(0);
// x = s.indexOf('1');

// x = s.substring(0, 5);

// // x = s.slice(-11, -6);


// x = s.replace('world, Jhon');

// x = s.slice(-11, -6);
// x = s.valueOf();

// x = s.split('')




// console.log(x);



// Harjoitus Tee seuraava stringi isolla alkukirjaimilla
//1. ratkaisu
// const mystring = 'developer';
// let capString;
// capString = mystring.charAt(0).toUpperCase();
// a =mystring.slice(1,9)

// console.log(capString + a) ;


//2.ratkaisu:
const mystring = 'developer';
let capString;

// capString = mystring.charAt(0).toUpperCase() + mystring.substring(1,9);
//****substring leikkaa d pois, koska määrätään alkaan 1 index;sta, ja r;n asti, joka on 9;nen merkkijono.


//3.ratkaisu:
// capString = mystring[0].toUpperCase() + mystring.substring(1);
//**  eli vaihtamalla: mystring.charAt(0) >>> mystring[0]



//4.atkaisu:              ***template literal tapa!!!***

capString = `${mystring[0].toUpperCase()}${mystring.substring(1)}`;

console.log(capString) ;

