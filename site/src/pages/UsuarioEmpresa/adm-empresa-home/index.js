import './index.scss'
import Cardadm from '../../../components/card-adm-empresa'
import Filtroemp from '../../../components/filtro-adm-empresa'
import HeaderEmp from '../../../components/header-adm-empresa/index.js'
import { useEffect, useState  } from 'react'
import Storage from 'local-storage'
import { agendamentosData , agendamentos } from '../../../api/agendamentos.js'


export default function Homeempresa (){
    const [id , setid] = useState(3)
    const [agendamento , setagendamento ] = useState([])
    const [data , setdata] = useState('')
    
 
     function novaData (){
         const a = new Date()
         const b = String(a.getDay()).padStart(2,'0')
         const c = String(a.getMonth()+1).padStart(2,'0')
         const d = a.getFullYear()
         setdata(`${d}-${c}-${b}`)
     }
 
 
 
    async function listar (id){
        const r = await agendamentos(id)
        setagendamento(r)
    }
    useEffect(() => {
        const empresaLogada = Storage('Empresa-Logada')
        setid(empresaLogada.ID_USUARIO_EMPRESA)
        listar(id)
        novaData()
    },[])       



    
    return (
        <div className='page-adm-home'>
            <HeaderEmp class='home' />
            <Filtroemp className='filtro'   data={data}/>    

            {agendamento.map(item => 
                <Cardadm item={item} />    
            )}
        </div>
    )
}