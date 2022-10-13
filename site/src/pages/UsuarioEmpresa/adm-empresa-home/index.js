import './index.scss'
import Cardadm from '../../../components/card-adm-empresa'
import Filtroemp from '../../../components/filtro-adm-empresa'
import HeaderEmp from '../../../components/header-adm-empresa/index.js'
import { useEffect, useState  } from 'react'
import storage from 'local-storage'
import { agendamentosData , agendamentos } from '../../../api/agendamentos.js'


export default function Homeempresa (){
    const [id , setid] = useState()
    const [agendamento , setagendamento ] = useState([])


    useEffect(() => {
        const empresaLogada = storage('Empresa-Logada')
        setid(empresaLogada.ID_USUARIO_EMPRESA)
        const a = agendamentos(id)
        setagendamento(a)
        
},[])


    return (
        <div className='page-adm-home'>
            <HeaderEmp class='home' />
            <Filtroemp className='filtro'/>    

            {agendamento.map (item =>
                
                    <Cardadm nome={item.nome} horas={item.hora}  />
                
            )}
        </div>
    )
}