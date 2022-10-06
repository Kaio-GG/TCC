import './index.scss'

import { Link, useNavigate } from 'react-router-dom';
import HeaderUsuario from "../../../components/header-usuario";



export default function UsuarioEmpresaPaginaAgendar() {

    return(
        <main className="UsuarioEmpresaAgendar">
            <div className='centro'>
                <HeaderUsuario />
                <div className='padding'>
                    <div className='inputs-card'>
                        <div className='ima'>
                            <img />
                            <p> NUTRIFIT </p>
                        </div>
                        <div className='inputs1'>
                            <h3>Agendamento</h3>
                            <input placeholder='Nome completo'/>
                            <input placeholder='Email'/>
                            <input placeholder='CPF'/>
                        </div>
                        <div className='inputs'>
                            <div className='e'></div>
                            <input placeholder='Data de nascimento'/>
                            <input placeholder='Sexo'/>
                            <input placeholder='Telefone'/>
                        </div>
                    </div>

                    <div className='campotexto'>
                        <h3> Agendamento </h3>
                        <textarea />
                    </div>

                    <div className='botao'>
                        <button> Proximo </button>
                    </div>
                </div>
            </div>

            
        </main>
    )
}