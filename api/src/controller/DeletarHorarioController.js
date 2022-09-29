import ApagarHorario from "../repository/DeletarHorarioRepository.js";

import { Router } from "express";

const server = Router();

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

export default server;



