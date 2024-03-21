'use strict'

import {getFilmes, getFilme, postFilme, putFilme} from "./filmes.js"

function criarCard (filme) {
    const card = document.createElement('div')

    const titulo = document.createElement('h2')
    titulo.textContent = filme.nome

    const texto = document.createElement ('textarea')
    texto.textContent = filme.sinopse

    const capa = document.createElement ('img')
    capa.src = filme.foto_capa

    card.append (titulo, texto, capa)

    return card
}

async function preencherContainer () {
    const container = document.querySelector ('body')

    const filme = await getFilmes ()

    filme.forEach (filme => {
        const card = criarCard (filme)
        container.appendChild(card)
        console.log (card)
    })
}

preencherContainer()

const filme = {  
    "id": "1",
    "nome": "Velozes e Furiosos",
    "sinopse": "Brian O Conner é um policial que se infiltra no submundo dos rachas de rua para investigar uma série de furtos. Enquanto tenta ganhar o respeito e a confiança do líder Dom Toretto, ele corre o risco de ser desmascarado.",
    "duracao": "1:46:00",
    "data_lancamento": "2001-09-28",
    "data_relancamento": null,
    "foto_capa": "https://img.quizur.com/f/img64e7eff7856cd4.31473663.jpg?lastEdited=1692921859",
    "valor_unitario": 30.00
}

delete(2)
postFilme (filme)