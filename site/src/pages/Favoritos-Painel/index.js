import './index.scss'
import '../../common/common.scss';
import HeaderUsuario from '../../components/header-usuario'
import Footer from '../../components/footer/'

export default function Index(){



    return(
        <main className='Main-Favoritos-Painel'>
            <HeaderUsuario></HeaderUsuario>

        <section className='Sec-1'> 
            <div className='Card'> 
                <div className='Div-1'>
                    <div className='Aling'/>                    
                    
                    <h1> Informações Pessoais</h1>
                    <hr/>
                    <input placeholder='Nome Completo'/>
                    <input placeholder='CPF'/>
                    <input placeholder='Email'/>
                    <input placeholder='País'/>
                    <input placeholder='Estado'/>
                </div>

                <div className='Div-2'>
                    <input placeholder='Data de Nascimento' type={'date'}/>
                    <input placeholder='Genero'/>
                    <input placeholder='Telefone (4002-8022)'/>
                    <input placeholder='Cidade'/>
                    <input type='file' />
                </div>
            </div>
        </section>
         <Footer></Footer>
        
        </main>
    )
}