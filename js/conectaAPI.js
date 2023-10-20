//arquivo: conectaAPI.js
// * Requisição GET
async function reqListaVideos() {
    const conexao = await fetch('http://localhost:3000/videos')
    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
}

//* Requisição POST
async function reqCriaVideo(objeto) {
    const conexao = await fetch('http://localhost:3000/videos', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "titulo": objeto.titulo,
            "descricao": `${objeto.descricao} mil visualizações`,
            "url": objeto.url,
            "imagem": objeto.imagem
        })
    })
    if (!conexao.ok) {
        throw new Error('Nâo foi possível enviar o vídeo')
    }
    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
}

// * Pesquisar Dados
async function reqBuscaVideo(termoBusca) {
    const response = await fetch(`http://localhost:3000/videos?q=${termoBusca}`)
    const data = response.json()
    return data
}

// * Exportar Dados
export const conectaAPI = {
    reqListaVideos,
    reqCriaVideo,
    reqBuscaVideo
}
