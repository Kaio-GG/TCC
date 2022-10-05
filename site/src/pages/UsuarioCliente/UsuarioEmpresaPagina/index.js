import './index.scss'

import { Link, useNavigate } from 'react-router-dom';
import HeaderUsuario from "../../../components/header-usuario";



export default function UsuarioEmpresaPagina() {

    return(
        <main className="UsuarioEmpresaPagina">
            <div className="UsuarioEmpresaPagina-Centro">
                <HeaderUsuario />
                <div className='agrups'>
                    <div className="agrup-esquerda">

                        <div className="card-empresa">
                            <div className='a'>
                                <div className="img">
                                    <div className='aimg'></div>
                                </div>
                                <div className="nome-desc">
                                    <h3 className="nome">NUTRIFIT</h3>
                                    <p className="desc"> é uma empresa de nutricionistas qualificados, que buscam o bem estar de seus clintes. Sempre com qualidade no atendimento e um sorriso no rosto  </p>
                                </div>
                            </div>
                            <div className="ava-locais">
                                <div className='estrelas'>
                                    <div className='estrela'></div>
                                    <div className='estrela'></div>
                                    <div className='estrela'></div>
                                    <div className='estrela'></div>
                                    <div className='estrela'></div>
                                </div>
                                <p> Brasil, São Paulo, Sp </p>
                                <p> Rua seila, 32 </p>
                            </div>
                        </div>

                        <div className="card-Agendar">
                            <p>Faça aqui seu Agendamento de forma gratuita e em casa</p>
                            <button className='agendar'><Link to={'./agendar'}>Agendar</Link></button>
                        </div>

                    </div>
                    <div className="agrup-direita">

                        <div className="verificacao">
                            <h3> verificaçâo</h3>
                            <p> facebook </p>
                            <p> email </p>
                            <p> Youtube </p>
                        </div>

                        <div className="certificacao">
                            <h3> certificação</h3>
                            <p> CNPJ </p>
                            <p> Certificados </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}