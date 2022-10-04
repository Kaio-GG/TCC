import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000'
})


export async function buscarEmpresass(nome) {
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