import { con } from './connection.js';

export default async function PagEmpre(empresa) {
    const comando = 
    `insert into tb_pagina_empresa(id_usuario_empresa, nm_empresa, img_logo, ds_descricao)
    values(?, ?, ?, ?)`

    const [Linhas] = await con.query(comando, [empresa.idEmpresa, empresa.nome, empresa.img, empresa.descricao]);
    empresa.id = Linhas.insertId;
    return empresa;
}


