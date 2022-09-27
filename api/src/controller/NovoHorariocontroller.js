import NovoHorario from "../repository/NovohorarioRepository.js";

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

export default server;
