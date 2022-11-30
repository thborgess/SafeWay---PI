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



function arquiteturaTec() {
    var area = "Arquitetura Tecnológica"
    return area;
}

function checkedBoxSim() {
    let cardSim = document.getElementById("cardSim");
    let labelSim = document.getElementById("labelSim");
    cardSim.classList.toggle("selected");
    labelSim.classList.toggle("selected");
    document.getElementById("checkedBoxSim").checked = true;
    

    let cardNao = document.getElementById("cardNao");
    cardNao.classList.remove("selected");
    let labelNao = document.getElementById("labelNao");
    labelNao.classList.remove("selected");
    document.getElementById("checkedBoxNao").checked = false;

    let cardNaoSei = document.getElementById("cardNaoSei");
    cardNaoSei.classList.remove("selected");
    let labelNaoSei = document.getElementById("labelNaoSei");
    labelNaoSei.classList.remove("selected");
    document.getElementById("checkedBoxNaoSei").checked = false;
}

function checkedBoxNao() {
    let cardSim = document.getElementById("cardSim");
    cardSim.classList.remove("selected");
    let labelSim = document.getElementById("labelSim");
    labelSim.classList.remove("selected");
    document.getElementById("checkedBoxSim").checked = false;

    let labelNao = document.getElementById("labelNao");
    labelNao.classList.toggle("selected");
    let cardNao = document.getElementById("cardNao");
    cardNao.classList.toggle("selected");
    document.getElementById("checkedBoxNao").checked = true;

    let labelNaoSei = document.getElementById("labelNaoSei");
    labelNaoSei.classList.remove("selected");
    let cardNaoSei = document.getElementById("cardNaoSei");
    cardNaoSei.classList.remove("selected");
    document.getElementById("checkedBoxNaoSei").checked = false;
}

function checkedBoxNaoSei() {
    let labelSim = document.getElementById("labelSim");
    labelSim.classList.remove("selected");
    let cardSim = document.getElementById("cardSim");
    cardSim.classList.remove("selected");
    document.getElementById("checkedBoxSim").checked = false;


    let labelNao = document.getElementById("labelNao");
    labelNao.classList.remove("selected");
    let cardNao = document.getElementById("cardNao");
    cardNao.classList.remove("selected");
    document.getElementById("checkedBoxNao").checked = false;

    let labelNaoSei = document.getElementById("labelNaoSei");
    labelNaoSei.classList.toggle("selected");
    let cardNaoSei = document.getElementById("cardNaoSei");
    cardNaoSei.classList.toggle("selected");
    document.getElementById("checkedBoxNaoSei").checked = true;
}

function abaAcertos() {
    let abaAcertos = document.getElementById("abaAcertos");
    abaAcertos.classList.add("abaSelected");

    let abaErros= document.getElementById("abaErros");
    abaErros.classList.remove("abaSelected");

    let acertos= document.getElementById("acertos");
    acertos.classList.remove("unselected");

    let erros= document.getElementById("erros");
    erros.classList.add("unselected");
}

function abaErros() {
    let abaAcertos = document.getElementById("abaAcertos");
    abaAcertos.classList.remove("abaSelected");

    let abaErros= document.getElementById("abaErros");
    abaErros.classList.add("abaSelected");

    let acertos= document.getElementById("acertos");
    acertos.classList.add("unselected");

    let erros= document.getElementById("erros");
    erros.classList.remove("unselected");
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

    console.log(count)
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
