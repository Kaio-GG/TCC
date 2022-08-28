import './index.scss'


export default function Index() {

    return(
        <main className='home'>
            <section className='home-f1'>
                <header className='home-header'>
                    <h4 className='h4-home'>Fazer login</h4> 

                    <img src=''></img>

                    <h4 className='h4-home'>Registre-se</h4>

                </header>

                <div className='cont-1-home'>
                    <div className="posicionamento">
                    <div className='alinhar-texto'>
                        <h1 className='cont-1-h1'>Faça parte do nosso precioso sonho</h1>

                        <p className='p1-home'>Apresentamos para você um serviço rápido e prático facilitando o seu convívio com consultas e trabalhos.</p>


                        <div>
                            <input className='input-1' placeholder='BUSCAR EMPRESAS'/>
                            <span className='logo'></span> 
                        </div>
                    </div>

                    <div>
                        <img></img>

                    </div>
                </div>

                </div>
            </section>

            <section className="faixa2">
                <div className="f2-diffcolor">
                    <h1 className="f2-firsth1">Empresas</h1>
                    <img></img>
                    <button className="f2-button1">Se registre como uma empresa agora!</button>
                    
                </div>

                <div>
                    <h1>Cliente</h1>
                    <img></img>

                    <button>Se registre como um cliente no site!</button>
                    </div>
            </section>




        </main>
    )
}