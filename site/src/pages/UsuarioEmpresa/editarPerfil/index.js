import './index.scss'
import HederEmpresa from '../../../components/header-adm-empresa';




export default function EdiatrPerfilEmpresa (){




    return (
        <main className='pg-editarperfilempresa'>
                <HederEmpresa class='info'/>
                <div className='card'>
                    <h2>EDITAR INFORMAÇÕES</h2>                    
                        <div className='endireitar'>

                                <div className='esquerda'>
                                    
                                    <div className='infos'>
                                        <h4>NOME:</h4>
                                        <input />
                                    </div>

                                    <div className='infos'>
                                        <h4>TIPO DA EMPRESA:</h4>
                                        <input />
                                    </div>

                                    <div className='infos'>
                                        <h4>SED DA EMPRESA:</h4>
                                        <input />
                                    </div>

                                    <div className='infos'>
                                        <h4>E-MAIL CADASTRADO:</h4>
                                        <input />
                                    </div>

                                    <div className='infos'>
                                        <h4>NOME DO REPRESENTANTE:</h4>
                                        <input />
                                    </div>
                                </div>

                                <div className='direita'>
                                    <div className='btn'>
                                        
                                        <div className='maisFiliais'>
                                            <h4 className='txt'>FILIAIS </h4>  
                                            <img className='add' alt='' src='/assets/images/add.svg'/>
                                        </div>


                                    </div>

                                    <div className='filiais'>

                                            <div className='filial'>


                                            </div>
                
                                    </div>
                                </div>
                        </div>
                </div>
        </main>
    )
}


