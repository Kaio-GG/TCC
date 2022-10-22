use MyWorkshipDB;

/*--------------------INFORMAÇÕES_USUARIO_EMPRESA--------------------------*/

insert into TB_USUARIO_EMPRESA (DS_CNPJ,DS_INSCRICAO_ESTADUAL,NM_NOME_DA_EMPRESA,DS_ESTADO,NM_REPRESENTANTE,DS_CPF_REPRESENTANTE,DS_CARGO_REPRESENTANTE,DS_NACIONALIDADE_REPRESENTANTE)
values("186384460001781", "739733462933", "MySãoPaulo", "São Paulo", "Akino Rego", "57348472087", "Gerente", "Brasil");

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



/*--------------------INFORMAÇÕES_PAGINA_EMPRESA--------------------------*/

INSERT INTO TB_PAGINA_EMPRESA(id_usuario_empresa,nm_empresa, img_logo, ds_descricao)
values( 1 ,'titulo', '1', 'oii');

Select * from tb_pagina_empresa;

/*--------------------ALTERAÇÃO_PAGINA_EMPRESA--------------------------*/

update TB_PAGINA_EMPRESA
   set nm_empresa  = 'AdaylsonLindo',
	   img_logo = 'Arado',
       ds_descricao = 'descrição alterada'
 where id_usuario_empresa = 1;
	  

/*--------------------INFORMAÇÕES_EMPRESA_AVALIACAO--------------------------*/

INSERT INTO TB_EMPRESA_AVALIACAO(ID_USUARIO_EMPRESA, id_usuario_cliente , vl_avaliacao, ds_avaliacao, dt_avaliacao)
values(1, 1, 5 , "Merdaruimmm",  '2022-06-03');

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
    
DROP DATABASE 1MyWorkshipDB;
