var GestaoTec = [
    {   
        "questao": "1",
        "Pergunta" : "Gestão de pacotes de correção de segurança (patches) para todas as tecnologias conectadas ao ARCiber ?",
        "Resposta" :true
    },
    {   
        "questao": "2",
        "Pergunta" : "Gestão do cronograma de implementação das correções?",
        "Resposta" :true
    },
    {   
        "questao": "3",
        "Pergunta" : "Gestão de ativos inventariados para as atualizações disponibilizadas pelos fabricantes?",
        "Resposta" :true
    },
    {   
        "questao": "4",
        "Pergunta" : "Há restrições de novos ativos até que todos os pacotes de correção de segurança disponíveis sejam aplicados?",
        "Resposta" :true
    },
    {   
        "questao": "5",
        "Pergunta" : "Em caso de substituição de equipamento defeituoso a um prazo definido até a aplicação dos pacotes de correção de segurança?",
        "Resposta" :true
    }
]








var count = 0

document.getElementById("enunciado").innerHTML = `<p>${GestaoTec[count].Pergunta}</p>`;

document.getElementById("h1questao").innerHTML = `<h1>Questão 1 de ${GestaoTec.length}</h1>`

function proxPergunta() {
    if (count + 1 < GestaoTec.length) {
        count += 1
    };

    document.getElementById("enunciado").innerHTML = `<p>${GestaoTec[count].Pergunta}</p>`;

    document.getElementById("h1questao").innerHTML = `<h1>Questão ${count + 1} de ${GestaoTec.length}</h1>`


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

    if (count == GestaoTec.length - 1) {
        document.getElementById("finalizar").style.display = 'flex'
        document.getElementById("proximo").style.display = 'none'
    } else {
        document.getElementById("finalizar").style.display = 'none'
        document.getElementById("proximo").style.display = 'flex'
    }

    let porcentoBarra = (count + 1) / GestaoTec.length * 100;

    document.getElementById("barraQuestionario").style.width = `${porcentoBarra}%`
}

function antPerguntaGestao() {
    if (count > 0) {
        count -= 1
    }

    if (count == 0) {
        document.getElementById("botoesPergunta").style.justifyContent = 'flex-end'
        document.getElementById("anterior").style.display = 'none'
    }

    console.log(count)

    document.getElementById("enunciado").innerHTML = `<p>${GestaoTec[count].Pergunta}</p>`;

    document.getElementById("h1questao").innerHTML = `<h1>Questão ${count + 1} de ${GestaoTec.length}</h1>`

    if (count != GestaoTec.length - 1) {
        document.getElementById("finalizar").style.display = 'none'
        document.getElementById("proximo").style.display = 'flex'
    }

    let porcentoBarra = (count + 1) / GestaoTec.length * 100;

    document.getElementById("barraQuestionario").style.width = `${porcentoBarra}%`;

    console.log(count)
}

var respostas = [];

function contarResposta() {
    const resposta = document.querySelector(".form-check-input:checked").value;
    
    respostas.push(resposta);

    console.log(respostas);
}

async function updateResGestao() {

    id = localStorage.getItem('id');

    const resposta = { respostasVulnerabilidade: respostas };

    const options = {
        method: "PUT",
        headers: new Headers ({ 'content-type': 'application/json' }),
        body: JSON.stringify(resposta) 
    }

    fetch("http://localhost:3000/api/usinasVulnerabilidade/" + id, options).then(res=> {
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
    updateResGestao()
    proxPergunta();
}