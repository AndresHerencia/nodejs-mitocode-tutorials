const fetch = require('node-fetch');

let promesa = fetch('https://api.github.com/users/AndresHerencia');

promesa.then((resp)=>{
    return resp.json();
}).then((json)=>{
    console.log(json);
});