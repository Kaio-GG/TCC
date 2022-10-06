import './index.scss';
import HederEmpresa from '../../components/header-adm-empresa';
import { useEffect, useState } from 'react';
import { NovoHorario  ,editarHorario , deletarHorario ,CarregarHorarios } from '../../api/agendamentos.js';





export default function Novohorario (){
    const [cont , setcont] = useState (0)
    const [render , setrender] = useState(false)
    const [rendernovohorario ,setrendernovohorario] = useState (false)
    const [idemp , setid ] = useState(1)
    const [local , setlocal  ] = useState('morumbi')
    const [hora , sethora] =useState ('00:00')
    const [data ,setdata] =useState('')
    const [qtd , setqtd] =useState(0)
    const [horario , sethorario] =useState([])
    const [dataCarregarHorario , setdataCarregarHorario]= useState('2022-10-23')


    async function criarHorario (){
        try {
            await NovoHorario(idemp ,local , String(hora) , data ,qtd)
            console.log('horario cadastrado com sucesso')
        } catch (err) {
           console.log(err.message)
           console.log('nao foi ')
        }
    }
    async function CarregarHorario (){
        try {
            const rsp = await CarregarHorarios(idemp , local , dataCarregarHorario)
            sethorario(rsp)
        } catch (err) {
            console.log(err.message)
        }
    }
    async function deletar (id){
        try {
            await deletarHorario (id)
            await CarregarHorario()    
        } catch (err) {
            console.log('horario nao deletado', err.message)
        }
        
    }
    async function aumentarHorarios (id , qtd){
        try {
            const a = qtd + 1
            await editarHorario (id , a)
            await CarregarHorario()
            console.log('foi editado')
        } catch (err) {
            console.log('nao foi editado', err.message)
        }
    }

    async function diminuirHorarios (id , qtd){
        try {
            const a = qtd - 1
            if(qtd <= 1)
                throw new Error ('Horario não pode ser menor que 1')
            await editarHorario (id , a)
            await CarregarHorario()
            console.log('foi editado')
        } catch (err) {
            console.log('nao foi editado', err.message)
        }
    }



    




    function rendernovo (){
    if(rendernovohorario === false){
        setrendernovohorario(true)
    }else{
        setrendernovohorario(true)
    }
    }

    function contador (){
        setcont(cont+1) 
    }
    function removedor (){
        setcont(cont-1) 
    }
    function renderp (){
        setrender(true) 
    }
    function renderm (){
        setrender(render-1) 
    }
    function renderhorario(){
        setrendernovohorario(rendernovohorario-1)
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

                <select className='opt' value={local} onChange={e => setlocal(e.target.value)} >
                    <option value='santo amaro'>santo amaro</option>
                    <option value='morumbi'>morumbi</option>
                </select>
            </div> 
             

            <div className='horarios'>
            


                {render === false
                ?<div  className='nela' >
                {horario.map (item  =>
                <div className='card1' onMouseOver={() => renderp()}>

                    <p    > {item.hora}
                    </p>

                </div>)}
                </div>

                :<div className='nela'>
                {horario.map (item  =>
                <div  className='card1' >

                        <p  >{item.hora}</p>

                    <div className='btneditarcard'>
                        
                        <div className='seta-esquerda' onClick={() => diminuirHorarios(item.id_agendamento, item.qtd)} ></div>

                        <div  >{item.qtd}
                        </div>

                        <div className='seta-direita' onClick={() => aumentarHorarios(item.id_agendamento, item.qtd)} ></div>
                        <div className='lixeira' onClick={() => deletar(item.id_agendamento)}></div>                                               
                    </div>
                    </div>)}
                    </div>}   
                    </div>
                <div className='card-novo' onClick={rendernovo}>
                    ADICIONAR HORARIO              
                </div>
                {rendernovohorario === true &&
                 <div className='opts-2'>
                  <input className='info-novo' type='time' placeholder='digite o horario' value={hora} onChange={e => sethora(e.target.value)} />
                  <input className='info-novo' type='date' value={data} onChange={e => setdata(e.target.value)} />
                  <input className='info-novo' type='number' value={qtd} onChange={e => setqtd(e.target.value)}/>
                  <div className='btns'>  
                    <button onClick={criarHorario} >SALVAR</button>
                    <button className='btn-pronto' onClick={renderhorario} >PRONTO</button>
                  </div>
                </div>        
                }
            </div>
            </div>
    )
}