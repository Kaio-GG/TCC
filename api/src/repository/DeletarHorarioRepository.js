import { con } from "./connection.js";

export default async function ApagarHorario (info){
    const comando = `
        delete from tb_agendamento where id_agendamento = ?`

    const [linhas] = await con.query ( comando,  [ info.id ]);
    
    return linhas.affectedRows;

}

