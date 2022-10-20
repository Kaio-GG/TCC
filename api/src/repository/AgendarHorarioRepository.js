import { con } from "./connection.js";



export default async function AgendarHorario (info){
    const comando = `                     
    insert INTO TB_AGENDAMENTO (ID_HORARIO , ID_USUARIO_CLIENTE , NM_PESSOA , DS_EMAIL , DS_CPF , DS_TELEFONE , DS_SEXO , DT_NASCIMENTO , DS_SITUACAO , DS_DESCRICAO)
							  VALUE( ? , ? , ? , ? , ? , ? , ? , ? , 'ESPERANDO' , ?)
 
    `
    const [linhas] = await con.query (comando, [info.id_horario , info.id_cliente , info.nome , info.email ,  info.cpf  ,  info.telefone , info.sexo , info.nascimento  , info.descricao]);
    info.id = linhas.insertId
    return info;
}




