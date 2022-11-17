import { PagEmpre, RendPagEmpreId, AlterarPagEmpreId, ImagemPagina, Publicacao, AlterarPublicacao, DeletarPublicacao, ListarPublicacao, ListarTags, buscarTagPorId, ImagemPublicacao, gerararIdPublicacao, verificacao, listarVerificacoes, alterarValidacao, salvarTag, ListarTagsPag} from "../repository/PaginaEmpresaRepository.js";

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

server.get('/gerarIdPublicacao/:idEmpresa', async(req,resp) => {
    try{
        const idEmpresa = Number(req.params.idEmpresa);

        const gerarid = await gerararIdPublicacao(idEmpresa);

        resp.send(gerarid) 

    } catch (err) {
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

server.put('/empresa/imagem/publicacao/:id' ,uploadpubli.single('imagem'), async(req, resp) => {
    try{
        if(!req.file)
            throw new Error('A imagem não pode ser salva.');

        const { id } = req.params;
        const imagem = req.file.path;

        const resposta = await ImagemPublicacao(imagem, id);
        if(resposta === 0)
            throw new Error('A imagem não pode ser salva.');

        resp.status(204).send();
    }  catch (err) {
        resp.status(400).send({
            erro:err.message
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

server.post('/empresa/verificacao', async (req, resp) => {
    try{
        const conteudo = req.body;

        console.log(conteudo)

        const adicionarLink = await verificacao(conteudo);

        resp.send(adicionarLink)
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})

server.get('/empresa/listar-verificacao/:idPagina', async(req, resp) => {
    try{
        const idPagina = Number(req.params.idPagina);

        const lista = await listarVerificacoes(idPagina);

        resp.send(lista);
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})

server.put('/empresa/verificacao', async(req, resp) =>  {
    try{ 
        const conteudo = req.body;

        const alterar =  await alterarValidacao(conteudo);


        resp.send(alterar);
    } catch (err){
        resp.status(401).send({
            erro: err.message
        })
    }
})

server.post('/empresa/tag', async(req, resp) => {
    try{
        const s = req.body

        const a = await salvarTag(s)

        console.log(a)

        resp.send(a)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/empresa/tag/:Pagina', async(req, resp) => {
    try{
        const Pagina = Number(req.params.Pagina)

        const a = await ListarTagsPag(Pagina)

        resp.send(a)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})
