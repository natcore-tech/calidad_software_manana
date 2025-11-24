<<<<<<< HEAD
function contarPalabras(texto){
    if(!texto || typeof texto !== 'string'){
        throw new TypeError("frase inválida");
    }
    const textoTrimmed = texto.trim();
    if (textoTrimmed === '')
        throw new TypeError("frase inválida");
    return textoTrimmed.split(/\s+/).length;
}

module.exports = { contarPalabras };







=======
function buscarPalabra(frase, palabra) {
    if (!frase 
        || !palabra
        || !typeof frase== 'string'
        || !typeof palabra=='string'

    ){
        throw new TypeError("frase invalida");
    }
    return frase.includes(palabra);
}

module.exports = { buscarPalabra };
>>>>>>> 42efe540b5f4e5d4429a49450888cd3a73f58db8
