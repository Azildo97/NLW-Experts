const perguntas = [
    //Objeto contendo a pergunta, respostas, e a opção correta
    {
        pergunta: "Qual é a capital da Argentina?",
        respostas: [
            "Buenos Aires",
            "Rosário",
            "Mendoza",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a maior cidade do Brasil?",
        respostas: [
            "Rio de Janeiro",
            "Belo Horizonte",
            "São Paulo",
        ],
        correta: 2
    },
    {
        pergunta: "Qual a capital do Rio de Janeiro?",
        respostas: [
            "Niterói",
            "Rio de Janeiro",
            "Angra dos Reis",
        ],
        correta: 1
    },
    {
        pergunta: "Em qual região (Norte, Nordeste, Centro-Oeste, Sudeste ou Sul) fica o estado do Maranhão?",
        respostas: [
            "Norte",
            "Nordeste",
            "Centro-Oeste",
        ],
        correta: 1
    },
    {
        pergunta: "Qual país possui a maior fronteira com o Brasil?",
        respostas: [
            "Paraguai",
            "Peru",
            "Bolivia",
        ],
        correta: 2
    },
]
const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas){
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if(estaCorreta){
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
        
        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem);
}
