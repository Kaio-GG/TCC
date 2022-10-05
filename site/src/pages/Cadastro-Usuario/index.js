import './index.scss'
import {Link} from 'react-router-dom'
import { useState} from 'react'
import { cadastroCliente } from '../../api/cadastroCliente'
import { cadastroLogin } from '../../api/cadastroEmpresa'




export default function Index(){

    const [continuar, setContinuar] = useState(0)
    
    const [email, SetEmail] = useState('')
    const [confirmaremail, SetConfirmarEmail] = useState('')
    const [senha, SetSenha] = useState('')
    const [confirmarsenha, SetConfirmarSenha] = useState('')
    const [pais, setPais] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [usuario, setUsuario] = useState('');
    const [cpf, setCpf] = useState('');

    function passarPagina(){
        const c = continuar + 1;
        setContinuar(c)
    }

    function voltarPagina(){
        const x = continuar - 1;
        setContinuar(x)
    }

    async function cadastrarCliente() {
        try{
            const a = await cadastroCliente(usuario, cpf, pais, estado, cidade);

            alert(a)
            console.log(a)

            const empresa = false;
            const idEmpresa = null;
            const idusuario = a.id;

            const b = cadastroLogin(idEmpresa, idusuario, email, senha, empresa)

            alert('cadastrado com sucesso!');
        } catch(err){
            alert(err.message)
        }
    }

    return(
        <main className='Main-Cadastro-Usuario'>
         
         <header className='cabecalho'>
            <Link to="/" className='f1-h1'>MyWorkShip</Link>
            <p className='f1-p1'>Linguagem</p>
        </header>

        {continuar === 0 &&
            
            <section className='FaixaPrincipal'>
                    <h1> Criar conta </h1>
                    <div className='Div-Inputs'>
                        <input value={email} onChange={e => SetEmail(e.target.value)} type='text' placeholder='Email'/>
                        <input value={confirmaremail} onChange={e => SetConfirmarEmail(e.target.value)} type='text' placeholder='Confirmar Email'/>
                        <input value={senha} onChange={e => SetSenha(e.target.value)} type='password' placeholder='Senha'/>
                        <input  value={confirmarsenha} onChange={e => SetConfirmarSenha(e.target.value)} type='password' placeholder='Confirmar Senha'/>
                    </div>
                    
                    <div className='Div-Button' > <button onClick={passarPagina} className='button'>Próximo</button> </div>
            </section>
        }

        {continuar === 1 &&
            <section className='FaixaPrincipal-2'>

                    <h1>Informações do Usuário</h1>
                    
                    <div className='Div-Inputs'> 
                        <input value={usuario} onChange={e => setUsuario(e.target.value)} type='text' placeholder='Nome de Usuário'/>
                        <input value={cpf} onChange={e => setCpf(e.target.value)} type='text' placeholder='CPF'/>
                    
                        <div className='Inputs-Group'> 
                            <input value={pais} onChange={e => setPais(e.target.value)} type='text' placeholder='País'/>
                            <input value={estado} onChange={e => setEstado(e.target.value)} type='text' placeholder='Estado'/>
                            <input value={cidade} onChange={e => setCidade(e.target.value)} type='text' placeholder='Cidade'/>
                        </div>
                    </div>
                    
                    <div className='Button-Group'>
                        <div className='Div-Button' > <button onClick={voltarPagina} className='button-1'>Voltar</button> </div>

                        <div className='Div-Button' > <button onClick={cadastrarCliente} className='button-1'>Finalizar</button> </div>
                    </div>
                    
            </section>

        }

        </main>

    
    )}
