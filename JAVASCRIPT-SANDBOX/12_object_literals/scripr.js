// Object Literals a data structure that holds key/value pairs

let x;
const person = {
name: 'Jhon Doe',
age: 30,
isAdmin: true,
address:{
    street: 'Hämeenkatu',
    city: 'Tampere',
    satate: 'Pirkanmaa'

},
hobbies: ['music', 'sport'] // also could use arry in obj

};
// jos halua päästä käsiksi johonkin spesifimpi, kuten alla nimi, ikä
x = person.name; // ."dot" syntaksi
x = person['age'] // barcket syntaksi, tässä  property pitää olla hipsuissa.

x = person.address.satate; // getting state from nested object
x = person.hobbies[0]; // getting music from our array nested in person >> hobbies object


// also we can update properties value:

person.name = 'Jane Doe';
person['isAdmin'] = false;

// also we could delete a property :
delete person.age; // this will delete age from person

// using function in object, wich called method:
person.greet = function() {
   console.log(`Hello my name is ${this.name}`); 
};
person.greet(); // nyt kutsuttiin greet funktio, joka alustettu rivillä 34-36
x = person;
console.log(person, x);



// another way to creat object, **object constractor**

let y;

const todo = new Object(); // this line is setting todo to objet literal, (constarctor)
todo.id = 1;
todo.name = 'Open browser'
todo.compelete = false;

y = todo;

console.log(y);


