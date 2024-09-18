

//Values stored on the stack
const name = 'Joe';
const age = 30;



//Reference values stored on the heap
const person = {
    name: 'Sara', 
    age: 30,


}; 

let newName = name;
newName = 'John';

let newPerson = person; 
newPerson = 'Lilo';

// if you type this syntax:  newPerson.name = 'Lilo'; (now your person and newPerson be the same name, because "." is going to refer to the heap memory)

/*
+-------------------------+                     +----------------------------+
|        STACK MEMORY     |                    |         HEAP MEMORY        |
+-------------------------+                     +----------------------------+
| let newName = name      |                    |                            |
|                         |                    |   person                   |
| newName ---> 'Sara'     |                    |   {                        |
|                         |                    |     name: 'Sara',          |
| newName = 'John'        |                    |     age: 30                |
|                         |                    |   }                        |
| let newPerson = persn   |                    |                            |
| newPerson --->          |                    |                            |
| (Reference to persn)    |                    |                            |
|                         |                    |                            |
| newPerson = 'Lilo       |                    |                            |
|                         |                    |                            |
+-------------------------+                     +----------------------------+

   AFTER: newPerson.name = 'Lilo'

+-------------------------+                     +----------------------------+
| newPerson ---> (Ref to person)                |   person                   |
| person ---> (Same as newPerson)               |   {                        |
|                         |                     |     name: 'Lilo',          |
|                         |                     |     age: 30                |
|                         |                     |   }                        |
+-------------------------+                     +----------------------------+

 */

console.log(name, newName)
console.log(person, newPerson);