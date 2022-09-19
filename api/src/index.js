import 'dotenv/config'

import ConsultasController from './controller/ConsultasController.js';
import LoginController from './controller/LoginController.js';

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());


//endpoints

server.use(ConsultasController);
server.use(LoginController);




server.listen(process.env.PORT,
                () => console.log(`API online na porta ${process.env.PORT}`));