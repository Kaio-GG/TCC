import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function listarEmpresasAvaliacao(){
    const resposta = await api.get('/empresasBemAvaliadas')
    return resposta.data;
}

export async function avaliacaoSite(nome, avaliacao){
    const resposta = await api.post('/site', {
        nome: nome,
        avaliacao: avaliacao
    })

    return resposta.data
}

export async function cadastrarLoginEmpresa(email, senha){
    const resposta = await api.post('/empresa/cadastroLogin', {
        email: email, 
        senha: senha
    })

    return resposta.data;

}