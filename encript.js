/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

window.addEventListener("load", inicio, true);

function inicio(){
    document.getElementById('mensaje2').style.visibility = "hidden";
    document.getElementById('copiar').style.visibility = "hidden";
    document.getElementById('contimg').style.visibility = "visible";

    document.getElementById('mensaje').addEventListener("keyup", function(){
        this.value = this.value.toLowerCase();
        this.value = this.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }, true);

    document.getElementById('encriptar').addEventListener("click", function(){
        let text = document.getElementById('mensaje').value;
        document.getElementById('mensaje2').value = encriptar(text);

        document.getElementById('mensaje2').style.visibility = "visible";
        document.getElementById('copiar').style.visibility = "visible";
        document.getElementById('contimg').style.visibility = "hidden";
        document.getElementById('mensaje2').style.height = "21em";
        document.getElementById('imgvis').style.height = "0";
    }, true);

    document.getElementById('desencriptar').addEventListener("click", function(){
        let text = document.getElementById('mensaje').value;
        document.getElementById('mensaje2').value = desencriptar(text);
        document.getElementById('mensaje').value = "";
    }, true);

    document.getElementById('copiar').addEventListener("click", function(){
        let text = document.getElementById('mensaje2').value;
        copiar(text);            
    }, true);
}

function encriptar(text){
    let res = text.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    return res;
}

function desencriptar(text){
    let res = text.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    return res;
}

async function copiar(text) {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Texto copiado al portapapeles');
    } catch (err) {
      console.error('Falló al copiar: ', err);
    }
  }