import { Router } from 'express'

import { avaliacaoSite, empresasBemAvaliadas, pesquisaPorNomeHome } from '../repository/homeRepository.js'

const server = Router();

server.get('/empresasBemAvaliadas', async(req, resp) => {
    try{
        const resposta = await empresasBemAvaliadas();

        resp.send(resposta);

    }catch(err){
        resp.status(400).send({
            erro: err.message

        })

    }
})

server.get('/home/busca', async(req, resp) => {
    try{
        const  { nome } = req.query; 

        const resposta = await pesquisaPorNomeHome(nome);

        resp.send(resposta);
        
    }catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.post('/site', async(req, resp) =>{
    try{
        const a = req.body

        if(a.nome === "")
            throw new Error('Seu nome não pode ser vazio😅')

        if(a.avaliacao === "")
            throw new Error('A sua avaliação não pode ser vazia😅')

        const resposta = avaliacaoSite(a)

        resp.send(resposta)

    }catch(err){
        resp.status(400).send(
            "Erro ao enviar comentário😪"
        )
    }
})


export default server;