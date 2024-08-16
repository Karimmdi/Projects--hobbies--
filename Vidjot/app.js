const express = require ('express');

const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "Nils" }));

const app = express();

// Handlebars midleware:


//Index route:
app.get('/', (req, res) => {
    res.send('Index')  

});

// About route:
app.get('/about', (req, res) => {
    res.send('B');

});

const port = 5000;

app.listen(port, (req, res) =>{
    console.log(`server started on port ${port}`);
});