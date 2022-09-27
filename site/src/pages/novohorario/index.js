import './index.scss';
import HederEmpresa from '../../components/header-adm-empresa';
import { useState } from 'react';


export default function Novohorario (){
    const [cont , setcont] = useState (0)
    const [render , setrender] = useState(0)
    const [rendmax ,setrendermax] = useState(0)

    
    function aparecerTela2(){
        setrendermax(rendmax+1)
    }
    


    function contador (){
        setcont(cont+1) 
    }

    function removedor (){
        setcont(cont-1) 
    }

    function renderp (){
        setrender(render+1) 
    }

    function renderm (){
        setrender(render-1) 
    }





    

    return(
        <div className='pg-novohorario'>
            <HederEmpresa  class='hora'/>
            <div>

 
            
            {rendmax === 1 
            ?<div className='alinhado1'>
                <div className='addCaixa'>
                    <h3 className='text'>Adicionar caixa  </h3>
                 
                        <button>mais </button>                 
                </div>
                <div>
                    <div className='caixa'>    
                       
                        <div className='nomecaixa'> 
                            <h3>Nome da caixa </h3>
                            <button>editar </button>
                            <button>excluir</button>                        
                        </div>
                        <div className='textoUsuario'></div>    
                    </div>

                </div> 


              


               <div onClick={aparecerTela2}> Proximo</div> 
            </div>


            :<div>   

            <div className='alinhado'>

                <h2>Horarios</h2>

                <div className='linha'></div>

            </div>
            <div className='opts'>

            <input type="date"/>

            <select >

                <option>santo amaro</option>

            </select>

            </div> 
            
            <div className='horarios'>


                {render === 0 
                ?<div className='card1' onMouseOver={renderp}>

                    <p onClick={contador}   onMouseOver={renderp} >14:00</p>

                </div>

                :<div className='card1' onMouseOut={renderm}>

                        <p  onMouseOver={renderp}>14:00</p>

                    <div className='btneditarcard'>

                        <button onClick={contador} onMouseOver={renderp}> somar </button>
                        {cont}
                        <button onClick={removedor} onMouseOver={renderp}> menos </button>

                        <button onMouseOver={renderp}  >excluir</button>
                        
                        <button onMouseOver={renderp}  >editar</button>
                        

                    </div>    
                </div>}


                <div className='card-novo'>
                    Novo Horario                
                  </div>
            </div>
            </div>}
            </div>
        </div>
    )
}