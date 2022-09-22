import { loginEmpresa } from "../repository/CadastroEmpresaRepository.js";

import { Router } from "express";
const server = Router();

server.post('/empresa/cadastroLogin', async(req, resp) => {
    try{
        const novoLogin = req.body;
        const nlogin = await loginEmpresa(novoLogin);
        resp.send(nlogin)
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})

export default server;

