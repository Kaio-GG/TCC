import { con } from './connection.js';

export async function login(email, senha, empresa){
    const comando = 
    ` select ID_LOGIN_EMPRESA	id
    from   TB_LOGIN_EMPRESA
    where  NM_EMAIL = ?
    and    DS_SENHA = ?
    and    BT_LOGINE = ? ;`

    const [linhas] =await con.query(comando, [email, senha, empresa])
    return linhas[0];
}