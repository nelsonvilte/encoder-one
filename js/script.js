/*
"llaves" de encriptación:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
const btnEncripter = document.querySelector("#btn-encripter")
const btnDecryptor = document.querySelector("#decripter");

const btnCopy = document.querySelector("#btn-copy");
const textOut = document.querySelector("#text-out");

btnCopy.style.display="none";
textOut.style.display="none";

btnEncripter.addEventListener("click",function(e){
    e.preventDefault();
    let formEnviado=document.querySelector("#formulario");
    let textoIn=formEnviado.texto;
    let texto=textoIn.value; 
    let msjeUno=document.getElementById("texto-uno");
    let msjeDos=document.getElementById("texto-dos");
    let imgContent = document.querySelector(".img-content");
    let textCod = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g,"ufat" );
    const imgEncoder = document.querySelector("#img-encoder-one");
    imgContent.style.paddingTop="10px";
    msjeUno.style.display="none";
    msjeDos.textContent="Texto procesado"
    textOut.style.display="";
    // textOut.style.height="400px";
    textOut.value = textCod; 
    imgEncoder.style.display="none";
    textoIn.value = "";
    btnCopy.style.display="";



    
});


btnDecryptor.addEventListener("click",function(e){
    e.preventDefault();
    decodificar();
    document.getElementById("texto-in").value="";
});



function decodificar(){
    let textoIngresado= document.getElementById("texto-in").value;
    let decodificado = textoIngresado.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g,"u" ); 
    document.getElementById("text-out").value = decodificado;
    
    
}