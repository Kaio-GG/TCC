import { Router } from 'express'

import { buscar, listarEmpresas, melhoresAvaliacaoEmpresas } from '../repository/homeUsuario.js';

const server = Router();

server.get('/home/usuario/busca', async(req, resp) => {
    try{
        const  { nome }  = req.query; 
        const resposta = await buscar(nome);

        resp.send(resposta);

    }catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.get('/home/usuario/melhores', async (req, resp) => {
    try{
        const t = melhoresAvaliacaoEmpresas();

        resp.send(t)
        
    }catch(err){
        resp.status(400).send({
            erro:err.message

        })
    }
})


server.get('/home/usuario/listarEmpresas', async(req, resp) =>{
    try{
        const resposta = listarEmpresas();
        resp.send(resposta);

    }catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }
})



export default server;