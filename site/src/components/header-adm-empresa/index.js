import './index.scss'



export default function HeaderEmpresa (props){

    

    return(
        <div className='cabecalho'>
            <div className='logo'>
                <h1>My Workship</h1>
            </div>
            <div className='part-2'>
            <div className='alinhamento'>
                {props.class === 'home' 
                ? <div className= 'pagina' >Home</div> 
                : <div style={{paddingLeft:'3em'}}> Home </div>}

                {props.class === 'confirmadas' 
                ? <div className= 'pagina'>Confirmada</div> 
                : <div> Confirmada </div>}

                {props.class === 'perfil' 
                ? <div className= 'pagina'>Perfil</div> 
                : <div> Perfil </div>}

                {props.class === 'hora'   
                ? <div className= 'pagina'>Novo Horario</div> 
                : <div> Novo Horario</div>}

                {props.class === 'historico' 
                ? <div className= 'pagina'>Historico</div> 
                : <div> Historico</div>}

                {props.class === 'info' 
                ? <div className= 'pagina'>Infomações</div> 
                : <div> Infomações</div>}

                {props.class === 'reviwes' 
                ? <div className= 'pagina'>Reviwes</div> 
                : <div> Reviwes</div>}
            </div>
            </div>
        </div>
    )
}