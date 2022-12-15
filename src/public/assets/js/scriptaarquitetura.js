var arquiteturaTec = [
    {
        "Pergunta" : "Há uma Zona de supervisão da rede?",
        "Resposta" :true
    },
    {         
        "Pergunta" : "Há uma Zona DMZ Operativa na rede?",
        "Resposta" :true
    },
    {         
        "Pergunta" : "Há uma Zona Corporativa na rede?",
        "Resposta" :true
    },
    {         
        "Pergunta" : "Há restrição de acesso ao seu ARCiber(Ambiente Regulado Cibernético)?",
        "Resposta" :true
    },
    {         
        "Pergunta" : "Caso seu ARCiber seja acessado por redes externas, há um uso de VPN por meio de um gateway com controle de segurança?",
        "Resposta" :true
    },
    {         
        "Pergunta" : "Há soluções Antimalware atualizadas no seu ARCiber?",
        "Resposta" :true
    },
    {         
        "Pergunta" : "Há uso de Application Whitelisting, ou como complemento a Soluções Antimalware?",
        "Resposta" :true
    }
]














// QUESTOES

async function listarQuestoes() {
    const response = await fetch("http://localhost:3000/api/arquitetura");

    console.log(typeof response);

    const questoes = await response.json();
    var questoesArray = questoes.perguntas

    console.log(questoesArray[0].enunciado);
}

var count = 0

document.getElementById("enunciado").innerHTML = `<p>${arquiteturaTec[count].Pergunta}</p>`;

document.getElementById("h1questao").innerHTML = `<h1>Questão 1 de ${arquiteturaTec.length}</h1>` 

function proxPergunta() {
    if (count + 1 < arquiteturaTec.length) {
        count += 1
    };

    document.getElementById("enunciado").innerHTML = `<p>${arquiteturaTec[count].Pergunta}</p>`;

    document.getElementById("h1questao").innerHTML = `<h1>Questão ${count + 1} de ${arquiteturaTec.length}</h1>`


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

    if (count == arquiteturaTec.length - 1) {
        document.getElementById("finalizar").style.display = 'flex'
        document.getElementById("proximo").style.display = 'none'
    } else {
        document.getElementById("finalizar").style.display = 'none'
        document.getElementById("proximo").style.display = 'flex'
    }

    let porcentoBarra = (count + 1) / arquiteturaTec.length * 100;

    document.getElementById("barraQuestionario").style.width = `${porcentoBarra}%`
}

function antPergunta() {
    if (count > 0) {
        count -= 1
    }

    if (count == 0) {
        document.getElementById("botoesPergunta").style.justifyContent = 'flex-end'
        document.getElementById("anterior").style.display = 'none'
    }

    console.log(count)

    document.getElementById("enunciado").innerHTML = `<p>${arquiteturaTec[count].Pergunta}</p>`;

    document.getElementById("h1questao").innerHTML = `<h1>Questão ${count + 1} de ${arquiteturaTec.length}</h1>`

    if (count != arquiteturaTec.length - 1) {
        document.getElementById("finalizar").style.display = 'none'
        document.getElementById("proximo").style.display = 'flex'
    }

    let porcentoBarra = (count + 1) / arquiteturaTec.length * 100;

    document.getElementById("barraQuestionario").style.width = `${porcentoBarra}%`;

    console.log(count)
}

var respostas = [];

function contarResposta() {
    const resposta = document.querySelector(".form-check-input:checked").value;
    
    respostas.push(resposta);

    console.log(respostas);
}


async function updateResArquitetura() {

    id = localStorage.getItem('id');

    const resposta = { respostasArquitetura: respostas };

    const options = {
        method: "PUT",
        headers: new Headers ({ 'content-type': 'application/json' }),
        body: JSON.stringify(resposta) 
    }

    fetch("http://localhost:3000/api/usinasArquitetura/" + id, options).then(res=> {
        console.log(res);
    })
}

//Gerenciador

function gerenciadorProxPergunta() {
    contarResposta();
    proxPergunta();
}

function gerenciadorPerguntaFinal() {
    contarResposta();
    updateResArquitetura()
    proxPergunta();
}