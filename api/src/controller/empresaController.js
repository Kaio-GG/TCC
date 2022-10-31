import { apagarFilial ,buscarInfoEmpresa , alterarEmailEmpresa , alterarEndereco , alterarNome , alterarNomeRepresentante , alterarTipoEmpresa, buscarFilial, novaFilial } from "../repository/empresaRepository.js";
import { Router } from "express";
const server = Router();



server.get ('/empresa/carregarinfoempresa/:id', async (req ,resp) => {
    try {
        const info = req.params   
        const informacoes = await buscarInfoEmpresa(info)
        resp.send(informacoes)

    } catch (err) {
        resp.status(401).send({
            erro:err.message
        })
    }
}  )



server.put ('/empresa/alterar/nome' , async (req , resp ) => {
    try {
        const info = req.body
        const ca = await alterarNome(info)
        if(ca != 1)throw new Error('alteracao falhou') 
        resp.status(204).send(info)   

    } catch (err) {
        resp.status(401).send({
           erro : err.message
        })
    }
})



server.put ('/empresa/alterar/tipo' , async (req , resp ) => {
    try {
        const info = req.body
        const ca = await alterarTipoEmpresa(info)
        if(ca != 1)throw new Error('alteracao falhou') 
        resp.status(204).send(info)   

    } catch (err) {
        resp.status(401).send({
           erro : err.message
        })
    }
})



server.put ('/empresa/alterar/representante' , async (req , resp ) => {
    try {
        const info = req.body
        const ca = await alterarNomeRepresentante(info)
        if(ca != 1)throw new Error('alteracao falhou') 
        resp.status(204).send(info)   

    } catch (err) {
        resp.status(401).send({
           erro : err.message
        })
    }
})



server.put ('/empresa/alterar/sed' , async (req , resp ) => {
    try {
        const info = req.body
        const ca = await alterarEndereco(info)
        if(ca != 1)throw new Error('alteracao falhou') 
        resp.status(204).send(info)   

    } catch (err) {
        resp.status(401).send({
           erro : err.message
        })
    }
})



server.put ('/empresa/alterar/email' , async (req , resp ) => {
    try {
        const info = req.body
        const ca = await alterarEmailEmpresa(info)
        if(ca != 1)throw new Error('alteracao falhou') 
        resp.status(204).send(info)   

    } catch (err) {
        resp.status(401).send({
           erro : err.message
        })
    }
})


server.get ('/empresa/buscarfilial/:id' , async (req , resp ) => {
    try {
        const info = req.params
        const ca = await buscarFilial(info)
        resp.send(ca)   

    } catch (err) {
        resp.status(401).send({
           erro : err.message
        })
    }
})


server.post ('/empresa/novafilial' , async (req , resp ) => {
    try {
        const info = req.body
        const ca = await novaFilial(info)
        resp.send(ca)   

    } catch (err) {
        resp.status(401).send({
           erro : err.message
        })
    }
})



server.delete ('/empresa/deletarfilial/:id' , async (req , resp ) => {
    try {
        const info = req.params
        
        const dh = await apagarFilial (info)       
        console.log(dh)
        if(dh != 1) throw new Error (' nao excluido')
        resp.status(202).send(' excluido') 

    } catch (err) {
        resp.status(401).send({
           erro : err.message
        })
    }
})


export default server;