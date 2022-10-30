import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000' 
})

export async function loadPage(id){
    const resposta = await api.get(`/home/usuario/int/${id}`);

    return resposta.data
}

export async function sendReview(idempresa, idusuario, avaliacao, descricao){
    const r = await api.post('/home/usuario/comentario' ,{
        ide:idempresa,
        idu:idusuario,
        avaliacao:avaliacao,
        descricao:descricao
    })

    return r.data
}

export async function listarComentarios(id){
    const t = await api.get(`/home/usuario/coments?id=${id}`)
    return t.data;
}