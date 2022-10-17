import Formulario from '../../../components/FormularioInfo'
import HeaderEmpresa from '../../../components/header-adm-empresa'
import './index.scss'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { CarregarInfo , confirmar , recusar } from '../../../api/agendamentos.js'




export default function Informacoes (){
    const [info ,  setinfo] = useState({nome:[],cpf: [],data:[] , desc:[], email:[], hora:[], id:[], local:[], nas:[], sexo:[], tel:[] , situ: []})
    const {id} = useParams();


    async function carregar (){
        try {
            const r =  await CarregarInfo(id)
            setinfo(r)   
        } catch (err) {
            console.log(err.message + 'erro')
        }
    }

    async function confirmado (id){
        await confirmar(id)
        carregar()
        tocaraudio()
    }
    
    async function Recusar (id){
        await recusar(id)
        carregar()
    }

    function tocaraudio (){
        const audio = new Audio()
        audio.src = '/assets/audios/audio1.mp3'
        audio.play()
    }


    useEffect(() => {
        carregar()
    }, [])

    return (
        <main className='pg_informacoes'>
            <HeaderEmpresa />
            <audio src='/assets/audios/audio1.mp3'/>
            <Formulario  nome={info.nome} cpf={info.cpf} desc={info.desc} email={info.email} nas={String(info.nas).substr(0,10)} tel={info.tel} sexo={info.sexo}/>   
                           
            <div className='cards'>
                <div className='card'><p>{info.local}</p></div>
                <div className='card'><p>{info.hora}</p></div>
            </div>

            <div className='cards'>       
                <div className='card'>
                    <p> {String(info.data).substr(0,10)}</p>
                </div>
                <div className='card'>
                    <p> {info.situ}</p>
                </div>
            </div>
            <div className='btns'>
                <div></div>
                <div className='btn'>
                    
                    <button onClick={() => Recusar(info.id)}>
                        <p className='esc'  >RECUSAR</p>
                    </button>
                    <button onClick={() => confirmado(info.id)}>
                        <p className='esc'>ACEITAR</p>
                    </button>
                </div>
            </div>
        </main>
    )
}