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
const imgEncoder = document.querySelector("#img-encoder-one");
btnCopy.style.display = "none";
textOut.style.display = "none";

btnEncripter.addEventListener("click", function (e) {
    e.preventDefault();
    let formEnviado = document.querySelector("#formulario");
    let textoIn = formEnviado.texto;
    let texto = textoIn.value;
    /*   let msjeUno=document.getElementById("texto-uno");
      let msjeDos=document.getElementById("texto-dos"); */
    let errors = validarTexto(texto);
    imgEncoder.style.display = "";
    if (errors.length > 0) {
        /*  msjeDos.style.display="none";
         msjeUno.style.display="none"; */
        textOut.style.display = "none";
        btnCopy.style.display = "none";
        mostrarErrores(errors);
        return;
    } else {
        let textCod = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        /*  msjeUno.style.display="none";
         msjeDos.style.display="revert";
         msjeDos.textContent="Texto procesado" */
        textOut.style.display = "";
        textOut.value = textCod;
        imgEncoder.style.display = "none";
        textoIn.value = "";
        let mensajesErrores = document.querySelector("#msjs-errores");
        mensajesErrores.innerHTML = "";
        btnCopy.style.display = "";

    }

});

btnDecryptor.addEventListener("click", function (e) {
    e.preventDefault();

    let formEnviado = document.querySelector("#formulario");
    let textoIn = formEnviado.texto.value;
    console.log(textoIn);
    let errors = validarTextoCodificado(textoIn);
    console.log(errors);
    imgEncoder.style.display = "";
    textOut.style.display = "";
    if (errors.length > 0) {
        textOut.style.display = "none";
        btnCopy.style.display = "none";
        mostrarErrores(errors);
        return;
    } else {
        imgEncoder.style.display = "none";
        textOut.style.display = "";
        decodificar();
        document.getElementById("texto-in").value = "";

    }
    let mensajesErrores = document.querySelector("#msjs-errores");
    mensajesErrores.innerHTML = "";
});

function decodificar() {
    let textoIngresado = document.getElementById("texto-in").value;
    console.log(textoIngresado);
    let decodificado = textoIngresado.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    console.log("DEcodificado: " + decodificado)
    textOut.style.display = "";
    document.getElementById("text-out").value = decodificado;

}

function capturarDatosTexto(textArea) {
    let texto = document.getElementById(textArea);
    return texto.value
}

function validarTexto(textoIngresado) {
    let errores = [];
    if (textoIngresado.length == 0) {
        console.log("No se ingreso ningun texto para encriptar");
        errores.push("Ningún mensaje fue encontrado");
        errores.push("Ingresa el mensaje que desees encriptar o desencriptar");
    } else {
        if (textoIngresado.match(/[aeiou]/gi) == null) {
            console.log("texto ingresado pero no se encuentran vocales");
            errores.push("No se puede procesar el texto ingresado");
            errores.push("Ingresa otro texto que desees encriptar o desencriptar");
        }
    }


    return errores;
}

function validarTextoCodificado(textoIngresado) {
    let errores = [];
    console.log(errores);
    if (textoIngresado.length == 0) {
        console.log("No se ingreso ningun texto para desencriptar");
        errores.push("Ningún mensaje fue encontrado");
        errores.push("Ingresa el mensaje que desees encriptar o desencriptar");
    } else {
        if (textoIngresado.match(/(enter|imes|ai|ober|ufat|u)/) == null) {
            console.log("Se ingresó texto pero no se encuentra patron para desencriptar");
            console.log("texto ", textoIngresado);
            errores.push("No se puede procesar el texto ingresado");
            errores.push("Ingresa otro texto que desees encriptar o desencriptar");
        }
    }


    return errores;
}

function mostrarErrores(errores) {
    console.log(errores);
    let ul = document.querySelector("#msjs-errores");
    ul.innerHTML = ""
    errores.forEach(function (error) {
        let li = document.createElement("li");
        li.textContent = error;
        li.classList.add("msje1");
        ul.appendChild(li);
    });

}