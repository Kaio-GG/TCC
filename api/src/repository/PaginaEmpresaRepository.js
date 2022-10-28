import { con } from './connection.js';

export async function PagEmpre(empresa) {
    const comando = 
    `insert into tb_pagina_empresa(id_usuario_empresa, nm_empresa, img_logo, ds_descricao)
    values(?, ?, ?, ?)`

    const [Linhas] = await con.query(comando, [empresa.idEmpresa, empresa.nome, empresa.img, empresa.descricao]);
    empresa.id = Linhas.insertId;
    return empresa;
}

export async function RendPagEmpreId(id) {
    const comando = 
    ` select id_pagina_empresa	    idPagina,
             id_usuario_empresa     idEmpresa,
             nm_empresa			    Nome,
             img_logo				Logo,
             ds_Descricao			descricao
        from tb_pagina_empresa
       where id_usuario_empresa = ? `;

       const [linhas] = await con.query(comando, [id]);
       return linhas[0];
}

export async function ImagemPagina(imagem, idEmpresa) {
    const comando =
    `update TB_PAGINA_EMPRESA
        set img_logo           = ?
      where id_usuario_empresa = ?`

    const [linhas] = await con.query(comando, [imagem, idEmpresa]);
    return linhas.affectedRows;
}

export async function AlterarPagEmpreId(idEmpresa, pagina) {
    const comando = 
    ` update TB_PAGINA_EMPRESA
         set nm_empresa         = ?,
             img_logo           = ?,
             ds_descricao       = ?
       where id_usuario_empresa = ? `;

       const [linhas] = await con.query(comando, [pagina.nome, pagina.logo, pagina.descricao, idEmpresa]);
       return linhas.affectedRows ;
}


