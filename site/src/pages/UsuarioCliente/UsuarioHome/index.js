import './index.scss'

import { avaliacaoEmpresas, buscarEmpresass, listarEmpresas } from '../../../api/usuarioHome'

import Star from './assets/star.svg'
import Local from './assets/local.svg'

import HeaderUsuario from '../../../components/header-usuario'
import { useEffect, useState } from 'react'

export default function ClienteHome() {
    const [nomeDaEmpresaPesquisa, setNomeDaEmpresaPesquisa] = useState([])

    const [empresa, setEmpresa] = useState([]);

    const [render, setRender] = useState(false);

    async function melhoresEmpresas(){
        const resp1 = await avaliacaoEmpresas();
        setEmpresa(resp1);
    }

    async function CarregarEmpresas(){
        const resp2 = await listarEmpresas();
        console.log(resp2)
        setEmpresa(resp2)
    }


    async function buscarEmpresas(){
        const resposta = await buscarEmpresass(nomeDaEmpresaPesquisa);
        setEmpresa(resposta)
        setRender(true)
    }

    async function limparPesquisas(){
        setRender(false)
    }


    return(
        <main className='homeUsuario'>
         <section>
            <header>
            <HeaderUsuario> </HeaderUsuario>
            </header>

            <div className='f1-body'>

                <div className='box1-left'>
                    <input value={nomeDaEmpresaPesquisa} onChange={e => setNomeDaEmpresaPesquisa(e.target.value)} className='input-1' placeholder='Buscar em MyWorkShip.com'/>

                    <button onClick={buscarEmpresas} className='lupa'>Buscar</button>

                    
                    {render === false &&
                    <div className='caixa1-esquerda'>
                        <h1 className='h1-boxleft' >Encontre as melhores empresas perto de você</h1>

                        <p className='p1-boxleft'>Nosso site realiza agendamentos de empresas proximas a região em que você mora, ele também filtra e compara com outras empresas cadastradas que já foram avaliadas por nosso clientes</p>

                    </div>
                    }
                    


                    {empresa.map(item => 
                        <div className='box-empresa'>
                            <div>{item.logo}</div>


                            <div className='alinhar-box-empresa'>
                            
                            <h1>{item.nome}</h1>

                            <p>{item.avaliacao}</p>

                            <p>{item.descricao}</p>

                            </div>

                            <button className='button-box-empresa'>Mais informações</button>

                        </div>   
                        
                    )}

                <button className='button-limpar' onClick={limparPesquisas}>Limpar pesquisas</button>


                </div>



                <div>
                    <div onClick={melhoresEmpresas} className='star-box'>
                        <img className='img-star' src={Star}></img>
                        <h1 className='h1-starbox'>Bem avaliadas</h1>
                    </div>

                    <div className='local-box'>
                        <img className='img-local' src={Local}></img>
                        <h1>Mais Proximas</h1>
                    </div>

                    <div className='tag-box'>
                        <h1 className=''>TAG's</h1>
                        <hr></hr>

                        <p>Todos(0)</p>
                    </div>

                </div>
            </div>

        </section>

        </main>
    )
}