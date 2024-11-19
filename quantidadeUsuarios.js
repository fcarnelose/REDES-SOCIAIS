async function quantidadeUsuarios(){

    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const NomeDasRedes = Object.keys(dados)
    const NumeroDeUsuarios = Object.values(dados)


const data = [
    {
        x: NomeDasRedes,
        y: NumeroDeUsuarios,
        type: 'bar'
    }
]

const grafico = document.createElement('div')
grafico.className = 'grafico'
document.getElementById('graficos-container').appendChild(grafico)
Plotly.newPlot(grafico,data)

}

quantidadeUsuarios()