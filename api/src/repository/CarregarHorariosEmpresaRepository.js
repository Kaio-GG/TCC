import { con } from "./connection.js";



export default async function CarregarHorarioEmpresa (info){
     const comando = `
     select  id_agendamento,
             ds_hora          hora ,
             qtd_agendamento  qtd
       from  tb_agendamento 
      where  ID_USUARIO_EMPRESA = ? && 
             ds_local           = ? && 
             DT_AGENDAMENTO     = ?   
     `
     const [lista] = await con.query (comando , [info.id ,info.local , info.data ])
     return lista
}


