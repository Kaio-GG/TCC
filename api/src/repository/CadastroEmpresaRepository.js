import { con } from './connection.js';

export async function cadastroEmpresa(empresa){
    const comando =
    `insert into TB_USUARIO_EMPRESA (DS_CNPJ,DS_INSCRICAO_ESTADUAL, NM_NOME_DA_EMPRESA, DS_TIPO_DA_EMPRESA, DS_PAIS, DS_ESTADO, DS_CIDADE, DS_ENDERECO, NM_REPRESENTANTE, DS_CPF_REPRESENTANTE, DS_CARGO_REPRESENTANTE, DS_NACIONALIDADE_REPRESENTANTE)
                             values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const [linhas] = await con.query(comando, [empresa.cnpj, empresa.inscEstadual, empresa.nome, empresa.tipo, empresa.pais, empresa.estado, empresa.cidade, empresa.endereco, empresa.representante, empresa.cpfRepresentante, empresa.cargoRepresentante, empresa.nacioRepresentante]);
    empresa.id = linhas.insertId;
    return empresa;
};


export async function loginEmpresa(lempresa){
    const comando =
    `insert into TB_LOGIN_EMPRESA(ID_USUARIO_EMPRESA,NM_EMAIL,DS_SENHA,DT_ULTLOGIN)
    values(?, ?, ?, sysdate())`;

    const [linhas] = await con.query(comando, [lempresa.idEmpresa, lempresa.usuario, lempresa.senha]);
    lempresa.id = linhas.insertId;

    return lempresa;
};