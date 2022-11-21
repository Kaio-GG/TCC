import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5039'
})



export async function CarregarInfoEmpresa (id) {
    const resp = await api.get (`/empresa/carregarinfoempresa/${id}`);
    console.log(resp.email)
    return resp.data;
} 
 

export async function editarNome (id, nome) {
    const t = await api.put ('/empresa/alterar/nome', {
        nome: nome,
        id: id
    });
    return t.data;
}


export async function editarNomeRepresentante (id, nome) {
    const t = await api.put ('/empresa/alterar/representante', {
        nome: nome,
        id: id
    });
    return t.data;
}


export async function editarTipo (id, nome) {
    const t = await api.put ('/empresa/alterar/tipo', {
        nome: nome,
        id: id
    });
    return t.data;
}


export async function editarEmail (id, nome) {
    const t = await api.put ('/empresa/alterar/email', {
        nome: nome,
        id: id
    });
    return t.data;
}


export async function editarSed (id, nome) {
    const t = await api.put ('/empresa/alterar/sed', {
        nome: nome,
        id: id
    });
    return t.data;
}


export async function novaFilial (id, pais ,estado ,cidade ,endereco , cep) {
    const t = await api.post ('/empresa/novafilial', {
        id: id ,
        pais: pais , 
        estado: estado, 
        cidade: cidade, 
        endereco: endereco ,
        cep: cep
    });
    return t.data;
}


export async function buscarFilial (id) {
    const resp = await api.get (`/empresa/buscarfilial/${id}`);    
    return resp.data;
}


export async function deletarFilial (id) {
    const t = await api.delete (`/empresa/deletarfilial/${id} `);
    return t.status;
}
