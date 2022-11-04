import { PagEmpre, RendPagEmpreId, AlterarPagEmpreId, ImagemPagina, Publicacao, AlterarPublicacao, DeletarPublicacao, ListarPublicacao, ListarTags, buscarTagPorId, CarregarImagensPublic } from "../repository/PaginaEmpresaRepository.js";

import multer from 'multer';
import { Router } from "express";

const server = Router();
const upload = multer({dest: 'storage/capaEmpresa'});
const uploadpubli = multer({dest: 'storage/imagemPublicacao'});


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
        if(!req.file)
            throw new Error('A imagem não pode ser salva.');

        const { idEmpresa } = req.params;
        const imagem = req.file.path;

        const resposta = await ImagemPagina(imagem, idEmpresa);
        if(resposta === 0)
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
        if (alterarPagina === 0){
            throw new Error('houve uma falha ao realizar alterações.');
        } else {
            resp.status(204).send();
        }
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

server.put('/empresa/publicacao/:idEmpresa/:idPublicacao', async(req, resp) => {
    try{
        const idEmpresa =  Number(req.params.idEmpresa);
        const idPublicacao =  Number(req.params.idPublicacao);
        const conteudo = req.body;

        const alterarPublicacao = await AlterarPublicacao(conteudo, idEmpresa, idPublicacao);

        if(alterarPublicacao != 1)
            throw new Error('Não foi possivel alterar')
        resp.status(204).send()

    } catch(err){
        resp.status(401).send({
            erro: err.message
        })
    }
})

server.delete('/empresa/publicacao/:idEmpresa/:idPublicacao', async(req, resp) => {
    try{
        const idEmpresa =  Number(req.params.idEmpresa);
        const idPublicacao =  Number(req.params.idPublicacao);

        const deletarPublicacao = await DeletarPublicacao(idEmpresa, idPublicacao);

        if (deletarPublicacao != 1){
            throw new Error('Não foi possivel deletar');
        }
        else {
            resp.status(204).send()
        }

        
    } catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/empresa/publicacao/:id', async(req, resp) => {
    try{
        const id = Number(req.params.id);

        const Publicacoes = await ListarPublicacao(id);

        resp.send(Publicacoes)

    } catch(err){
        resp.status(401).send({
            erro: err.message
        })
    }
})

server.put('/empresa/publicacao/imagem/:id', uploadpubli.array('imagens'), async(req, resp) => {
    try{
        const id = req.params.id;
        const imagens = req.files;

        for (const imagem of imagens){
            await CarregarImagensPublic(id, imagem.path);
        }

        resp.send({
            id : idPublicacao
        })

    } catch(err){
        resp.status(401).send({
            erro: err.message
        })
    }
})

server.get('/tag', async(req, resp) => {
    try{
        const Tags = await ListarTags();

        resp.send(Tags)

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/tag/:id', async(req, resp) => {
    try{
        const id = Number(req.params.id);

        const tagsId =  await buscarTagPorId(id)

        resp.send(tagsId);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

export default server;

