import { con } from './connection.js'


//melhores empresas

export async function empresasBemAvaliadas() {
    const comando = `

    SELECT nm_usuario nome,
     vl_avaliacao avaliacao, 
     ds_avaliacao descavaliacao,
    nm_nome_da_empresa empresa

    FROM tb_empresa_avaliacao

    INNER JOIN TB_USUARIO_CLIENTE on tb_empresa_avaliacao.id_usuario_cliente =
    TB_USUARIO_CLIENTE.id_usuario_cliente

    INNER JOIN TB_USUARIO_EMPRESA on tb_empresa_avaliacao.id_usuario_empresa =
    TB_USUARIO_EMPRESA.id_usuario_empresa
    ORDER BY rand()
    LIMIT 4
    `

    const [lista] = await con.query(comando);
    return lista;
}

export async function avaliacaoSite(feedback){
    const comando = `
    INSERT INTO TB_AVALIACAO_SITE(nm_usuario, ds_avaliacao_site)
    values(?, ?)  
    `
    const [enviar] = await con.query(comando, [feedback.nome, feedback.avaliacao]);
    return enviar;
}

