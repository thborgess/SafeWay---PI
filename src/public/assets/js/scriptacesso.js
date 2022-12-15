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


async function updateResAcesso() {

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


// Validar respostasAcesso

async function validarRespostas() {
    const idSelected = localStorage.getItem("id")

    const response = await fetch("http://localhost:3000/api/usinas/" + idSelected);

    const usina = await response.json();

    const respostasAcesso = usina.respostasAcessos;


    respostasCorretas = [];
    respostasErradas = [];

    for (let i = 0; i < respostasAcesso.length; i++) {
        if (respostasAcesso[i] == "true") {
            respostasCorretas.push({ "num" : i, "resposta" : respostasAcesso[i] });
        } else {
            respostasErradas.push({ "num" : i, "resposta" : respostasAcesso[i] });
        }
    } 

    console.log(respostasCorretas);
    console.log(respostasErradas);


    for (let i = 0; i < respostasCorretas.length; i++) {
        let html = `
        <div class="cardAcerto">
            <div class="questaoTitulo">
                <img src="images/icons/correct.png" alt="">
                <h1>Questão ${respostasCorretas[i].num + 1}</h1>
            </div>
            <p>Um sistema supervisório permite que sejam monitoradas e rastreadas informações de um processo produtivo ou instalação física.</p>
            <b>Ref.: <a href="https://bityli.com/wCtkzXtn">https://bityli.com/wCtkzXtn</a></b>
        </div>
        `

        let cardAcerto = document.createElement('div');
        cardAcerto.innerHTML = html;
        document.getElementById('acertos').appendChild(cardAcerto);
    }

    for (let i = 0; i < respostasErradas.length; i++) {
        let html = `
        <div class="cardErro">
            <div class="questaoTitulo">
                <img src="images/icons/wrong.png" alt="">
                <h1>Questão ${respostasErradas[i].num + 1}</h1>
            </div>
            <p>Um sistema supervisório permite que sejam monitoradas e rastreadas informações de um processo produtivo ou instalação física.</p>
            <b>Ref.: <a href="https://bityli.com/wCtkzXtn">https://bityli.com/wCtkzXtn</a></b>
        </div>
        `

        let cardAcerto = document.createElement('div');
        cardAcerto.innerHTML = html;
        document.getElementById('erros').appendChild(cardAcerto);
    }

    const pontuacaoAcesso = (respostasCorretas.length / respostasAcesso.length) * 10

    console.log(pontuacaoAcesso.toFixed(1));

    document.getElementById("nota").innerHTML = `<p class="nota">${pontuacaoAcesso.toFixed(1)}/10</p>`;


    const pontuacao = { pontuacaoAcessos: pontuacaoAcesso.toFixed(1) };

    const options = {
        method: "PUT",
        headers: new Headers ({ 'content-type': 'application/json' }),
        body: JSON.stringify(pontuacao) 
    }

    fetch("http://localhost:3000/api/usinasPontAcessos/" + idSelected, options).then(res=> {
        console.log(res);
    })
}

async function contarRespostaGeral() {

    id = localStorage.getItem('id');

    const response = await fetch("http://localhost:3000/api/usinas/" + id);

    const usina = await response.json();

    const pontuacaoGeral = usina.pontuacaoArquitetura + usina.pontuacaoInventario + usina.pontuacaoAcessos + usina.pontuacaoMonitoramento + usina.pontuacaoGovernanca + usina.pontuacaoVulnerabilidade;


    const resposta = { pontuacaoGeral: pontuacaoGeral };

    const options = {
        method: "PUT",
        headers: new Headers ({ 'content-type': 'application/json' }),
        body: JSON.stringify(resposta) 
    }

    fetch("http://localhost:3000/api/usinasPontGeral/" + id, options).then(res=> {
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
    updateResAcesso()
    proxPergunta();
}