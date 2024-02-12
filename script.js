const perguntas = [
    //Objeto contendo a pergunta, respostas, e a opção correta
    {
        pergunta: "Quanto é 1 mais 2?",
        respostas: [
            "4",
            "5",
            "3",
        ],
        correta: 2
    },
    {
        pergunta: "Quanto é 5 menos 4?",
        respostas: [
            "4",
            "1",
            "9",
        ],
        correta: 1
    },
    {
        pergunta: "Quanto é 7 vezes 1?",
        respostas: [
            "14",
            "7",
            "21",
        ],
        correta: 1
    },
    {
        pergunta: "Quanto é 63 dividido por 9?",
        respostas: [
            "7",
            "9",
            "8",
        ],
        correta: 0
    },
    {
        pergunta: "Quanto é 10 multiplicado por 0?",
        respostas: [
            "10",
            "100",
            "0",
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