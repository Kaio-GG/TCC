import './index.scss'
import Cardadm from '../../../components/card-adm-empresa'
import HeaderEmp from '../../../components/header-adm-empresa/index.js'
import { useEffect, useState  } from 'react'
import storage from 'local-storage'
import {   buscarLocal , agendamentosData , agendamentosLocal , agendamentos , CarregarHorariosPorSituscao } from '../../../api/agendamentos.js'
import { toast } from 'react-toastify'
import { buscarFilial } from '../../../api/empresa.js'


export default function Homeempresa() {
    const [agendamento , setagendamento ] = useState([])
    const [data , setdata] = useState('')
    const [local, setlocal] =useState([])
    const [situacao , setsituacao]= useState('')
    const [filial , setfilial] = useState([])
    const [localcarregar , setlocalcarregar] = useState('')
    const [tutorial , settutorial] = useState(true)
    const [dica , setdica] = useState(false)
    
    const empresaLogada = storage('Empresa-Logada')
    const id = (empresaLogada.ID_USUARIO_EMPRESA)
    
     function novaData (){
         const a = new Date ()
         let b = a.toISOString().substr(0, 10);
         setdata(b);
     }
 
     
     async function ListarPorData (dt , id){
        const r = await agendamentosData(dt , id)
        setagendamento(r)
     }

     async function listarPorLocal (id  , local){
        let r = 0
        if( local === 'TODOS'){
            r = await agendamentos(id)
        }else{
         r = await agendamentosLocal(id ,local)
        }
         setagendamento(r)
     }

 
    async function listar (id){
        const r = await agendamentos(id)
        setagendamento(r)
    }

    async function buscar (id){
        try {
          const a = await buscarLocal(id)
          let b =  await buscarFilial(id)  
          setlocal(a)
          setfilial(b)
        } catch (err) {
            console.log(err.message)
        }
    }

    async function porSituacao (id , situ){
        try {
            let r = 0
            if (situ ==='TODOS' ) {
                r = await agendamentos(id)
            }else{
                r = await CarregarHorariosPorSituscao(id , situ)   
            }
            setagendamento(r)
        } catch (err) {
            toast.error(err.message)         
        }
    }

    function mostrarTutorial (){
        setTimeout(() => {
            settutorial(false)    
        }, 3000)
        
}


    useEffect(() => {
        listar(id)
        buscar(id)
        novaData()
        mostrarTutorial()
    },[]) 
    


    
    return (
        <div className='page-adm-home'>

            <HeaderEmp class='home' />
            <div className='filtro-adm-empresa'>
                {tutorial === true  &&
                    <div onClick={() => setdica(true)} className='tutorial'>
                        <p>Click aqui para ver um tutorial</p>
                    </div>
                }

                {dica === true  &&
                    <div className='tutorial-1'>
                        <h2> Seje bem vindo a <i>MyWorkship.</i></h2><br/>
                        Aqui é em nosso site você pode facilitar o sistema de consultas de sua empresa 
                        <br/>
                        <br/>
                        <h3>-Home:</h3> Você ve os clientes que desejam fazer consultas na sua empresa.
                        <br/>
                        <br/>
                        <h3>-Perfil:</h3> Você faz com que os clientes que pesquisem a sua empresa veje como ela é , também é possivel fazer publicações lá 
                        <br/>
                        <br/>
                        <h3>-Novo Horário:</h3> Você disponibiliza horários e datas para os clientes fazerem consultas. 
                        <br/>
                        <br/>
                        <h3>-Informações:</h3> você pode editar Informações da empresa e cadastras as suas filiais.
                        <br/>
                        <br/>
                        <h3>-Reviews:</h3> la você pode ver os comentarios que fizeram sobre sua empresa em sua pagina.
                        <br/>
                        <br/>
                        <button className='ok' onClick={() => setdica(false)}>OK</button>
                    </div>
                }
                
                
                <div className='btn'>
                    <select className='opt' value={localcarregar} onChange={e => setlocalcarregar(e.target.value)} >
                        
            

                        <option value='TODOS'>Todos</option>
                        
                        {local.map (item =>
                            <option value={item.local}>{item.local}</option>
                        )
                        }
                            {filial.map (item =>
                            <option value={item.DS_ENDERECO}>{item.DS_ENDERECO}</option>
                        )}
                    </select>
                    <img className='lupa2' src='/assets/images/lupa-branco.svg' onClick={ ()=> listarPorLocal(id , localcarregar)} alt=''/> 
                </div>

                <div className='btn' style={{marginLeft:'5%'}}>
                        <div></div>
                        <input placeholder='DATA' type='date' value={data} onChange={e => setdata(e.target.value)} />
                        <img className='lupa2' src='/assets/images/lupa-branco.svg' onClick={ ()=> ListarPorData(id , data)} alt=''/> 
                </div>

                <div className='btn2'>
                        <select className='opt2' value={situacao} onChange={e => setsituacao(e.target.value)} >                        
                            <option value='TODOS'>Todos</option>
                            <option value='RECUSADO'>Recusada</option>
                            <option value='CONFIRMADA' >Confirmada</option>
                            
                            
                       </select>
                            <img onClick={ ()=> porSituacao(id , situacao) }  className='lupa' src='/assets/images/lupa-branco.svg' alt='' /> 
                </div>
 
            </div>
                                
                {agendamento.length === 0  &&
                
                    <img className='not1' src='/assets/images/notFound.svg' alt=''/>
                }
                            
                {agendamento.map(item => 
                    <Cardadm item={item} onClick={() => listar(id)} />    
                )}
        </div>
    )
}