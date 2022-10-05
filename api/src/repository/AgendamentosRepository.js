import { con } from "./connection.js";


export  async function NovoHorario (info){
    const comando = `
    INSERT INTO TB_AGENDAMENTO (ID_USUARIO_EMPRESA , DS_LOCAL , DS_HORA , DT_AGENDAMENTO , qtd_agendamento)
					VALUES ( ? , ? , ? , ?  , ? )
    `
    const [linhas] = await con.query(comando, [info.id_empresa, info.local  , info.hora , info.data , info.qtd]);
    info.id = linhas.insertId;
    return info;
}



export  async function EditarHorario (info){
    const comando = `                      
                    update tb_agendamento 
                       set QTD_AGENDAMENTO = ?
                     where ID_AGENDAMENTO  = ?
    `
    const linhas = await con.query (comando, [info.qtd , info.id_agendamento ]);
    return info;
}

export async function ApagarHorario (info){
    const comando = `
        delete from tb_agendamento where id_agendamento = ?`

    const [linhas] = await con.query ( comando,  [ info.id ]);
    
    return linhas.affectedRows;

}


export async function CarregarHorarioEmpresa (info){
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

export async function buscarLocal (info){
    const comando = `
    select DS_ENDERECO 
      from tb_usuario_empresa
     where id_USUARIO_EMPRESA = ?
    `
    const [lista] = await con.query (comando , [info.id])
    return lista
}