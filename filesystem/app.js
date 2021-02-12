const fs = require('fs');

console.log('Iniciado');

/*fs.readFile('data.txt', 'utf-8', (error, data)=> {
    if(error){
        console.log(`Error ${error}`)
    }else{
        console.log(data)
    }
});*/

/*let data = fs.readFileSync('data.txt', 'utf-8')
console.log(data);*/



/*fs.rename('data.txt', 'data_renamed.txt', (error)=>{
    if(error) throw error;
    console.log('Renamed');
});*/

/*fs.appendFile('data.txt', '\n Estamos progresando con el Append File', (error)=>{
    if(error) console.log(`Error ${error}`);
});*/

/*fs.unlink('data-copy.txt', (error)=>{
    if(error) throw error;
    console.log('Eliminado');
})*/

/*fs.createReadStream('data.txt').pipe(fs.createWriteStream('data-copy-2.txt'));*/

fs.readdir('./../', (error, files)=>{
    files.forEach(file => {
        console.log(file);
    });
});

/*fs.readdirSync('./../').forEach(file => {
    console.log(file);
});*/

console.log('Finalizado');