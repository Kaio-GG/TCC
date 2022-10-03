import './index.scss';
import HederEmpresa from '../../components/header-adm-empresa';
import { useState } from 'react';
import { NovoHorario , agendarHorario ,editarHorario , deletarHorario , carregarHorario } from '../../api/agendamentos.js';



export default function Novohorario (){
    const [cont , setcont] = useState (0)
    const [render , setrender] = useState(0)
    const [rendernovohorario ,setrendernovohorario] = useState (0)
    const [id , setid ] =useState(1)
    const [local , setlocal  ] =useState('')
    const [hora , sethora] =useState ('00:00')
    const [data ,setdata] =useState('')
    const [qtd , setqtd] =useState(0)

    async function criarHorario (){
        try {
            await NovoHorario(id ,local , String(hora) , data)
            console.log('horario cadastrado com sucesso')
        } catch (err) {
           console.log(err.message)
           console.log('nao foi ')
        }
    }





    

    function rendernovo (){
        setrendernovohorario(rendernovohorario+1)
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

            <div className='alinhado'>
                <h2>Horarios</h2>
                <div className='linha'></div>
            </div>

            <div className='opts'>
                <input type="date"/>
            <select  value={local} onChange={e => setlocal(e.target.value)} >
                <option value='santo amaro'>santo amaro</option>
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

                            <div  onMouseOver={renderp} >{cont}</div>
                            
                        <button onClick={removedor} onMouseOver={renderp}> menos </button>

                        <button onMouseOver={renderp}  >excluir</button>
                        
                        <button onMouseOver={renderp}  >editar</button>                        
                    </div>    
                </div>}
                <div className='card-novo' onClick={rendernovo}>
                    Novo Horario                
                </div>
                {rendernovohorario === 1 &&
                 <div>
                  <input type='time' placeholder='digite o horario' value={hora} onChange={e => sethora(e.target.value)} />
                  <input type='date' value={data} onChange={e => setdata(e.target.value)} />
                  <input type='number' value={qtd} onChange={e => setqtd(e.target.value)}/>
                  <button onClick={criarHorario}>pronto</button>
                </div>        
                }


            </div>
            </div>
            </div>
    )
}