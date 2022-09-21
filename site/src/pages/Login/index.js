import { login } from '../../api/loginController';
import { useNavigate } from 'react-router-dom'

import './index.scss';
import '../../common/common.scss';

import { useState, useRef } from 'react';



export default function Index(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [empresa, setEmpresa] = useState(false)
    const [erro, setErro] = useState('');

    const Navigate = useNavigate();
    const ref = useRef();

    async function Login() {
        try{
            const r = await login(email, senha);
            if (empresa === false){
                Navigate('/home/usuario');
            } 
            else{
                Navigate('/novohorario');  
            }


        } catch (err) {
            if (err.response.status === 401){
                setErro(err.response.data.erro);    
            }
        }
    }

  
return(

<main className='Main-Login'>
    <div className="Div-Group">
        <div className="Div-1"> 
            <div className='Div-1-div'>
                  <h1>My Workship </h1>
            </div>
            
            <div className='Espac'></div>
            
            <div className='Div1-Img'>
                    <div className= 'Imagem-calendario' />
            </div>
                
                <div className='Div-2'>
                    <div> 
                        <h1>Bem vindo</h1>
                    
                        
                            <p> A Networking que você precisa! Intereja diretamente 
                                    com centenas de serviços de empresas  diferentes 
                                        quando você quiser.</p>
                        
                </div>
                    
                    </div>
                    
        
        </div>
        
        
        <div className='Faixa-Branca'> 
            <div className='Div1-Faixa-Branca'>
                <p> Não Possui conta ?</p>
                <p>Criar conta  </p>
            </div>

            <div className='Div-inputs'>
                <input className='input-1' placeholder='Usuario' value={email} onChange={e => setEmail(e.target.value) } />
                <input className='input-2' placeholder='Senha' type = 'password' value={senha} onChange={e => setSenha(e.target.value) } />
            </div>

            <div className='div-ChekBox'> 
                <div className='DivAux'> 
                     <input type="checkbox" checked={empresa} onChange={e => setEmpresa(!empresa)} />
                    <p> Empresa ?</p>
                </div>
            </div>
            
            <div className='Faixa-Button_LembrarSenha'>
                <button onClick={Login}>
                        Entrar
                </button>

                {erro}
                
                <div className='CheckBox-LembrarSenha'>
                    <input type="checkbox" />
                    <p> Lembrar Senha ?</p>
                </div>
            </div>

            <div className='Div-Esqueceu_Senha'> 
                <a> Esqueceu a senha ?</a>
            
            </div>

        </div>
    </div>
</main>  
       
)
}