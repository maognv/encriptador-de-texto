function procesarTexto(tipo) {
    let texto = document.getElementById("texto").value;
    if (texto.length === 0) {
        document.getElementById("signo-de-interrogacion").src = "./img/signo-de-interrogacion.png";
        alert("Debes ingresar algún texto");
        return;
    }

    const reglas = tipo === 'encriptar' 
        ? { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' }
        : { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };

    const expresion = tipo === 'encriptar' ? /[eioua]/gi : /enter|imes|ai|ober|ufat/gi;

    let textoProcesado = texto.replace(expresion, (match) => reglas[match.toLowerCase()]);

    document.getElementById("mensaje").value = textoProcesado;
    document.getElementById("titulo-mensaje").textContent = `Texto ${tipo}ado con éxito.`;
    document.getElementById("parrafo").textContent = "";
    document.getElementById("signo-de-interrogacion").src = `./img/candado-${tipo === 'encriptar' ? 'cerrado' : 'abierto'}.png`;
}
function encriptar() {
    procesarTexto('encriptar');
}
function desencriptar() {
    procesarTexto('desencriptar');
}