let mensaje = "Debugeando en NodeJS";

function saludar(){
    debugger;
    console.log(mensaje);
}

module.exports = {
    saludar: saludar
}