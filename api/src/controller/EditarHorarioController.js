import EditarHorario from "../repository/EditarhorarioRepository.js";

import { Router } from "express";
const server = Router();

server.put ('/empresa/editarhorario' , async (req , resp ) => {
    try {
        const info = req.body
        console.log(info)
        const eh = await EditarHorario(info)
        resp.send(eh)   

    } catch (err) {
        resp.status(401).send({
           erro : err.message
        })
    }
})

export default server;