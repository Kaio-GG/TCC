import { cadastroCliente } from "../repository/CadastroClienteRepository.js";

import { Router } from "express";
const server = Router();

server.post('/cliente/cadastro', async(req, resp) => {
    try{
        const novoCliente = req.body;

        const ncliente = await cadastroCliente(novoCliente);

        resp.send(ncliente)

    } catch (err) {
        
        resp.status(401).send({
            erro: err.message
        })
    }
})

export default server;
