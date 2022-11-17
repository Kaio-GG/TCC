import { con } from './connection.js';

export async function PagEmpre(empresa) {
    const comando = 
    `insert into tb_pagina_empresa(id_usuario_empresa, nm_empresa, ds_descricao)
    values(?, ?, ?)`

    const [Linhas] = await con.query(comando, [empresa.idEmpresa, empresa.nome, empresa.descricao]);
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
             ds_descricao       = ?
       where id_usuario_empresa = ? `;

       const [linhas] = await con.query(comando, [pagina.nome, pagina.descricao, idEmpresa]);
       return linhas.affectedRows ;
}


export async function Publicacao(bd) {
    const comando = 
    `insert into TB_PAGINA_EMPRESA_PUBLICACAO(ID_PAGINA_EMPRESA,NM_TITULO,DS_CAIXA_TEXTO)
    values (?,?,?);`

    const [Linhas] = await con.query(comando, [bd.idEmpresa, bd.nome, bd.conteudo]);
    bd.id = Linhas.insertId;
    return bd;
}

export async function AlterarPublicacao(bd, idEmpresa, idPublicacao) {
    const comando = 
    ` update TB_PAGINA_EMPRESA_PUBLICACAO
         set NM_TITULO                    = ?,
             DS_CAIXA_TEXTO               = ?
       where ID_PAGINA_EMPRESA            = ?
         and ID_PAGINA_EMPRESA_PUBLICACAO = ?`;

       const [linhas] = await con.query(comando, [bd.nome, bd.conteudo, idEmpresa, idPublicacao]);
       return linhas.affectedRows;
}

export async function DeletarPublicacao(idEmpresa, idPublicacao) {
    const comando = 
    `delete from TB_PAGINA_EMPRESA_PUBLICACAO
           where ID_PAGINA_EMPRESA            = ?
             and ID_PAGINA_EMPRESA_PUBLICACAO = ? `;

       const [linhas] = await con.query(comando, [idEmpresa, idPublicacao]);
       return linhas.affectedRows;
}

export async function ListarPublicacao(id) {
    const comando = 
        `SELECT	NM_TITULO 	 			        Titulo, 
                DS_CAIXA_TEXTO    		        CaixaTexto,
                ID_PAGINA_EMPRESA               Empresa,
                ID_PAGINA_EMPRESA_PUBLICACAO    Publicacao,
                IMG_PUBLICACAO                  imagem
          from TB_PAGINA_EMPRESA_PUBLICACAO 
         where ID_PAGINA_EMPRESA = ?`;
    
    const [linhas] = await con.query(comando, [id]);
    return linhas;
}

export async function ListarTags() {
    const comando = 
    `select id_tag	idTag,
            nm_tag  tag
       from TB_TAG
      order
         by nm_tag`;

    const [linhas] = await con.query(comando);
    return linhas; 
}

export async function ListarTagsPag(Pagina) {
    const comando = 
    `select  TB_TAG.ID_TAG   idTag, 
             NM_TAG          tag
       from  TB_TAG
      inner 
       join TB_TAG_EMPRESA on TB_TAG.ID_TAG = TB_TAG_EMPRESA.ID_TAG
      where ID_PAGINA_EMPRESA = ?
      order
         by nm_tag`;

    const [linhas] = await con.query(comando, [Pagina]);
    return linhas; 
}

export async function salvarTag(a) {
    const comando = `
    insert into TB_TAG_EMPRESA (ID_TAG, ID_PAGINA_EMPRESA)
    values (?, ?)
    `

    const [resp] = await con.query(comando, [a.Tag, a.Pagina])
    a.id = resp.insertId;
    return a;
}


export async function buscarTagPorId(idTag){
    const comando = 
    `select  id_tag	  idTag,
             nm_tag   tag
       from  TB_TAG
      where  id_tag = ?`;

    const  [linhas] = await con.query(comando, idTag);
    return linhas[0];
}

export async function ImagemPublicacao(imagem, id) {
    const comando =
    `update tb_pagina_empresa_publicacao
        set img_publicacao = ?
      where id_pagina_empresa_publicacao = ?`;

    const [linhas] = await con.query(comando, [imagem, id]);
    return linhas.affectedRows;
}

export async function gerararIdPublicacao(idEmpresa){
    const comando = 
    `Select Max( id_pagina_empresa_publicacao + 1 )  id
       From TB_pagina_empresa_publicacao
      where id_pagina_empresa = ?`

      const [linhas] = await con.query(comando, [idEmpresa]);
      return linhas[0]
}

export async function verificacao (verificacao){
    const comando = 
    `insert into TB_VERIFICACOES(ID_VERIFICACOES, ID_PAGINA_EMPRESA, DS_VERIFICACOES)
          values (?, ?, ?);`;

    const linhas = await con.query(comando, [verificacao.idVerificacao, verificacao.Pagina, verificacao.link]);
    verificacao.id = linhas.insertId
    return verificacao;
}

export async function listarVerificacoes(idPagina){
    const comando = 
    `select ID_VERIFICACOES     id,
            DS_VERIFICACOES     nomeVerificacao
       from TB_VERIFICACOES
      where ID_PAGINA_EMPRESA   = ?`;

      const  linhas = await con.query(comando, [idPagina]);
      return linhas[0];
}

export async function alterarValidacao(valida){
    const comando = 
    `update tb_verificacoes
        set ds_verificacoes   = ?
      where id_pagina_empresa = ?
        and id_verificacoes   = ?`

    const linhas = await con.query(comando, [valida.link, valida.idPagina, valida.idVerificacao ]);
    return linhas.affectedRows;
}

export async function carregarLocal(id){
    const comando = `
    select	ds_pais pais,
            ds_estado estado,
            ds_cidade cidade,
            ds_endereco endereco 
    from 	tb_usuario_empresa
    where id_usuario_empresa = ?    
    `

    const [linhas] = await con.query(comando, [id])
    return linhas;
}

