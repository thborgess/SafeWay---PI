var acessoTec = [
    {
        "Pergunta" : "Há uma política de gestão de acessos e identidades?",
        "Resposta" :true
    },
    {   
        "Pergunta" : "Há uso de credenciais de acesso individuais e aprovadas por uma alçada competente?",
        "Resposta" :true
    },
    {   
        "Pergunta" : "Há uso de uma lista das pessoas autorizadas a usar as contas compartilhadas?",
        "Resposta" :true
    }
]

var count = 0

document.getElementById("enunciado").innerHTML = `<p>${acessoTec[count].Pergunta}</p>`;

document.getElementById("h1questao").innerHTML = `<h1>Questão 1 de ${acessoTec.length}</h1>`

function proxPerguntaAcesso() {
    if (count + 1 < acessoTec.length) {
        count += 1
    };

    document.getElementById("enunciado").innerHTML = `<p>${acessoTec[count].Pergunta}</p>`;

    document.getElementById("h1questao").innerHTML = `<h1>Questão ${count + 1} de ${acessoTec.length}</h1>`


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

    if (count == acessoTec.length - 1) {
        document.getElementById("finalizar").style.display = 'flex'
        document.getElementById("proximo").style.display = 'none'
    } else {
        document.getElementById("finalizar").style.display = 'none'
        document.getElementById("proximo").style.display = 'flex'
    }

    let porcentoBarra = (count + 1) / acessoTec.length * 100;

    document.getElementById("barraQuestionario").style.width = `${porcentoBarra}%`
}

function antPerguntaAcesso() {
    if (count > 0) {
        count -= 1
    }

    if (count == 0) {
        document.getElementById("botoesPergunta").style.justifyContent = 'flex-end'
        document.getElementById("anterior").style.display = 'none'
    }

    console.log(count)

    document.getElementById("enunciado").innerHTML = `<p>${acessoTec[count].Pergunta}</p>`;

    document.getElementById("h1questao").innerHTML = `<h1>Questão ${count + 1} de ${acessoTec.length}</h1>`

    if (count != acessoTec.length - 1) {
        document.getElementById("finalizar").style.display = 'none'
        document.getElementById("proximo").style.display = 'flex'
    }

    let porcentoBarra = (count + 1) / acessoTec.length * 100;

    document.getElementById("barraQuestionario").style.width = `${porcentoBarra}%`;

    console.log(count)
}