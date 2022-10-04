import './index.scss';
import HederEmpresa from '../../components/header-adm-empresa';
import { useEffect, useState } from 'react';
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
    const [horario , sethorario] =useState([])
    const [dataCarregarHorario , setdataCarregarHorario]= useState('2022-10-23')


    async function criarHorario (){
        try {
            await NovoHorario(id ,local , String(hora) , data)
            console.log('horario cadastrado com sucesso')
        } catch (err) {
           console.log(err.message)
           console.log('nao foi ')
        }
    }

    async function CarregarHorario (){
        try {
            const rsp = await carregarHorario(id , local , dataCarregarHorario)
            console.log(rsp)
            sethorario(rsp)

        } catch (err) {
            console.log(err.message)
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









    useEffect( () => {
       CarregarHorario()
    },[local, dataCarregarHorario])



    return(
        <div className='pg-novohorario'>
            <HederEmpresa  class='hora'/>
            <div>   

            <div className='alinhado'>
                <h2>Horarios</h2>
                <div className='linha'></div>
            </div>

            <div className='opts'>

                <input type="date" value={dataCarregarHorario} onChange={ e => setdataCarregarHorario (e.target.value)}/>

                <select  value={local} onChange={e => setlocal(e.target.value)} >
                    <option value='santo amaro'>santo amaro</option>
                </select>
            </div> 
             


            <div className='horarios'>
                {horario.map (item  => 
                <div>
                <div className='card1' onMouseOver={renderp}>

                    <p onClick={contador}   onMouseOver={renderp} > {item.hora}
                    </p>

                </div>
                <div className='card1' onMouseOut={renderm}>

                        <p  onMouseOver={renderp}>{item.hora}</p>

                    <div className='btneditarcard'>
                        <button onClick={contador} onMouseOver={renderp}> somar </button>
                        <div  onMouseOver={renderp} >{item.qtd}
                        </div>
                        <button onClick={removedor} onMouseOver={renderp}> menos </button>
                        <button onMouseOver={renderp} >excluir</button>                                               
                    </div>
                    </div>    

                </div>)}

{render}

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