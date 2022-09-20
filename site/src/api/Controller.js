import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function listarEmpresas(){
    const resposta = await api.get('/empresasBemAvaliadas')
    return resposta.data;
}

export 