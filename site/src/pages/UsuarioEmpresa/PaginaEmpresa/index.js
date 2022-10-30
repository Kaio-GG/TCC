import './index.scss';
import HeaderEmpresa from '../../../components/header-adm-empresa';
import Storage from 'local-storage';

import { useEffect, useState } from 'react';


import { CarregarPagina, AlterarPagina, CarregarImagem, buscarImagem, AdicionarPublicacao, listarPublicacao } from '../../../api/paginaEmpresa';


export default function PaginaEmpresa() {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [logo, setLogo] = useState()

    const [publicacao, setPublicacao] = useState([]);
    const [tituloPublicacao, setTitutloPublicacao] = useState('Adicionar Titulo')
    const [corpoPublicacao, setCorpoPublicacao] = useState('Digite algo')

    const [cont, setCont] = useState(0);
    const [contpubli, setContpubli] = useState(0);

    const [pagina, setPagina] = useState({});
    const paulo = Storage('Empresa-Logada');
    const id = paulo.ID_USUARIO_EMPRESA;
    const idEmpresa = paulo.ID_USUARIO_EMPRESA

    useEffect(() => {
        if (id){
            PaginaEmpresa();
            carregarPublicaoes();
        }
    }, [])

    async function PaginaEmpresa(){
        try{
            const resp = await CarregarPagina(id)
            setNome(resp.Nome)
            setDescricao(resp.descricao)
            setLogo(resp.Logo)
            setPagina(resp)
        } catch (err) {
            alert(err.message)
        }
        
    }

    async function Alterarinf(){
        try{
            await AlterarPagina(idEmpresa, nome, descricao);

            if (typeof(logo) == 'object')
                await CarregarImagem(idEmpresa, logo)

            PaginaEmpresa();

            if(logo === pagina.Logo && nome === pagina.Nome && descricao === pagina.descricao){

            }
            else{
               alert('Pagina Alterada') 
            }
            
        } catch(err) {
             alert(err.message)
        }
        
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


    async function novaPublicacao() {
        try{
            AdicionarPublicacao(idEmpresa, tituloPublicacao, corpoPublicacao);
            carregarPublicaoes();

            alert('Publicado')
        } catch(err) {
            alert('Não foi possivel Adicionar Uma publicação')
        }
    }

    async function carregarPublicaoes() {
        try{
            const resp = await listarPublicacao(id)

            setPublicacao(resp)
            console.log(resp)
            console.log(publicacao)
        } catch (err) {
            alert('erro em listar as publicações')
            alert(err.message)
        }
    }


    function Novapubli() {
        const a = 1;
        setContpubli(a);
    }
    
    function ConfirNovapubli() {
        novaPublicacao()

        const a = 0;
        setContpubli(a);
    }

    function receberImagem() {
        document.getElementById('imagem').click();
    }

    function mostrarImagem() {
        if (typeof(logo) == 'object'){
            return URL.createObjectURL(logo)
        }
        else {
            return buscarImagem(logo)
        }
        
    }


    return(
        <main className="PaginaEmpresa">
            <div className="PaginaEmpresa-Centro">
                <HeaderEmpresa class="pagina"/>
                <div className='agrups'>
                    <div className="agrup-esquerda">

                        {cont === 0 &&
                            <div className="card-empresa">
                                <div className='a'>
                                    <div className="img">
                                        {!logo &&
                                            <img src='/assets/images/addimg.png' alt='Sem imagem' />
                                        }
                                        {logo &&
                                            <img src={mostrarImagem()} alt='' className='logo' />
                                        }
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
                                    <div className="img" onClick={receberImagem}>

                                        {!logo &&
                                            <img src='/assets/images/addimg.png' alt='Sem imagem' />
                                        }
                                        {logo &&
                                            <img src={mostrarImagem()} alt='' className='logo' />
                                        }
                                         <input type="file" id="imagem" onChange={e => setLogo(e.target.files[0])} />
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


                        {publicacao.map(item => 
                            <div className="">
                                <div className='agrupamento-inputs'>
                                    <h1>{item.Titulo}</h1>
                                    <p>{item.CaixaTexto}</p>
                                </div>
                                <img src='/assets/images/editar.svg' alt='editarperfil'/>
                            </div>
                        )}

                        {contpubli === 1 &&<div className="">
                            <p>Adicionar Card</p>
                            <img src='/assets/images/Salvar.svg' alt='add' onClick={Novapubli}/>
                            </div> }
                        


                        {contpubli === 0 &&<div className="card-Publicacao">
                            <p>Adicionar Card</p>
                            <img src='/assets/images/add.svg' alt='add' onClick={Novapubli}/>
                            </div> }



                        {contpubli === 1 &&<div className="card-Publicacao-click">
                            <div className='agrupamento-inputs'>
                                <input type='text' value={tituloPublicacao} onChange={e => setTitutloPublicacao(e.target.value)}/>
                                <input type='text' value={corpoPublicacao} onChange={e => setCorpoPublicacao(e.target.value)}/>
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