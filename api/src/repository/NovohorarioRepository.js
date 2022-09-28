import { con } from "./connection.js";


export default async function NovoHorario (info){
    const comando = `
    INSERT INTO TB_AGENDAMENTO (ID_USUARIO_EMPRESA , DS_LOCAL , DS_HORA , DT_AGENDAMENTO)
					VALUES ( ? , ?, ? , ? );
    `
    const [linhas] = await con.query(comando, [info.id_empresa, info.local  , info.hora , info.data ]);
    info.id = linhas.insertId;
    return info;
}


