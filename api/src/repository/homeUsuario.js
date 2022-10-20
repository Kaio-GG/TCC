import { con } from "./connection.js";

export async function pesquisaPorNome(nome) {
    const comando = `
    SELECT
        id_usuario_empresa  id, 
        IMG_LOGO logo,
	     DS_DESCRICAO descricao, 
	     NM_EMPRESA nome
         from tb_pagina_empresa 
         where nm_empresa like ?
    `;
    const [linhas]= await con.query(comando, [`%${nome}%`]);
    return linhas;
}


export async function listarEmpresas() {
    const comando =  `
    SELECT VL_AVALIACAO avaliacao, 
    IMG_LOGO logo,
    DS_DESCRICAO descricao, 
    NM_EMPRESA nome
    from tb_pagina_empresa 
    inner join tb_empresa_avaliacao 
    on tb_empresa_avaliacao.id_empresa_avaliacao = tb_pagina_empresa.id_pagina_empresa
    `

    const [linhas] = await con.query(comando)
    return linhas;
}


export async function melhoresAvaliacaoEmpresas() {
    const comando =  `
    SELECT VL_AVALIACAO avaliacao, 
    IMG_LOGO logo,
    DS_DESCRICAO descricao, 
    NM_EMPRESA nome
    from tb_pagina_empresa 
    inner join tb_empresa_avaliacao 
    on tb_empresa_avaliacao.id_empresa_avaliacao = tb_pagina_empresa.id_pagina_empresa
    where VL_AVALIACAO > 3
    `

    const [linhas] = await con.query(comando)
    return linhas;
}

export async function filtrarMaisProximo() {
    const comando = `
    SELECT tb_usuario_cliente.ID_USUARIO_CLIENTE id, 
    tb_usuario_cliente.ds_cidade cidade,
    tb_usuario_empresa.ds_cidade cidade2,
    vl_avaliacao avaliacao,
    IMG_LOGO logo, 
    DS_DESCRICAO descricao,
    NM_EMPRESA nome
    FROM tb_usuario_empresa, tb_usuario_cliente
    inner join tb_empresa_avaliacao 
    on tb_empresa_avaliacao.id_empresa_avaliacao = tb_usuario_cliente.id_usuario_cliente
	inner join tb_pagina_empresa
    on tb_pagina_empresa.id_pagina_empresa = tb_usuario_cliente.id_usuario_cliente
    where tb_usuario_cliente.ds_cidade = tb_usuario_empresa.ds_cidade AND 
	tb_usuario_cliente.ID_USUARIO_CLIENTE = ?;
    `

    const [linhas] = await con.query(comando,  [`${id}}`])
    return linhas;
}