import { cadastroEmpresa } from "../repository/CadastroEmpresaRepository.js";

import { Router } from "express";
const server = Router();

server.post('/empresa/cadastro', async(req, resp) => {
    try{
        const novaEmpresa = req.body;

        const nempresa = await cadastroEmpresa(novaEmpresa);

        resp.send(nempresa)

    } catch (err) {
        
        resp.status(401).send({
            erro: err.message
        })
    }
})

export default server;
