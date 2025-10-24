<<<<<<< HEAD
function esPar(numero){
    if(!Number.isInteger(numero))
        throw new TypeError("numero debe ser entero");
    return numero%2 === 0;
}
module.exports={esPar}
=======
function esPar(numero) {
    if(!Number.isInteger(numero)) throw new TypeError("numero debe ser entero");
        return numero%2===0;
}
module.exports={esPar}
>>>>>>> 4f4d537355a1bd9495275c921492fc9183acbd9f
