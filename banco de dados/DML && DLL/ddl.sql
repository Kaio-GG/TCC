create database MyWorkshipDB;
use MyWorkshipDB;


/*---------------LOGIN USUARIO--------------------------*/

create table `TB_USUARIO_CLIENTE`  (
	ID_USUARIO_CLIENTE	INT PRIMARY KEY AUTO_INCREMENT,                        
	NM_USUARIO      	VARCHAR(100) not null,
	DS_CPF      		VARCHAR(100) not null,
	DS_PAIS     		VARCHAR(50) not null,
	DS_ESTADO  			VARCHAR(100) not null,
	DS_CIDADE			VARCHAR(100) not null
);


create table `TB_PERFIL_CLIENTE`  (
	ID_PERFIL_CLIENTE    INT PRIMARY KEY AUTO_INCREMENT not null,
    ID_USUARIO_CLIENTE   INT not null,
	NM_PERFIL_EMPRESA    VARCHAR(100) not null,
	IMG_PERFIL_CLIENTE   VARCHAR(500) not null,
    FOREIGN KEY (ID_USUARIO_CLIENTE) REFERENCES TB_USUARIO_CLIENTE (ID_USUARIO_CLIENTE)
);

/*---------------LOGIN EMPRESA--------------------------*/

create table `TB_USUARIO_EMPRESA`  (
	ID_USUARIO_EMPRESA  			INT PRIMARY KEY AUTO_INCREMENT not null,           
	DS_CNPJ                         VARCHAR(15) not null,
	DS_INSCRICAO_ESTADUAL           VARCHAR(100) not null,
	NM_NOME_DA_EMPRESA              VARCHAR(100) not null,
	DS_TIPO_DA_EMPRESA              VARCHAR(100) not null,
	DS_PAIS                         VARCHAR(20) not null,  
	DS_ESTADO                       VARCHAR(100) not null,
	DS_CIDADE                       VARCHAR(100) not null,
	DS_ENDERECO                     VARCHAR(100) not null,
	NM_REPRESENTANTE                VARCHAR(100) not null,
	DS_CPF_REPRESENTANTE            VARCHAR(12) not null,
	DS_CARGO_REPRESENTANTE          VARCHAR(100) not null,
	DS_NACIONALIDADE_REPRESENTANTE  VARCHAR(100) not null
);

create table `TB_LOGIN`  (
	ID_LOGIN    INT PRIMARY KEY AUTO_INCREMENT not null, 
    ID_USUARIO_CLIENTE  INT,
    ID_USUARIO_EMPRESA  INT,
	DS_EMAIL            VARCHAR(100) not null,
	DS_SENHA            VARCHAR(100) not null,
    DT_ULTLOGIN			DATETIME not null,
	BT_LOGIN           BOOLEAN not null,
    FOREIGN KEY (ID_USUARIO_CLIENTE) REFERENCES TB_USUARIO_CLIENTE (ID_USUARIO_CLIENTE),
    FOREIGN KEY (ID_USUARIO_EMPRESA) REFERENCES TB_USUARIO_EMPRESA (ID_USUARIO_EMPRESA)
);

create table `TB_LOCAL_EMPRESA`  (
	ID_LOCAL_EMPRESA	INT PRIMARY KEY AUTO_INCREMENT not null, 
    ID_USUARIO_EMPRESA	INT not null,
    DS_PAIS             VARCHAR(100) not null,
	DS_ESTADO           VARCHAR(100) not null,
	DS_CIDADE           VARCHAR(100) not null,
	DS_ENDERECO         VARCHAR(150) not null,
	DS_CEP              VARCHAR(15) not null,
    FOREIGN KEY (ID_USUARIO_EMPRESA) REFERENCES TB_USUARIO_EMPRESA (ID_USUARIO_EMPRESA)
);

/*---------------PAGINA EMPRESA--------------------------*/

create table `TB_PAGINA_EMPRESA`  (
	ID_PAGINA_EMPRESA   INT PRIMARY KEY AUTO_INCREMENT not null,
    ID_USUARIO_EMPRESA	INT not null,
	NM_EMPRESA          VARCHAR(100) not null,
	IMG_LOGO            VARCHAR(200) not null,
	DS_DESCRICAO        VARCHAR(100) not null,
	FOREIGN KEY (ID_USUARIO_EMPRESA) REFERENCES TB_USUARIO_EMPRESA (ID_USUARIO_EMPRESA)
);

create table `TB_PAGINA_EMPRESA_PUBLICACAO`  (
	ID_PAGINA_EMPRESA_PUBLICACAO	INT PRIMARY KEY AUTO_INCREMENT not null, 
    ID_PAGINA_EMPRESA				INT not null,
	NM_TITULO                       VARCHAR(100) not null,
	DS_CAIXA_TEXTO                  VARCHAR(1000) not null,
    FOREIGN KEY (ID_PAGINA_EMPRESA) REFERENCES TB_PAGINA_EMPRESA (ID_PAGINA_EMPRESA)
);

create table `TB_PAGINA_EMPRESA_PUBLICACAO_IMG`  (
	ID_PAGINA_EMPRESA_PUBLICACAO_IMG	INT PRIMARY KEY AUTO_INCREMENT not null,
    ID_PAGINA_EMPRESA_PUBLICACAO		INT not null,
	IMG_IMAGEM_PUBLICACAO               VARCHAR(1000) not null,
    FOREIGN KEY (ID_PAGINA_EMPRESA_PUBLICACAO) REFERENCES TB_PAGINA_EMPRESA_PUBLICACAO (ID_PAGINA_EMPRESA_PUBLICACAO)
);

create table `TB_TAG`  (
	ID_TAG	INT PRIMARY KEY AUTO_INCREMENT not null,
	NM_TAG  VARCHAR(100) not null
);

create table `TB_TAG_EMPRESA`  (
	ID_TAG_EMPRESA		INT PRIMARY KEY AUTO_INCREMENT not null,
    ID_TAG				INT not null,
    ID_PAGINA_EMPRESA	INT not null,
    FOREIGN KEY (ID_TAG) REFERENCES TB_TAG (ID_TAG),
    FOREIGN KEY (ID_PAGINA_EMPRESA) REFERENCES TB_PAGINA_EMPRESA (ID_PAGINA_EMPRESA)
);

create table `TB_VERIFICACOES`  (
	ID_VERIFICACOES		INT PRIMARY KEY AUTO_INCREMENT not null,
    ID_PAGINA_EMPRESA	INT not null,
	DS_VERIFICACOES     VARCHAR(100) not null,
    FOREIGN KEY (ID_PAGINA_EMPRESA) REFERENCES TB_PAGINA_EMPRESA (ID_PAGINA_EMPRESA)
);

create table `TB_CERTIFICACOES`  (
	ID_VERIFICACOES		INT PRIMARY KEY AUTO_INCREMENT not null,
    ID_PAGINA_EMPRESA	INT not null,
	DS_CERTIFICACOES     VARCHAR(100) not null,
    FOREIGN KEY (ID_PAGINA_EMPRESA) REFERENCES TB_PAGINA_EMPRESA (ID_PAGINA_EMPRESA)
);

/*---------------AGENDAMENTO--------------------------*/

create table `TB_HORARIO`  (
	ID_HORARIO			INT PRIMARY KEY AUTO_INCREMENT not null,
	ID_USUARIO_EMPRESA  INT,
	DS_LOCAL            VARCHAR(100) not null,
	DS_HORA             VARCHAR(100) not null,
    DT_AGENDAMENTO      DATE,
    qtd_agendamento     int,
    FOREIGN KEY (ID_USUARIO_EMPRESA) REFERENCES TB_USUARIO_EMPRESA (ID_USUARIO_EMPRESA)
);

create table `TB_AGENDAMENTO`  (
	ID_AGENDAMENTO		INT PRIMARY KEY AUTO_INCREMENT not null,
	ID_HORARIO					INT not null,
	ID_USUARIO_CLIENTE  		INT not null,
	NM_PESSOA           		VARCHAR(100) not null,
	DS_EMAIL            		VARCHAR(200) not null,
	DS_CPF              		VARCHAR(15) not null,
	DS_TELEFONE         		VARCHAR(10) not null,
	DS_SEXO             		VARCHAR(25) not null,
	DT_NASCIMENTO       		DATETIME not null,
	DS_SITUACAO         		VARCHAR(100),
	DS_DESCRICAO				VARCHAR(500),
    FOREIGN KEY (ID_HORARIO) REFERENCES TB_HORARIO(ID_HORARIO),
    FOREIGN KEY (ID_USUARIO_CLIENTE) REFERENCES TB_USUARIO_CLIENTE (ID_USUARIO_CLIENTE)
);


create table `TB_EMPRESA_AVALIACAO`  (
	ID_EMPRESA_AVALIACAO	INT PRIMARY KEY AUTO_INCREMENT not null,
	ID_USUARIO_EMPRESA  	INT not null,
	ID_USUARIO_CLIENTE  	INT not null,
	VL_AVALIACAO       		INT not null,
	DS_AVALIACAO        	VARCHAR(500) not null,
	DT_AVALIACAO        	DATETIME not null,
    FOREIGN KEY (ID_USUARIO_EMPRESA) REFERENCES TB_USUARIO_EMPRESA (ID_USUARIO_EMPRESA),
    FOREIGN KEY (ID_USUARIO_CLIENTE) REFERENCES TB_USUARIO_CLIENTE (ID_USUARIO_CLIENTE)
);

create table `TB_FAVORITO`  (
	ID_FAVORITO				INT PRIMARY KEY AUTO_INCREMENT not null,
	ID_USUARIO_EMPRESA  	INT not null,
	ID_USUARIO_CLIENTE  	INT not null,
	DS_FAVORITO				BOOL not null,
    FOREIGN KEY (ID_USUARIO_EMPRESA) REFERENCES TB_USUARIO_EMPRESA (ID_USUARIO_EMPRESA),
    FOREIGN KEY (ID_USUARIO_CLIENTE) REFERENCES TB_USUARIO_CLIENTE (ID_USUARIO_CLIENTE)
);

CREATE TABLE TB_AVALIACAO_SITE(
	ID_AVALIACAO_SITE INT PRIMARY KEY AUTO_INCREMENT,
    NM_USUARIO_AVALIACAO VARCHAR(100),
    DS_AVALIACAO_SITE VARCHAR(500)
);
