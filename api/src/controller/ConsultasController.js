import { Router } from 'express'

import { empresasBemAvaliadas } from '../repository/ConsultasRepository.js'

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

export default server;