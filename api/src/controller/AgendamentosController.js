import { NovoHorario , EditarHorario , CarregarHorariosEmpresa , ApagarHorario,buscarAgendamentosPorSituacao , CarregarHorarioEmpresa ,buscarLocal ,buscarAgendamentos, buscarAgendamentosPorData ,confirmarAgendamento ,recusarAgendamento, buscarinformacoes } from "../repository/agendamentosRepository.js";
import AgendarHorario from "../repository/AgendarHorarioRepository.js";
import { Router } from "express";
const server = Router();

server.post ('/empresa/novohorario' , async (req , resp ) => {
    try {
        const info = req.body;
        let vf = new Date();
        let dt = vf.toISOString().substr(0,10);
        let ano = Number(dt.substr(0,4))
        let dia = Number(dt.substr(8,10))
        let a = (dt.substr(5,7))
        let mes = Number(a.substr(0, 2))
        
        let datainfo = String(info.data)
        let anoinfo = Number(datainfo.substr(0,4))
        let diainfo = Number(datainfo.substr(8,10))
        let ainfo = datainfo.substr(5,7)
        let mesinfo = Number(ainfo.substr(0, 2))
        
        if(ano > anoinfo )
            throw new Error('A data não pode ser antes da atual')
        if( mes > mesinfo || ano > anoinfo)
            throw new Error('O mes nao pode ser menor que o atual')
        if( mes > mesinfo || ano > anoinfo || dia > diainfo)
            throw new Error('o dia não pode ser antes do atual')    

        const nh = await NovoHorario(info)
        resp.send(nh)   

    } catch (err) {
        resp.status(401).send({
           erro : err.message
        })
    }
})

server.post ('/empresa/agendar' , async (req , resp ) => {
    try {
        const info = req.body
        const nh = await AgendarHorario(info)
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

server.put ('/empresa/confirmar/:id' , async (req , resp ) => {
    try {
        const info = req.params
        const ca = await confirmarAgendamento(info)
        if(ca != 1)throw new Error('agendamento falhou') 
        resp.status(204).send('confirmado')   

    } catch (err) {
        resp.status(401).send({
           erro : err.message
        })
    }
})

server.put ('/empresa/recusar/:id' , async (req , resp ) => {
    try {
        const info = req.params
        const ca = await recusarAgendamento(info)
        if(ca != 1)throw new Error('agendamento falhou') 
        resp.status(204).send('RECUSADO')   

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
        
        const horarios = await CarregarHorariosEmpresa(info)

         
        resp.send(horarios)
    } catch (err) {
        resp.status(404).send({
            erro:err.message
        })
    }
}  )


server.get ('/empresa/carregarhorarios/:id', async (req ,resp) => {
    try {
        const info = req.params   
        const horarios = await CarregarHorarioEmpresa(info)

         
        resp.send(horarios)
    } catch (err) {
        resp.status(404).send({
            erro:err.message
        })
    }
}  )

server.get ('/empresa/carregarhorario/situacao/:id/:situ', async (req ,resp) => {
    try {
        const info = req.params
        const horarios = await buscarAgendamentosPorSituacao(info)
        resp.send(horarios)
    } catch (err) {
        resp.status(401).send({
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

server.get ('/empresa/carregarinfo/:id' ,async (req ,resp) =>{
    try {
        const info = req.params
        const agendamentos = await buscarinformacoes (info)
        resp.send(agendamentos)
    } catch (err) {
        resp.status(401).send({
            erro:err.message
        })
    }
})











export default server;