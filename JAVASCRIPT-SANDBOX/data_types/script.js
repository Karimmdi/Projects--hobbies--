//Js primitive data_tupes:
// stored directly in the "stack", where it is accessed from Strin|Number|Boolean|Null|Undefined|Symbol|BigInt



//string
cosnt = firsName = 'Sara';
//Number
const age = 40;
const temp = 37.5;

//Null

const aptNumber = null;  

//Unddfined
let score;

// BigInt
const n =9007185430n;

//Reference Data_Types:
//stored in the heap and accessed by reference: Array|Function|Objects

//array:
const Numbers = [12, 53, 75, 65];

//Objects:
const person = {
    name: 'Alex', };


//Function:
function sayHello(){
    console.log('Hello')
};



const Output = sayHello; // a global variable!
console.log(Output,  typeof Output, );