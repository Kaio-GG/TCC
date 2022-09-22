import 'dotenv/config'

import ConsultasController from './controller/ConsultasController.js';
import LoginController from './controller/LoginController.js';
import cadastroEmpresa  from './controller/CadastroEmpresaController.js';

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());


//endpoints

server.use(ConsultasController);
server.use(LoginController);
server.use(cadastroEmpresa);




server.listen(process.env.PORT,
                () => console.log(`API online na porta ${process.env.PORT}`));