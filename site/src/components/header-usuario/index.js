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
                ? <div className='pagina'> </div> 
                :   <div> <Link className='Link' to='/favoritos/painel'> Painel </Link> </div>}

                {props.class === 'confirmadas' 
                ? <div className='pagina'>  </div> 
                : <div> <Link className='Link' to='/favoritos'>Listas</Link> </div>}

            </div>
            </div>
        </div>
    )
}