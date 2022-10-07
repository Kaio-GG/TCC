import './index.scss'

import { Link, useNavigate } from 'react-router-dom';
import HeaderUsuario from "../../../components/header-usuario";



export default function UsuarioEmpresaPaginaAgendarHorario() {

    return(
        <main className="UsuarioEmpresaAgendarHorario">
            <div className='centro'>
                <HeaderUsuario />
                <div className='pa'>

                    <h3> Horarios </h3>

                    <div className='selects'>
                        <select className='um'></select>
                        <select className='um'></select>
                    </div>

                    <div className='cards'>
                        <div className='a'></div>
                        <div className='a'></div>
                        <div className='a'></div>
                        <div className='a'></div>
                        <div className='a'></div>
                        <div className='a'></div>
                        <div className='a'></div>
                        <div className='a'></div>
                        <div className='a'></div>
                        <div className='a'></div>
                        <div className='a'></div>
                        <div className='a'></div>
                        <div className='a'></div>
                        <div className='a'></div>
                        <div className='a'></div>
                        <div className='a'></div>
                        <div className='a'></div>
                        <div className='a'></div>
                        <div className='a'></div>
                        <div className='a'></div>
                        <div className='a'></div>
                        <div className='a'></div>
                        <div className='a'></div>
                        <div className='a'></div>
                    </div>

                    <div className='botao'>
                        <Link to='./finalizado'><button> solicitar </button></Link>  
                    </div>
                
                </div>
            </div>
        </main>
    )
}