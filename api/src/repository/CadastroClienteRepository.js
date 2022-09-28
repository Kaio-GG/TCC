import { con } from './connection.js';

export async function cadastroCliente(cliente){
    const comando =
    `insert into TB_USUARIO_CLIENTE(nm_usuario, ds_cpf, ds_pais, ds_estado, ds_cidade)
                             values (?, ?, ?, ?, ?)`;

    const [linhas] = await con.query(comando, [cliente.usuario, cliente.cpf, cliente.pais, cliente.estado, cliente.cidade]);
    cliente.id = linhas.insertId;
    return cliente;
};


