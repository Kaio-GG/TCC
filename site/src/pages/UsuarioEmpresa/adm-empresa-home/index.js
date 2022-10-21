import './index.scss'
import Cardadm from '../../../components/card-adm-empresa'
import HeaderEmp from '../../../components/header-adm-empresa/index.js'
import { useEffect, useState  } from 'react'
import storage from 'local-storage'
import { buscarLocal , agendamentosData , agendamentos , CarregarHorariosPorSituscao } from '../../../api/agendamentos.js'


export default function Homeempresa (){
    const [agendamento , setagendamento ] = useState([])
    const [data , setdata] = useState('')
    const [local, setlocal] =useState([])
    const [situacao , setsituacao]= useState('')
    const empresaLogada = storage('Empresa-Logada')
    const id = (empresaLogada.ID_USUARIO_EMPRESA)
    
 
     function novaData (){
         const a = new Date ()
         let b = a.toISOString().substr(0, 10);
         setdata(b);
        //  const b = String(a.getDay()).padStart(2,'0')
        //  const c = String(a.getMonth()+1).padStart(2,'0')
        //  const d = a.getFullYear()
         //setdata(`${d}-${c}-${b}`)
     }
 
     
     async function ListarPorData (dt , id){
        const r = await agendamentosData(dt , id)
        setagendamento(r)
     }

 
    async function listar (id){
        const r = await agendamentos(id)
        setagendamento(r)
    }
    async function buscar (id){
        try {
          const a = await buscarLocal(id)  
          setlocal(a)
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
            console.log(agendamento)
        
        } catch (err) {
            console.log(err.message)         
        }
    }


    useEffect(() => {
        listar(id)
        buscar(id)
        novaData()
    },[])       



    
    return (
        <div className='page-adm-home'>
            <HeaderEmp class='home' />
            <div className='filtro-adm-empresa'>
                <div className='btn'>
                    <select className='opt' value={local} onChange={e => setlocal(e.target.value)} >                        
                        {local.map (item =>
                            <option value={item.local}>{item.local}</option>
                            )}
                    </select>
                </div>

                <div className='btn' style={{marginLeft:'5%'}}>
                        <div></div>
                        <input placeholder='DATA' type='date' value={data} onChange={e => setdata(e.target.value)} />
                     <img className='lupa' src='/assets/images/lupa-branco.svg' onClick={ ()=> ListarPorData(id , data)}/> 
                </div>

                <div className='btn2'>
                        <select className='opt2' value={situacao} onChange={e => setsituacao(e.target.value)} >                        
                            <option value='CONFIRMADA' >Confirmada</option>
                            <option value='RECUSADO'>Recusada</option>
                            <option value='TODOS'>Todos</option>
                            
                    </select>
                    <img onClick={ ()=> porSituacao(id , situacao) }  className='lupa' src='/assets/images/lupa-branco.svg' /> 
                </div>
 
            </div>  
            {agendamento.map(item => 
                <Cardadm item={item} onClick={() => listar(id)} />    
            )}
        </div>
    )
}