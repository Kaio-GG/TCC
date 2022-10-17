import './index.scss';
import'./'


export default function Index(){

    return(
        <main className='Main-Footer'>
            <section className='Section-Esquerda'>
                <div className='IMG-MW'></div>

                <div className='Info-Group'>
                    
                    <div className='Div-Group'>
                        <div className='Img-Earth'></div>
                        <p> Brazil/Portuguese</p>
                    </div>
                    
                    <div className='Div-Group'>
                        <div className='Img-Help'></div>
                        <p>  Ajuda/Suporte</p>
                    </div>
                   
                   <div className='Div-Group'> 
                        <div className='Img-User'></div>
                        <p>5 Usuários Registrados </p>
                   </div>
                </div>
            </section>

            <section className='Section-Meio'>
                 
                 <div className='P-Meio'>
                    <p> MyWorkShip ® is a registered Trademark of Freelancer Technology Pty Limited (ACN 142 189 759)        
                        Copyright © 2022 Freelancer Technology Pty Limited (ACN 142 189 759) </p>
                </div>
            </section>

            <section className='Section-Direita'>
                
                <div className='Div-Images'> 
                    <div className='Group-Images'>
                        <div className='IMG-Instagram'> </div>
                        <div className='IMG-Facebook'> </div>
                        <div className='IMG-Discord'> </div>
                        <div className='IMG-Twitter'> </div>
                    </div>
                </div>
             
             </section>

        </main>
    )
}