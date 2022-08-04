// crie referência ao form e aos elementos h3 e h4 

const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

// cria um "ouvinte de evento, acionado quando o botão submit for clicado"

frm.addEventListener("submit", (e) => {
    const titulo = frm.inTitulo.value   // obtém conteúdo dos campos
    const duracao = Number(frm.inDuracao.value)

    const horas = Math.floor(duracao / 60) // arredonda para baixo resultado
    const minutos = duracao % 60 // obtem resultado da divisao

    resp1.innerText = titulo // exibe resposta
    resp2.innerText = `${horas} horas(s) e ${minutos} minuto(s)`

    e.preventDefault() // evita envio do form

}  )