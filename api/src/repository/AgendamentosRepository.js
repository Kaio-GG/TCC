import { con } from "./connection.js";


export  async function NovoHorario (info){
    const comando = `
    INSERT INTO TB_HORARIO (ID_USUARIO_EMPRESA , DS_LOCAL , DS_HORA , DT_AGENDAMENTO , qtd_agendamento)
					VALUES ( ? , ? , ? , ?  , ? )
    `
    const [linhas] = await con.query(comando, [info.id_empresa, info.local  , info.hora , info.data , info.qtd]);
    info.id = linhas.insertId;
    return info;
}



export  async function EditarHorario (info){
    const comando = `                      
                    update tb_horario 
                       set QTD_AGENDAMENTO = ?
                     where ID_horario  = ?
    `
    const linhas = await con.query (comando, [info.qtd , info.id_horario ]);
    return info;
}

export  async function confirmarAgendamento (info){
    const comando = `   
    update 		tb_agendamento
	   set 	    ds_situacao = 'CONFIRMADA'
	 where 	    ID_agendamento = ? 
                 
    `
    const [linhas] = await con.query (comando, [info.id ]);
    return linhas.affectedRows
}


export  async function recusarAgendamento (info){
    const comando = `   
    update 		tb_agendamento
	   set 	    ds_situacao = 'RECUSADO'
	 where 	    ID_agendamento = ? 
                 
    `
    const [linhas] = await con.query (comando, [info.id ]);
    return linhas.affectedRows;
}




export async function ApagarHorario (info){
    const comando = `
        delete from tb_horario where id_HORARIO = ?`

    const [linhas] = await con.query ( comando,  [ info.id ]);
    
    return linhas.affectedRows;

}


export async function CarregarHorariosEmpresa (info){
    const comando = `
    select  id_horario,
            ds_hora          hora ,
            qtd_agendamento  qtd
      from  tb_horario 
     where  ID_USUARIO_EMPRESA = ? && 
            ds_local           = ? && 
            DT_AGENDAMENTO     = ?   
    `
    const [lista] = await con.query (comando , [info.id ,info.local , info.data ])
    return lista
}


export async function CarregarHorarioEmpresa (info){
    const comando = `
    select  id_horario,
            ds_hora          hora ,
            qtd_agendamento  qtd
      from  tb_horario 
     where  ID_USUARIO_EMPRESA = ? 
    `
    const [lista] = await con.query (comando , [info.id ,info.local , info.data ])
    return lista
}

export async function buscarLocal (info){
    const comando = `
    select DS_ENDERECO local,
           id_USUARIO_EMPRESA id
      from tb_usuario_empresa
     where id_USUARIO_EMPRESA = ?
    `
    const lista = await con.query (comando , [info.id])
    return lista[0]
}


export async function buscarAgendamentos (info){
    const comando = `
    select  
            TB_AGENDAMENTO.ID_AGENDAMENTO   'id',

	        TB_AGENDAMENTO.NM_PESSOA        'nome' ,
	        TB_HORARIO.DS_LOCAL   	        'local',							
	        TB_HORARIO.DS_HORA    	        'hora' ,
            TB_HORARIO.DT_AGENDAMENTO       'data' ,
            TB_AGENDAMENTO.DS_SITUACAO      'situacao'
    FROM 
	        TB_HORARIO
    INNER JOIN
	        TB_AGENDAMENTO ON TB_HORARIO.ID_HORARIO = TB_AGENDAMENTO.ID_HORARIO
     WHERE
            TB_HORARIO.ID_USUARIO_EMPRESA = ? 
    `
    const [linhas] = await con.query (comando, [info.id])
    return linhas

}

export async function buscarAgendamentosPorData (info){
    const comando = `
    select 	TB_HORARIO.ID_HORARIO        ,
            TB_AGENDAMENTO.ID_AGENDAMENTO,
            TB_HORARIO.ID_USUARIO_EMPRESA 'id'   ,	
            TB_AGENDAMENTO.NM_PESSOA  	 'nome' ,
            TB_HORARIO.DS_LOCAL   	     'local',							
            TB_HORARIO.DS_HORA    	     'hora' ,
            TB_HORARIO.DT_AGENDAMENTO     'data' ,
            TB_AGENDAMENTO.DS_SITUACAO      'situacao'
      FROM 
            TB_HORARIO
    INNER JOIN
            TB_AGENDAMENTO ON TB_HORARIO.ID_HORARIO = TB_AGENDAMENTO.ID_HORARIO
         WHERE
            TB_HORARIO.ID_USUARIO_EMPRESA = ? AND
            TB_HORARIO.DT_AGENDAMENTO  =  ? `
    const [linhas] = await con.query (comando, [info.id , info.data])
    return linhas        
}

export async function buscarAgendamentosPorSituacao (info){
    const comando = `
    select 	TB_HORARIO.ID_HORARIO        ,
            TB_AGENDAMENTO.ID_AGENDAMENTO,
            TB_HORARIO.ID_USUARIO_EMPRESA 'id'   ,	
            TB_AGENDAMENTO.NM_PESSOA  	 'nome' ,
            TB_HORARIO.DS_LOCAL   	     'local',							
            TB_HORARIO.DS_HORA    	     'hora' ,
            TB_HORARIO.DT_AGENDAMENTO     'data' ,
            TB_AGENDAMENTO.DS_SITUACAO      'situacao'
      FROM 
            TB_HORARIO
    INNER JOIN
            TB_AGENDAMENTO ON TB_HORARIO.ID_HORARIO = TB_AGENDAMENTO.ID_HORARIO
         WHERE
            TB_HORARIO.ID_USUARIO_EMPRESA = ? AND
            TB_AGENDAMENTO.ds_situacao = ? `
    const [linhas] = await con.query (comando, [info.id , info.situ])
    return linhas        
}

export async function buscarinformacoes (info){
    const comando =  `
select TB_AGENDAMENTO.ID_AGENDAMENTO	'id'   ,
	   TB_AGENDAMENTO.NM_PESSOA         'nome' ,
	   TB_HORARIO.DS_LOCAL   	        'local',						
	   TB_HORARIO.DS_HORA    	        'hora' ,
       TB_HORARIO.DT_AGENDAMENTO        'data' ,
	   TB_AGENDAMENTO.DS_DESCRICAO      'desc' ,	
       TB_AGENDAMENTO.DS_EMAIL          'email',
       TB_AGENDAMENTO.DS_CPF	        'cpf'  ,
       TB_AGENDAMENTO.DS_SEXO	        'sexo' ,
       TB_AGENDAMENTO.DS_TELEFONE       'tel'  ,
       TB_AGENDAMENTO.DT_NASCIMENTO     'nas'  ,
       TB_AGENDAMENTO.DS_SITUACAO       'situ'
  FROM 
	   TB_HORARIO
INNER JOIN
	   TB_AGENDAMENTO ON TB_HORARIO.ID_HORARIO = TB_AGENDAMENTO.ID_HORARIO
     WHERE
		TB_AGENDAMENTO.ID_AGENDAMENTO = ?
`
const [linhas] = await con.query (comando , [info.id])

return linhas[0]
}






