import { useEffect, useState } from 'react'
import { agendamentosData } from '../../api/agendamentos.js'
import './index.scss'




export default function Filtroemp (props){

    const [data ,setdata] =useState('')

    
    return(
        <div className='filtro-adm-empresa'>
            <div className='btn'>
                <div></div>
                <p>LOCAL</p>
                <img className='seta' src='/assets/images/seta-baixo.svg' alt='' />
            </div>
            <div className='btn' style={{marginLeft:'5%'}}>
                <div></div>
                    <input placeholder='DATA' type='date' value={props.data} onChange={e => setdata(e.target.value)}/>
            </div>
        </div>
    )
}