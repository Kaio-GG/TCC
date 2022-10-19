import './index.scss'
import {  useNavigate , useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { confirmar, recusar } from '../../api/agendamentos.js'



export default function Cardadm (props){
    const navigate = useNavigate()
    async function aceitarAgendamento (id){
        await confirmar (id)
    }
    async function agendamentoRecusado (id){
        await recusar(id)
    }

    function info (id){
        navigate(`/empresa/${id}/informacoes`)
    }

    return(
        <div className="card">
            <div className='nome'> {props.item.nome}  </div>
            <div className='nome' > {props.item.hora} </div>
            <div className='nome'> {String(props.item.data).substr(0,10)}  </div>
            <div className='nome3'> {props.item.local} </div>
            <div className='imagens'>
                <img src='/assets/images/verificar.svg' alt='' onClick={() => aceitarAgendamento(props.item.id)} />
                <img src='/assets/images/excluir.svg' alt='' onClick={() => agendamentoRecusado(props.item.id)} />
            </div>
            <div className='nome1'> {props.item.situacao} </div>    
            <div className='nome' onClick={() => info(props.item.id)}> INFORMAÇÕES</div>
        </div>
    )
}