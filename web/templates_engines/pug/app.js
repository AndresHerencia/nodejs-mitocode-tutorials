const express = require('express');
const app = express();

let personas = [
    {
        id:1,
        nombre: "Carlos"
    },
    {
        id: 2,
        nombre: "Andres"
    },
    {
        id: 3,
        nombre: "Carlos Andres"
    }
]

app.set('view engine', 'pug');

app.get('/', (request, response) => {
    response.render('template', {titulo: 'pug', mensaje: 'AndresG | Pug', personas: personas});
});

app.listen(3000, () => {
    console.log('Ejecutandose en el puerto 3000')
});