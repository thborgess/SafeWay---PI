function cadastrarUsina() {
    const nomeGestor =  document.getElementById("nomeGestor").value
    const nomeUsina =  document.getElementById("nomeUsina").value
    const endereco =  document.getElementById("endereco").value

    const usina = {nomeGestor, nomeUsina, endereco}

    const options = {
        method: "POST",
        headers: new Headers ({ 'content-type': 'application/json' }),
        body: JSON.stringify(usina) 
    }

    fetch("http://localhost:3000/api/usinas", options).then(res=> {
        console.log(res);
    })
}