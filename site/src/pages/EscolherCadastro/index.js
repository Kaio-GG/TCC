import './index.scss'


export default function Index(){

    return(
        
        <main className='Main-Escolher-Cadastro'>
            
            <section className='Faixa-1'>
                <div className='Div-Group'>
                    <h1> My Workship</h1> 
                    <h2> Linguagem</h2>   
                 </div>
            </section>
                     
                     <section className='Faixa-Cadastre'> 
                        <h1> Cadastre-se</h1>
                      </section>

                        <section className='Faixa-Principal'>
                           
                            <div className='Div-Principal-1'>
                                <h3> Empresas</h3>
                                <div className='Image-1'> </div>
                                <button> <p className='Buttons-P'> Cadastre-se como uma empresa</p> </button>
                            </div>


                            <div className='Div-Principal-2'>
                                <h3> Clientes</h3>
                                <div className='Image-2'> </div>
                                <button> <p className='Buttons-P'> Cadastre-se como um Cliente </p> </button>
                            </div>

                        </section>
            
            
    

        </main>


    )



}