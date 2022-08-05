//a) Elaborar programa que leia salario tempo de funcionario trabalha na empresa. A cada 4 anos o funcionario recebe um acrescimo de 1% no salario. Informe qtde de quadrienios e o salario final

const prompt = require("prompt-sync")()

const salario = Number(prompt("Salario Atual:" ))
const anos = Number(prompt("Quantos anos de empresa? "))
const quadrienio = Math.floor(anos / 4) 
const acrescimoSalario = salario * quadrienio / 100


console.log(`O funcionáiro tem direito a ${quadrienio} quadrienio(s)`)
console.log(`O salário final será de R$ ${(salario+acrescimoSalario).toFixed(2)}`)

