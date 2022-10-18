import './index.scss'
import Cardadm from '../../../components/card-adm-empresa'
import HeaderEmp from '../../../components/header-adm-empresa/index.js'
import { useEffect, useState  } from 'react'
import Storage from 'local-storage'
import { buscarLocal , agendamentosData , agendamentos } from '../../../api/agendamentos.js'


export default function Homeempresa (){
    const [id , setid] = useState(3)
    const [agendamento , setagendamento ] = useState([])
    const [data , setdata] = useState('')
    const [local, setlocal] =useState([])    
 
     function novaData (){
         const a = new Date()
         const b = String(a.getDay()).padStart(2,'0')
         const c = String(a.getMonth()+1).padStart(2,'0')
         const d = a.getFullYear()
         setdata(`${d}-${c}-${b}`)
     }
 
     
     async function ListarPorData (dt , id){
        const r = await agendamentosData(dt , id)
        setagendamento(r)
     }

 
    async function listar (id){
        const r = await agendamentos(id)
        setagendamento(r)
        console.log(agendamento)
    }
    async function buscar (id){
        try {
          const a = await buscarLocal(id)  
          setlocal(a)
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        const empresaLogada = Storage('Empresa-Logada')
        setid(empresaLogada.ID_USUARIO_EMPRESA)
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
                    <button onClick={ ()=> ListarPorData(id , data) } >Buscar</button>
            </div>
        </div>  

            {agendamento.map(item => 
                <Cardadm item={item} onClick={() => listar(id)} />    
            )}
        </div>
    )
}