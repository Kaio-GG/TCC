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

server.put('/empresa/alterarpagina/:idEmpresa', async(req, resp) => {
    try{
        const { idEmpresa } = req.params;
        const conteudo = req.body;

        const alterarPagina = await AlterarPagEmpreId(idEmpresa, conteudo);
        if (alterarPagina != 1)
            throw new Error('houve uma falha ao realizar alterações.');

        resp.status(204).send();

    } catch(err){
        resp.status(401).send({
            erro: err.message
        })
    }
})


export default server;

