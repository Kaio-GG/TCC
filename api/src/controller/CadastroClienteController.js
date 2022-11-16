import { cadastroCliente } from "../repository/CadastroClienteRepository.js";

import { Router } from "express";
const server = Router();

server.post('/cliente/cadastro', async(req, resp) => {
    try{
        const b = req.body;

        if(!b.usuario.trim())
            throw new Error('Preencha o campo do nome do usuário')
        
        if(!b.cpf.trim())
            throw new Error('Preencha o campo de CPF')
        
        if(!b.pais.trim())
            throw new Error('Preencha o campo de país')
        
        if(!b.estado.trim())
            throw new Error('Preencha o campo de estado')

        if(!b.cidade.trim())
            throw new Error('Preencha o campo de cidade')

        const ncliente = await cadastroCliente(b);

        resp.send(ncliente)

    } catch (err) {
        
        resp.status(401).send({
            erro: err.message
        })
    }
})

export default server;
