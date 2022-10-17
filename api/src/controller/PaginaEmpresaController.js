import PagEmpre from "../repository/PaginaEmpresaRepository.js";

import { Router } from "express";
const server = Router();

server.post('/empresa/adicionarpagina', async(req, resp) => {
    try{
        const conteudo = req.body;

        const novaPagina = await PagEmpre(conteudo);

        resp.send(novaPagina)

    } catch (err){
        resp.status(401).send({
            erro: err.message
        })
    }
} )


export default server;

