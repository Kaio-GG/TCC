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
    `

    const [lista] = await con.query(comando);
    return lista;

}