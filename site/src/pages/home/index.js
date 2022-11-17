import './index.scss'
import Logo from '../home/assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import Cafe from '../home/assets/cafe.svg'
import Time from '../home/assets/time.svg'
import Massagem from '../home/assets/mass.svg'
import startup from '../home/assets/startup.svg'
import Reading from '../home/assets/reading.svg'
import Icon from '../home/assets/Vector.png'

import Boom from 'react-reveal/Slide'

import { avaliacaoSite, buscarPorNomeHome, listarEmpresasAvaliacao } from '../../api/homeController'
import { buscarImagem } from '../../api/paginaEmpresa'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export default function Index() {
    const [avaliacao, setAvaliacao] = useState([]);

    const [nomeUsuario, setNomeUsuario] = useState('');
    const [avaliacaoUsuario, setAvaliacaoUsuario] = useState('');

    const [filtro, setFiltro] = useState('');
    const [empresa, setEmpresa] = useState([]);
    const navigate = useNavigate()

    function registroUsuario(){
        navigate('cadastro/usuario')
    }

    function registroEmpresa(){
        navigate('cadastro/empresa')
    }


    async function enviarAvaliacao(){
        try{
            const r = await avaliacaoSite(nomeUsuario, avaliacaoUsuario)

            toast.success('Avaliação enviada com sucesso!!😃');

        }catch(err){
            toast.error("Erro ao enviar comentario🤨")
        }

    }

    async function busca(){
        const r = await buscarPorNomeHome(filtro)
        console.log(r)

        if(filtro === '')
            setEmpresa([]);

        else
        setEmpresa(r)
    }


    async function listar(){
        const resposta = await listarEmpresasAvaliacao();
        setAvaliacao(resposta)
    }



    useEffect(() => {
        listar()
        busca()
        
    }, [filtro])

    return(
        <main className='home'>
            <section className='home-f1'>
                <header className='home-header'>
                    <Link to='/login' className='h4-home'>Login</Link> 
                    
                    <img className='logo' src={Logo} alt=''></img>

                    <Link to='/cadastro' className='h4-home'>Registre-se</Link>

                </header>
                
        
            <div className='alinhardiv1'>
                <div className='div2-f1'>
                    <h1 className='f1-h1'>Faça parte do nosso precioso sonho</h1>

                    <p className='f1-p1'>Apresentamos para você um serviço rápido e prático facilitando o seu convívio com consultas e trabalhos.</p>

                    <input value={filtro} onChange={e => setFiltro(e.target.value)} placeholder='Buscar empresas' className='f1-input1'/>
                    
                    {empresa.map(item => 
                        <Boom left className='box-empresa'>
                         <div className='espacamento'>
                         <div className='ali'> 
                            <img className='img-logo' src={buscarImagem(item.logo)} />

                            <div className='alinhar-box-empresa'>
                            
                            <h1 className='h1-box-empresa'>{item.nome}</h1>

                            <p>{item.descricao}</p>

                            </div>
                         </div>
                         </div>

                        </Boom>   
                        
                    )}
                    

                </div>
                


                    <img className='img-coffee' src={Cafe} alt=''></img>

            </div>
            </section>

            <section className='f2'>
                <div className='f2-left'>
                    <h1 className='f2-h1'>Empresas</h1>

                    <img className='img-time' src={Time} alt=''></img>

                    <button className='f2-button' onClick={registroEmpresa}>Registre-se como empresa agora!</button>
                </div>

                <div className='f2-right'>
                    <h1 className='f2-h1'>Cliente</h1>

                    <img className='img-mass' src={Massagem} alt='' ></img>

                    <button onClick={registroUsuario} className='f2-button'>Registre-se como cliente no site!</button>

                </div>

            </section>

            <section className='f3'>
                <div className='f1-divpart1'>
                    <h1 className='f3-h1'>Nós disponibilizamos os melhores serviços da região para você.</h1>

                    <p className='f3-p1'>Aqui você é apresentado para as empresas e trabalhadores autonômos com melhor avaliação dentro do nosso site</p>

                    <img src={startup} className="f3-img" alt=''></img>
                </div>

                <div>
                    <h1 className='f3-h2'>Melhores avaliações</h1>

                    <h1 className='f3-h3'>Empresas</h1>

                    <div className='f3-caixa'>

                {avaliacao.map(item =>
                    <div className='div1-f3'> 
                        <img className='icon-f3' src={Icon} alt=''></img>

                        <div className='alinharCard'>
                            <p className='f3-p2'>{item.nome} <span className='f3-p5'>{item.empresa}</span></p>   
                            <p className='f3-p3'>{item.avaliacao} {item.avaliacao === 1 ? "Ponto" : "Pontos"}</p> 
                            <p className='f3-p4'>"{item.descavaliacao}"</p>
                        </div>   
                     </div>    
                        
                    )}


                    </div>

                </div>

            </section>

            <section className='f4'>
                <div className='f4-left'>
                    <h1 className='f4-h1'>Nos envie sua avaliação!</h1>

                    <div className='f4-box'>
                        <h1 className='f4-h2'>Nome:</h1>
                        <input value={nomeUsuario} placeholder="Digite seu nome..." onChange={e => setNomeUsuario(e.target.value)} className='f4-input1'></input>

                        <h1 className='f4-h2'>Avaliação:</h1>
                        <textarea value={avaliacaoUsuario} placeholder="Digite sua avaliação..." onChange={e => setAvaliacaoUsuario(e.target.value)} className='f4-input2'></textarea>

                        <button onClick={enviarAvaliacao} className='f4-button'>Enviar</button>

                    </div>

                </div>


                <div>
                    <h1 className='f4-h3'>A sua avaliação muda nossa visão dentro do possível...</h1>

                    <p className='f4-p'>Quando você manda sua avaliação apresentando os pontos positivos e negativos, nós melhoramos o site para você!</p>

                    <img className='f4-img' src={Reading} alt=''></img>

                </div>
            </section>

        </main>
    )
}