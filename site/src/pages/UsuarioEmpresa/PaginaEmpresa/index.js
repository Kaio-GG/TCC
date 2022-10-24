import './index.scss';
import { Link } from 'react-router-dom';
import HeaderEmpresa from '../../../components/header-adm-empresa';
import Storage from 'local-storage';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';



import Footer from '../../../components/footer/index.js'

import { CarregarPagina, AlterarPagina } from '../../../api/paginaEmpresa';


export default function PaginaEmpresa() {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');

    const [cont, setCont] = useState(0);
    const [contpubli, setContpubli] = useState(0);

    const [pagina, setPagina] = useState({});
    const paulo = Storage('Empresa-Logada');
    const id = paulo.ID_USUARIO_EMPRESA;
    const idEmpresa = paulo.ID_USUARIO_EMPRESA

    useEffect(() => {
        PaginaEmpresa();
    }, [])

    async function PaginaEmpresa(){
        const resp = await CarregarPagina(id)
        setNome(pagina.Nome)
        setDescricao(pagina.descricao)
        
        setPagina(resp.data)
    }


    async function Alterarinf(){
        const logo = 'Logo Alterado';

        await AlterarPagina(idEmpresa, nome, logo, descricao);
        PaginaEmpresa();
    }

    function Salvar() {
        Alterarinf();

        const a = 0;
        setCont(a);
    }

    function Alterar() {
        setNome(pagina.Nome)
        setDescricao(pagina.descricao)

        const a = 1;
        setCont(a);
    }

    function Novapubli() {
        const a = 1;
        setContpubli(a);
    }
    
    function ConfirNovapubli() {
        const a = 0;
        setContpubli(a);
    }


    return(
        <main className="PaginaEmpresa">
            <div className="PaginaEmpresa-Centro">
                <HeaderEmpresa />
                <div className='agrups'>
                    <div className="agrup-esquerda">

                        {cont === 0 &&
                            <div className="card-empresa">
                                <div className='a'>
                                    <div className="img">
                                        <div className='aimg'></div>
                                    </div>
                                    <div className="nome-desc">
                                        <h3 className="nome">{pagina.Nome}</h3>
                                        <p className="desc">{pagina.descricao}</p>
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
                                        <img src='/assets/images/editar.svg' alt='editarperfil' onClick={Alterar}/>
                                    </div>
                                </div>
                            </div>
                        }

                        {cont === 1 &&
                            <div className="card-empresa">
                                <div className='a'>
                                    <div className="img">
                                        <div className='aimg'></div>
                                    </div>
                                    <div className="nome-desc">
                                        <input className="nome" value={nome} type='text' onChange={e => setNome(e.target.value)} />
                                        <textarea className="desc" value={descricao} onChange={e => setDescricao(e.target.value)} />
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
                                        <img src='/assets/images/Salvar.svg' alt='editarperfil' onClick={Salvar}/>
                                    </div>
                                </div>
                            </div>
                        }

                        {contpubli === 0 &&<div className="card-Publicacao">
                            <p>Adicionar Card</p>
                            <img src='/assets/images/add.svg' alt='add' onClick={Novapubli}/>
                            </div> }

                        {contpubli === 1 &&<div className="card-Publicacao-click">
                            <div className='agrupamento-inputs'>
                                <input type='text' />
                                <input type='text' />  
                            </div>

                            <div className='agrupamento-img-icon'>
                                <div>
                                    <img src='/assets/images/Salvar.svg' alt='add' onClick={ConfirNovapubli}/>
                                </div>
                                <div className='addimg'>
                                    <img src='/assets/images/addimg.png' alt='add'/>
                                </div>
                            </div>
                            </div> 
                        }

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