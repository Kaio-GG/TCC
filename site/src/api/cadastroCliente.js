import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5039'
})

export async function cadastroCliente(usuario, cpf, pais, estado, cidade) {
    const t = await api.post('/cliente/cadastro', {
            usuario:usuario, 
            cpf:cpf,
            pais:pais,
            estado:estado,
            cidade:cidade,
    });

    return t.data;
}



