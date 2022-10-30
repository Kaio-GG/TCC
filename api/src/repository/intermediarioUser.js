import { con } from "./connection.js"

export async function carregarPaginaZ(id){
    const comando = `
    select 
        id_pagina_empresa	    idPagina,
        tb_pagina_empresa.id_usuario_empresa     idEmpresa,
        nm_empresa			    nome,
        img_logo				logo,
        ds_Descricao			descricao,
        vl_avaliacao			avaliacao,
        ds_pais				pais,
        ds_cidade				cidade,
        ds_endereco			endereco
    from tb_pagina_empresa
    inner join tb_empresa_avaliacao on tb_empresa_avaliacao.id_empresa_avaliacao = tb_pagina_empresa.id_pagina_empresa
    inner join tb_usuario_empresa on tb_usuario_empresa.id_usuario_empresa = tb_pagina_empresa.id_usuario_empresa
    where tb_pagina_empresa.id_usuario_empresa = ?
    `;

    const [linhas] = await con.query(comando, [id])
    return linhas[0]; 
}

export async function enviarComentario(comentario){
    const comando = `
    INSERT INTO TB_EMPRESA_AVALIACAO(ID_USUARIO_EMPRESA, id_usuario_cliente , vl_avaliacao, ds_avaliacao, dt_avaliacao)
    values(?, ?, ?, ?, sysdate())
    `
    const [linhas] = await con.query (comando, [comentario.idempresa, comentario.idusuario, comentario.avaliacao, comentario.descricao])
    comentario.id = linhas.insertId;
    return comentario;
}

export async function selecionarComentarios(id){
    const comando = `
    select  ID_USUARIO_EMPRESA id,
            id_usuario_cliente idu,
            vl_avaliacao ava,
            ds_avaliacao avads,
            dt_avaliacao dia
    from   tb_empresa_avaliacao
    WHERE ID_USUARIO_EMPRESA = ?
    ORDER BY rand()
    LIMIT 5 `
    const [linhas] = await con.query(comando, [id])
    return linhas;
}