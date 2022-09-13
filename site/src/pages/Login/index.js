import './index.scss';
import '../../common/common.scss';

export default function Index(){
  
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
                <input className='input-1' placeholder='Usuario' />
                <input className='input-2' placeholder='Senha' type = 'password' />
            </div>

            <div className='div-ChekBox'> 
                <div className='DivAux'> 
                     <input type="checkbox" />
                    <p> Empresa ?</p>
                </div>
            </div>
            
            <div className='Faixa-Button_LembrarSenha'>
                <button>
                        Entrar
                </button>
                
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