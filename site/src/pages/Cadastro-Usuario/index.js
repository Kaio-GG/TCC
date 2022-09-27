import './index.scss'
import {Link} from 'react-router-dom'


export default function index(){


    return(
        <main className='Main-Cadastro-Usuario'>
         
         <header className='cabecalho'>
            <Link to="/" className='f1-h1'>MyWorkShip</Link>
            <p className='f1-p1'>Linguagem</p>
        </header>

            <section className='FaixaBolinhas'>
                
                <div className='Div-mãe-Bolinhas'>
                    <div></div>
                    <div className='linha'></div>
                    <div>Bolinha 2</div>
                </div>


            </section>




        </main>
    )
}