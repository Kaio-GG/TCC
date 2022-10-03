import { con } from "./connection.js";

export async function buscar() {
    const comando = `
    SELECT VL_AVALIACAO, IMG_LOGO, DS_DESCRICAO, NM_EMPRESA 
    FROM TB_PAGINA_EMPRESA
    FULL JOIN TB_EMPRESA_AVALIACAO
    WHERE NM_EMPRESA LIKE %?%
    `

    const [lista] = await con.query(comando);
    return lista;
}
