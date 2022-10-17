import './index.scss';
import { Link } from 'react-router-dom';
import HeaderEmpresa from '../../../components/header-adm-empresa';


export default function PaginaEmpresa() {

    return(
        <main className="PaginaEmpresa">
            <div className="PaginaEmpresa-Centro">
                <HeaderEmpresa />
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
                                <div className='image'>
                                    <img src='/assets/images/editar.svg' alt='editarperfil'/>
                                </div>
                            </div>
                        </div>

                        <div className="card-Publicacao">
                            <p>Adicionar Card</p>
                            <img src='/assets/images/add.svg' alt='add'/>
                        </div>

                    </div>
                    <div className="agrup-direita">

                        <div className="CardCanto">
                            <h3> verificaçâo</h3>
                            <p> facebook </p>
                            <p> email </p>
                            <p> Youtube </p>
                        </div>

                        <div className="CardCanto">
                            <h3> certificação</h3>
                            <p> CNPJ </p>
                            <p> Certificados </p>
                        </div>

                        <div className="CardCanto">
                            <h3> Compartilhar</h3>
                        </div>

                        <div className="CardCanto">
                            <h3>TAG's</h3>
                            <img className='mais' src='/assets/images/add.svg' alt='Adicionar Tag' />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}