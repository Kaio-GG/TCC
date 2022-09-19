import './index.scss';
import HederEmpresa from '../../components/header-adm-empresa';
import { useState } from 'react';


export default function Novohorario (){
    const [cont , setcont] = useState (0)
    const [render , setrender] = useState(0)

        
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
                    <p>14:00</p>
                </div>
                :<div className='card1' onMouseOut={renderm}>
                    <p>14:00</p>
                    <button onClick={contador}> somar </button>
                    {cont}
                    <button onClick={removedor}> menos </button>
                </div>}


                <div className='card-novo'>
                    {render}
                 j
                  </div>
            </div>
        </div>
    )
}