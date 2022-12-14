var respostasArquitetura = [];

function contarRespostaArquitetura() {
    const resposta = document.querySelector('.form-check-input:checked').value;
    
    respostasArquitetura.push(resposta);

    console.log(respostasArquitetura);
}