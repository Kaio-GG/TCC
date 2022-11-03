import { useNavigate } from 'react-router-dom'
import './index.scss'
import Storage from 'local-storage'


export default function HeaderEmpresa (props){

const navigate = useNavigate()

const empresaLogada = Storage('Empresa-Logada')
const id = (empresaLogada.ID_USUARIO_EMPRESA)


function home (){
    navigate('/home/empresa')
}
function novohorario (){
    navigate('/novohorario')
}
function paginaempresa (){
    navigate('/home/empresa/pagina-empresa')
}
function editarInfoEmpresa (){
    navigate(`/empresa/${id}/editar`)
}
function Review(){
    navigate(`/home/empresa/reviews/${id}`)
}



function sair (){
    const empresaLogada = Storage('Empresa-Logada')
    Storage.remove('Empresa-Logada')
    navigate('/')
    }


    return(
        <div className='cabecalho'>
            <div className='logo'>
                <h1 onClick={sair} >My Workship</h1>
            </div>
            <div className='part-2'>
            <div className='alinhamento'>
                {props.class === 'home' 
                ? <div className= 'pagina'  >Home</div> 
                : <div className='tent' onClick={home}> Home </div>}

                {props.class === 'perfil' 
                ? <div className= 'pagina'>Perfil</div> 
                : <div className='tent' onClick={paginaempresa}> Perfil </div>}

                {props.class === 'hora'   
                ? <div className= 'pagina'>Novo Horario</div> 
                : <div className='tent' onClick={novohorario}> Novo Horario</div>}


                {props.class === 'info' 
                ? <div className= 'pagina'>Infomações</div> 
                : <div className='tent' onClick={editarInfoEmpresa}> Infomações</div>}

                {props.class === 'reviwes' 
                ? <div className= 'pagina'>Reviwes</div> 
                : <div className='tent' onClick={Review}> Reviwes</div>}
            </div>
            </div>
        </div>
    )
}