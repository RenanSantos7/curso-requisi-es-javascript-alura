//arquivo: mostrarVideos.js
import { conectaAPI } from "./conectaAPI.js"

const lista = document.querySelector("[data-lista]")

export default function constroiCard(objeto) {
    const video = document.createElement("li")
    video.className = "videos__item"
	video.innerHTML = `
		<iframe width="100%" height="72%" src="${objeto.url}" title="${objeto.titulo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		
		<div class="descricao-video">
			<img src="${objeto.imagem}" alt="logo canal alura">
			<h3>${objeto.titulo}</h3>
			<p>${objeto.descricao}</p>
		</div>
	`
	
    return video
}

async function listaVideos() {
	try {
		const listaAPI = await conectaAPI.reqListaVideos();
		listaAPI.forEach(elemento => lista.appendChild(constroiCard(elemento)))
	} catch {
		lista.innerHTML = `
			<div>
				<h2 class='mensagem__titulo'>Não foi possível carregar a lista de vídeos</h2>
				<p class='mensagem__emoji'>😭</p>
			</div>
		`
	}
}

listaVideos()