import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5039'
})


export async function buscaDeEmpresas(nome) {
    const t = await api.get(`/home/usuario/busca?nome=${nome}`); 
    return t.data;
}

export async function listarEmpresas(){
    const t = await api.get('/home/usuario/listarEmpresas')
    return t.data;
}

export async function avaliacaoEmpresas(){
    const t = await api.get('/home/usuario/melhores')
    return t.data;
}

export async function maisProximo(id) {
    const t = await api.get(`/home/usuario/maisProximo?id=${id}`)
    return t.data;
}

export async function loadTags(){
    const t = await api.get('/home/usuario/listarTags')
    return t.data
}

export async function perTag(tag){
    const t = await api.get(`/home/usuario/tag?tag=${tag}`)
    return t.data
}