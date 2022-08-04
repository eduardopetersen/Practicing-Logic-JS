//c) Um supermercado está com uma promoção – Para aumentar suas vendas no setor de higiene, cada etiqueta de produto deve exibir uma mensagem anunciando 50% de desconto (para um item) na compra de três unidades do produto. Elaborar um programa que leia descrição e preço de um produto. Após, apresente as mensagens indicando a promoção – conforme o exemplo ilustrado na Figura 2.13.


const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {

    const produto = frm.inNomeProduto.value
    const preco = Number(frm.inPreco.value)

    const totalDesconto = (preco * 2) + (preco / 2)
    const valordoItemComDesconto = preco / 2

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${totalDesconto.toFixed(2)}`
    resp2.innerText = `O terceiro produto custará apenas R$: ${valordoItemComDesconto.toFixed(2)}`

    e.preventDefault()

})