const comprimento = prompt('Qual o COMPRIMENTO em cm do objeto?')
const largura = prompt('Qual a LARGURA em cm do objeto?')
const altura = prompt('Qual a ALTURA em cm do objeto?')

if (
  comprimento != null &&
  comprimento != 0 &&
  largura != null &&
  largura != 0 &&
  altura != null &&
  altura != 0
) {
  const volume = comprimento * largura * altura
  alert(`O volume do objeto é de ${volume} cm³`)
} else {
  alert('Insira valores válidos')
  location.reload()
}
