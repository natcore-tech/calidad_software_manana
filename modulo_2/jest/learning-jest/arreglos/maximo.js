function maximo(arreglo){
    if(!Array.isArray(arreglo) || arreglo.length==0)
        throw new TypeError("arreglo invalido");
    let mayor=0
    for(let i=0; i<arreglo.lenght; i++){
        if(arreglo[i]>mayor || mayor==0){
            mayor=arreglo[i];
        }
    }
    return mayor;
}
module.exports={maximo}