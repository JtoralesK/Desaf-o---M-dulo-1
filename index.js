//Recibe argumentos, los procesa y delega las acciones a pelis.js.
const pelis = require("./pelis")

function parseaElArgv(){
    const argv = process.argv.slice(2);
    const objeto = {};
    argv.forEach((item, indice)=>{
        if(item.startsWith("--")){
            const argumentoSinGuion = item.slice(2);
            objeto[argumentoSinGuion] = argv[indice +1];

        }   
    })

    return objeto ;
}

function main(){
    
    const ejecutadorDeLosComandos = parseaElArgv();
    const respuesta = pelis.searchCriteria(ejecutadorDeLosComandos);
    console.table(respuesta);
    

    };
    
    main();