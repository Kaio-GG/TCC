import AgendarHorario from "../repository/AgendarHorarioRepository.js";
import { Router } from "express";
const server = Router();

server.post ('/usuario/agendarhorario' , async (req , resp ) => {
    try {
        const info = req.body
        const ah = await AgendarHorario(info)
        resp.send(ah)   

    } catch (err) {
        resp.status(401).send({
           erro : err.message
        })
    }
})

export default server;