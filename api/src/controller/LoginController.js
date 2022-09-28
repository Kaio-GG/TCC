import { login } from "../repository/LoginRepository.js";

import { Router } from "express";
const server = Router();

server.post('/empresa/login', async(req, resp) => {
    try{
        const { email, senha} = req.body;
        
        const resposta = await login(email, senha); 

        if(!resposta) {
            throw new Error ('Credenciais Invalidas')
        }

        if(!email.trim())
            throw new Error ('Email é obrigatório')

    
        if(!senha.trim())
            throw new Error ('A senha é obrigatória')

        resp.send(resposta)
        

    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})

export default server;

