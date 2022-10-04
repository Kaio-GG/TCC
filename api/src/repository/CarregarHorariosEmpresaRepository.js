import { con } from "./connection.js";



export default async function CarregarHorarioEmpresa (info){
     const comando = `
     select 
             ds_hora          hora ,
             qtd_agendamento  qtd
       from  tb_agendamento 
      where  ID_USUARIO_EMPRESA = ? && 
             ds_local           = ? && 
             DT_AGENDAMENTO     = ?   
     `
     const [lista] = await con.query (comando , [info.idEmpresa ,info.local , info.data ])
     return lista
}


