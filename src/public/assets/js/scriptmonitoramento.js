var monitorTec = [
    {  
        "questao": "1",
        "Pergunta" : "Os ativos do ARCiber estão configurados para gerar logs de segurança apropriados para dar suporte a investigações e a reconstrução de possíveis incidentes de segurança?",
        "Resposta" :true
    },
    {   
        "questao": "2",
        "Pergunta" : "Os dispositivos de segurança como Firewalls, IDS/IPS, Antimalware e subsistemas de autenticação estão configurados para gerar alertas caso identifiquem atividades suspeitas?",
        "Resposta" :true
    },
    {   
        "questao": "3",
        "Pergunta" : "As regras para geração de alertas são revisadas periodicamente?",
        "Resposta" :true
    },
    {   
        "questao": "4",
        "Pergunta" : "Todos os alertas são reportados imediatamente à equipe responsável definida na política de segurança do agente? ",
        "Resposta" :true
    },
    {   
        "questao": "5",
        "Pergunta" : "Os alertas gerados são analisados e respondidos no prazo definido pela política de segurança do agente?",
        "Resposta" :true
    },
    {   
        "questao": "6",
        "Pergunta" : "Foram estabelecidos mecanismos para identificação e Resposta a incidentes cibernéticos tempestivamente?",
        "Resposta" :true
    },
    {   
        "questao": "7",
        "Pergunta" : "Foi implementado um plano de Resposta a incidentes cibernéticos?",
        "Resposta" :true
    },
    {   
        "questao": "8",
        "Pergunta" : "Há uma identificação dos cenários de risco cibernéticos aplicáveis ao ARCiber e estratégias de tratamento para cada Renário?",
        "Resposta" :true
    },
    {   
        "questao": "9",
        "Pergunta" : "Foram estabelecidos níveis de classificação do impacto de um incidente à operação?",
        "Resposta" :true
    },
    {   
        "questao": "10",
        "Pergunta" : "Há uma política de equipes envolvidas, com os seus respectivos papéis e responsabilidades antes, durante e depois dasRcrises?",
        "Resposta" :true
    },
    {   
        "questao": "11",
        "Pergunta" : "Está definido critérios para ativação do plano de Resposta a incidentes cibernéticos?",
        "Resposta" :true
    },
    {   
        "questao": "12",
        "Pergunta" : "São realizados testes de ativação dos planos de Resposta a incidentes cibernéticos periodicamente cobrindo as listas de aRivação (call tree) e revisão dos procedimentos descritos?",
        "Resposta" :true
    },
    {   
        "questao": "13",
        "Pergunta" : "Incidentes cibernéticos que afetem ativos do ARCiber são informados ao ONS? ",
        "Resposta" :true
    }
]













var count = 0

document.getElementById("enunciado").innerHTML = `<p>${monitorTec[count].Pergunta}</p>`;

document.getElementById("h1questao").innerHTML = `<h1>Questão 1 de ${monitorTec.length}</h1>`

function proxPerguntaMonitor() {
    if (count + 1 < monitorTec.length) {
        count += 1
    };

    document.getElementById("enunciado").innerHTML = `<p>${monitorTec[count].Pergunta}</p>`;

    document.getElementById("h1questao").innerHTML = `<h1>Questão ${count + 1} de ${monitorTec.length}</h1>`


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

    if (count == monitorTec.length - 1) {
        document.getElementById("finalizar").style.display = 'flex'
        document.getElementById("proximo").style.display = 'none'
    } else {
        document.getElementById("finalizar").style.display = 'none'
        document.getElementById("proximo").style.display = 'flex'
    }

    let porcentoBarra = (count + 1) / monitorTec.length * 100;

    document.getElementById("barraQuestionario").style.width = `${porcentoBarra}%`
}

function antPerguntaMonitor() {
    if (count > 0) {
        count -= 1
    }

    if (count == 0) {
        document.getElementById("botoesPergunta").style.justifyContent = 'flex-end'
        document.getElementById("anterior").style.display = 'none'
    }

    console.log(count)

    document.getElementById("enunciado").innerHTML = `<p>${monitorTec[count].Pergunta}</p>`;

    document.getElementById("h1questao").innerHTML = `<h1>Questão ${count + 1} de ${monitorTec.length}</h1>`

    if (count != monitorTec.length - 1) {
        document.getElementById("finalizar").style.display = 'none'
        document.getElementById("proximo").style.display = 'flex'
    }

    let porcentoBarra = (count + 1) / monitorTec.length * 100;

    document.getElementById("barraQuestionario").style.width = `${porcentoBarra}%`;

    console.log(count)
}

var respostas = [];

function contarResposta() {
    const resposta = document.querySelector(".form-check-input:checked").value;
    
    respostas.push(resposta);

    console.log(respostas);
}


async function updateResMonitoramento() {

    id = localStorage.getItem('id');

    const resposta = { respostasMonitoramento: respostas };

    const options = {
        method: "PUT",
        headers: new Headers ({ 'content-type': 'application/json' }),
        body: JSON.stringify(resposta) 
    }

    fetch("http://localhost:3000/api/usinasMonitoramento/" + id, options).then(res=> {
        console.log(res);
    })
}


// Validar respostasMonitoramento

async function validarRespostas() {
    const idSelected = localStorage.getItem("id")

    const response = await fetch("http://localhost:3000/api/usinas/" + idSelected);

    const usina = await response.json();

    const respostasMonitor = usina.respostasMonitoramento;


    respostasCorretas = [];
    respostasErradas = [];

    for (let i = 0; i < respostasMonitor.length; i++) {
        if (respostasMonitor[i] == "true") {
            respostasCorretas.push({ "num" : i, "resposta" : respostasMonitor[i] });
        } else {
            respostasErradas.push({ "num" : i, "resposta" : respostasMonitor[i] });
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

    const pontuacaoMonitoramento = (respostasCorretas.length / respostasMonitor.length) * 10

    console.log(pontuacaoMonitoramento.toFixed(1));

    document.getElementById("nota").innerHTML = `<p class="nota">${pontuacaoMonitoramento.toFixed(1)}/10</p>`;


    const pontuacao = { pontuacaoMonitoramento: pontuacaoMonitoramento.toFixed(1) };

    const options = {
        method: "PUT",
        headers: new Headers ({ 'content-type': 'application/json' }),
        body: JSON.stringify(pontuacao) 
    }

    fetch("http://localhost:3000/api/usinasPontMonitor/" + idSelected, options).then(res=> {
        console.log(res);
    })
}

async function contarRespostaGeral() {

    id = localStorage.getItem('id');

    const response = await fetch("http://localhost:3000/api/usinas/" + id);

    const usina = await response.json();

    const pontuacaoGeral = usina.pontuacaoArquitetura + usina.pontuacaoInventario + usina.pontuacaoAcessos + usina.pontuacaoMonitoramento + usina.pontuacaoGovernanca + usina.pontuacaoVulnerabilidade;


    const resposta = { pontuacaoGeral: pontuacaoGeral.toFixed(1) };

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
    proxPerguntaMonitor();
}

function gerenciadorPerguntaFinal() {
    contarResposta();
    updateResMonitoramento()
    proxPergunta();
}