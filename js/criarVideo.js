// arquivo: criarVideo.js
import { conectaAPI } from "./conectaAPI.js"

const formulario = document.querySelector("[data-formulario]")

async function criarVideo(evt) {
    evt.preventDefault()

    let dadoTitulo = document.querySelector("[data-titulo]").value
    let dadodescricao = Math.floor(Math.random() * 10).toString()
    
    // recebe a url no formato que o youtube entrega e converte pro formato desejado
    let dadoUrl = document.querySelector("[data-url]").value
    dadoUrl = dadoUrl.replace('https://youtu.be/', 'https://www.youtube.com/embed/')
    
    // permite que o campo de imagem fique em branco, caso em que será colocada uma imagem padrão
    let dadoImagem = document.querySelector("[data-imagem]").value
    if (dadoImagem === "") {
        dadoImagem = "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true"
    }

    const dadosVideo = {
        titulo: dadoTitulo,
        descricao: dadodescricao,
        url: dadoUrl,
        imagem: dadoImagem
    }

    try {
        await conectaAPI.reqCriaVideo(dadosVideo)
        window.location.href = "../pages/envio-concluido.html"
    } catch (e) {
        alert(e)
    }
}

formulario.addEventListener("submit", evento => criarVideo(evento))