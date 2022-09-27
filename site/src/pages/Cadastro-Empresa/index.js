import { cadastroEmpresa, cadastroLoginEmpresa } from '../../api/cadastroEmpresa'

import { useState } from 'react'
import './index.scss'
import { Link, useNavigate } from 'react-router-dom'

export default function Index(){
    const [continuar, setContinuar] = useState(0)

    const [usuario, setUsuario] = useState('');
    const [confirmarusuario, setConfirmarUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [termos, setTermos] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [inscEstadual, setInscEstadual] = useState('');
    const [nome, setNome] = useState('');
    const [tipo, setTipo] = useState('');
    const [pais, setPais] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cpfRepresentante, setCpfRepresentante] = useState('');
    const [representante, setRepresentante] = useState('');
    const [cargoRepresentante, setCargoRepresentante] = useState('');
    const [nacioRepresentante, setNacioRepresentante] = useState('');

    
    const navigate = useNavigate();

    async function cadastrarEmpresa() {
        try{
            const a = cadastroEmpresa(cnpj, inscEstadual, nome, tipo, pais, estado, cidade, endereco, representante, cpfRepresentante, cargoRepresentante, nacioRepresentante );

            const empresa = true;
            const idEmpresa = 3;

            const b = cadastroLoginEmpresa(idEmpresa, usuario, senha, empresa);
            
            alert('Empresa cadastrada com sucesso!');

        } catch (err){
            alert(err.message)
        }
    }


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
                <input value={usuario} onChange={e => setUsuario(e.target.value)} className='input1' type="text" placeholder='Email'/>
                <input value={confirmarusuario} onChange={e => setConfirmarUsuario(e.target.value)}  className='input2' type="text" placeholder='Confirmar email'/>
                <input value={senha} onChange={e => setSenha(e.target.value)} className='input2' type="password" placeholder='Senha'/>
                <input value={confirmarSenha} onChange={e => setConfirmarSenha(e.target.value)} className='input3' type="password" placeholder='Confirmar senha'/>

                <button onClick={passarPagina} className='f1-button'>Próximo</button>

            </div>


            </section>

        }
            {continuar === 1 &&
            <section>

            <div className='alinhardiv'>
                <input value={cnpj} onChange={e => setCnpj(e.target.value)} className='input1' type="text" placeholder='CNPJ'/>
                <input value={inscEstadual} onChange={e => setInscEstadual(e.target.value)} className='input2' type="text" placeholder='Inscrição estadual'/>
                <input value={nome} onChange={e => setNome(e.target.value)} className='input2' type="text" placeholder='Nome registrado da empresa'/>
                <input value={tipo} onChange={e => setTipo(e.target.value)} className='input3' type="text" placeholder='Tipo da empresa'/>

             <div className='alinhardiv2'>
                <input value={pais} onChange={e => setPais(e.target.value)} className='input5' type="text" placeholder='País'/>
                <input value={estado} onChange={e => setEstado(e.target.value)} className='input6' type="text" placeholder='Estado'/>
                <input value={cidade} onChange={e => setCidade(e.target.value)} className='input5' type="text" placeholder='Cidade'/>
            </div>

                <input value={endereco} onChange={e => setEndereco(e.target.value)} className='input7' type="text" placeholder='Endereço' />

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
                <input value={cpfRepresentante} onChange={e => setCpfRepresentante(e.target.value)} className='input1' type="text" placeholder='CPF'/>
                <input value={representante} onChange={e => setRepresentante(e.target.value)} className='input2' type="text" placeholder='Nome representante legal'/>
                <input value={cargoRepresentante} onChange={e => setCargoRepresentante(e.target.value)} className='input2' type="text" placeholder='Cargo'/>
                <input value={nacioRepresentante} onChange={e => setNacioRepresentante(e.target.value)} className='input3' type="text" placeholder='Nacionalidade'/>


             <div className='alinharbutton'>
                <button onClick={voltarPagina} className='f1-button'>Voltar</button>
                <button onClick={cadastrarEmpresa} className='f1-button'>Finalizar</button>
             </div>
            

            </div>

            </section>
            
            }
        
      

    </main>
)
}
