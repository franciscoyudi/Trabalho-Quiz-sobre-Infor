class Pergunta {
    constructor(pergunta, respostas, respostaCorreta) {
        this.pergunta = pergunta
        this.respostas = respostas
        this.respostaCorreta = respostaCorreta
    }
}

const perguntas = [
    new Pergunta(
        "Qual é a diferença entre == e === em JavaScript?", [" == compara apenas os valores dos operandos, enquanto === compara tanto os valores quanto os tipos de dados.",

        " == compara tanto os valores quanto os tipos de dados dos operandos, enquanto === compara apenas os valores.",

        " == é utilizado para atribuição de valores, enquanto === é utilizado para comparação de valores.",

        "Não há diferença entre == e ===, ambos realizam comparações de valores e tipos de dados da mesma forma."],
        0 //B
    ),


    new Pergunta(
        "Qual é a diferença entre let e var em JavaScript?", [" let é usado para declarar variáveis globais, enquanto var é usado para variáveis locais.", " let tem escopo de bloco, o que significa que só está acessível dentro do bloco onde foi declarado, enquanto var tem escopo de função.", " let e var são sinônimos e podem ser usados de forma intercambiável.", " let é uma palavra-chave reservada em JavaScript, enquanto var não é."], 1),
    new Pergunta("Quais são os quatro pilares da POO?", [" Encapsulamento, Polimorfismo, Abstração e Herança.", " Instrução, Variável, Função e Objeto.", " Iteração, Condição, Modulação e Herança.", " Classe, Objeto, Método e Herança."], 0),
    new Pergunta("O que é uma classe em POO?", [" Uma instância de um objeto.", " Um conjunto de variáveis e funções que descrevem um tipo de objeto.", " Um tipo especial de variável.", " Uma função que cria objetos."], 1),
    new Pergunta("O que é herança em POO?", [" Um mecanismo que permite que um objeto adquira as propriedades e métodos de outro objeto.", " Um princípio que descreve a capacidade de um objeto de assumir várias formas.", " Um conceito que descreve a capacidade de um objeto de se comportar de maneiras diferentes em diferentes situações.", " Um método para criar novos objetos com base em modelos existentes."], 0),
    new Pergunta("O que é o DOM em JavaScript?", [" Uma linguagem de programação popular para desenvolvimento web.", " Uma técnica para criar páginas web estáticas.", " Uma interface de programação que permite a manipulação de elementos HTML e XML.", " Uma biblioteca JavaScript para criação de gráficos animados."], 2),
    new Pergunta("O que é um sistema operacional?", [" Um software que gerencia hardware e fornece serviços para aplicativos.", " Um dispositivo físico que armazena dados do sistema.", " Um aplicativo que controla o hardware do computador.", " Um conjunto de ferramentas de programação para desenvolvimento de software."], 0),
    new Pergunta("Qual é a diferença entre memória RAM e memória ROM?", [" A RAM é apenas para leitura, enquanto a ROM é para escrita e leitura.", " A RAM é volátil e temporária, enquanto a ROM é não volátil e permanente.", " A RAM armazena o sistema operacional, enquanto a ROM armazena dados do usuário.", " A RAM é mais rápida que a ROM."], 1)
]
function shuffle(perguntas) {
    let currentIndex = perguntas.length;

    while (currentIndex !== 0) {

        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [perguntas[currentIndex], perguntas[randomIndex]] = [perguntas[randomIndex], perguntas[currentIndex]];
    }
}
shuffle(perguntas)
let indicePerguntaAtual = 0
let acertos = 0

function comecar() {
    const main = document.querySelector('.main')
    const pergunta = document.querySelector('.pergunta')
    main.style.display = 'none'
    pergunta.style.display = 'block'
    mostrarPergunta()
}

function mostrarPergunta() {
    const perguntaAtual = perguntas[indicePerguntaAtual]
    const pergunta_titulo = document.getElementById('pergunta')
    const as_respostas = document.querySelectorAll('label')
    pergunta_titulo.textContent = perguntaAtual.pergunta
    perguntaAtual.respostas.forEach((resposta, indice) => {
        as_respostas[indice].textContent = resposta
    })
}

function verificarResposta() {
    const radios = document.querySelectorAll('input[type="radio"]')
    let as_respostaSelecionada = null
    radios.forEach((input, indice) => {
        if (input.checked) {
            as_respostaSelecionada = indice
        }
    })
    if (as_respostaSelecionada !== null) {
        const perguntaAtual = perguntas[indicePerguntaAtual]
        if (as_respostaSelecionada === perguntaAtual.respostaCorreta) {
            acertos++
        }
        indicePerguntaAtual++
        if (indicePerguntaAtual < perguntas.length) {
            mostrarPergunta()
        } else {
            mostrarResultado()
        }
    } else {
        alert('Selecione uma resposta!')
    }
}

function mostrarResultado() {
    const pergunta = document.querySelector('.pergunta')
    pergunta.style.display = 'none'
    const resultado = document.createElement('h3')
    resultado.style.background = "rgba(156, 77, 209, 0.623)"
    resultado.style.color = "white"
    resultado.style.borderRadius = "15px"
    resultado.style.padding = "40px 100px"
    resultado.style.display = "flex"
    resultado.style.flexDirection = "column"
    resultado.style.marginTop = "50px"

    resultado.textContent = `Você acertou ${acertos} de ${perguntas.length} perguntas.`
    document.body.appendChild(resultado)
    resultado.innerHTML += `            <a href="index.html" class="botao">
                <span style="text-align: center;"> <strong>Tentar novamente</strong> </span>
                <div class="border-botao"></div>
            </a>`

}

