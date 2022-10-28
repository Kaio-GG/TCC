import 'dotenv/config'

import ConsultasController from './controller/homeController.js';
import LoginController from './controller/LoginController.js';
import cadastroEmpresa  from './controller/CadastroEmpresaController.js';
import cadastroCliente from './controller/CadastroClienteController.js'
import LoginEmpresaController from './controller/CadastroLoginController.js';
import AgendarHorarioController from './controller/AgendarClienteController.js';
import AgendamentosController from './controller/AgendamentosController.js'
import usuarioHome from './controller/usuarioHome.js'
import PaginaEmpresa from './controller/PaginaEmpresaController.js'



import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());

//Liberar imagens
server.use('/storage/capaEmpresa', express.static('storage/capaEmpresa'));


//endpoints
server.use(ConsultasController);
server.use(LoginController);
server.use(cadastroEmpresa);
server.use(LoginEmpresaController);
server.use(AgendarHorarioController);
server.use(AgendamentosController);
server.use(cadastroCliente);
server.use(usuarioHome);
server.use(PaginaEmpresa);


server.listen(process.env.PORT,
                () => console.log(`API online na porta ${process.env.PORT}`));