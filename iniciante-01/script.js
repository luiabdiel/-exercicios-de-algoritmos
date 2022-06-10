let salarioAtual = prompt('Qual o sálario atual do funcionário?')

let percentualIncrementado = prompt(
  'Qual o percentual que desejas incrementar? '
)

salarioAtual = Number(salarioAtual)
percentualIncrementado = Number(percentualIncrementado)

if (
  salarioAtual != null &&
  salarioAtual != 0 &&
  percentualIncrementado != null &&
  percentualIncrementado != 0
) {
  let acrescimo = salarioAtual + (salarioAtual * percentualIncrementado) / 100

  alert(`O seu funcionário irá receber R$${acrescimo} a partir do mês que vem!`)
} else {
  alert('Insira valores válidos')

  location.reload()
}
