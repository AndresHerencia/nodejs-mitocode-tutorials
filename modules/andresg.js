/*console.log(module);*/
/*console.log('Bicyles rules the world');*/

let bicyclesCounter = 23
/*module.exports.bicycles = bicycles;*/

/*module.exports.saludar = function saludar() {
    console.log('Tenemos una coleccion de bicicletas');
};*/

module.exports = {
    bicycles : bicyclesCounter,
    saludar : () => {
        console.log('Usando exports en node js');
    },
    /*sumar : (a, b) => {
        return a + b;
    }*/

    sumar : (a, b) => a + b,
    mostrar : a => a + 10 /*Un solo parametro no necesita parentesis*/

}
