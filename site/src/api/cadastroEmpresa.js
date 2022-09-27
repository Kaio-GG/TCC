import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function cadastroEmpresa(cnpj, inscEstadual, nome, tipo, pais, estado, cidade, endereco, representante, cpfRepresentante, cargoRepresentante, nacioRepresentante) {
    const t = await api.post('/empresa/cadastro', {
            cnpj:cnpj, 
            inscEstadual:inscEstadual,
            nome:nome,
            tipo:tipo,
            pais:pais,
            estado:estado,
            cidade:cidade,
            endereco:endereco, 
            representante:representante,
            cpfRepresentante:cpfRepresentante,
            cargoRepresentante:cargoRepresentante,
            nacioRepresentante:nacioRepresentante
    });

    return t.data;
}

export async function cadastroLoginEmpresa(idEmpresa, usuario, senha, empresa) {
        const t = await api.post('/empresa/cadastroLogin', {
            idEmpresa: idEmpresa, 
            usuario: usuario,
            senha: senha,
            empresa:empresa
        });
    
        return t.data;
    }