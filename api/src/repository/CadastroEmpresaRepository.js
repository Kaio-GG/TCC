import { con } from './connection.js';

export async function cadastroEmpresa(empresa){
    const comando =
    `insert into TB_USUARIO_EMPRESA (DS_CNPJ,DS_INSCRICAO_ESTADUAL,NM_NOME_DA_EMPRESA,DS_ESTADO,NM_REPRESENTANTE,DS_CPF_REPRESENTANTE,DS_CARGO_REPRESENTANTE,DS_NACIONALIDADE_REPRESENTANTE)
                             values (?, ?, ?, ?, ?, ?, ?, ?)`;

    const [linhas] = await con.query(comando, [empresa.cnpj, empresa.inscEstadual, empresa.nome, empresa.estado, empresa.representante, empresa.cpfRepresentante, empresa.cargoRepresentante, empresa.nacioRepresentante]);
    empresa.id = linhas.insertId;
    return empresa;
};