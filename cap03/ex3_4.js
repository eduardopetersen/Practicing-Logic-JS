// b) elaborar um programa que leia o peso de uma ração em kg e o quanto um gato consome por dia da ração em gramas. Informe qts dias ira durar a ração e o qto sobra em ração (em grama)

const prompt = require("prompt-sync")()

const pesoKg = Number(prompt("Peso da ração em KG? "))
const consumoGrama = Number(prompt("Consumo diário em gramas? "))
const pesoGrama = pesoKg * 1000

const durabilidade = Math.floor(pesoGrama / consumoGrama)
const sobra = pesoGrama % consumoGrama


console.log(`A ração irá durar ${durabilidade} dia(s)`)
console.log(`Ainda irá sobrar ${sobra} grama(s)`)