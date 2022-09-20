import { login } from "../repository/LoginRepository.js";

import { Router } from "express";
const server = Router();

server.post('/empresa/login', async(req, resp) => {
    try{
        const { email, senha } = req.body;

        if(!email.trim())
            throw new Error ('Email é obrigatório')

    
        if(!senha.trim())
            throw new Error ('A senha é obrigatória')


        const resposta = await login(email, senha);
        resp.send(resposta)

    } catch (err) {
        resp.status(400).send({
            erro: 'Credenciais incorretas'
        })
    }
})

export default server;

