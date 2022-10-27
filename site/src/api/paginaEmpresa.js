import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000' 
})

export async function Pagina (idEmpresa, nome, img, descricao) {
    const t = await api.post('/empresa/adicionarpagina', {
        idEmpresa:idEmpresa,
        nome:nome,
        img:img,
        descricao:descricao
    });

    return t.data;
}

export async function 

export async function CarregarPagina (id) {
    const resposta = await api.get(`/empresa/pagina/${id}`);
    return resposta;
}

export async function AlterarPagina (idEmpresa, nome, logo, descricao) {
    const resposta = await api.put(`/empresa/alterarpagina/${idEmpresa}`, {
        idEmpresa:idEmpresa,
        nome:nome,
        logo:logo,
        descricao:descricao
    });
    return resposta.data;
}