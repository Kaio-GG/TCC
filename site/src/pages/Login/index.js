import { login } from '../../api/loginController';
import { Link, useNavigate } from 'react-router-dom';
import storage from 'local-storage';

import './index.scss';
import '../../common/common.scss';


import { useState, useRef } from 'react';



export default function Index(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const [erro, setErro] = useState('');

    const Navigate = useNavigate();
    const ref = useRef();

    async function Login() {
        try{
            
            const r = await login(email, senha);
            console.log(r.BT_LOGIN)
            if (r.BT_LOGIN === 0){
                storage('Cliente-Logado', r);
                Navigate('/home/usuario');
            } 
            else{
                storage('Empresa-Logada', r);
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
                  <h1 className='mywork'>MyWorkship </h1>
            </div>
            
            <div className='Espac'></div>
            
            <div className='Div1-Img'>
                    <div className= 'Imagem-calendario' />
            </div>
                
                <div className='Div-2'>
                        <h1>Bem-vindo</h1>
                    
                        <p> A Networking que você precisa! Intereja diretamente com centenas de serviços de empresas  diferentes quando você quiser.</p>
                        
                    </div>
                    
        
        </div>
        
        
        <div className='Faixa-Branca'> 
            <div className='Div1-Faixa-Branca'>
                <p>Não possui conta?</p>
                <Link to='/cadastro' >Crie agora mesmo! </Link>
            </div>

            <div className='Div-inputs'>
                <input className='input-1' placeholder='Usuario' value={email} onChange={e => setEmail(e.target.value) } />
                <input className='input-2' placeholder='Senha' type = 'password' value={senha} onChange={e => setSenha(e.target.value) } />
            </div>

            
            <div className='error'>
                
                {erro}
            
            </div>
            
            <div className='Faixa-Button_LembrarSenha'>
                <button onClick={Login}>
                        Entrar
                </button>
                
                <div className='CheckBox-LembrarSenha'>
                    <input type="checkbox" />
                    <p> Lembrar Senha?</p>
                </div>
            </div>


        </div>
    </div>
</main>  
       
)
}