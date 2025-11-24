<<<<<<< HEAD
function contarPalabras(texto){
    if(!texto || !typeof texto== 'string'){
        throw new TypeError
    }
    const textoTrimmed = texto.trim();
    if (textoTrimmed ==='')
        throw new TypeError("frase invalida");
    return textoTrimmed.split(/\s+/).length;
}
module.exports={contarPalabras}
=======
function contarPalabras(texto) {
    if (!texto || typeof texto !== 'string') 
        throw new TypeError("frase invalida");
    
    const textoTrimmed = texto.trim();
    if (textoTrimmed === '')
        throw new TypeError("frase invalida");
    return textoTrimmed.split(/\s+/).length;
}

module.exports = { contarPalabras };
>>>>>>> 42efe540b5f4e5d4429a49450888cd3a73f58db8
