/*
"llaves" de encriptación:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
const btnEncripter = document.querySelector(".btn-encripter")
const btnDecryptor = document.querySelector("#decripter");

btnEncripter.addEventListener("click",function(e){
    e.preventDefault();
    let formEnviado=document.querySelector("#formulario");
    let textoIn=formEnviado.texto;
    let texto=textoIn.value; 
    let msjeUno=document.getElementById("texto-uno");
    let msjeDos=document.getElementById("texto-dos");

    let textCod = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g,"ufat" );
    msjeUno.style.display="none";
    msjeDos.textContent = textCod;  
    textoIn.value = "";



    
});


btnDecryptor.addEventListener("click",function(e){
    e.preventDefault();
    decodificar();
    document.getElementById("texto").value="";
});



function decodificar(){
    let textoIngresado= document.getElementById("texto").value;
    let decodificado = textoIngresado.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g,"u" ); 
    document.getElementById("texto-dos").textContent = decodificado;
    
    
}