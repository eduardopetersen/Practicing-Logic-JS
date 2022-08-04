//c) Elaborar um programa para um restaurante que leia o preço por kg e o consumo (em gramas) de um cliente.
// Exiba o valor a ser pago

const frm = document.querySelector("form")
const resp1 = document.querySelector("#outresp1")


frm.addEventListener("submit", (e) => {
    const preco = Number(frm.inPreco.value)
    const consumo = Number(frm.inConsumo.value)

    const valorAserPago = (consumo * preco) / 1000

    resp1.innerText = `Valor a pagar R$: ${valorAserPago}`

    e.preventDefault()

})