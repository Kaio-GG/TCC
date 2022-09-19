import 'dotenv/config'



import express from 'express'
import cors from 'cors'

const serve = express();
serve.use(cors());
serve.use(express.json());


//endpoints






serve.listen(process.env.PORT,
                () => console.log(`API online na porta ${process.env.PORT}`));