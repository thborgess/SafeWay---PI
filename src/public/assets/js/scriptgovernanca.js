var governoTec = [
    {
        "Pergunta" : "Há um gestor e um suplente, responsáveis pela segurança cibernética e atuante como ponto externo?",
        "Resposta" :true
    }, 
    {
        "Pergunta" : "Há uma política definindo as responsabilidades na segurança cibernética?",
        "Resposta" :true
    }
]

var count = 0

document.getElementById("enunciado").innerHTML = `<p>${governoTec[count].Pergunta}</p>`;

document.getElementById("h1questao").innerHTML = `<h1>Questão 1 de ${governoTec.length}</h1>`

function proxPerguntaGoverno() {
    if (count + 1 < governoTec.length) {
        count += 1
    };

    document.getElementById("enunciado").innerHTML = `<p>${governoTec[count].Pergunta}</p>`;

    document.getElementById("h1questao").innerHTML = `<h1>Questão ${count + 1} de ${governoTec.length}</h1>`


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

    if (count == governoTec.length - 1) {
        document.getElementById("finalizar").style.display = 'flex'
        document.getElementById("proximo").style.display = 'none'
    } else {
        document.getElementById("finalizar").style.display = 'none'
        document.getElementById("proximo").style.display = 'flex'
    }

    let porcentoBarra = (count + 1) / governoTec.length * 100;

    document.getElementById("barraQuestionario").style.width = `${porcentoBarra}%`
}

function antPerguntaGoverno() {
    if (count > 0) {
        count -= 1
    }

    if (count == 0) {
        document.getElementById("botoesPergunta").style.justifyContent = 'flex-end'
        document.getElementById("anterior").style.display = 'none'
    }

    console.log(count)

    document.getElementById("enunciado").innerHTML = `<p>${governoTec[count].Pergunta}</p>`;

    document.getElementById("h1questao").innerHTML = `<h1>Questão ${count + 1} de ${governoTec.length}</h1>`

    if (count != governoTec.length - 1) {
        document.getElementById("finalizar").style.display = 'none'
        document.getElementById("proximo").style.display = 'flex'
    }

    let porcentoBarra = (count + 1) / governoTec.length * 100;

    document.getElementById("barraQuestionario").style.width = `${porcentoBarra}%`;

    console.log(count)
}

var respostas = [];

function contarResposta() {
    const resposta = document.querySelector(".form-check-input:checked").value;
    
    respostas.push(resposta);

    console.log(respostas);
}


async function updateResGovernanca() {

    id = localStorage.getItem('id');

    const resposta = { respostasGovernanca: respostas };

    const options = {
        method: "PUT",
        headers: new Headers ({ 'content-type': 'application/json' }),
        body: JSON.stringify(resposta) 
    }

    fetch("http://localhost:3000/api/usinasGovernanca/" + id, options).then(res=> {
        console.log(res);
    })
}

// Validar respostasGovernanca

async function validarRespostas() {
    const idSelected = localStorage.getItem("id")

    const response = await fetch("http://localhost:3000/api/usinas/" + idSelected);

    const usina = await response.json();

    const respostasGovern = usina.respostasGovernanca;


    respostasCorretas = [];
    respostasErradas = [];

    for (let i = 0; i < respostasGovern.length; i++) {
        if (respostasGovern[i] == "true") {
            respostasCorretas.push({ "num" : i, "resposta" : respostasGovern[i] });
        } else {
            respostasErradas.push({ "num" : i, "resposta" : respostasGovern[i] });
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

    const pontuacaoGovernanca = (respostasCorretas.length / respostasGovern.length) * 10

    console.log(pontuacaoGovernanca.toFixed(1));

    document.getElementById("nota").innerHTML = `<p class="nota">${pontuacaoGovernanca.toFixed(1)}/10</p>`;


    const pontuacao = { pontuacaoGovernanca: pontuacaoGovernanca.toFixed(1) };

    const options = {
        method: "PUT",
        headers: new Headers ({ 'content-type': 'application/json' }),
        body: JSON.stringify(pontuacao) 
    }

    fetch("http://localhost:3000/api/usinasPontGovern/" + idSelected, options).then(res=> {
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
    proxPerguntaGoverno();
}

function gerenciadorPerguntaFinal() {
    contarResposta();
    updateResGovernanca()
    proxPergunta();
}