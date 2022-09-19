import { con } from './connection.js'


//melhores empresas

export async function empresasBemAvaliadas() {
    const comando = `

    SELECT nm_usuario nome, 
    vl_avaliacao avaliacao, 
    ds_avaliacao descavaliacao


    FROM tb_empresa_avaliacao
    INNER JOIN 
    TB_USUARIO_CLIENTE 
    on tb_empresa_avaliacao.id_usuario_cliente = TB_USUARIO_CLIENTE.id_usuario_cliente
    `

    const [lista] = await con.query(comando);
    return lista;

}