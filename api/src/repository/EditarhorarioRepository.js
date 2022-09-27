import { con } from "./connection.js";


export default async function EditarHorario (info){
    const comando = `                      
                    update tb_agendamento 
                       set QTD_AGENDAMENTO = ?
                     where ID_AGENDAMENTO  = ?
    `
    const linhas = await con.query (comando, [info.qtd , info.id_agendamento ]);
    return info;
}
