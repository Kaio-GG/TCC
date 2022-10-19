use MyWorkshipDB;
/*--------------------INFORMAÇÕES_USUARIO_EMPRESA--------------------------*/

insert into TB_USUARIO_EMPRESA (DS_CNPJ,DS_INSCRICAO_ESTADUAL,NM_NOME_DA_EMPRESA,DS_ESTADO,NM_REPRESENTANTE,DS_CPF_REPRESENTANTE,DS_CARGO_REPRESENTANTE,DS_NACIONALIDADE_REPRESENTANTE)
values("186384460001781", "739733462933", "MySãoPaulo", "São Paulo", "Akino Rego", "57348472087", "Gerente", "Brasil");

select *
	from TB_USUARIO_EMPRESA;

/*--------------------LOGIN--------------------------*/

select *
	from TB_LOGIN;
    
/*--------------------INFORMAÇÕES_USUARIO_CLIENTE--------------------------*/

INSERT INTO TB_USUARIO_CLIENTE(nm_usuario, ds_cpf, ds_pais, ds_estado, ds_cidade)
values('Kurth', 53217542803, 'Brasil', 'SP', 'SP');

Select * from tb_usuario_cliente;

/*--------------------INFORMAÇÕES_PAGINA_EMPRESA--------------------------*/

INSERT INTO TB_PAGINA_EMPRESA(id_usuario_empresa,nm_empresa, img_logo, ds_descricao)
values( 1,'titulo', '1', 'oii');

Select * from tb_pagina_empresa;

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

SELECT VL_AVALIACAO avaliacao, 
    IMG_LOGO logo, 
    DS_DESCRICAO descricao,
    NM_EMPRESA nome,
    DS_CIDADE cidade
FROM TB_PAGINA_EMPRESA
INNER JOIN TB_USUARIO_CLIENTE on tb_pagina;

 SELECT tb_usuario_cliente.ID_USUARIO_CLIENTE id, 
    tb_usuario_cliente.ds_cidade cidade,
    tb_usuario_empresa.ds_cidade cidade2,
    vl_avaliacao avaliacao,
    IMG_LOGO logo, 
    DS_DESCRICAO descricao,
    NM_EMPRESA nome
    FROM tb_usuario_empresa, tb_usuario_cliente
    inner join tb_empresa_avaliacao 
    on tb_empresa_avaliacao.id_empresa_avaliacao = tb_usuario_cliente.id_usuario_cliente
	inner join tb_pagina_empresa
    on tb_pagina_empresa.id_pagina_empresa = tb_usuario_cliente.id_usuario_cliente
    where tb_usuario_cliente.ds_cidade = tb_usuario_empresa.ds_cidade AND 
	tb_usuario_cliente.ID_USUARIO_CLIENTE = 1;
    

insert into tb_pagina_empresa(id_usuario_empresa, nm_empresa, img_logo, ds_descricao)
values(1, "Mc'Donalds", 1, "achei legal");

select * from tb_pagina_empresa;


/*----------------------------- NOVO HORARIO ---------------------------------*/


 INSERT INTO TB_HORARIO (ID_USUARIO_EMPRESA , DS_LOCAL , DS_HORA , DT_AGENDAMENTO , qtd_agendamento)
					VALUES ( 3 , "RUA BONIFACIO ASIOLI N 47" , "14:00" , "2022-10-06"  , 10 );

     select 
             ds_hora          hora ,
             qtd_agendamento  qtd
       from  tb_agendamento 
      where  ID_USUARIO_EMPRESA = 1 && 
             ds_local           = 'santo amaro' && 
             DT_AGENDAMENTO     = '2022-10-23'; 

select * from tb_HORARIO;



/*------------------------- NOVO AGENDAMENTO ------------------------------*/


 insert INTO TB_AGENDAMENTO (ID_HORARIO , ID_USUARIO_CLIENTE , NM_PESSOA , DS_EMAIL , DS_CPF , DS_TELEFONE , DS_SEXO , DT_NASCIMENTO , DS_SITUACAO , DS_DESCRICAO)
							  VALUE( 11 , 1 , 'KAIO GG' , 'KAIOFDSS@GMAIL.COM' , '5404023390', '958431234' , 'MASCULINO' , '2005-12-23' , 'ESPERANDO' , '3VFBVVNOSDRFVIDFRNBIRPDBPIDNVFSJSNVP');

update 		tb_agendamento
	set 	ds_situacao = 'CONFIRMADA'
	where 	ID_agendamento = 4 ;
    
update 		tb_agendamento
	set 	ds_situacao = 'RECUSADA'
	where 	ID_agendamento = 4 ;    

 
 
 
SELECT * FROM TB_AGENDAMENTO;

select TB_HORARIO.ID_HORARIO        ,
	   TB_HORARIO.ID_USUARIO_EMPRESA 'ID'   ,	
	   TB_AGENDAMENTO.NM_PESSOA  	 'NOME' ,
	   TB_HORARIO.DS_LOCAL   	     'LOCAL',							
	   TB_HORARIO.DS_HORA    	     'HORA' ,
       TB_HORARIO.DT_AGENDAMENTO     'DATA' 
  FROM 
	   TB_HORARIO
INNER JOIN
	   TB_AGENDAMENTO ON TB_HORARIO.ID_HORARIO = TB_AGENDAMENTO.ID_HORARIO
     WHERE
     TB_HORARIO.ID_USUARIO_EMPRESA = 3;



select  
		TB_AGENDAMENTO.ID_AGENDAMENTO	'id'	,
		TB_AGENDAMENTO.NM_PESSOA  'NOME' ,
		TB_HORARIO.DS_LOCAL   	 'LOCAL',						
		TB_HORARIO.DS_HORA    	 'HORA' ,
		TB_HORARIO.DT_AGENDAMENTO 'DATA' ,
		TB_AGENDAMENTO.DS_DESCRICAO 'DESC',	
		TB_AGENDAMENTO.DS_EMAIL   'EMAIL',
		TB_AGENDAMENTO.DS_CPF	 'CPF',
		TB_AGENDAMENTO.DS_SEXO	'SEXO',
		TB_AGENDAMENTO.DS_TELEFONE  'TELEFONE',
		TB_AGENDAMENTO.DT_NASCIMENTO 'NASCIMENTO'
  FROM 
		TB_HORARIO
INNER JOIN
		TB_AGENDAMENTO ON TB_HORARIO.ID_HORARIO = TB_AGENDAMENTO.ID_HORARIO
     WHERE
		TB_AGENDAMENTO.ID_AGENDAMENTO = '1';

select 	TB_HORARIO.ID_HORARIO        ,
		TB_AGENDAMENTO.ID_AGENDAMENTO,
		TB_HORARIO.ID_USUARIO_EMPRESA 'ID'   ,	
		TB_AGENDAMENTO.NM_PESSOA  	 'NOME' ,
		TB_HORARIO.DS_LOCAL   	     'LOCAL',							
		TB_HORARIO.DS_HORA    	     'HORA' ,
		TB_HORARIO.DT_AGENDAMENTO     'DATA' 
  FROM 
		TB_HORARIO
INNER JOIN
		TB_AGENDAMENTO ON TB_HORARIO.ID_HORARIO = TB_AGENDAMENTO.ID_HORARIO
     WHERE
		TB_HORARIO.ID_USUARIO_EMPRESA = 3 AND
		TB_HORARIO.DT_AGENDAMENTO  =   '2022-10-23';
        
/*------------------------- PAGINA EMPRESA  ------------------------------*/
        
        select id_pagina_empresa	idPagina,
			   id_usuario_empresa   idEmpresa,
               nm_empresa			Nome,
               img_logo				Logo,
               ds_Descricao			descricao
	      from tb_pagina_empresa
		 where id_usuario_empresa = 5;

DELETE from tb_empresa_avaliacao where id_empresa_avaliacao = 13;

truncate table TB_LOGIN_EMPRESA;
		
SELECT * FROM TB_AVALIACAO_SITE;
    
DROP DATABASE MyWorkshipDB;
