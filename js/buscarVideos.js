//arquvo: buscarVideo.js

//% Importações
import { conectaAPI } from "./conectaAPI.js"
import constroiCard from "./mostrarVideos.js"


// % Declarações de variáveis/constantes
const botaoPesquisa = document.querySelector("#pesquisar__botao")
const inputPesquisa = document.querySelector("#pesquisar")

// % Declarações de funções
async function buscarVideo() {
    const dadosPesquisa = inputPesquisa.value
    const busca = await conectaAPI.reqBuscaVideo(dadosPesquisa)
    const lista = document.querySelector("[data-lista]")
    
    lista.innerHTML = ''

    if (busca.length) {
        busca.forEach(elemento => {
            lista.appendChild(constroiCard(elemento))
            console.log(busca.Prototype.Constructor)
        })
    } else {
        lista.innerHTML = `
                <h2 class="mensagem__titulo">Não existem vídeos com esse termo</h2>
                <p class="mensagem__emoji">😕</p>
            `
    }
}
        
// % Ações
botaoPesquisa.addEventListener('click', evento => {
    evento.preventDefault()
    buscarVideo()
})

inputPesquisa.addEventListener('keydown', (evento) => {
    if (evento.key == 'Enter' && inputPesquisa.value) {
        buscarVideo()
    }
})
