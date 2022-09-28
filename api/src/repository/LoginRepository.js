import { con } from './connection.js';

export async function login(email, senha){
    const comando = 
    ` select *
    from   TB_LOGIN
    where  DS_EMAIL = ?
    and    DS_SENHA = ? ;`

    const [linhas] =await con.query(comando, [email, senha])
    return linhas[0];
}