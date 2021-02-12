let calcular = ((numero1, numero2)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let suma = numero1 + numero2;
            if (suma>5){
                resolve(numero1 + numero2);
            }else{
                reject('Error al procesar los datos');
            }
            
        }, 5000)
    })
});

module.exports.calcular=calcular;