import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
})


export async function CarregarHorarios (idEmpresa , localAge , dataAge ) {
    const resp = await api.get (`/empresa/carregarhorario?id=${idEmpresa}&local=${localAge}&data=${dataAge}`);
    return resp.data;
} 

export async function CarregarHorario (idEmpresa ) {
    const resp = await api.get (`/empresa/carregarhorario/${idEmpresa}`);
    return resp.data;
} 



export async function CarregarHorariosPorSituscao (idEmpresa , situ ) {
    const resp = await api.get (`/empresa/carregarhorario/situacao/${idEmpresa}/${situ}`);
    return resp.data;
} 

export async function CarregarConsultasCliente (id ) {
    const resp = await api.get (`/usuario/carregarconsultas/${id}`);
    return resp.data;
} 



export async function CarregarInfo (id) {
    const resp = await api.get (`/empresa/carregarinfo/${id}`);
    return resp.data;
} 


export async function confirmar (id){
    const resp = await api.put (`/empresa/confirmar/${id}`)
    return resp.data
}


export async function recusar (id){
    const resp = await api.put   (`/empresa/recusar/${id}`)
    return resp.data
}



export async function buscarLocal (id) {
    const resp = await api.get (`/empresa/buscarlocal/${id}`);
    console.log(id)
    return resp.data;
}

export async function agendamentosData (id , data ){
    const resp = await api.get (`/empresa/carregarhorariopordata/${id}/${data}`)
    return resp.data
} 


export async function agendamentosLocal (id , local){
    const resp = await api.get (`/empresa/carregarhorarioporlocal/${id}/${local}`)
    return resp.data
} 


export async function agendamentos (id){
    const resp = await api.get (`/empresa/carregarhorario/${id}`)
    return resp.data
} 


export async function horarios (id){
    const resp = await api.get (`/empresa/carregarhorarios/${id}`)
    return resp.data   
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
        id_horario:id
    });

    return t.data;
}


export async function deletarHorario (id) {
    const t = await api.delete (`/empresa/deletarhorario/${id} `);
    return t.data;
}


export async function agendarHorario (id_horario, id_cliente , nome , email , cpf , telefone , sexo , nascimento , desc ) {
    const t = await api.post ('/empresa/agendar', {
        id_horario : id_horario,
        id_cliente: id_cliente,
        nome: nome,
        email:email,
        cpf: cpf,
        telefone: telefone ,
        sexo: sexo,
        nascimento: nascimento,
        descricao:desc
    });
    return t.data;
}


export async function horariosPorData (id , data){
    const resp = await api.get (`/empresa/carregarhorario/${id}/${data}`)
    return resp.data   
} 

export async function mostrarNome(id){
    const resp = await api.get(`/usuario/mostrarEmpresa?id=${id}`)
    return resp.data
}