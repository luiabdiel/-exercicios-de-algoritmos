const anoDeNascimento = Number(prompt('Em qual ano você nasceu?'))

const anoAtual = new Date().getFullYear()

const idadeEmAnos = anoAtual - anoDeNascimento

const idadeEmMeses = idadeEmAnos * 12

const idadeEmSemanas = idadeEmAnos * 52

const idadeEmDias = idadeEmAnos * 365

alert(
  `Idade em anos ${idadeEmAnos}.\nidade em meses ${idadeEmMeses}.\nidade em semanas ${idadeEmSemanas}.\nidade em dias ${idadeEmDias}.`
)
