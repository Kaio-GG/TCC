import './index.scss'
import { useParams } from 'react-router-dom'
import { CarregarInfo } from '../../api/agendamentos.js'
import { useEffect , useState} from 'react'



export default function Formulario (props){

    return(
        <main className='pg_info'>
           <div className='caixa'>
                <h2 className='titulo'>INFORMAÇÕES PESSOAIS</h2>
                <div className='linha'></div>
                <div className='informacoes'>
                
                        <div className='infos' >
                        <input disabled value={props.nome}/>
                        <input disabled value={props.email} />
                        <input disabled value={props.cpf}/>
                    </div>        
                        <div className='infos'>
                            <input disabled value={props.nas}/>
                            <input disabled value={props.sexo}/>
                            <input disabled value={props.tel}/>
                        </div>
                </div>    
           </div>
           <div>
           </div>
           <div className='caixa2'>
                <h2 className='titulo'>OBSERVAÇÃO</h2>
                <div className='linha'></div>
                <div className='informacoes'>
                    <div className='infos'>
                        <input type='text' disabled className='obs' value={props.desc} />
                    </div>    
                </div>    
           </div>
           <div></div>
        </main>
    )
}