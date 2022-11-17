import './index.scss'

import { avaliacaoEmpresas, buscaDeEmpresas, listarEmpresas, loadTags, maisProximo } from '../../../api/usuarioHome'
import { buscarImagem } from '../../../api/paginaEmpresa'

import Star from './assets/star.svg'
import Local from './assets/local.svg'
import Storage from 'local-storage'
import { useNavigate } from 'react-router-dom'

import Slide from 'react-reveal/Fade'

import HeaderUsuario from '../../../components/header-usuario'
import { useEffect, useState } from 'react'

export default function ClienteHome() {
    const [filtragem, setFiltragem] = useState('')

    const [empresa, setEmpresa] = useState([]);
    const [tags, setTags] = useState([]);
    const [valorTag, setValorTag] = useState("");

    const [render, setRender] = useState(false);
    const navigate = useNavigate()

    const storage = Storage('Cliente-Logado')
    const id = storage.ID_USUARIO_CLIENTE

    async function melhoresEmpresas(){
        const resp1 = await avaliacaoEmpresas();
        setRender(1)
        setEmpresa(resp1);
    }
    
    async function tagsLoad(){
        const r = await loadTags()
        setTags(r)
    }


    function irParaInfoEmpresa(id){
        navigate(`/home/usuario/int/${id}`)

    }

    async function maisProximas(){
        const resp = await maisProximo(id);
        setRender(true)
        setEmpresa(resp)
    }

    async function CarregarEmpresas(){
        const resp2 = await listarEmpresas();
        console.log(resp2)
    }


    async function buscarEmpresas(){
        const resposta = await buscaDeEmpresas(filtragem);

        if(filtragem === '')
            setEmpresa([]);

        else
        setEmpresa(resposta)

        setRender(true)
    }

    async function limparPesquisas(){
        setRender(false)
        setEmpresa([])
        setFiltragem('')
         
    }

    useEffect(() => {
        tagsLoad()
    },[])


    return(
        <main className='homeUsuario'>
         <section>
            <header>
            <HeaderUsuario> </HeaderUsuario>
            </header>

            <div className='f1-body'>
                

                <div className='box1-left'>
                    
                    <input value={filtragem} onChange={e => setFiltragem(e.target.value)} className='input-1' placeholder='Buscar em MyWorkShip.com'/>
                    <button onClick={buscarEmpresas} className='lupa'>.</button>
                    

                    
                    {render === false &&
                    <div className='caixa1-esquerda'>
                        <h1 className='h1-boxleft' >Encontre as melhores empresas perto de você</h1>

                        <p className='p1-boxleft'>Nosso site realiza agendamentos de empresas proximas a região em que você mora, ele também filtra e compara com outras empresas cadastradas que já foram avaliadas por nosso clientes</p>

                    </div>
                    }

                    {empresa.map((item, pos) =>
                     <Slide>  
                        <div className='box-empresa'>
                         <div className='ali'> 
                            <img className='img-logo' src={buscarImagem(item.logo)} />

                            <div className='alinhar-box-empresa'>
                            
                            <h1 className='h1-box-empresa'>{item.nome}</h1>

                            <p>{item.descricao}</p>

                            </div>
                         </div>

                            <button className='button-box-empresa' onClick={() => irParaInfoEmpresa(item.id)} >Agende seu horário</button>

                        </div>   
                        </Slide>
                    )}
                   

                   <img src='/assets/images/lixeira.svg' className='button-limpar' onClick={limparPesquisas}/>
                </div>
                



                <div className='relat'>
                    <div onClick={melhoresEmpresas} className='star-box'>
                        <img className='img-star' src={Star} alt=''></img>
                        <h1 className='h1-starbox'>Bem avaliadas</h1>
                    </div>

                    <div onClick={maisProximas} className='local-box'>
                        <img className='img-local' src={Local} alt=''></img>
                        <h1>Mais Proximas</h1>
                    </div>

                    <div className='tag-box'>
                        <h1 className=''>TAG's</h1>
                        <hr></hr>

                        {tags.map(item => 
                        <p>{item.tag}</p>
                        )}
                    </div>

                </div>
            </div>

        </section>

        </main>
    )
}