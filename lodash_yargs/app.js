const _ = require('lodash');
const argv = require('yargs').argv;



/**
 Input tradicional node js
 */
/*let comando = process.argv[2];
console.log(comando);
if (process.argv[2] === 'usuario'){
    if (process.argv[3] === 'AndresG'){
*/

/* Usando yargs */
if (argv.usuario === 'AndresG'){
    let x = { "nombre" : "Andres" }
    let y = { "alias" : "AndresG" }
    let z = [
        { nombre: "Andres", apellido : "Gonzalez", edad : "40"},
        { nombre: "Carlos", apellido : "Ramirez", edad : "40"}
    ]
    
    /*let resultado = _.assign(x,y);
    console.log(resultado);*/
    
    /*_.times(3, ()=> console.log("AndresG _.times"));*/
    
    let resutado = _.find(z, {nombre : "Carlos", apellido : "Ramirez"});
    console.log(resutado);
} else {
    console.log("Usuario no valido");
}


