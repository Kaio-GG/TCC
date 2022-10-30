import './index.scss'
import Storage from 'local-storage'

import HeaderUsuario from '../../../components/header-usuario'
import { useEffect, useState } from 'react'

import Pular from 'react-reveal/Fade'
import { loadPage, sendReview } from '../../../api/Intermediario'
import { buscarImagem } from '../../../api/paginaEmpresa'

export default function Index(){
    const [input, setInput] = useState(false);

    const [nome, setNome] = useState('')
    const [logo, setLogo] = useState()
    const [descricao, setDescricao] = useState('')
    const [avaliacao, setAvaliacao] = useState('')
    const [pais, setPais] = useState('')
    const [cidade, setCidade] = useState('')
    const [endereco, setEndereco] = useState('')

    const [erro, setErro] = useState('')

    const [comentarios, setComentarios] = useState([]);
    const [review, setReview] = useState('');
    const [avaliacaoReview, setAvaliacaoReview] = useState(0);

    const [pagina, setPagina] = useState({})

    const a = Storage('Cliente-Logado')
    const idusuario = a.ID_USUARIO_CLIENTE

    const n = Storage('Empresa-Logada');
    const id = n.ID_USUARIO_EMPRESA;

    useEffect(() => {
        if(id){
            loadPageZ();
        }
    },[])

    async function enviarComentario(){
        try{
            const r = await sendReview(id, idusuario, review, avaliacaoReview)
            
            alert('Comentario enviado')
            
            return r;
        }catch (err) {
            if (err.response.status === 400){
                setErro(err.response.data.erro);    
            }
        }

    }

    async function loadPageZ(){
        try{
            const resp = await loadPage(id)
            setNome(resp.nome)
            setLogo(resp.logo)
            setDescricao(resp.descricao)
            setAvaliacao(resp.avaliacao)
            setPais(resp.pais)
            setCidade(resp.cidade)
            setEndereco(resp.endereco)
            setPagina(resp)
        }catch(err){
            alert(err.message)

        }
    }

    function showInput(){
        setInput(true)
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
        <main className='full'>
            <section>
                <header className='header'>
                    <HeaderUsuario> </HeaderUsuario>
                </header>

                <div className='alinhar-row'>
                    <div className='boxleft'>
                        <div className='b1'>
                        <img src={mostrarImagem()} alt='' className='img-empresa' />

                            <div className='b1-letters'>
                                <h1>{pagina.nome}</h1>
                                <p>{pagina.descricao}</p>
                            </div>

                            <div className='b1-letters2'>
                                <p className='b1-ava'>{pagina.avaliacao} ESTRELAS</p>
                                <p>{pagina.pais}, {pagina.cidade}</p>
                                <p>{pagina.endereco}</p>
                                <p>? Avaliações</p>
                            </div>
                        </div>


                        <div className='b2'>
                            <h1 className='h1-b2'>Faça aqui seu agendamento de forma gratuita e em casa.</h1>
                            <button className='button-b2'>Agendar</button>
                        </div>

                        <div className='imagem'>
                            <img className='img-desc'></img>
                        </div>

                        <div className='b3'>
                            <h1 className='h1-b3'>Reviews</h1>
                            <hr className='linha-b3'></hr>

                            <div className='box-review'>
                                <div className='juntar'>
                                    <img className='img-usuario'></img>
                                    <div className='b3-letters'>
                                        <h1>Numero da avaliação</h1>
                                        <p className='p-b3'>Eu gostei muito dessa empresa parea</p>
                                    </div>
                                </div>

                                <p>25/10/12</p>
                            </div>

                            <div className='box-review'>
                                <div className='juntar'>
                                    <img className='img-usuario'></img>
                                    <div className='b3-letters'>
                                        <h1>Numero da avaliação</h1>
                                        <p className='p-b3'>Eu gostei muito dessa empresa parea</p>
                                    </div>
                                </div>

                                <p>25/10/12</p>
                            </div>

                            <div className='box-review'>
                                <div className='juntar'>
                                    <img className='img-usuario'></img>
                                    <div className='b3-letters'>
                                        <h1>Numero da avaliação</h1>
                                        <p className='p-b3'>Eu gostei muito dessa empresa parea</p>
                                    </div>
                                </div>

                                <p>25/10/12</p>
                            </div>

                            {erro}

                            {input === true &&
                                <Pular> 
                                    <div className='comentario'>
                                        <textarea value={review} onChange={e => setReview(e.target.value)} className='comentar'/>
                                        <div className='alinhar-coment'>
                                            <p>Insira o número de sua avaliação</p>
                                            <input value={avaliacaoReview} onChange={e => setAvaliacaoReview(e.target.value)} type="number" maxLength="1"/>
                                        </div>
                                        <button onClick={enviarComentario} className='button-enviar'>Enviar</button>
                                    </div>

                                </Pular>

                            }

                            {input === false &&

                                <p className='p2-b3' onClick={showInput}>Adicionar comentário</p>

                            }

                            

                           
                        </div>

                    </div>

                    <div>
                        <div className='b4-right'>
                            <h1>Verificação</h1>
                            <hr className='linha-b3'></hr>
                            <p>5523-5475</p>
                            <p>facebook.com.br/empresa</p>
                            <p>eusougay@gmail.com</p>
                        </div>

                        <div className='b5-right'>
                            <h1>Certificações</h1>
                            <hr className='linha-b3'></hr>
                        </div>
                    </div>

                </div>





            </section>
        </main>


    )


}