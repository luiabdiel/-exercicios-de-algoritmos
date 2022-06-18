const pesoDoSacoDaRacao = Number(prompt('Qual o peso do saco da ração em kg?'))

var quantidadePorGato = Number(
  prompt('Qual a quantidade diária para cada gato em gramas?')
)

var resultado = (pesoDoSacoDaRacao * 1000 - quantidadePorGato * 2 * 5) * 0.001

alert(`Após 5 dias restará no saco de ração ${resultado} kg`)
