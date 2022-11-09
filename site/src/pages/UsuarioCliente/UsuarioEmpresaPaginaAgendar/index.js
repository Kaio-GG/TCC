import './index.scss'
import { Link, useNavigate, useParams } from 'react-router-dom';
import HeaderUsuario from "../../../components/header-usuario";
import { agendarHorario ,horarios ,horariosPorData, mostrarNome} from '../../../api/agendamentos.js';
import storage from 'local-storage'
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify'
import { buscarImagem } from '../../../api/paginaEmpresa.js';

export default function UsuarioEmpresaPaginaAgendar() {
    const [nome , setnome ] =useState('')
    const [email ,setemail] =useState('')
    const [cpf ,setcpf] =useState('')
    const [sexo ,setsexo] =useState('')
    const [telefone , settelefone] =useState('')
    const [dtnasc , setdtnasc]= useState('')
    const [desc ,setdesc] =useState('')
    const [render , setrender] =useState(true)
    const [horario ,sethorario] =useState([])
    const [idhorario , setidhorario] = useState(0)
    const [data ,setdata] = useState('')
    const [marcado , setmarcado] =useState([false , 0])
    const [info, setInfo] = useState([])
    
    
    const {id} = useParams();
    const clientelogado = storage('Cliente-Logado')
    const idcliente = (clientelogado.ID_USUARIO_CLIENTE)

    async function caregar (id){
        try {
            let r = await horarios(id)
            sethorario(r)
            setrender(false)             
        } catch (err) {
            console.log(err.message)
        }
    }

    async function filtraData (){
        let a = await horariosPorData(id , data) 
        sethorario(a)
    }

    async function mostrar(){
        const r = await mostrarNome(id)
        setInfo(r)
    }

    async function agendar (idhora , idusu ,nome , email ,cpf , tel ,sexo ,nasc ,desc){
        try {
            await agendarHorario(idhora ,idusu , nome ,email , cpf ,tel ,sexo ,nasc ,desc)
            toast.dark('🚀 Consulta Solicitada')
        } catch (err) {
            console.log(err.message)
        }
    }
    function novahora (){
        let hr = new Date()
        let a = hr.toISOString().substr(0,10)
        setdata(a)
    }

    function marcarRender (mar , pos ,id){
        setmarcado([mar , pos])
        setidhorario(id)
    }

    useEffect(() => {
        novahora()
        mostrar(id)
    },[])

    useEffect (() => {
        filtraData()
    }, [data])

    return(
        <div className='pg-toda'>
          <main className="UsuarioEmpresaAgendar">
            {render === true &&
            <div className='centro'>
                <HeaderUsuario />

                <div className='padding'>

                    <div className='inputs-card'>
                        {info.map(item =>
                        <div className='ima'>
                            <img alt='' src={buscarImagem(item.logo)}/>
                            <p> {item.nome} </p>
                        </div>
                        )}
                        <div className='inputs1'>
                            <h3>Agendamento</h3>
                            <input placeholder='Nome completo' value={nome} onChange={e => setnome(e.target.value)}/>
                            <input placeholder='Email' value={email} onChange={e => setemail(e.target.value)} />
                            <input placeholder='CPF' value={cpf} onChange={e => setcpf(e.target.value)} />
                        </div>
                        <div className='inputs'>
                            <div className='e'></div>
                            <input placeholder='Data de nascimento' type='date' value={dtnasc} onChange={e => setdtnasc(e.target.value)} />
                            <input placeholder='Sexo' value={sexo} onChange={e => setsexo(e.target.value)} />
                            <input placeholder='Telefone' value={telefone} onChange={e => settelefone(e.target.value)} />
                        </div>
                    </div>

                    <div className='campotexto'>
                        <h3> Agendamento </h3>
                        <textarea value={desc} onChange={e => setdesc(e.target.value)} />
                    </div>

                    <div className='botao'>
                        <button onClick={() => caregar(id)} >Proximo</button>
                    </div>
                </div>
            </div>}
        </main>

            







            {render === false &&   
            <div className="UsuarioEmpresaAgendarHorario">
            <div className='centro'>
                <HeaderUsuario />
                <div className='pa'>

                    <h3> Horarios </h3>

                    <div className='selects'>
                           <input className='um'  type='date' value={data} onChange={e => setdata(e.target.value)} /> 
                    </div>

                    <div className='cards'>
                        
                        {horario.map ( (item, pos) =>  

                        <div className='cardmarcado'>

                            {(marcado[0] === false || pos !== marcado[1]) &&                              
                                <div className='a' onClick={() => marcarRender(true , pos , item.id_horario)} > 
                                    <div className='filha-2'>
                                            <p>AGENDAMENTO</p>
                                    </div>
                                    <div className='filha'>
                                            <p>Horario:</p>&nbsp;&nbsp;{item.hora}
                                    </div>
                                    <div className='filha'>
                                            <p>Local:</p> &nbsp;&nbsp; {String(item.local).toLowerCase()}
                                    </div>
                                    <div className='filha'>
                                            <p>Data:</p> &nbsp;&nbsp;  <p>{item.data.substr(7,3).replace("-","")}/{item.data.substring(4,7).replace("-","")}/{item.data.substring(0,5).replace("-","")}<br/>
                                    </p>  
                                    </div>
                                </div>
                            }
                            
                            {marcado[0] === true  && pos === marcado[1] &&
                                <div className='b' onClick={() => marcarRender(true , pos)} > 
                                    <div className='filha-2'>
                                            <p>AGENDAMENTO</p>
                                    </div>
                                    <div className='filha'>
                                            <p>Horario:</p>&nbsp;&nbsp;{item.hora}
                                    </div>
                                    <div className='filha'>
                                            <p>Local:</p> &nbsp;&nbsp; {String(item.local).toLowerCase()}
                                    </div>
                                    <div className='filha'>
                                            <p>Data:</p> &nbsp;&nbsp;  <p>{item.data.substr(7,3).replace("-","")}/{item.data.substring(4,7).replace("-","")}/{item.data.substring(0,5).replace("-","")}<br/>
                                            </p>  
                                    </div>
                                </div>
                            }
                            </div>
                        )}    
                    </div>
                    <div className='botao'>
                        <button onClick={() => agendar(idhorario , idcliente ,nome ,email ,cpf ,telefone ,sexo ,dtnasc ,desc)}> solicitar </button>  
                    </div>
                
                </div>
            </div>
        </div>}
        </div>
    )
}