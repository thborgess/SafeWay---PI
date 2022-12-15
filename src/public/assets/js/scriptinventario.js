var inventarioTec = [
    {  
        "questao": "1",
        "Pergunta" : "Os Ativos, Softwares e Hardwares são inventariados: A cada 2 anos no mínimo?",
        "Resposta" :true
        },
        {   
            "questao": "2",
            "Pergunta" : "Os Ativos, Softwares e Hardwares são inventariados: Indicando seu fabricante?",
            "Resposta" :true
        },
        {   
            "questao": "3",
            "Pergunta" : "Os Ativos, Softwares e Hardwares são inventariados: indicando suas funções?",
            "Resposta" :true
        },
        {   
            "questao": "4",
            "Pergunta" : "Os Ativos, Softwares e Hardwares são inventariados: indicando seu endereço físico ou de rede?",
            "Resposta" :true
        },
        {   
            "questao": "5",
            "Pergunta" : "Os Ativos, Softwares e Hardwares são inventariados: Indicando seu protocolo e portas de comunicação?",
            "Resposta" :true
        },
        {   
            "questao": "6",
            "Pergunta" : "Os Ativos, Softwares e Hardwares são inventariados: indicando suas versões de firmeware e sistema operacional? ",
            "Resposta" :true
        },
        {   
            "questao": "7",
            "Pergunta" : "Há políticas de armazenamento bem definidas, com acesso restrito às pessoas? ",
            "Resposta" :true
        },
        {   
            "questao": "8",
            "Pergunta" : "Há o uso de padrões de configuração segura (hardening)?",
            "Resposta" :true
        },
        {   
            "questao": "9",
            "Pergunta" : "Há implementando mecanismo de monitoramento, automatizados ou manuis?",
            "Resposta" :true
        }
]

var count = 0

document.getElementById("enunciado").innerHTML = `<p>${inventarioTec[count].Pergunta}</p>`;

document.getElementById("h1questao").innerHTML = `<h1>Questão 1 de ${inventarioTec.length}</h1>`

function proxPerguntaInventario() {
    if (count + 1 < inventarioTec.length) {
        count += 1
    };

    document.getElementById("enunciado").innerHTML = `<p>${inventarioTec[count].Pergunta}</p>`;

    document.getElementById("h1questao").innerHTML = `<h1>Questão ${count + 1} de ${inventarioTec.length}</h1>`


    if (count != 0) {
        document.getElementById("botoesPergunta").style.justifyContent = 'space-between'
        document.getElementById("anterior").style.display = 'flex'
    }

    let cardSim = document.getElementById("cardSim");
    cardSim.classList.remove("selected");
    let labelSim = document.getElementById("labelSim");
    labelSim.classList.remove("selected");
    document.getElementById("checkedBoxSim").checked = false;
    let labelNao = document.getElementById("labelNao");
    labelNao.classList.remove("selected");
    let cardNao = document.getElementById("cardNao");
    cardNao.classList.remove("selected");
    document.getElementById("checkedBoxNao").checked = false;
    let labelNaoSei = document.getElementById("labelNaoSei");
    labelNaoSei.classList.remove("selected");
    let cardNaoSei = document.getElementById("cardNaoSei");
    cardNaoSei.classList.remove("selected");
    document.getElementById("checkedBoxNaoSei").checked = false;

    if (count == inventarioTec.length - 1) {
        document.getElementById("finalizar").style.display = 'flex'
        document.getElementById("proximo").style.display = 'none'
    } else {
        document.getElementById("finalizar").style.display = 'none'
        document.getElementById("proximo").style.display = 'flex'
    }

    let porcentoBarra = (count + 1) / inventarioTec.length * 100;

    document.getElementById("barraQuestionario").style.width = `${porcentoBarra}%`
}

function antPerguntaInventario() {
    if (count > 0) {
        count -= 1
    }

    if (count == 0) {
        document.getElementById("botoesPergunta").style.justifyContent = 'flex-end'
        document.getElementById("anterior").style.display = 'none'
    }

    console.log(count)

    document.getElementById("enunciado").innerHTML = `<p>${inventarioTec[count].Pergunta}</p>`;

    document.getElementById("h1questao").innerHTML = `<h1>Questão ${count + 1} de ${inventarioTec.length}</h1>`

    if (count != inventarioTec.length - 1) {
        document.getElementById("finalizar").style.display = 'none'
        document.getElementById("proximo").style.display = 'flex'
    }

    let porcentoBarra = (count + 1) / inventarioTec.length * 100;

    document.getElementById("barraQuestionario").style.width = `${porcentoBarra}%`;

    console.log(count)
}

var respostas = [];

function contarResposta() {
    const resposta = document.querySelector(".form-check-input:checked").value;
    
    respostas.push(resposta);

    console.log(respostas);
}


async function updateResInventario() {

    id = localStorage.getItem('id');

    const resposta = { respostasInventario: respostas };

    const options = {
        method: "PUT",
        headers: new Headers ({ 'content-type': 'application/json' }),
        body: JSON.stringify(resposta) 
    }

    fetch("http://localhost:3000/api/usinasInventario/" + id, options).then(res=> {
        console.log(res);
    })
}

//Gerenciador

function gerenciadorProxPergunta() {
    contarResposta();
    proxPerguntaInventario();
}

function gerenciadorPerguntaFinal() {
    contarResposta();
    updateResInventario()
    proxPergunta();
}