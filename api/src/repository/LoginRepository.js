import { con } from './connection.js';

export async function login(email, senha){
    const comando = 
    `  select  ID_LOGIN_EMPRESA   id,
               DS_EMAIL           email,
               DS_SENHA           senha
         from  TB_LOGIN_EMPRESA
        where  DS_EMAIL = ?
          and  DS_SENHA = ?`

    const [linhas] =await con.query(comando, [email, senha])
    return linhas;
}