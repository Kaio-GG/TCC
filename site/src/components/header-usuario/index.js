import './index.scss'

import { Link } from 'react-router-dom'



export default function HeaderUsuario (props){

    

    return(
        <div className='cabecalho1'>
            <div className='logo'>
                <Link to="/">MyWorkship</Link>

                <div className='foto-usuario'></div>
            </div>


            <div className='part-2'>
            <div className='alinhamento'>
                {props.class === 'home' 
                ? <div className='pagina'>Painel</div> 
                : <div> Painel </div>}

                {props.class === 'confirmadas' 
                ? <div className='pagina'>Listas</div> 
                : <div> Listas </div>}

            </div>
            </div>
        </div>
    )
}