const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

console.log(url);

async function vizualizarInformacoesGlobais(){
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados);
}

vizualizarInformacoesGlobais()