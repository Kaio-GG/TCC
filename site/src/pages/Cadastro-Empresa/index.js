import { useState } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

export default function Index(){
    const [continuar, setContinuar] = useState(0)

    const [email, setEmail] = useState('');
    const [confirmarEmail, setConfirmarEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [termos, setTermos] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [inscricao, setInscricao] = useState('');
    const [nomeEmpresa, setNomeEmpresa] = useState('');
    const [tipoEmpresa, setTipoEmpresa] = useState('');
    const [pais, setPais] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [endereco, setEndereco] = useState('');

    const [cpf, setCpf] = useState('');
    const [nomeRepre, setNomeRepre] = useState('');
    const [cargo, setCargo] = useState('');
    const [nacionalidae, setNacionalidade] = ('');


    function passarPagina(){
        const c = continuar + 1;
        setContinuar(c)
    }

    function voltarPagina(){
        const x = continuar - 1;
        setContinuar(x)
    }


return(
    <main className='cadastro-empresa'>

        <header className='cabecalho'>
            <Link to="/" className='f1-h1'>MyWorkShip</Link>
            <p className='f1-p1'>Linguagem</p>
            

        </header>
        
        {continuar === 0 &&

            <section>

            <div className='alinhardiv'>
                <h1 className='f1-h2'>Criar conta</h1>
                <input value={email} onChange={e => setEmail(e.target.value)} className='input1' type="text" placeholder='Email'/>
                <input value={confirmarEmail} onChange={e => setConfirmarEmail(e.target.value)}  className='input2' type="text" placeholder='Confirmar email'/>
                <input className='input2' type="password" placeholder='Senha'/>
                <input className='input3' type="password" placeholder='Confirmar senha'/>

                <button onClick={passarPagina} className='f1-button'>Próximo</button>

            </div>


            </section>

        }
            {continuar === 1 &&
            <section>
            <div className='alinhardiv'>
                <input className='input1' type="text" placeholder='CNPJ'/>
                <input className='input2' type="text" placeholder='Inscrição estadual'/>
                <input className='input2' type="text" placeholder='Nome registrado da empresa'/>
                <input className='input3' type="text" placeholder='Tipo da empresa'/>
             <div className='alinhardiv2'>
                <input className='input5' type="text" placeholder='País'/>
                <input className='input6' type="text" placeholder='Estado'/>
                <input className='input5' type="text" placeholder='Cidade'/>
            </div>

                <input className='input7' type="text" placeholder='Endereço' />

            <div className='alinharbutton'>
                <button onClick={voltarPagina} className='f1-button'>Voltar</button>
                <button onClick={passarPagina} className='f1-button'>Próximo</button>
            </div>
            

            </div>
            </section>
            }

            {continuar === 2 &&
            <section>

            <div className='alinhardiv'>
                <h1 className='f1-h2'>Informações pessoais do representante</h1>
                <input className='input1' type="text" placeholder='CPF'/>
                <input className='input2' type="text" placeholder='Nome representante legal'/>
                <input className='input2' type="text" placeholder='Cargo'/>
                <input className='input3' type="text" placeholder='Nacionalidade'/>


             <div className='alinharbutton'>
                <button onClick={voltarPagina} className='f1-button'>Voltar</button>
                <button className='f1-button'>Finalizar</button>
             </div>
            

            </div>


            </section>




            
            }
        
      

    </main>
)
}
