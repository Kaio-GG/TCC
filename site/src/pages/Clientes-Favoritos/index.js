import './index.scss'
import '../../common/common.scss';
import { CarregarConsultasCliente ,CarregarConsultasClientePorData, CarregarConsultasClientePorSitu } from '../../api/agendamentos.js';
import HeaderUsuario from '../../components/header-usuario'
import { useEffect, useState } from 'react';
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



export default function Index(){
   
    const [consultas , setconsultas] = useState([])
    const [ data , setdata]= useState('')
    const [situacao , setsituacao] = useState('')

    const clientelogado = storage('Cliente-Logado')
    const idcliente = (clientelogado.ID_USUARIO_CLIENTE)
    const navigate = useNavigate()


    async function consultasBuscar (){
        try {
            let r = await CarregarConsultasCliente(idcliente)
            setconsultas(r)
            } catch (err) {
            console.log(err.message)
            }
        } 

    async function consultasBuscarData (){
        try {
            let r = await CarregarConsultasClientePorData(idcliente , data)
            setconsultas(r)
        } catch (err) {
            console.log(err.message)
        }
    }

    async function porSituacao (){
        try {
            if (situacao !== 'CONFIRMADA' && situacao !== 'RECUSADO') {
                
            }else{
                let  r = await CarregarConsultasClientePorSitu(idcliente , situacao)   
                setconsultas(r)
            }
        } catch (err) {
            toast.error(err.message)         
        }
    }

    function info (id){
        navigate(`/empresa/${id}/informacoes`)
    }



    function novahora (){
        let hr = new Date()
        let a = hr.toISOString().substr(0,10)
        setdata(a)
    }


    

        useEffect(() => {
            consultasBuscar()
            novahora()
        }, [])

        
        useEffect(() => {
            porSituacao(situacao)
        }, [situacao])


    return(
        <main className='Main-Clientes-Favoritos'>
            <HeaderUsuario></HeaderUsuario>

            <section className='Faixa-1'> 


                    <div className='Div-1'>
                        
                            <div className='Caixa-de-Botoes'>
                                <h1>Filtrar Consultas</h1>
                                    <div className='org1'>
                                        <input type='date' value={data} className='inpdate' onChange={e => setdata(e.target.value)}/>
                                        <img src='/assets/images/lupa-branco.svg' alt='' onClick={consultasBuscarData}/>
                                    </div>              
                            </div>
                            <div className='org'>
                                        <button  onClick={consultasBuscar}>Todos</button>    

                                        <button onClick={() => setsituacao('RECUSADO')}>Recusado</button>    

                                        <button onClick={() => setsituacao('CONFIRMADA')}>Confirmada</button>    
                                    </div>
                            <img className='img1' src='/assets/images/escolhendo.svg' alt='' />
                    </div>
                    
                        <div className='Div-2'>

                                    <div className='card1'>         
                                            <div className='item'>Horario</div>  
                                            <div className='item'>Local</div>
                                            <div className='item'>Data</div>
                                            <div className='item'>Situação</div>
                                            <div className='item'>Empresa</div>
                                     </div>

                                <div className='cards' >
                                        {consultas.map( item =>
                                        <div className='card'>
                                             
                                            <div className='item'>{item.hora}</div>  
                                            <div className='item'>{item.local}</div>
                                            <div className='item'><p>{item.data.substr(7,3).replace("-","")}/{item.data.substring(4,7).replace("-","")}/{item.data.substring(0,5).replace("-","")}<br/></p></div>
                                            <div className='item'>{item.situacao}</div>
                                            <div className='item'>{item.nome}</div>
                                                
                                        </div> 
                                        )}

                                </div>
                        </div>
                        <div></div>
                

            </section>

        </main>   
    )
}

