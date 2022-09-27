import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function login(email, senha, empresa) {
    const t = await api.post('/empresa/login', {
        email: email,
        senha: senha,
        empresa: empresa
    });

    return t.data;
}