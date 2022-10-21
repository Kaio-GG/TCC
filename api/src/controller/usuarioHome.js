import { Router } from 'express'

import { filtrarMaisProximo, listarEmpresas, melhoresAvaliacaoEmpresas, pesquisaPorNome } from '../repository/homeUsuario.js';

//import localStorage from 'local-storage';

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

        let { id } = localStorage.getItem(ID_USUARIO_CLIENTE)
        
        const resposta = await filtrarMaisProximo(id);

        resp.send(resposta)

    }catch(err){
        resp.status(400).send({
            erro:err.message
        })

    }

})

export default server;