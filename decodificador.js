const areaDoTexto = document.querySelector('.areaDoTexto');
const mensagem = document.querySelector('.mensagem');
const input = document.querySelector('.input');
const ocultar = document.querySelector('.botaoCopiar');

function btnCriptografar() {
  const img = document.getElementById('figurinha');
  const areaDotextoCrip = document.getElementById('textocriptografado');
  if (areaDoTexto.value != '') {
    const textoCriptografado = criptografar(areaDoTexto.value);
    mensagem.value = textoCriptografado;
    areaDoTexto.value = '';
    img.classList.add('esconder');
    areaDotextoCrip.classList.remove('esconder');
  } else { 
    img.classList.remove('esconder');
  areaDotextoCrip.classList.add('esconder');

  }
}

function criptografar(stringCriptografar) {
  let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
  stringCriptografar = stringCriptografar.toLowerCase();
  
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringCriptografar.includes(matrizCodigo[i][0])) {
      stringCriptografar = stringCriptografar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }

  }
  
  return stringCriptografar;
}


function btnDescriptografar() {
  const img = document.getElementById('figurinha');
  const areaDotextoCrip = document.getElementById('textocriptografado');
  if (areaDoTexto.value !='') {
  const textoDescriptografado = descriptografar(areaDoTexto.value);
  mensagem.value = textoDescriptografado;
  areaDoTexto.value = '';
  img.classList.add('esconder');
  areaDotextoCrip.classList.remove('esconder');
  } else { 
    img.classList.remove('esconder');
  areaDotextoCrip.classList.add('esconder');

  }

}

function descriptografar(stringDescriptografar) {
  let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
  stringDescriptografar = stringDescriptografar.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDescriptografar.includes(matrizCodigo[i][1])) {
      stringDescriptografar = stringDescriptografar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }

  return stringDescriptografar;
}


function btnCopiar() {
  const copiarTexto = copiar(mensagem.value);
  input.value = copiarTexto;
  mensagem.value = '';
}

function copiar(copiarTexto) {
  navigator.clipboard.writeText(copiarTexto);

}









