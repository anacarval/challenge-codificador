/*As "chaves" de criptografia que utilizaremos são:
`A letra "e" é convertida para "enter"`
`A letra "i" é convertida para "imes"`
`A letra "a" é convertida para "ai"`
`A letra "o" é convertida para "ober"`
`A letra "u" é convertida para "ufat"`*/

//const inputTexto = document.querySelector("input-texto")
//const outputTexto = document.querySelector("output-texto")

function alerta () {
    alert("Texto copiado!");
}

function btnCodificador() {
    const inputTexto = document.getElementById("textArea1");
    const outputTexto = document.getElementById("textArea2");
    outputTexto.value = inputTexto.value.replaceAll("e","enter")
	.replaceAll("i","imes")
	.replaceAll("a","ai")
	.replaceAll("o","ober")
	.replaceAll("u","ufat");

    inputTexto.value=""
}

function btnDecodificador() {
    //const textoDecodificado = decodificador
    const inputTexto = document.getElementById("textArea1");
    const outputTexto = document.getElementById("textArea2");
    outputTexto.value = inputTexto.value.replaceAll("ai","a")
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ober","o")
    .replaceAll("ufat","u");

    inputTexto.value=""
}

function btnCopiartxt() {
    var outputTexto = document.getElementById("textArea2");

    navigator.clipboard.writeText(outputTexto.value);

        alert("Texto copiado!")
}