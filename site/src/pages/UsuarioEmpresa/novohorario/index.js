import './index.scss';
import HederEmpresa from '../../../components/header-adm-empresa';
import { useEffect, useState } from 'react';
import { NovoHorario  ,editarHorario , deletarHorario ,CarregarHorarios ,buscarLocal } from '../../../api/agendamentos.js';
import { buscarFilial } from '../../../api/empresa.js';
import storage from 'local-storage';
import Foter from '../../../components/footer/index.js'
import { toast } from 'react-toastify'


export default function Novohorario (){
    const [render , setrender] = useState(true);
    const [rendernovohorario ,setrendernovohorario] = useState (false);
    const [local , setlocal  ] = useState([]);
    const [hora , sethora] =useState ('00:00');
    const [data ,setdata] =useState('');
    const [qtd , setqtd] =useState(1);
    const [horario , sethorario] =useState([]);
    const [dataCarregarHorario , setdataCarregarHorario]= useState('');
    const [filial , setfilial ]= useState([]);
    const [ localCarregar , setlocalCarregar] = useState ('');
    const empresaLogada = storage('Empresa-Logada');
    const id = (empresaLogada.ID_USUARIO_EMPRESA);



    

    async function criarHorario (hora , data , qtd ,localCarregar){
        try {

            if(!localCarregar)
                throw new Error('Selecione um local')            
            let a = horario.map(item => {    
              let msg = 0
                if (item.hora === hora){
                        msg = 1
                } 
                return msg                 
            })
            for (let i = 0; i < a.length; i++) {
                if (a[i] === 1) 
                    throw new Error ('Esse horario ja existe')
            }

            await NovoHorario(id , localCarregar , String(hora) , data ,qtd ,)
            CarregarHorario()
            
            toast.dark(' 🚀 Horario cadastrado com sucesso')
        } catch (err) {
           toast.error(err.message)
           
        }
    }



    async function CarregarHorario (){
        try {

            const rsp = await CarregarHorarios(id , localCarregar , dataCarregarHorario)
            
            sethorario(rsp)
        } catch (err) {
            console.log(err.message)
        }
    }


    async function deletar (id){
        try {
            await deletarHorario (id)
            await CarregarHorario()
            toast.warn(' 🚀 Horario deletado')    
        } catch (err) {
            console.log('Horario não deletado', err.message)
        }
        
    }
    async function aumentarHorarios (id , qtd){
        try {
            const a = qtd + 1
            await editarHorario (id , a)
            await CarregarHorario()
            toast.dark('🚀 Horario aumentado')
        } catch (err) {
            console.log('Não foi editado', err.message)
        }
    }

    async function diminuirHorarios (id , qtd){
        try {
            const a = qtd - 1
            if(qtd <= 1)
                throw new Error ('Horario não pode ser menor que 1')
            await editarHorario (id , a)
            await CarregarHorario()
            toast.dark('🚀 Horario diminuido')
        } catch (err) {
            toast.error(err.message)
        }
    }

    async function buscar (id){
        try {
          const a = await buscarLocal(id)
          const b = await buscarFilial(id)   
          setlocal(a)
          setfilial(b)
        } catch (err) {
            console.log(err.message)
        }
    }
    function novahora (){
        let hr = new Date()
        let a = hr.toISOString().substr(0,10)
        setdataCarregarHorario(a)
        setdata(a)
    }
    function rendernovo (){
    if(rendernovohorario === false){
        setrendernovohorario(true)
    }else{
        setrendernovohorario(true)
    }
    }

    function renderp (){
        setrender(true) 
    }
    function renderhorario(){
        setrendernovohorario(false)
    }
   

    useEffect(() => {
            novahora()
            buscar(id)
            setlocalCarregar(local.local)
    },[])

    useEffect( () => {

       CarregarHorario(localCarregar)
       console.log(localCarregar )
    },[localCarregar , dataCarregarHorario])


    return(
        <div className='pg-novohorario'>
            <HederEmpresa  class='hora'/>
            <div>


            {rendernovohorario === false &&
            <div >    
            <div className='certo'>    
            <div className='opts'>
            <div className='alinhado'>
                    <h2>Filtrar Horarios</h2>
                    <div className='linha'></div>
            </div>
            
            <div className='esq'>
                <input type="date" value={dataCarregarHorario} onChange={ e => setdataCarregarHorario (e.target.value)}/>
            </div>

            <div className='esq'>
            
                
                <select className='opt' value={localCarregar} onChange={e => setlocalCarregar(e.target.value)} >    
                        <option disabled hidden selected>Selecione o Local</option>

                        {local.map (item =>
                            <option value={item.local}>{item.local}</option>
                        )}
                        {filial.map (item =>
                            <option value={item.DS_ENDERECO}>{item.DS_ENDERECO}</option>
                        )}
                    
                </select>
                </div>
                <div className='org-direita'>
                    <div className='card-novo' onClick={rendernovo}>
                        Adicionar Horário              
                    </div>
                </div>    
            </div>
            </div> 
            <div className='horarios'>
                <div className='alinhado1'>
                    <h2 className='horarios'>Horarios</h2>
                    <div className='linha1'></div>
                </div>
                
                {horario.length === 0  &&
                    <img className='not' src='/assets/images/notFound.svg' alt=''/>
                }       
                {render === false
                    ?<div  className='nela' >
                    {horario.map (item  =>
                        <div className='card1' onMouseOver={() => renderp()}>
                            <p>{item.hora}</p>
                    </div>
                )}
                     </div>
                    :<div className='nela'>
                        {horario.map (item  =>
                            <div  className='card1' >
                                <p>{item.hora}</p>
                                <div className='btneditarcard'>
                                    <img src='/assets/images/seta esquerda.svg' onClick={() => diminuirHorarios(item.id_horario, item.qtd)} alt='' />
                                    <div className='qtd'>{item.qtd}</div>
                                    <img src='/assets/images/seta direita.svg' onClick={() => aumentarHorarios(item.id_horario, item.qtd)} alt='' /> &nbsp;
                                    <img src='/assets/images/lixeira.svg' onClick={() => deletar(item.id_horario)} alt=''/> &nbsp;                                              
                                </div>
                            </div>
                    )}
                    </div>}   
            </div>

                </div>
                }





            {rendernovohorario === true &&
               <div className='desfoque' > 
                    <div>
            <div >    
            <div className='certo'>    
            <div className='opts'>
            <div className='alinhado'>
                    <h2>Filtrar Horarios</h2>
                    <div className='linha'></div>
            </div>
            
            <div className='esq'>
                <input type="date" value={dataCarregarHorario} onChange={ e => setdataCarregarHorario (e.target.value)}/>
            </div>

            <div className='esq'>
            
                
                <select className='opt' value={localCarregar} onChange={e => setlocalCarregar(e.target.value)} >    
                        <option disabled hidden selected>Selecione o Local</option>

                        {local.map (item =>
                            <option value={item.local}>{item.local}</option>
                        )}
                        {filial.map (item =>
                            <option value={item.DS_ENDERECO}>{item.DS_ENDERECO}</option>
                        )}
                    
                </select>
                </div>
                <div className='org-direita'>
                    <div className='card-novo' onClick={rendernovo}>
                        Adicionar Horário              
                    </div>
                </div>    
            </div>
            </div> 
            <div className='horarios'>
                <div className='alinhado1'>
                    <h2 className='horarios'>Horarios</h2>
                    <div className='linha1'></div>
                </div>
                
                
                {render === false
                    ?<div  className='nela' >
                    {horario.map (item  =>
                        <div className='card1' onMouseOver={() => renderp()}>
                            <p>{item.hora}</p>
                    </div>
                )}
                     </div>
                    :<div className='nela'>
                        {horario.map (item  =>
                            <div  className='card1' >
                                <p>{item.hora}</p>
                                <div className='btneditarcard'>
                                    <img src='/assets/images/seta esquerda.svg' onClick={() => diminuirHorarios(item.id_horario, item.qtd)} alt='' />
                                    <div className='qtd'>{item.qtd}</div>
                                    <img src='/assets/images/seta direita.svg' onClick={() => aumentarHorarios(item.id_horario, item.qtd)} alt='' /> &nbsp;
                                    <img src='/assets/images/lixeira.svg' onClick={() => deletar(item.id_horario)} alt=''/> &nbsp;                                              
                                </div>
                            </div>
                    )}
                    </div>}   
            </div>

                </div>


            </div>
            
            
            </div>
            }
            {rendernovohorario === true &&
                    <div className='centralizar'>
                        <div className='opts-2'>
                                <input className='info-novo' type='time' placeholder='digite o horario' value={hora} onChange={e => sethora(e.target.value)} />
                                <input className='info-novo' type='date' value={data} onChange={e => setdata(e.target.value)} />
                                <input className='info-novo' type='number' min='1' value={qtd} onChange={e => setqtd(e.target.value)}/>
                                                                
                            <div className='btns'>  
                                <button onClick={() => criarHorario(hora , data , qtd ,localCarregar)} >SALVAR</button>
                                <button className='btn-pronto' onClick={renderhorario} >PRONTO</button>
                            </div>
                        </div>
                    </div> 
            }
            </div>
        </div>
    )}