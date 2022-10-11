import './index.scss'




export default function Filtroemp (){

    

    return(
        <div className='filtro-adm-empresa'>
            <div className='btn'>
                <div></div>
                <p>LOCAL</p>
                <img className='seta' src='/assets/images/seta-baixo.svg' alt='' />
            </div>
            <div className='btn' style={{marginLeft:'5%'}}>
                <div></div>
                <p>DATA</p>
                <img className='seta' src='/assets/images/seta-baixo.svg' alt='' />
            </div>
        </div>
    )
}