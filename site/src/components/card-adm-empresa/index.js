import './index.scss'
import {  useNavigate } from 'react-router-dom'



export default function Cardadm (props){








    return(
        <div className="card">
            <div> {props.nome} </div>
            <div> 14:00{props.horas}</div>
            <div> 23/12/2022{props.data}</div>
            <div> SANTO AMARO {props.local}</div>
            <div className='imagens'>
                <img src='/assets/images/verificar.svg' alt='' />
                <img src='/assets/images/excluir.svg' alt='' />
            </div>    
            <div> INFORMAÇÕES</div>
        </div>
    )
}