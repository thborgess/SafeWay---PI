
/* FUNÇÕES */

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



function saveName(){
    const nomeUsina = document.getElementById("nomeUsina").value
    localStorage.setItem('name', nomeUsina) 
    sayMyName();
}

function removeName(){
    if(localStorage.getItem('name')){
        localStorage.removeItem('name');
    }
}

function selecionarDadosUsina() {
    const idUsinaSelect = document.getElementById("usinas").value;

    if(localStorage.getItem('id')){
        localStorage.removeItem('id');
    } 

    localStorage.setItem('id', idUsinaSelect)
}













/* funções API */

async function showUsinaNome() {
    const idSelected = localStorage.getItem("id")

    const response = await fetch("http://localhost:3000/api/usinas/" + idSelected);

    const usina = await response.json();

    document.getElementById("nomeusinah1").innerHTML = `<h1> ${usina.nomeUsina} </h1>`; 
}

async function showPontuacao() {
    const idSelected = localStorage.getItem("id")

    const response = await fetch("http://localhost:3000/api/usinas/" + idSelected);

    const usina = await response.json();

    document.getElementById("nomeusinah1").innerHTML = `<h1> ${usina.nomeUsina} </h1>`; 
    document.getElementById("pontuacaoArquitetura").innerHTML = `<p>Pontuação: ${usina.pontuacaoArquitetura} </p>`;
    document.getElementById("pontuacaoInventario").innerHTML = `<p>Pontuação: ${usina.pontuacaoInventario} </p>`;  
    document.getElementById("pontuacaoAcessos").innerHTML = `<p>Pontuação: ${usina.pontuacaoAcessos} </p>`; 
    document.getElementById("pontuacaoGoverno").innerHTML = `<p>Pontuação: ${usina.pontuacaoGovernanca} </p>`; 
    document.getElementById("pontuacaoVulneravel").innerHTML = `<p>Pontuação: ${usina.pontuacaoVulnerabilidade} </p>`; 
    document.getElementById("pontuacaoMonitor").innerHTML = `<p>Pontuação: ${usina.pontuacaoMonitoramento} </p>`; 
}

function cadastrarUsina() {
    const nomeGestor =  document.getElementById("nomeGestor").value;
    const nomeUsina =  document.getElementById("nomeUsina").value;
    const endereco =  document.getElementById("endereco").value;
    const pontuacaoArquitetura = 0;
    const pontuacaoAcessos = 0;
    const pontuacaoMonitoramento= 0;
    const pontuacaoInventario= 0;
    const pontuacaoGovernanca= 0;
    const pontuacaoVulnerabilidade= 0;
    const pontuacaoGeral = 0;

    const usina = {nomeGestor, nomeUsina, endereco, pontuacaoArquitetura, pontuacaoAcessos, pontuacaoMonitoramento, pontuacaoVulnerabilidade, pontuacaoInventario, pontuacaoGovernanca, pontuacaoGeral}

    const options = {
        method: "POST",
        headers: new Headers ({ 'content-type': 'application/json' }),
        body: JSON.stringify(usina) 
    }

    fetch("http://localhost:3000/api/usinas", options).then(res=> {
        console.log(res);
    })
}

async function listarRankingInicial() {
    const response = await fetch("http://localhost:3000/api/usinaslist");

    console.log(typeof response);

    const usinas = await response.json();
    const data = usinas.usinas

    console.log(typeof usinas); 

    let pontuacoes = [];

    data.map((usina) => {  
        pontuacoes.push({ pontos : usina.pontuacaoGeral,  nome : usina.nomeUsina});
    });

    pontuacoes.sort(function (a, b) {
        return b.pontos - a.pontos;
    });

    console.log(pontuacoes);

    for (let i = 0; i < 5; i++) {
        if (i == 0) {
            var html = `
            <div class="posicao">
                <div class="nomeUsina">
                    <div class="colocacao primeiro">1</div>
                    <p>${pontuacoes[i].nome}</p>
                </div>
                <div class="progress" >
                    <div id="clara" class="progress-bar" role="progressbar" aria-valuenow="${pontuacoes[i].pontos}"
                    aria-valuemin="0" aria-valuemax="60" style="width:${(pontuacoes[i].pontos/ 60) * 100}%">
                    <p>${pontuacoes[i].pontos} pontos</p>
                    </div>
                </div>
            </div>
            `
        } else if (i == 1) { 
            var html = `
            <div class="posicao">
                <div class="nomeUsina">
                    <div class="colocacao segundo">2</div>
                    <p>${pontuacoes[i].nome}</p>
                </div>
                <div class="progress" >
                    <div id="clara" class="progress-bar" role="progressbar" aria-valuenow="${pontuacoes[i].pontos}" aria-valu}"
                    aria-valuemin="0" aria-valuemax="60" style="width:${(pontuacoes[i].pontos / 60) * 100}%">
                    <p>${pontuacoes[i].pontos} pontos</p>
                    </div>
                </div>
            </div>
            `
        } else if (i == 2) {
            var html = `
            <div class="posicao">
                <div class="nomeUsina">
                    <div class="colocacao terceiro">3</div>
                    <p>${pontuacoes[i].nome}</p>
                </div>
                <div class="progress" >
                    <div id="clara" class="progress-bar" role="progressbar" aria-valuenow="${pontuacoes[i].pontos}"
                    aria-valuemin="0" aria-valuemax="60" style="width:${(pontuacoes[i].pontos / 60) * 100}%">
                    <p>${pontuacoes[i].pontos} pontos</p>
                    </div>
                </div>
            </div>
            `
        } else {
            var html = `
            <div class="posicao">
                <div class="nomeUsina">
                    <div class="colocacao">${i+1}</div>
                    <p>${pontuacoes[i].nome}</p>
                </div>
                <div class="progress" >
                    <div id="clara" class="progress-bar" role="progressbar" aria-valuenow="${pontuacoes[i].pontos}"
                    aria-valuemin="0" aria-valuemax="60" style="width:${(pontuacoes[i].pontos / 60) * 100}%">
                    <p>${pontuacoes[i].pontos} pontos</p>
                    </div>
                </div>
            </div>
            `
        }
    

        if (pontuacoes[i] != undefined) {
            let pontRanking = document.createElement('div');
            pontRanking.innerHTML = html;
            document.getElementById('ranking').appendChild(pontRanking);
        }
       
    }
}















/* organizador */
function selecionarUsina() {
    selecionarDadosUsina();
}

function aposCadastrar() {
    cadastrarUsina();
    removeName();
    saveName();
}




