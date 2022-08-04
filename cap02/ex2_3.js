//b) Elaborar um programa para uma revenda de veículos. O programa deve ler modelo e preço do veículo. 
//Apresentar como resposta o valor da entrada (50%) e o saldo em 12x.

const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2") // aqui eu pego o que foi preenchido no html e coloco ele dentro de uma const
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) => {
    const veiculo = frm.inVeiculo.value // obtém conteúdo dos campos
    const preco = Number(frm.inValorVeiculo.value)

    const entrada = preco * 0.50        // calcula valor de entrada
    const parcela = (preco * 0.50) / 12 //calcula valor das parcelas

    resp1.innerText = `Veículo: ${veiculo}`          
    resp2.innerText = `Entrada de R$ ${entrada.toFixed(2)}`
    resp3.innerText = `+12x de R$ ${parcela.toFixed(2)}`

    e.preventDefault() // evita envio do form

})