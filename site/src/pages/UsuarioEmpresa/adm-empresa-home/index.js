import './index.scss'
import Cardadm from '../../../components/card-adm-empresa'
import Filtroemp from '../../../components/filtro-adm-empresa'
import HeaderEmp from '../../../components/header-adm-empresa/index.js'


export default function Homeempresa (){



    return (
        <div className='page-adm-home'>
            <HeaderEmp class='home' />
            <Filtroemp className='filtro'/>    
            <Cardadm />
        </div>
    )
}