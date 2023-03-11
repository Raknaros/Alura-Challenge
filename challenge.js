const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none"


function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[%-z]|[Ç]|[Ñ]|[ç]|[ñ]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras sin acentos")
        location.reload();
        return true;
    }
}


function btnEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = "none"
        textArea.value = "";
        copia.style.display = "block"
    
    }
}

//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`


function encriptar(stringEncriptada){
    var lista=[]
    var palabra=""
            for (let x of stringEncriptada){
                lista.push((x.charCodeAt()));
            }
            for(let y of lista){
                palabra = palabra.concat(String.fromCharCode(y-10))
            }
    return palabra
}





function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    
}


function desencriptar(stringDesencriptada){
    var lista=[]
    var palabra=""
            for (let x of stringDesencriptada){
                lista.push((x.charCodeAt()));
            }
            for(let y of lista){
                palabra = palabra.concat(String.fromCharCode(y+10))
            }
    return palabra
}


function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}
