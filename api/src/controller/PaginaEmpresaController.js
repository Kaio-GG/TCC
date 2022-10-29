import { PagEmpre, RendPagEmpreId, AlterarPagEmpreId, ImagemPagina, Publicacao, AlterarPublicacao, DeletarPublicacao } from "../repository/PaginaEmpresaRepository.js";

import multer from 'multer';
import { Router } from "express";

const server = Router();
const upload = multer({dest: 'storage/capaEmpresa'});

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

server.put('/empresa/pagina/:idEmpresa/imagem' ,upload.single('capa'), async(req, resp) => {
    try{
        const { idEmpresa } = req.params;
        const imagem = req.file.path;

        const resposta = await ImagemPagina(imagem, idEmpresa);
        if(resposta != 1)
            throw new Error('A imagem não pode ser salva.');

        resp.status(204).send();
    }  catch (err) {
        resp.status(400).send({
            erro:err.message
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

server.post('/empresa/publicacao', async(req, resp) => {
    try{
        const conteudo = req.body;

        const Publicar = await Publicacao(conteudo);

        resp.status(204).send(Publicar)

    } catch(err){
        resp.status(401).send({
            erro: err.message
        })
    }
})

server.put('/empresa/publicacao', async(req, resp) => {
    try{
        const conteudo = req.body;

        const alterarPublicacao = await AlterarPublicacao(conteudo);

        resp.status(204).send(alterarPublicacao)

    } catch(err){
        resp.status(401).send({
            erro: err.message
        })
    }
})

server.delete('/empresa/publicacao', async(req, resp) => {
    try{
        const conteudo = req.body;

        const deletarPublicacao = await DeletarPublicacao(conteudo);

        resp.status(204).send(deletarPublicacao)

    } catch(err){
        resp.status(401).send({
            erro: err.message
        })
    }
})


export default server;

