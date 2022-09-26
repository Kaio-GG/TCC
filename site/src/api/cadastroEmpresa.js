import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function cadastroEmpresa(cnpj, inscEstadual, nome, estado, representante, cpfRepresentante, cargoRepresentante,
nacioRepresentante) {
    const t = await api.post('/empresa/cadastro', {
        cnpj: cnpj, 
        inscEstadual: inscEstadual,
        nome: nome,
        estado: estado, 
        representante: representante, 
        cpfRepresentante: cpfRepresentante,
        cargoRepresentante: cargoRepresentante,
        nacioRepresentante: nacioRepresentante
    });

    return t.data;
}

export async function cadastroLoginEmpresa(idEmpresa, usuario, senha) {
        const t = await api.post('/empresa/cadastroLogin', {
            idEmpresa: idEmpresa, 
            usuario: usuario,
            senha: senha
        });
    
        return t.data;
    }