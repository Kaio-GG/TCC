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

        const resposta = avaliacaoSite(a)
        resp.send(resposta)

    }catch(err){
        resp.status(404).send({
            erro:err.message
        })


    }



})

export default server;