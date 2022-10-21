import './index.scss'
import {Link} from 'react-router-dom'

import Data from './assets/data.svg'
import Massagem from './assets/massage.svg'
import { useState } from 'react'

export default function Index() {

    const [linguagem, setLinguagem] = useState(false);

    function changeLanguage() {
        setLinguagem(true)
    }

    function resetLanguage(){
        setLinguagem(false)
    }

    return(
        <main className='select'>
            {linguagem === false &&
            
            <section>

                <header className='cabecalho'>
                    <Link to="/" className='f1-h1'>MyWorkShip</Link>
                    <p onClick={changeLanguage} className='f1-p1'>Linguagem</p>
                </header>

                <div className='titles'>
                    <h1>Cadastre-se como:</h1>
                </div>

                <div className='escolha'>
                        <h1>Empresa</h1>

                        <h1>Cliente</h1>
                    </div>


                <div className='imagens'>
                    <img className='img1' src={Data}></img>
                    <img className='img1' src={Massagem}></img>
                </div>
                      
                          
                <div className='buttons'>
                    <Link to='/cadastro/empresa' className='Button'> <p className='Buttons-P'> Cadastre-se como uma empresa</p> </Link>

                    <Link to='/cadastro/usuario' className='Button'> <p className='Buttons-P'> Cadastre-se como um Cliente </p> </Link>                   
                </div>
         
        </section>
        }

            {linguagem === true &&
            
            <section>

                <header className='cabecalho'>
                    <Link to="/" className='f1-h1'>MyWorkShip</Link>
                    <p onClick={resetLanguage} className='f1-p1'>Language</p>
                </header>

                <div className='titles'>
                    <h1>Register as:</h1>
                </div>

                <div className='escolha'>
                        <h1>Company</h1>

                        <h1>Client</h1>
                    </div>


                <div className='imagens'>
                    <img className='img1' src={Data}></img>
                    <img className='img1' src={Massagem}></img>
                </div>
                      
                          
                <div className='buttons'>
                    <Link to='/cadastro/empresa' className='Button'> <p className='Buttons-P'> Register as a company</p> </Link>

                    <Link to='/cadastro/usuario' className='Button'> <p className='Buttons-P'> Register as a customer</p> </Link>                   
                </div>
         
        </section>
        }


        </main>


    )



}