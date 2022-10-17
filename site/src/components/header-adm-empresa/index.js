import { useNavigate } from 'react-router-dom'
import './index.scss'



export default function HeaderEmpresa (props){

const navigate = useNavigate()    

function home (){
    navigate('/home/empresa')
}
function novohorario (){
    navigate('/novohorario')
}
function paginaempresa (){
    navigate('/home/empresa/pagina-empresa')
}


    return(
        <div className='cabecalho'>
            <div className='logo'>
                <h1>My Workship</h1>
            </div>
            <div className='part-2'>
            <div className='alinhamento'>
                {props.class === 'home' 
                ? <div className= 'pagina'  >Home</div> 
                : <div className='tent' onMouseOver={home}> Home </div>}

                {props.class === 'perfil' 
                ? <div className= 'pagina'>Perfil</div> 
                : <div className='tent' onMouseOver={paginaempresa}> Perfil </div>}

                {props.class === 'hora'   
                ? <div className= 'pagina'>Novo Horario</div> 
                : <div className='tent' onMouseOver={novohorario}> Novo Horario</div>}


                {props.class === 'info' 
                ? <div className= 'pagina'>Infomações</div> 
                : <div className='tent' > Infomações</div>}

                {props.class === 'reviwes' 
                ? <div className= 'pagina'>Reviwes</div> 
                : <div className='tent'> Reviwes</div>}
            </div>
            </div>
        </div>
    )
}