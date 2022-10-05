import { login } from "../repository/CadastroEmpresaRepository.js";

import { Router } from "express";
const server = Router();

server.post('/cadastroLogin', async(req, resp) => {
    try{
        const novoLogin = req.body;
        const nlogin = await login(novoLogin);
        resp.send(nlogin)
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})

export default server;

