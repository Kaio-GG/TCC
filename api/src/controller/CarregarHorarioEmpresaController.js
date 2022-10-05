import CarregarHorarioEmpresa from "../repository/CarregarHorariosEmpresaRepository.js";

import { Router } from "express";


const server = Router();


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

export default server 