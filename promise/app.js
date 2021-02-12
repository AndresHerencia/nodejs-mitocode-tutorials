let promesa = require('./promesa');

promesa.calcular(5,3).then((resultado)=>{
    console.log(resultado);
}, (error)=>{
    console.log(error);
});

/*let promesa = new Promise((resolve, reject)=>{
    //resolve('Exito al procesar la peticion');
    reject('Error');
});

promesa.then((resultado)=>{
    console.log(resultado);
}, (error)=>{
    console.log(error);
});*/