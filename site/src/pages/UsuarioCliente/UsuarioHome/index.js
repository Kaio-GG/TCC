import './index.scss'

import Star from './assets/star.svg'
import Local from './assets/local.svg'

import HeaderUsuario from '../../../components/header-usuario'

export default function ClienteHome() {

    return(
        <main className='homeUsuario'>
         <section>
            <header>
            <HeaderUsuario> </HeaderUsuario>
            </header>

            <div className='f1-body'>

                <div className='box1-left'>
                    <input className='input-1' placeholder='Buscar em MyWorkShip.com'/>

                    <button className='lupa'>Buscar</button>

                    

                    <div className='caixa1-esquerda'>
                        <h1 className='h1-boxleft' >Encontre as melhores empresas perto de você</h1>

                        <p className='p1-boxleft'>Nosso site realiza agendamentos de empresas proximas a região em que você mora, ele também filtra e compara com outras empresas cadastradas que já foram avaliadas por nosso clientes</p>

                    </div>

                </div>



                <div>
                    <div className='star-box'>
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