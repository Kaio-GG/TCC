import { con } from "./connection.js";

export async function buscar(nome) {
    const comando = `
    SELECT VL_AVALIACAO avaliacao,
     IMG_LOGO logo,
    DS_DESCRICAO descricao,
    NM_EMPRESA nome

    FROM TB_PAGINA_EMPRESA
    FULL JOIN TB_EMPRESA_AVALIACAO
    WHERE NM_EMPRESA LIKE ?
    `
    const [ busca ]= await con.query(comando, [`%${nome}$%`]);
    return busca;
}


export async function listarEmpresas() {
    const comando =  `
    SELECT VL_AVALIACAO avaliacao, 
    IMG_LOGO logo, 
    DS_DESCRICAO descricao,
    NM_EMPRESA nome 
    FROM TB_PAGINA_EMPRESA
    FULL JOIN TB_EMPRESA_AVALIACAO
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
    FROM TB_PAGINA_EMPRESA
    FULL JOIN TB_EMPRESA_AVALIACAO
    WHERE VL_AVALIACAO > 3;
    `

    const [linhas] = await con.query(comando)
    return linhas;
}