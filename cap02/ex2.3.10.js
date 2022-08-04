const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")


frm.addEventListener("submit", (e) => {

    const valor = Number(frm.inValorMinuto.value)
    const tempo = Number(frm.inTempoUso.value)

    const tempoTotalDeUso = Math.ceil(tempo / 15)
    const valorApagar = tempoTotalDeUso * valor

  resp1.innerText = `Valor a pagar R$ ${valorApagar.toFixed(2)}` 

  e.preventDefault()

})


