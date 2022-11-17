import { Router } from 'express'

import { filtrarMaisProximo, listarEmpresas, listarTags, melhoresAvaliacaoEmpresas, pesquisaPorNome, selecionarTags } from '../repository/homeUsuario.js';

const server = Router();

server.get('/home/usuario/busca', async(req, resp) => {
    try{
        const  { nome } = req.query; 

        const resposta = await pesquisaPorNome(nome);

        resp.send(resposta);
        
    }catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.get('/home/usuario/tag', async(req, resp) =>{
    try{
        const { tag } = req.query;

        const r = await selecionarTags(tag)

        resp.send(r)
    }catch(err){
        resp.status(400).send({
            error:err.message
        })
    }
})

server.get('/home/usuario/listarTags', async(req, resp) => {
    try{
        const t = await listarTags()

        resp.send(t)
    }catch(err){
        resp.status(400).send({
            erro: err.message
        })

    }


})

server.get('/home/usuario/melhores', async (req, resp) => {
    try{
        const t = await melhoresAvaliacaoEmpresas();

        resp.send(t)
        
    }catch(err){
        resp.status(400).send({
            erro:err.message

        })
    }
})


server.get('/home/usuario/listarEmpresas', async(req, resp) =>{
    try{
        const resposta = await listarEmpresas();
        resp.send(resposta);

    }catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.get('/home/usuario/maisProximo', async(req, resp) => {
    try{

        let { id } = req.query;
        
        const resposta = await filtrarMaisProximo(id);

        resp.send(resposta)

    }catch(err){
        resp.status(400).send({
            erro:err.message
        })

    }

})

export default server;