import { NovoHorario , EditarHorario , ApagarHorario , CarregarHorarioEmpresa } from "../repository/agendamentosRepository.js";

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
        console.log(info)
        
        const horarios = await CarregarHorarioEmpresa(info)

         
        resp.send(horarios)
    } catch (err) {
        resp.status(404).send({
            erro:err.message
        })
    }
}  )
















export default server;