import './index.scss'

import { Link, useNavigate } from 'react-router-dom';
import HeaderUsuario from "../../../components/header-usuario";



export default function UsuarioEmpresaFinalizado() {

    return(
        <main className="UsuarioEmpresaFinalizado">
            <div className='centro'>
                <HeaderUsuario />
                <div className='ag'>
                    <div className='card'>
                        <div>
                            <h3> Soliicitação Concluida</h3>
                            <p> Sua solicitação foi concluida. Aguarde Sua resposta pelo email</p>
                        </div>
                        <div className='a'>
                            <Link to='/home/usuario'><button> Voltar a tela Inicial </button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}