import axios from "axios";

import localStorage from "local-storage";

const api = axios.create({
    baseURL: 'http://localhost:5000'
})


export async function buscaDeEmpresas(nome) {
    const t = await api.get(`/home/usuario/busca?nome=${nome}`); 
    console.log(t);
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