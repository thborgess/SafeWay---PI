var acessoTec = [
    {
        "questao": "1",
        "Pergunta" : "Há uma política de gestão de acessos e identidades?",
        "Resposta" :true
    },
    {   
        "questao": "2",
        "Pergunta" : "Há uso de credenciais de acesso individuais e aprovadas por uma alçada competente?",
        "Resposta" :true
    },
    {   
        "questao": "3",
        "Pergunta" : "Há uso de uma lista das pessoas autorizadas a usar as contas compartilhadas?",
        "Resposta" :true
    },
    {   
        "questao": "4",
        "Pergunta" : "Há restrições de acesso à senha de contas embarcadas e número limitado de pessoas?",
        "Resposta" :true
    },
    {   
        "questao": "5",
        "Pergunta" : "há uma senha distinta a cada ativo que possua credencial embarcada? (uma mesma senha não deve ser atribuída a mais de um ativo) ",
        "Resposta" :true
    },
    {   
        "questao": "6",
        "Pergunta" : "Há uma política de senhas que contemple: tamanho mínimo, complexidade, necessidade de ser diferente da senha padrão do fabricante?",
        "Resposta" :true
    },
    {   
        "questao": "7",
        "Pergunta" : "Há ações caso um número máximo de tentativas de acesso malsucedidas seja atingido?",
        "Resposta" :true
    },
    {   
        "questao": "8",
        "Pergunta" : "Há critérios para a gestão de mudanças (prazo, ocorrência de incidentes)?",
        "Resposta" :true
    },
    {   
        "questao": "9",
        "Pergunta" : "A política de senhas é implementada o nível máximo suportado pelo ativo por controles tecnológicos ou por procedimento?",
        "Resposta" :true
    },
    {   
        "questao": "10",
        "Pergunta" : "Na construção dos perfis de acesso é seguido o princípio de acesso mínimo necessário? ",
        "Resposta" :true
    },
    {   
        "questao": "11",
        "Pergunta" : "É definido um prazo máximo para cancelamento/remoção de credenciais de usuários desligados e de credenciais sem uso?  ",
        "Resposta" :true
    },
    {   
        "questao": "12",
        "Pergunta" : "Credenciais de acesso privilegiadas estão sujeitas a controles específicos: Com revisão periódica pelo gestor do ARCiber? ",
        "Resposta" :true
    },
    {   
        "questao": "13",
        "Pergunta" : "Credenciais de acesso privilegiadas estão sujeitas a controles específicos: Do exclusivo durante a execução de tarefas administrativas?",
        "Resposta" :true
    },
    {   
        "questao": "14",
        "Pergunta" : "Credenciais de acesso privilegiadas estão sujeitas a controles específicos: Monitoradas através de trilhas de auditoria?",
        "Resposta" :true
    },
    {   
        "questao": "15",
        "Pergunta" : "Credenciais de acesso privilegiadas estão sujeitas a controles específicos: Como a utilização de múltiplos fatores de autenticação como, por exemplo, tokens OTP ou reconhecimento biométrico?",
        "Resposta" :true
    }
]

// QUESTOES

// QUESTOES

async function listarQuestoes() {
    const response = await fetch("http://localhost:3000/api/arquitetura");

    console.log(typeof response);

    const questoes = await response.json();
    var questoesArray = questoes.perguntas

    console.log(questoesArray[0].enunciado);
}

var count = 0

document.getElementById("enunciado").innerHTML = `<p>${acessoTec[count].Pergunta}</p>`;

document.getElementById("h1questao").innerHTML = `<h1>Questão 1 de ${acessoTec.length}</h1>`

function proxPergunta() {
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

var respostas = [];

function contarResposta() {
    const resposta = document.querySelector(".form-check-input:checked").value;
    
    respostas.push(resposta);

    console.log(respostas);
}


async function updateResArquitetura() {

    id = localStorage.getItem('id');

    const resposta = { respostasAcessos: respostas };

    const options = {
        method: "PUT",
        headers: new Headers ({ 'content-type': 'application/json' }),
        body: JSON.stringify(resposta) 
    }

    fetch("http://localhost:3000/api/usinasAcessos/" + id, options).then(res=> {
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