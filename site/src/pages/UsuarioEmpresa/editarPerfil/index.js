import './index.scss'
import HederEmpresa from '../../../components/header-adm-empresa';
import { editarEmail ,editarNomeRepresentante ,editarNome , editarSed, editarTipo , CarregarInfoEmpresa, novaFilial ,buscarFilial } from '../../../api/empresa.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function EdiatrPerfilEmpresa (){
    const [nome , setnome] = useState('')
    const [representante , setrepresentante] = useState('')
    const [tipo , settipo] = useState('')
    const [email , setemail] = useState('')
    const [sed , setsed] = useState('')
    const [render , setrender] = useState(false)
    const [pais , setpais] = useState('')
    const [estado , setestado] = useState('')
    const [cidade , setcidade] = useState('')
    const [cep , setcep] = useState('')
    const [endereco , setendereco] = useState('')
    const [locais , setlocais] =useState([])



    const {id} = useParams()

    async function carregar (){
        try {
            let info = await CarregarInfoEmpresa(id)
            setnome(info.nome)
            setemail(info.email)
            settipo(info.tipo)
            setrepresentante(info.representante)
            setsed(info.endereco)

        } catch (err) {
            console.log(err.message)
        }
    }

    async function alterar (){
        try {
            if (email !== '') {
                await editarEmail(id , email)   
            }
            if (nome !== '') {
                await editarNome(id, nome)   
            }

            if (representante !== '') {
                await editarNomeRepresentante(id ,representante)   
            }
            if (sed !== '') {
                await editarSed(id , sed)   
            }
            if (tipo !== '') {
                await editarTipo(id, tipo)   
            }
        
        } catch (err) {
            
        }
    }

    async function filiais (){
        try {
            await novaFilial(id, pais ,estado , cidade ,endereco ,cep)
            carregarFilial()
        } catch (err) {
            
        }
    }

    function trocarender (){
        setrender(true)
    }
    function rendervolta (){
        setrender(false)
    }


    async function carregarFilial (){
        let a = await buscarFilial(id)
        setlocais(a)
    }

    useEffect(() => {
        carregar()
        carregarFilial()
    }, [])
    
    useEffect(() => {
        alterar()

    },[nome, email, tipo, representante, sed])



    return (
        <main className='pg-editarperfilempresa'>
                <HederEmpresa class='info'/>

                {render === true
                ?
                <div className='desfoque'>
                <div className='card'>
                    <h2>EDITAR INFORMAÇÕES</h2>                    
                        <div className='endireitar'>

                            <div className='esquerda'>
                                
                                <div className='infos'>
                                    <h4>NOME:</h4>
                                    <input value={nome} onChange={e => setnome(e.target.value)}/>
                                </div>

                                <div className='infos'>
                                    <h4>TIPO DA EMPRESA:</h4>
                                    <input value={tipo} onChange={e => settipo(e.target.value)}/>
                                </div>

                                <div className='infos'>
                                    <h4>SED DA EMPRESA:</h4>
                                    <input value={sed} onChange={e => setsed(e.target.value)}/>
                                </div>

                                <div className='infos'>
                                    <h4>E-MAIL CADASTRADO:</h4>
                                    <input value={email} onChange={e => setemail(e.target.value)}/>
                                </div>

                                <div className='infos'>
                                    <h4>NOME DO REPRESENTANTE:</h4>
                                    <input value={representante} onChange={e => setrepresentante(e.target.value)}/>
                                </div>
                            </div>

                            <div className='direita'>
                                <div className='btn'>
                                    
                                    <div className='maisFiliais' onClick={trocarender} >
                                        <h4 className='txt'>FILIAIS </h4>  
                                        <img className='add' alt='' src='/assets/images/add.svg'/>
                                    </div>


                                </div>

                                <div className='filiais'>
                                    
                        
                                        </div>
                                    </div>
                            </div>
                    </div>
                    </div>
                    :<div className='card'>
                        <h2>EDITAR INFORMAÇÕES</h2>                    
                            <div className='endireitar'>

                                <div className='esquerda'>
                                    
                                    <div className='infos'>
                                        <h4>NOME:</h4>
                                        <input value={nome} onChange={e => setnome(e.target.value)}/>
                                    </div>

                                    <div className='infos'>
                                        <h4>TIPO DA EMPRESA:</h4>
                                        <input value={tipo} onChange={e => settipo(e.target.value)}/>
                                    </div>

                                    <div className='infos'>
                                        <h4>SED DA EMPRESA:</h4>
                                        <input value={sed} onChange={e => setsed(e.target.value)}/>
                                    </div>

                                    <div className='infos'>
                                        <h4>E-MAIL CADASTRADO:</h4>
                                        <input value={email} onChange={e => setemail(e.target.value)}/>
                                    </div>

                                    <div className='infos'>
                                        <h4>NOME DO REPRESENTANTE:</h4>
                                        <input value={representante} onChange={e => setrepresentante(e.target.value)}/>
                                    </div>
                                </div>

                                <div className='direita'>
                                    <div className='btn'>
                                        
                                        <div className='maisFiliais' onClick={trocarender} >
                                            <h4 className='txt'>FILIAIS </h4>  
                                            <img className='add' alt='' src='/assets/images/add.svg'/>
                                        </div>


                                    </div>

                                    <div className='filiais'>

                                            {locais.map  (item =>

                                                    <div className='filial'>
                                                        {item.DS_ENDERECO}
                                                    </div>
                                            )}
                                    </div>
                                </div>
                        </div>
                </div>}
                
                {render === true &&
                        <div className='opts-2'>
                            <div className='ptcima'>
                                <input  placeholder='pais'className='inputnormal' value={pais} onChange={e => setpais(e.target.value)}/>
                                <input placeholder='cidade' className='inputnormal' value={cidade} onChange={e => setcidade(e.target.value)}/>
                                <input placeholder='estado' className='inputnormal' value={estado} onChange={e => setestado(e.target.value)}/>
                            </div>
                            <div className='ptbaixo'>
                                    <input placeholder='CEP' className='inputnormalbaixo' value={cep} onChange={e => setcep(e.target.value)}/>
                                    <input placeholder='endereco' className='inputnormalbaixo' value={endereco} onChange={e => setendereco(e.target.value)}/>
                                <div className='btns'>
                                    <button onClick={filiais}>SALVAR</button>
                                    <button onClick={rendervolta} >PRONTO</button>
                                </div>
                            </div>

                        </div>
                }
        </main>
    )
}


