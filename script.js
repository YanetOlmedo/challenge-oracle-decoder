const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".campo-text-area");

const img = document.getElementById("img");
let sinTexto = document.querySelector(".sin-texto");
let copy = document.querySelector(".btn-copy");

function ocultar() {
    img.style.display = "none";
    sinTexto.style.visibility = "hidden";
}

function btnencriptar() {

    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    ocultar();
    copy.style.display = "inline";
    
}

function encriptar(procesoEncriptar) {

    let matrizCodigo = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    procesoEncriptar = procesoEncriptar.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i ++) {
        if (procesoEncriptar.includes(matrizCodigo[i][0])) {
            procesoEncriptar = procesoEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
            
        }
    }
 
    return procesoEncriptar;


}

function btndesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
}

function desencriptar(procesoDesencriptar) {
    let matrizCodigo = [["enter", "e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    procesoDesencriptar = procesoDesencriptar.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i ++) {
        if (procesoDesencriptar.includes(matrizCodigo[i][0])) {
            procesoDesencriptar = procesoDesencriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
            
        }
    }
  
    return procesoDesencriptar;
}

function copiar() {
    var texto = document.querySelector(".campo-text-area");
    texto.select();
    document.execCommand("copy");
}


