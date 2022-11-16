import { cadastroEmpresa } from "../repository/CadastroEmpresaRepository.js";

import { Router } from "express";
const server = Router();

server.post('/empresa/cadastro', async(req, resp) => {
    try{
        const a = req.body;

        if(!a.cnpj.trim())
            throw new Error("Preencha o campo de CNPJ.")

        if(!a.inscEstadual.trim())
            throw new Error("Preencha o campo de inscrição estadual.")
        
        if(!a.nome.trim())
            throw new Error('Preencha o campo de nome da empresa.')
            
        if(!a.tipo.trim())
            throw new Error('Preencha o campo de tipo da empresa.')

        if(!a.pais.trim())
            throw new Error('Preencha o campo de país')
        
        if(!a.estado.trim())
            throw new Error('Preencha o campo de estado')
        
        if(!a.cidade.trim())
            throw new Erorr('Preencha o campo de cidade')
        
        if(!a.endereco.trim())
            throw new Error('Preencha o campo de endereço')
        
        if(!a.representante.trim())
            throw new Error('Preencha o campo de representante da empresa')

        if(!a.cpfRepresentante.trim())
            throw new Error('Preencha o campo de CPF do representante')

        if(!a.cargoRepresentante.trim())
            throw new Error('Preencha o campo de cargo do representante')

        if(!a.nacioRepresentante.trim())
            throw new Error('Preencah o campo de nacionalidade do representante')

        const nempresa = await cadastroEmpresa(a);

        resp.send(nempresa)

    } catch (err) {
        
        resp.status(401).send({
            erro: err.message
        })
    }
})

export default server;
