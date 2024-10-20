let d;
d = new Date(); 

d = d.toString();


d = new Date('9-21-2024');

d = new Date('9/21/2024 10:58:00');
d = new Date('9/21/2024 10:58:00');


// JS Timestamp in milisecond ms
d = new Date();

d = d.getTime();

//käänetään ms sekunniksi:
d = Math.floor(Date.now() / 1000);



console.log(d, typeof d)






//                             ***Method in Date-Objects:***


let x;
let a = new Date();


x = a.toString();
x = a.getFullYear();
x = a.getMonth() + 1; // because number is '0'based, so 8 means 0-8 so its nine number, we just add 1 at the end to make sense for us humans
x = a.getDate();  //Day of the month
x = a.getDay();  //Day of the week

// using template Literal:
x =`${a.getFullYear()}-${a.getMonth() +1}-${a.getDate()}`;

// Using API for a local date format:
x = Intl.DateTimeFormat('en-US').format(a); // for USA 
x = Intl.DateTimeFormat('en-GB').format(a); // for USA 

x = Intl.DateTimeFormat('en-GB', {month: 'long'}).format(a); // Month


// a shorter way for local date format
x = a.toLocaleString('defalt', {month: 'short'}); // calling a method on 'a' object!!

//also a "better"/ newer way:

x = a.toLocaleString('fi-fi', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    
});

console.log(x)
