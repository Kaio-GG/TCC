import './index.scss'
import {  useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { confirmar, recusar } from '../../api/agendamentos.js'



export default function Cardadm (props){

    async function aceitarAgendamento (id){
        await confirmar (id)
    }
    async function agendamentoRecusado (id){
        await recusar(id)
    }


    return(
        <div className="card">
            <div className='nome'> {props.item.nome}  </div>
            <div> {props.item.hora} </div>
            <div> {String(props.item.data).substr(0,10)}  </div>
            <div> {props.item.local} </div>
            <div className='imagens'>
                <img src='/assets/images/verificar.svg' alt='' onClick={() => aceitarAgendamento(props.item.id)} />
                <img src='/assets/images/excluir.svg' alt='' onClick={() => agendamentoRecusado(props.item.id)} />
            </div>    
            <div> INFORMAÇÕES</div>
        </div>
    )
}