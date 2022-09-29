import 'dotenv/config'

import ConsultasController from './controller/ConsultasController.js';
import LoginController from './controller/LoginController.js';
import cadastroEmpresa  from './controller/CadastroEmpresaController.js';
import LoginEmpresaController from './controller/LoginEmpresaController.js'
import NovoHrariocontroller from './controller/NovoHorariocontroller.js'
import EditarHorarioController from './controller/EditarHorarioController.js'
import DeletarHorarioController from './controller/DeletarHorarioController.js'


import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());


//endpoints

server.use(ConsultasController);
server.use(LoginController);
server.use(cadastroEmpresa);
server.use(LoginEmpresaController);
server.use(NovoHrariocontroller);
server.use(EditarHorarioController);
server.use(DeletarHorarioController);





server.listen(process.env.PORT,
                () => console.log(`API online na porta ${process.env.PORT}`));