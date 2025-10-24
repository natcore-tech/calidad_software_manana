<<<<<<< HEAD
function puedeConducir(edad){
    if(!Number.isInteger(edad) || edad < 0)
        throw new TypeError("edad invalida");
    return edad >= 18 ? 'Si':'No';
}
module.exports={puedeConducir}
=======
function puedeConducir(edad) {
    if(!Number.isInteger(edad) || edad <0)
        throw new TypeError("edad invalida");
    return edad >= 18 ? 'Si':'No';
}
module.exports={puedeConducir}
>>>>>>> 4f4d537355a1bd9495275c921492fc9183acbd9f
