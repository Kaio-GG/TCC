import { con } from "./connection.js";

export async function pesquisaPorNome(nome) {
    const comando = `
    SELECT VL_AVALIACAO avaliacao, 
	    IMG_LOGO logo,
	    DS_DESCRICAO descricao, 
	    NM_EMPRESA nome
        from tb_pagina_empresa 
        inner join tb_empresa_avaliacao 
        on tb_empresa_avaliacao.id_empresa_avaliacao = tb_pagina_empresa.id_pagina_empresa
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