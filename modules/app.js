const os = require('os');
const fs = require('fs');
const ag = require('./andresg');

let cpu = os.cpus();
let sistema = os.platform();
let usuario = os.hostname();

let cpuString = JSON.stringify(cpu)

setTimeout(()=> {console.log('Termine')}, 2000); /*Llamar funciones flecha pasandolas como parametro*/

ag.saludar();

console.log(ag.bicycles);

let rptaSuma = ag.sumar(4, 5);
console.log(rptaSuma);

let rptaMostrar = ag.mostrar(4);
console.log(rptaMostrar);



/*
fs.appendFile('prueba-file-system.txt', `Informacion del cpu: ${cpuString}`, function(error){
    if (error){console.log('Error al crear archivo');}
});*/