import { PagEmpre, RendPagEmpreId, AlterarPagEmpreId } from "../repository/PaginaEmpresaRepository.js";

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

server.get('/empresa/pagina/:id', async(req, resp) => {
    try{
        const id = Number(req.params.id);

        const resposta = await RendPagEmpreId(id);

        resp.send(resposta);

    } catch(err){
        resp.status(401).send({
            erro: err.message
        })
    }
})

server.put('/empresa/alterarpagina', async(req, resp) => {
    try{
        const conteudo = req.body;

        const alterarPagina = await AlterarPagEmpreId(conteudo);

        resp.status(204).send(alterarPagina)

    } catch(err){
        resp.status(401).send({
            erro: err.message
        })
    }
})


export default server;

