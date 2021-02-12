const express = require('express');
const app = express();
const port = 3000

let isLogin = () => true;

let logger = (req, resp, next) => {
    console.log(`Peticion de tipo ${req.method}`);
    next();
}

let showIP = (req, resp, next) => {
    console.log(`IP 127.0.0.1`);
    next();
}

app.use((request, response, next) => {
    if(isLogin()){
        next();
    }else{
        response.send('No estas logueado');
    }
}, logger, showIP)

//app.use(logger);



app.get('/:user', (req, res) => {
    let usuario = req.params.user
    res.send(`Bienvenido!${usuario}`)
})

app.post('/', (req, res) => {
    res.send(`Hello World!${req.method}`)
})

app.put('/', (req, res) => {
    res.send(`Hello World!${req.method}`)
})

app.delete('/', (req, res) => {
    res.send(`Hello World!${req.method}`)
})
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})