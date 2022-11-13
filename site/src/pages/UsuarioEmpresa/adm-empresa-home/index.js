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
                    <select className='opt' value={localcarregar} onChange={e => setlocalcarregar(e.target.value)} >
                        
                        <option disabled hidden selected>Selecione o Local</option>

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
                    <img className='not' src='/assets/images/notFound.svg' alt=''/>
                }
                            
                {agendamento.map(item => 
                    <Cardadm item={item} onClick={() => listar(id)} />    
                )}
        </div>
    )
}