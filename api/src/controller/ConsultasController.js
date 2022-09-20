import { Router } from 'express'

import { avaliacaoSite, empresasBemAvaliadas } from '../repository/ConsultasRepository.js'

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