import './index.scss'
import '../../common/common.scss';


import HeaderUsuario from '../../components/header-usuario'
import Footer from '../../components/footer'

import { useState } from 'react';


export default function Index(){

   const[ buttons, setButton] = useState(0)

    function Buttons1(){
       setButton(1)
    }
    
   function Buttons2(){
       setButton(2)
    }

    function Buttons3(){
         setButton(3)
    }

    function Buttons4(){
        setButton(4)
        setTimeout(() => {
            setButton(1)
        }, 500);
    }



    return(
        <main className='Main-Clientes-Favoritos'>
            <HeaderUsuario></HeaderUsuario>

            <section className='Faixa-1'> 


                    <div className='Div-1'>
                        <h1>Minha Lista</h1>
                            <hr/>
                            <div className='Caixa-de-Botoes'>
                                <button className='Buttons' onClick={Buttons1}> Favoritos </button>
                                <button className='Buttons' onClick={Buttons2} > Minhas Consultas </button>
                                <button className='Buttons' onClick={Buttons3}> Historico de Consultas </button>
                                <button className='Buttons' onClick={Buttons4}> Recentes </button>

                            </div>
                    </div>
                    
                    {buttons === 1 &&
                        <div className='Div-2'>
                                <h1> Meus Favoritos</h1>
                                <hr/>

                        </div>
                    }
                    
                    {buttons === 2 &&
                        <div className='Div-2'>
                                
                                <h1> Minhas Consultas</h1>
                                <hr/>

                        </div>
                    }
                
                    {buttons === 3 &&
                        <div className='Div-2'>
                                
                                <h1> Histórico de Consultas</h1>
                                <hr/>

                        </div>
                    }

                    {buttons === 4 &&
                        <div className='Div-2'>
                                
                                <h1> Recentes</h1>
                                <hr/>

                        </div>
                    }   

            </section>

        </main>   
    )
}

