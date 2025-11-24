<<<<<<< HEAD
function enMayusculas(texto){
    if(!texto || !typeof texto=='string'){
        throw new TypeError ("texto invalido");
    }
    return texto.toUpperCase();
}
module.exports={enMayusculas}
=======
function enMayusculas(texto) {
    if (!texto || !typeof texto == 'string') {
        throw new TypeError("texto invalido");
    }
    return texto.toUpperCase();

}

module.exports = { enMayusculas };
>>>>>>> 42efe540b5f4e5d4429a49450888cd3a73f58db8
