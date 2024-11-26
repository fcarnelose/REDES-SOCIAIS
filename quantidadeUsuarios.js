import { getCSS,tickConfig } from "./common.js";


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
        type: 'bar',
        marker:{
            color: getCSS('--destaque')
        }
    }
]

const layout = {
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    title:{
        text: 'REDES SOCIAIS COM MAIS USUARIOS NO MUNDO',
        x:0,
        font: {
            color: getCSS('--destaque'),
            family: getCSS('--font'),
            size: 30,
        }
    },
    xaxis: {
        tickfont: tickConfig,
        title: {
            text: 'NOME DAS REDES',
            font: {
                color: getCSS('--destaque')
            }
        }
    },
    yaxis: {
        tickfont: tickConfig,
        title: {
            text: 'BILHÕES DE USUÁRIOS',
            font: {
                color: getCSS('--destaque')
            }
        }
    }
}

const grafico = document.createElement('div')
grafico.className = 'grafico'
document.getElementById('graficos-container').appendChild(grafico)
Plotly.newPlot(grafico,data,layout)

}

quantidadeUsuarios()