import { Router } from "express";

import { avaliacoes, carregarPaginaZ, enviarComentario, puxarPubs, selecionarComentarios } from "../repository/intermediarioUser.js";

const server = Router();

server.get('/home/usuario/int/:id', async(req, resp) => {
    try{
        const  id = Number(req.params.id);

        const resposta = await carregarPaginaZ(id);

        resp.send(resposta)
    }catch(err){
        resp.status(404).send({
            erro:err.message
        })

    }

})

server.get('/home/usuario/pubs', async(req, resp) =>{
    try{
        const { id } = req.query;

        const a = await puxarPubs(id)

        resp.send(a)
    }catch(err){
        resp.status(404).send({
            erro:err.message
        })

    }
})

server.post('/home/usuario/comentario', async(req, resp) => {
    try{
        const a = req.body;

        console.log(a)

        const r = await enviarComentario(a);

        resp.send(r)

    }catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.get('/home/usuario/coments', async(req, resp) => {
    try{
        const {id} = req.query;

        const r = await selecionarComentarios(id);

        resp.send(r)
    }catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }
})


server.get('/home/usuario/avaliacoes', async(req, resp) => {
    try{
        const { id } = req.query;

        const r = await avaliacoes(id)

        resp.send(r)
    }catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }
})


export default server;