import './index.scss'
import {Link} from 'react-router-dom'

export default function Index(){

    return(
        
        <main className='Main-Escolher-Cadastro'>
                     
                     <section className='Faixa-Cadastre'> 
                        <h1> Cadastre-se</h1>
                      </section>

                        <section className='Faixa-Principal'>
                           
                            <div className='Div-Principal-1'>
                                <h3 className='f1-h3'> Empresas</h3>
                                <div className='Image-1'> </div>
                                <Link to='/CadastroEmpresa' className='Button'> <p className='Buttons-P'> Cadastre-se como uma empresa</p> </Link>
                            </div>


                            <div className='Div-Principal-2'>
                                <h3> Clientes</h3>
                                <div className='Image-2'> </div>
                                <Link to='/CadastroUsuario' className='Button'> <p className='Buttons-P'> Cadastre-se como um Cliente </p> </Link>
                            </div>

                        </section>
            
            
    

        </main>


    )



}