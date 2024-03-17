const textoOriginal = document.querySelector('.texto');
const textResultado = document.querySelector('#esconderAlerta');
const msgAlerta = document.querySelector('#alertaTexto');
const botaoCopiar = document.querySelector('#copiar');

botaoCopiar.addEventListener('click', copiar);


function copiar () {
    textResultado.select();
    document.execCommand('copy');
    textResultado.innerHTML = '';
}


function criptografar () {
    let texto = textoOriginal.value;
    if (texto == '') {
        msgAlerta.style.display = 'block';
        textResultado.style.display = 'none';
        botaoCopiar.style.display = 'none';
        return;
    } else {
        msgAlerta.style.display = 'none';
        textResultado.style.display = 'block';
        botaoCopiar.style.display = 'inline-block';
        let textoModificado = texto.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat');
        textResultado.innerHTML = textoModificado;
        textoOriginal.value = '';
    }
}

function descriptografar () {
    let texto = textoOriginal.value;
    if (texto == '') {
        msgAlerta.style.display = 'block';
        textResultado.style.display = 'none';
        botaoCopiar.style.display = 'none';
        return;
    } else {
        msgAlerta.style.display = 'none';
        textResultado.style.display = 'block';
        botaoCopiar.style.display = 'inline-block';
        let descriptografado = texto.replaceAll('ai', 'a').replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ober', 'o').replaceAll('ufat', 'u');
        textResultado.innerHTML = descriptografado;
        textoOriginal.value = '';
    }
}

textoOriginal.addEventListener('keypress', function(event) {
    var charCode = event.which ? event.which : event.keyCode;
    var charTyped = String.fromCharCode(charCode);

    if (/^[a-z\s]$/.test(charTyped)) {
        return true;
    } else {
        event.preventDefault();
        return false;
    }
})