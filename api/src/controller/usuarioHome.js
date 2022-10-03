import { buscar } from "../repository/homeUsuario";

import { Router } from "express";
const server = Router();

server.get('/home/usuario/buscar/:titulo', async (req, resp) => {
    try{
        const { buscaEmpresa } = req.params; 
        const resposta = await buscar(buscaEmpresa);

        resp.send(resposta)

    }catch(err){
        resp.status(400).send({
            erro:err.message
        })

    }


})


export default server;