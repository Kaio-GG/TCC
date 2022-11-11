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
            <div className='nome-nome'> {props.item.nome}  </div>
            <div className='nome' > {props.item.hora} </div>


            <div className='nome'>    <p>{props.item.data.substr(7,3).replace("-","")}/{props.item.data.substring(4,7).replace("-","")}/{props.item.data.substring(0,5).replace("-","")}<br/>
                                </p> </div>
            <div className='nome3'> {props.item.local} </div>
           
            <div className='nome1'> {props.item.situacao} </div>    
            <div className='info' onClick={() => info(props.item.id)}> INFORMAÇÕES</div>
        </div>
    )
}