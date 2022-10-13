import { NovoHorario , EditarHorario , ApagarHorario , CarregarHorarioEmpresa ,buscarLocal ,buscarAgendamentos, buscarAgendamentosPorData } from "../repository/agendamentosRepository.js";

import { Router } from "express";
const server = Router();

server.post ('/empresa/novohorario' , async (req , resp ) => {
    try {
        const info = req.body
        const nh = await NovoHorario(info)
        resp.send(nh)   

    } catch (err) {
        resp.status(401).send({
           erro : err.message
        })
    }
})

server.put ('/empresa/editarhorario' , async (req , resp ) => {
    try {
        const info = req.body
        const eh = await EditarHorario(info)
        resp.send(eh)   

    } catch (err) {
        resp.status(401).send({
           erro : err.message
        })
    }
})

server.delete ('/empresa/deletarhorario/:id' , async (req , resp ) => {
    try {
        const info = req.params
        
        const dh = await ApagarHorario (info)       
        console.log(dh)
        if(dh != 1) throw new Error ('agendamento nao excluido')

        resp.status(202).send('agendamento excluido') 

    } catch (err) {
        resp.status(401).send({
           erro : err.message
        })
    }
})

server.get ('/empresa/carregarhorario', async (req ,resp) => {
    try {
        const info = req.query
        
        const horarios = await CarregarHorarioEmpresa(info)

         
        resp.send(horarios)
    } catch (err) {
        resp.status(404).send({
            erro:err.message
        })
    }
}  )

server.get ('/empresa/buscarlocal/:id', async (req ,resp) => {
    try {
        const info = req.params
        const local = await buscarLocal(info)       
        resp.send(local)
    } catch (err) {
        resp.status(404).send({
            erro:err.message
        })
    }
}  )


server.get ('/empresa/carregarhorario/:id' , async (req , resp) =>{
try {
    const info = req.params
    const agendamentos = await buscarAgendamentos(info)
    resp.send(agendamentos)


} catch (err) {
    resp.status(401).send({
        erro:err.message
    })
}
})

server.get ('/empresa/carregarhorariopordata/:id/:data' , async (req , resp) =>{
    try {
        const info = req.params
        const agendamentos = await buscarAgendamentosPorData (info)
        resp.send(agendamentos)
    
    
    } catch (err) {
        resp.status(401).send({
            erro:err.message
        })
    }
    })













export default server;