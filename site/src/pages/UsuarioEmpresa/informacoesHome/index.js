import Formulario from '../../../components/FormularioInfo'
import HeaderEmpresa from '../../../components/header-adm-empresa'
import './index.scss'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { CarregarInfo , confirmar , recusar , editarHorario } from '../../../api/agendamentos.js'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


export default function Informacoes (){
    const [info ,  setinfo] = useState({nome:[],cpf: [],data:[] , desc:[], email:[], hora:[], id:[], idhorario:[] , qtd:[], local:[], nas:[], sexo:[], tel:[] , situ: []})
    const {id} = useParams();
    const navigate = useNavigate()

    async function carregar (){
        try {
            const r =  await CarregarInfo(id)
            setinfo(r)   
        } catch (err) {
            console.log(err.message + 'erro')
        }
    }

    async function confirmado (id){
        try {
            if(info.situ === 'CONFIRMADA')
                throw new Error('Agendamento ja confirmado')
            await confirmar(id)
            carregar()
            diminuirHorario()
            navigate('/home/empresa')
            toast.dark('🚀 Agendamento confirmado')   
        } catch (err) {
            toast.error(err.message)
        }
    }
    
    async function Recusar (id){
        await recusar(id)
        carregar()
        if(info.situ === 'CONFIRMADA'){
            await aumentarHorario()
        }
        navigate('/home/empresa')
        toast.dark('🚀 Agendamento recusado')
    }

    function tocaraudio (){
        const audio = new Audio()
        audio.src = '/assets/audios/uii.mp3'
        audio.play()
    }
    function tocaraudio2 (){
        const audio = new Audio()
        audio.src = '/assets/audios/xii.mp3'
        audio.play()
    }

    async function diminuirHorario (){
        try {
            let a =info.qtd-1 
            await editarHorario(info.idhorario, a)   
        } catch (err) {
            console.log(err.message)
        }
    }

    
    async function aumentarHorario (){
        try {

            let a =info.qtd+1 
            await editarHorario(info.idhorario, a)   
        } catch (err) {
            console.log(err.message)
        }
    }


    useEffect(() => {
        carregar()
    }, [])

    return (
        <main className='pg_informacoes'>
            <HeaderEmpresa />
            <Formulario  nome={info.nome} cpf={info.cpf} desc={info.desc} email={info.email} nas={String(info.nas).substr(0,10)} tel={info.tel} sexo={info.sexo}/>   
                           
            <div className='cards'>
                <div className='card'><p>{info.local}</p></div>
                <div className='card'><p>{String(info.hora).replace('-','/')}</p></div>
            </div>

            <div className='cards'>       
                <div className='card'>
                    <p> {String(info.data).substr(0,10).replace('-','/').replace('-','/')}</p>
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