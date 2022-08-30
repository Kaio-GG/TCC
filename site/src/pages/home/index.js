import './index.scss'
import Logo from '../home/assets/logo.png'
import CofeGlass from '../home/assets/coffe.png'
import TeamMember from '../home/assets/teamember.png'
import Facil from '../home/assets/facilmassage.png'
import { Link } from 'react-router-dom'


export default function Index() {

    return(
        <main className='home'>
            <section className='home-f1'>
                <header className='home-header'>
                    <Link to={'/login'} className='h4-home'>Login</Link> 
                    
                    <img src={Logo}></img>

                    <h4 className='h4-home'>Registre-se</h4>

                </header>

                <div className='cont-1-home'>
                    <div className="posicionamento">
                    <div className='alinhar-texto'>
                        <h1 className='cont-1-h1'>Faça parte do nosso precioso sonho</h1>

                        <p className='p1-home'>Apresentamos para você um serviço rápido e prático facilitando o seu convívio com consultas e trabalhos.</p>


                        <div>
                            <input className='input-1' placeholder='BUSCAR EMPRESAS'/>
                            <div className='logo'></div>

                        </div>
                    </div>

                    <div>
                        <img className="imgsvg" src={CofeGlass}></img>

                    </div>
                </div>

                </div>
            </section>

            <section className="faixa2">
                <div className="f2-diffcolor">
                    <h1 className="f2-firsth1">Empresas</h1>
                    <img className="imgsvg2" src={TeamMember}></img>
                    <button className="f2-button1">Se registre como uma empresa agora!</button>
                    
                </div>

                <div className="f2-diffcolor1">
                    <h1 className="f2-firsth1">Cliente</h1>
                    <img className="imgsvg3" src={Facil}></img>

                    <button className="f2-button1" >Se registre como um cliente no site!</button>
                    </div>
            </section>




        </main>
    )
}