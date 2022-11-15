import './index.scss'
import Storage, { set } from 'local-storage'

import HeaderUsuario from '../../../components/header-usuario'
import { useEffect, useState } from 'react'

import Pular from 'react-reveal/Fade'
import { toast } from 'react-toastify'

import { carregarAvaliacao, laodPubs, listarComentarios, loadCertficacoes, loadPage, loadVerificacoes, sendReview } from '../../../api/Intermediario'
import { buscarImagem } from '../../../api/paginaEmpresa'
import { useParams, useNavigate  } from 'react-router-dom'

export default function Index(){
    const [input, setInput] = useState(false);
    const [nome, setNome] = useState('')
    const [logo, setLogo] = useState()
    const [descricao, setDescricao] = useState('')
    const [avaliacao, setAvaliacao] = useState('')
    const [pais, setPais] = useState('')
    const [cidade, setCidade] = useState('')
    const [endereco, setEndereco] = useState('')
    const [pagina, setPagina] = useState([])
    const [nota, setNota] = useState([]);
    const [erro, setErro] = useState('')
    const [mostrar, setMostrar] = useState(false);
    const [verificacoes, setVerficacoes] = useState([])
    const [certificacoes, setCertificacoes] = useState([])
    const [comentarios, setComentarios] = useState([]);
    const [publicacao, setPublicacao] = useState([]);
    const [review, setReview] = useState('');
    const [avaliacaoReview, setAvaliacaoReview] = useState(0);

    const data = new Date().toJSON().slice(0, 19).replace('T', ' ')

    const { id } = useParams();

    const navigate = useNavigate();

    const b = Storage('Cliente-Logado')
    const idusuario = b.ID_USUARIO_CLIENTE


    async function enviarComentario(){
        try{
            await sendReview(id, idusuario, avaliacaoReview, review, data)

            setInput(false)
            toast.dark("Comentário enviado com sucesso❗❗🎇")
        }catch (err) {
             toast.error(err.message);  
                  
            
        }
    }

    async function Lverificacoes(){
        try{
            const r = await loadVerificacoes(id)
            setVerficacoes(r)
        }catch(err){
            toast.error(err.message)
        }
    }

    async function Lcertificacoes(){
        try{
            const r = await loadCertficacoes(id)
            setCertificacoes(r)
        }catch(err){
            toast.error(err.message)
        }
    }


    async function loadPageZ(){
        try{
            const resp = await loadPage(id)
            setPagina(resp)
        }catch(err){
            alert(err.message)

        }
    }

    useEffect(() => {
        if(id)
        loadPageZ(id);
            Lverificacoes(id)
            Lcertificacoes(id)
            listarComents(id);
            carregarPubs(id)
            carregarNota(id)
            console.log(id)

    },[])


    async function listarComents(){
        try{
            const r = await listarComentarios(id);
            setComentarios(r)
        }catch (err) {
            if (err.response.status === 400){
                setErro(err.response.data.erro);    
            }
        }
    }

    async function carregarNota(){
        try{
            const r = await carregarAvaliacao(id);

            if(r  === []){
                r = ""
            }
            else{
                setMostrar(true)
                setNota(r)
            }
        }catch(err){
            toast.error(err.message)

        }
    }

    async function carregarPubs(){
        try{
            const r = await laodPubs(id)
            setPublicacao(r)
        }catch(err){
            toast.error(err.message)

        }
    }

    function irParaInfo (id){
        navigate(`/home/usuario/empresa/consulta/${id}/agendar`)

    }
    function showInput(){
        setInput(!input)
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
                        {pagina.map(item =>   
                        <div className='box-align'>
                            <img src={buscarImagem(item.logo)} alt='' className='img-empresa' />
                            <div className='b1-letters'>
                                <h1>{item.nome}</h1>
                                <p>{item.descricao}</p>
                            </div>
                        </div>
                        )}

                            <div className='b1-letters2'>
                                {nota.map(item =>
                                
                                <p className='b1-ava'><span className='limit'>{(item.avaliacao)}</span>ESTRELAS</p>
                                )}
                                
                                {pagina.map(item =>
                                <div>
                                    <p>{item.pais}, {item.cidade}</p>
                                    <p>{item.endereco}</p>
                                </div>
                                )}
                                {nota.map(item =>
                                <p>{item.avaliacoes} {item.avaliacoes === 1 ? "Avaliação" : "Avaliações"}</p>
                                )}
                                
                            </div>
                            
                    </div>

                    
                        <div className='b2'>
                            <h1 className='h1-b2'>Faça aqui seu agendamento de forma gratuita e em casa.</h1>
                            <button className='button-b2' onClick={() => irParaInfo(id)} >Agendar</button>
                        </div>

                        <div className='imagem'>
                            {publicacao.map(item =>
                            <div className='pub'>
                                <h2>{item.titulo}</h2>
                                <img className='img-desc' src={buscarImagem(item.imagem)}></img>
                                <p>{item.texto}</p>
                            </div>
                            )}
                        </div>
                                        
                        <h1 className='h1-b3'>Reviews</h1>
                            <hr className='linha-b3'></hr>
                            
                        <div className='b3'>
                            {input === true &&
                            <span className='X' onClick={showInput}>X</span>
                            
                            
                            }
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


                            
                        {comentarios.map(item =>
                            <div className='box-review'>
                                <div className='juntar'>
                                    <img className='img-usuario'></img>
                                    <div className='b3-letters'>
                                        <h1>{item.nome}</h1>
                                        <h4>{item.ava}</h4>
                                        <p className='p-b3'>{item.avads}</p>
                                    </div>
                                </div>
                                <p>{item.dia.substr(7,3).replace("-","")}/{item.dia.substring(4,7).replace("-","")}/{item.dia.substring(0,5).replace("-","")}<br/>
                                ás {item.dia.substring(11,16)}
                                </p>
                                
                            </div>
                        )}

                                       
                        </div>

                       

                    </div>

                    <div>
                       
                            
                        <div className='b4-right'>
                            <h1>Verificação</h1>
                            <hr className='linha-b3'></hr>
                            {verificacoes.map(item =>
                            <p>{item.descri}</p>
                            )}
                            
                        </div>
                       

                       
                        <div className='b5-right'>
                            <h1>Certificações</h1>
                            <hr className='linha-b3'></hr>
                            <br></br>
                            {certificacoes.map(item => 
                            <p>{item.descricao}</p>
                            )}
                        </div>
                       
                        
                    </div>
                            
                </div>






            </section>
        </main>


    )


}