import './index.scss'
import '../../common/common.scss';
import { CarregarConsultasCliente } from '../../api/agendamentos.js';
import HeaderUsuario from '../../components/header-usuario'
import Footer from '../../components/footer'
import { useState } from 'react';
import storage from 'local-storage'



export default function Index(){
   
    const [ buttons, setButton] = useState(0)
    const [consultas , setconsultas] = useState([])
    const clientelogado = storage('Cliente-Logado')
    const idcliente = (clientelogado.ID_USUARIO_CLIENTE)

    async function consultasBuscar (){
        try {

            setButton(2)
            let r = await CarregarConsultasCliente(idcliente)
            setconsultas(r)
            console.log(consultas)
            } catch (err) {
            console.log(err.message)
            }
        } 


    function Buttons1(){
       setButton(1)
    }
    
   function Buttons2(){
       setButton(2)
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
                                <button className='Buttons' onClick={consultasBuscar} > Minhas Consultas </button>
                                <button className='Buttons' onClick={consultasBuscar}> Historico de Consultas </button>
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

                                <div className='card'>
                                        {consultas.map( item =>
                                        <div>
                                            <div> 
                                            {item.hora}  
                                            {item.local}
                                            {String(item.data).substr(0,10)}
                                            {item.situacao}
                                            </div><br/>    
                                        </div> 
                                        )}

                                </div>




                        </div>
                    }
                



                    {buttons === 3 &&
                        <div className='Div-2'>
                                <h1> Histórico de Consultas</h1>
                                <hr/>

                        </div>
                    }

            </section>

        </main>   
    )
}

