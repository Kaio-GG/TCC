use MyWorkshipDB;

/*--------------------INFORMAÇÕES_USUARIO--------------------------*/

insert into TB_USUARIO_EMPRESA (DS_CNPJ,DS_INSCRICAO_ESTADUAL,NM_NOME_DA_EMPRESA,DS_ESTADO,NM_REPRESENTANTE,DS_CPF_REPRESENTANTE,DS_CARGO_REPRESENTANTE,DS_NACIONALIDADE_REPRESENTANTE)
values("18638446000101", "739733422933", "MyWorkship", "São Paulo", "Akino Rego", "57348472087", "Gerente", "Brasil");

select *
	from TB_USUARIO_EMPRESA;
    

insert into TB_LOGIN_EMPRESA(DS_EMAIL,DS_SENHA,DT_ULTLOGIN)
values("MyWorkship@gmail.com", "12345678", now());

select ID_LOGIN_EMPRESA	id
from TB_LOGIN_EMPRESA
where DS_EMAIL = "MyWorkship@gmail.com"
and   DS_SENHA = "12345678";
