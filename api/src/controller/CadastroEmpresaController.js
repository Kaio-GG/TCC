import { cadastroEmpresa } from "../repository/CadastroEmpresaRepository";

import { Router } from "express";
const server = Router();

server.post('/empresa/cadastro', async(req, resp) => {
    try{
        const novaEmpresa = req.body;
        
        const empresa = await cadastroEmpresa(novaEmpresa);

        resp.send(empresa)
        

    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})

export default server;
