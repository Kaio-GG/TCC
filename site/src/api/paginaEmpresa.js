import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000' 
})

export async function Pagina (idEmpresa, nome, img, descricao) {
    const t = await api.post('/empresa/adicionarpagina', {
        idEmpresa:idEmpresa,
        nome:nome,
        img:img,
        descricao:descricao
    });

    return t.data;
}