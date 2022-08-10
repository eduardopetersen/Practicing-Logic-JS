function calcularMedia() {
    const inNome = document.querySelector("#inNome");
    const inNota1 = document.querySelector("#inNota1");
    const inNota2 = document.querySelector("#inNota2");
    const outSituacao = document.querySelector("#outSituacao");
    const outMedia = document.querySelector("#outMedia");

    const nome = inNome.value;
    const nota1 = Number(inNota1.value);
    const nota2 = Number(inNota2.value);

    const media = (nota1 + nota2) / 2

    outMedia.textContent = `Média das Notas: ${media.toFixed(1)}`

    if (media >= 7) {
        outSituacao.textContent = `Parábens ${nome}! Você foi aprovado(a)`;
        outSituacao.style.color = "blue";

    }   else {
            outSituacao.textContent = `Ops ${nome}! Você foi reprovado(a)`;
            outSituacao.style.color = "red";
        } 
    }

    const btResultado = document.querySelector("#btResultado");
    btResultado.addEventListener("click", calcularMedia);

