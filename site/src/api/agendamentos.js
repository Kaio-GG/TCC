import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
})


export async function CarregarHorarios (idEmpresa , localAge , dataAge ) {
    const resp = await api.get (`/empresa/carregarhorario?id=${idEmpresa}&local=${localAge}&data=${dataAge}`);
    console.log(resp)
    return resp.data;
}


export async function NovoHorario (id, local , hora , data , qtd) {
    const t = await api.post ('/empresa/novohorario', {
        id_empresa:id, 
        local:local  , 
        hora:hora ,
        data:data , 
        qtd:qtd
    });

    return t.data;
}


export async function editarHorario (id, qtdage) {
    const t = await api.put ('/empresa/editarhorario', {
        qtd: qtdage,
        id_agendamento:id
    });

    return t.data;
}


export async function deletarHorario (id) {
    const t = await api.delete (`/empresa/deletarhorario/${id} `);
    return t.data;
}


export async function agendarHorario (id_agendamento, id_cliente , nome , email , cpf , telefone , sexo , nascimento , situacao) {
    const t = await api.get ('/usuario/carregarhorario', {
        id_agendamento : id_agendamento,
        id_cliente: id_cliente,
        nome: nome,
        email:email,
        cpf: cpf,
        telefone: telefone ,
        sexo: sexo,
        nascimento: nascimento,
        situacao:situacao
    });
    return t.data;
}


