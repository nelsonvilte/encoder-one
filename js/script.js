const btnEncripter = document.querySelector("#btn-encripter")
const btnDecryptor = document.querySelector("#decripter");
const textoProcesado = document.querySelector(".oculto")

const btnCopy = document.querySelector("#btn-copy");
const textOut = document.querySelector("#text-out");
const imgEncoder = document.querySelector("#img-encoder-one");
btnCopy.style.display = "none";
textOut.style.display = "none";
let avisos = [];
avisos.push("Ningún mensaje fue encontrado");
avisos.push("Ingresa el mensaje que desees encriptar o desencriptar");

mostrarErrores(avisos);
btnEncripter.addEventListener("click", function (e) {
    e.preventDefault();
    let formEnviado = document.querySelector("#formulario");
    let textoIn = formEnviado.texto;
    let texto = textoIn.value;
    let errors = validarTexto(texto);
    textoProcesado.classList.add("oculto");
    imgEncoder.style.display = "";
    if (errors.length > 0) {
        textOut.style.display = "none";
        btnCopy.style.display = "none";
        mostrarErrores(errors);
        return;
    } else {
        let textCod = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        textoProcesado.classList.remove("oculto");
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
    textoProcesado.classList.add("oculto");
    imgEncoder.style.display = "";
    if (errors.length > 0) {
        textOut.style.display = "none";
        btnCopy.style.display = "none";
        mostrarErrores(errors);
        return;
    } else {
        imgEncoder.style.display = "none";
        textOut.style.display = "";
        textoProcesado.classList.remove("oculto");
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
        } else {
            if (textoIngresado.match(/[ÁÉÍÓÚáéíóúñÑ]/)) {
                console.log("texto ingresado contiene acentos o carteres especiales");
                errores.push("No se puede procesar el texto con acentos o carteres especiales");
                errores.push("Ingresa otro texto que desees encriptar o desencriptar");
            } else {
                if (textoIngresado.match(/[A-Z0-9]/)) {
                    console.log("texto ingresado contiene mayusculas,números o");
                    errores.push("No se puede procesar el texto con mayúsculas o números");
                    errores.push("Ingresa otro texto que desees encriptar o desencriptar");
                }
            }


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
        if (textoIngresado.match(/[A-Z0-9]/)) {
            console.log("texto ingresado contiene mayusculas y/o números");
            errores.push("No se puede procesar el texto con mayúsculas o números");
            errores.push("Ingresa otro texto que desees encriptar o desencriptar");
        } else {
            if (textoIngresado.match(/(enter|imes|ai|ober|ufat)/) == null) {
                console.log("Se ingresó texto pero no se encuentra patron para desencriptar");
                console.log("texto ", textoIngresado);
                errores.push("No se puede procesar el texto ingresado");
                errores.push("Ingresa otro texto que desees encriptar o desencriptar");
            }
        }
    }
    return errores;
}

function mostrarErrores(errores) {
    console.log(errores);
    let ul = document.querySelector("#msjs-errores");
    ul.innerHTML = ""
    let li = document.createElement("li");
    li.textContent = errores[0];
    li.classList.add("msje1");
    ul.appendChild(li);
    let li1 = document.createElement("li");
    li1.textContent = errores[1];
    li1.classList.add("msje2");
    ul.appendChild(li1);

}



btnCopy.addEventListener("click", function () {
    let text = document.getElementById("text-out");
    text.select();
    navigator.clipboard.writeText(text.value.trim())
        .then(() => {
            console.log('Copiado')
        })
        .catch(err => {
            console.log('Algo salió mal', err);
        })
    alert("Código copiado");
});