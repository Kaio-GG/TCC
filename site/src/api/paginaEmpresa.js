import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000' 
})

export async function Pagina (idEmpresa, nome, descricao) {
    const t = await api.post('/empresa/adicionarpagina', {
        idEmpresa:idEmpresa,
        nome:nome,
        descricao:descricao
    });

    return t.data;
}

export async function CarregarPagina (id) {
    const resposta = await api.get(`/empresa/pagina/${id}`);
    return resposta;
}

export async function AlterarPagina (idEmpresa, nome, descricao) {
    const resposta = await api.put(`/empresa/alterarpagina/${idEmpresa}`, {
        idEmpresa:idEmpresa,
        nome:nome,
        descricao:descricao
    });
    return resposta.data;
}

export async function CarregarImagem (idEmpresa, imagem) {
    const formData = new FormData();
    formData.append("capa", imagem);

    const resposta = await api.put(`/empresa/pagina/${idEmpresa}/imagem`, formData, {
        headers: {
            "content-type": "multipart/form-data"
        },
    });

    return resposta.status;
}

export async function AdicionarPublicacao (idEmpresa, nome, conteudo){
    const resposta = await api.post('/empresa/publicacao', {
        idEmpresa:idEmpresa, 
        nome:nome, 
        conteudo:conteudo
    });
    return resposta.data;
}

export async function AlterarPublicacao (nome, conteudo, idEmpresa, idPublicacao){
    const resposta = await api.put('/empresa/publicacao', {
        nome:nome, 
        conteudo:conteudo, 
        idEmpresa:idEmpresa, 
        idPublicacao:idPublicacao
    });
    return resposta.data;
}

export async function DeletarPublicacao (idEmpresa, idPublicacao){
    const resposta = await api.delete('/empresa/publicacao', {    
        idEmpresa:idEmpresa, 
        idPublicacao:idPublicacao
    });
    return resposta.data;
}