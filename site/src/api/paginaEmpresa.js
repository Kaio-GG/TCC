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

export async function CarregarPagina (id) {
    const resposta = await api.get(`/empresa/pagina/${id}`);
    return resposta;
}

export async function AlterarPagina (nome, img, descricao, idEmpresa) {
    const resposta = await api.put(`/empresa/alterarpagina`, {
        idEmpresa:idEmpresa,
        nome:nome,
        img:img,
        descricao:descricao,
        idEmpresa:idEmpresa
    });
    return resposta;
}