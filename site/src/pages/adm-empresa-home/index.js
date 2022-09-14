import './index.scss'
import Cardadm from '../../components/card-adm-empresa'
import Filtroemp from '../../components/filtro-adm-empresa'



export default function Homeempresa (){



    return (
        <div className='page-adm-home'>
            <Filtroemp nome=' kaio lindo  '/>    
            <Cardadm />
        </div>
    )
}