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
            "Pergunta" : "Há uma Zona Corporativa na rede? ",
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
            "Pergunta" : "há soluções Antimalware atualizadas no seu ARCiber?",
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

function checkedBox() {
    document.querySelector(".cardAlternativa ").classList.add("selected");
}

var count = 0

function proxPergunta() {
    if (count + 1 < arquiteturaTec.length) {
        count += 1
    };

    document.getElementById("enunciado").innerHTML = `<p>${arquiteturaTec[count].Pergunta}</p>`;

    document.getElementById("h1questao").innerHTML = `<h1>Questão ${count + 1} de ${arquiteturaTec.length}</h1>`


    if (count != 1) {
        document.getElementById("botoesPergunta").style.justifyContent = 'space-between'
        document.getElementById("anterior").style.display = 'flex'
    }

    let porcentoBarra = (count + 1) / arquiteturaTec.length * 100;

    document.getElementById("barraQuestionario").style.width = `${porcentoBarra}%`

    console.log(count)
}

function antPergunta() {
    if (count > 0) {
        count -= 1
    }

    console.log(count)

    document.getElementById("enunciado").innerHTML = `<p>${arquiteturaTec[count].Pergunta}</p>`;

    document.getElementById("h1questao").innerHTML = `<h1>Questão ${count + 1} de ${arquiteturaTec.length}</h1>`

    let porcentoBarra = (count + 1) / arquiteturaTec.length * 100;

    document.getElementById("barraQuestionario").style.width = `${porcentoBarra}%`;

    console.log(count)
}
