x = Math.floor(Math.random() * 100 + 1);
y = Math.floor(Math.random() * 50 +1);


//summa
const sum = x + y;
const sumOut = `${x} + ${y} = ${sum}`

//erotus
const erotus = x - y;
const erotusOut = `${x} - ${y} = ${erotus}`

//tulo
const tulo = x * y;
const tuloOut = `${x} * ${y} = ${tulo}`

//jako
const jako = x / y;
const jakoOut = `${x} / ${y} = ${jako}`

//Jäännös
const rm = x % y;
const rmOut = `${x} % ${y} = ${rm}`

console.log(sumOut)
console.log(erotusOut)
console.log(tuloOut)
console.log(jakoOut)
console.log(rmOut)
