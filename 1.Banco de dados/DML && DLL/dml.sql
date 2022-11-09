use MyWorkshipDB;

/*--------------------INFORMAÇÕES_USUARIO_EMPRESA--------------------------*/

INSERT INTO TB_USUARIO_EMPRESA(DS_CNPJ, DS_INSCRICAO_ESTADUAL, NM_NOME_DA_EMPRESA, DS_TIPO_DA_EMPRESA, DS_PAIS, DS_ESTADO, DS_CIDADE, DS_ENDERECO,NM_REPRESENTANTE, DS_CPF_REPRESENTANTE, DS_CARGO_REPRESENTANTE, DS_NACIONALIDADE_REPRESENTANTE)
VALUES("56217542803", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a");
select *
	from TB_USUARIO_EMPRESA;
    
select *
	from TB_LOGIN;
    
insert into TB_LOGIN(ID_USUARIO_EMPRESA, ID_USUARIO_CLIENTE, DS_EMAIL, DS_SENHA, BT_LOGIN, DT_ULTLOGIN)
    values(null, null,  "aa", "aa", true, sysdate());

/*--------------------LOGIN_EMPRESA--------------------------*/
    

insert into TB_LOGIN_EMPRESA(ID_USUARIO_EMPRESA, NM_EMAIL,DS_SENHA,DT_ULTLOGIN, BT_LOGIN)
values(1,"MyWorkship@gmail.com", "12345678", now(), false);

select *
from   TB_LOGIN
where  NM_EMAIL = "MyWorkship@gmail.com"
and    DS_SENHA = "12345678" AND ID_LOGIN_EMPRESA = ID_USUARIO_EMPRESA ;

select * from TB_LOGIN;

/*select ID_LOGIN_EMPRESA	id
    from   TB_LOGIN_EMPRESA
    inner join tb_usuario_empresa on tb_usuario_empresa.id_usuario_empresa = TB_LOGIN_EMPRESA.id_usuario_empresa
    where  NM_EMAIL = ?
    and    DS_SENHA = ? */
/*--------------------INFORMAÇÕES_USUARIO_CLIENTE--------------------------*/

INSERT INTO TB_USUARIO_CLIENTE(nm_usuario, ds_cpf, ds_pais, ds_estado, ds_cidade)
values('Kurth', 53217542803, 'Brasil', 'SP', 'SP');

Select * from tb_usuario_cliente;

    SELECT  IMG_LOGO logo,
			DS_DESCRICAO descricao, 
			NM_EMPRESA nome,
			tb_usuario_empresa.id_usuario_empresa idEmpresa,
			id_usuario_cliente idCliente,
			tb_usuario_empresa.ds_cidade cicadeEmpresa,
            tb_usuario_cliente.ds_cidade cidadeUsuario
    from tb_usuario_empresa
    inner join tb_usuario_cliente on tb_usuario_cliente.id_usuario_cliente = tb_usuario_empresa.id_usuario_empresa
    inner join tb_pagina_empresa on tb_pagina_empresa.id_pagina_empresa = tb_usuario_empresa.id_usuario_empresa
    where tb_usuario_empresa.ds_cidade = tb_usuario_cliente.ds_cidade and id_usuario_cliente = 2;



/*--------------------INFORMAÇÕES_PAGINA_EMPRESA--------------------------*/

INSERT INTO TB_PAGINA_EMPRESA(id_usuario_empresa,nm_empresa, img_logo, ds_descricao)
values( 14 ,'titulo', '1', 'oii');

update TB_PAGINA_EMPRESA
   set img_logo = '/storage/empresa/aquivo.jp'
 where id_usuario_empresa = 1;


Select * from tb_pagina_empresa;

/*--------------------ALTERAÇÃO_PAGINA_EMPRESA--------------------------*/

update TB_PAGINA_EMPRESA
   set nm_empresa  = 'AdaylsonLindo',
	   img_logo = 'Arado',
       ds_descricao = 'descrição alterada'
 where id_usuario_empresa = 1;
 
/*--------------------PUBLICAÇÃO_PAGINA_EMPRESA--------------------------*/

insert into TB_PAGINA_EMPRESA_PUBLICACAO(ID_PAGINA_EMPRESA,NM_TITULO,DS_CAIXA_TEXTO)
	 values (2,'Estamos fechados','Vamos falir');
     
insert into TB_PAGINA_EMPRESA_PUBLICACAO_IMG(ID_PAGINA_EMPRESA_PUBLICACAO,IMG_IMAGEM_PUBLICACAO)
     values (2,'linkdaimg3.com');
     
select * 
  from TB_PAGINA_EMPRESA_PUBLICACAO	where id_pagina_empresa = 1;
  
select  tb_pagina_empresa_publicacao.id_pagina_empresa_publicacao,
		id_pagina_empresa ID, 
		nm_titulo		  titulo,
        ds_caixa_texto	  texto,
		img_imagem_publicacao imagem
from 	tb_pagina_empresa_publicacao
inner join tb_pagina_empresa_publicacao_img on tb_pagina_empresa_publicacao_img.id_pagina_empresa_publicacao_img = tb_pagina_empresa_publicacao.id_pagina_empresa
where id_pagina_empresa = 2;

  
select * 
  from TB_PAGINA_EMPRESA_PUBLICACAO_IMG;
  
  
/*--------------------ALTERAÇÃO_PUBLICAÇÃO_PAGINA_EMPRESA--------------------------*/

update TB_PAGINA_EMPRESA_PUBLICACAO
   set NM_TITULO      = 'Tesssssssssste',
	   DS_CAIXA_TEXTO = 'Teste'
 where ID_PAGINA_EMPRESA            = 1 
   and ID_PAGINA_EMPRESA_PUBLICACAO = 1;
 
delete from TB_PAGINA_EMPRESA_PUBLICACAO
	  where ID_PAGINA_EMPRESA            = 1 
        and ID_PAGINA_EMPRESA_PUBLICACAO = 1;  
  
/*--------------------TAG_PAGINA_EMPRESA--------------------------*/

insert into TB_TAG(NM_TAG)
	 values ('MAGICO');
     
select * 
  from TB_TAG;
  
insert into TB_TAG_EMPRESA(ID_TAG,ID_PAGINA_EMPRESA)
     values (1,1);
     
select * 
  from TB_TAG_EMPRESA;
  
  select  sum(substr(vl_avaliacao, 0, 3)) / count(vl_avaliacao) avaliacao,
        (vl_avaliacao) avaliacoes
    from tb_empresa_avaliacao 
    where id_usuario_empresa = 1;
    
    select nm_empresa, img_logo 
    from tb_pagina_empresa
    where id_usuario_empresa = 1;
    
       select round(sum(vl_avaliacao) / count(vl_avaliacao), 1) as avaliacao,
        count(vl_avaliacao) avaliacoes
    from tb_empresa_avaliacao 
    where id_usuario_empresa = 2;
    
    select round(avaliacao, 1), avaliacoes 
    from
		( select id_usuario_empresa id, sum(vl_avaliacao) / count(vl_avaliacao) as avaliacao,
			count(vl_avaliacao) avaliacoes
		from tb_empresa_avaliacao 
		where id_usuario_empresa = 2) grupo
        where id = 1;
    
    select * from tb_empresa_avaliacao;

/*--------------------INFORMAÇÕES_EMPRESA_AVALIACAO--------------------------*/

INSERT INTO TB_EMPRESA_AVALIACAO(ID_USUARIO_EMPRESA, id_usuario_cliente , vl_avaliacao, ds_avaliacao, dt_avaliacao)
values(1, 1, 5 , "Merdaruimmm",  '2022-06-03');

delete from tb_empresa_avaliacao where id_usuario_empresa = 1;

select * from TB_EMPRESA_AVALIACAO;

SELECT nm_usuario, vl_avaliacao, ds_avaliacao, nm_nome_da_empresa
FROM tb_empresa_avaliacao
INNER JOIN TB_USUARIO_CLIENTE on tb_empresa_avaliacao.id_usuario_cliente = TB_USUARIO_CLIENTE.id_usuario_cliente
INNER JOIN TB_USUARIO_EMPRESA on tb_empresa_avaliacao.id_usuario_empresa = TB_USUARIO_EMPRESA.id_usuario_empresa
ORDER BY rand()
LIMIT 4
;





Select * from tb_pagina_empresa;

DELETE from tb_empresa_avaliacao where id_empresa_avaliacao = 13;

truncate table TB_LOGIN_EMPRESA;
		
SELECT * FROM TB_AVALIACAO_SITE;
    
DROP DATABASE MyWorkshipDB;
