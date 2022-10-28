import './index.scss'

import HeaderUsuario from '../../../components/header-usuario'
import { useState } from 'react'
import HeaderEmpresa from '../../../components/header-adm-empresa'

import Pular from 'react-reveal/Fade'

export default function Index(){
    const [input, setInput] = useState(false);

    function showInput(){
        setInput(true)
    }

    function enviarReview(){
        setInput(false)
    }

    return(
        <main className='full'>
            <section>
                <header className='header'>
                    <HeaderUsuario> </HeaderUsuario>
                </header>

                <div className='alinhar-row'>
                    <div className='boxleft'>
                        <div className='b1'>
                            <img className='img-empresa'></img>
                            <div className='b1-letters'>
                                <h1>Nome da empresa</h1>
                                <p>Descrição da empsa</p>
                            </div>

                            <div className='b1-letters2'>
                                <p className='b1-ava'>5 ESTRELAS</p>
                                <p>Brasil, São Paulo, SP</p>
                                <p>Rua "", 27</p>
                                <p>? Avaliações</p>
                            </div>
                        </div>


                        <div className='b2'>
                            <h1 className='h1-b2'>Faça aqui seu agendamento de forma gratuita e em casa.</h1>
                            <button className='button-b2'>Agendar</button>
                        </div>

                        <div className='imagem'>
                            <img className='img-desc'></img>
                        </div>

                        <div className='b3'>
                            <h1 className='h1-b3'>Reviews</h1>
                            <hr className='linha-b3'></hr>

                            <div className='box-review'>
                                <div className='juntar'>
                                    <img className='img-usuario'></img>
                                    <div className='b3-letters'>
                                        <h1>Numero da avaliação</h1>
                                        <p className='p-b3'>Eu gostei muito dessa empresa parea</p>
                                    </div>
                                </div>

                                <p>25/10/12</p>
                            </div>

                            <div className='box-review'>
                                <div className='juntar'>
                                    <img className='img-usuario'></img>
                                    <div className='b3-letters'>
                                        <h1>Numero da avaliação</h1>
                                        <p className='p-b3'>Eu gostei muito dessa empresa parea</p>
                                    </div>
                                </div>

                                <p>25/10/12</p>
                            </div>

                            <div className='box-review'>
                                <div className='juntar'>
                                    <img className='img-usuario'></img>
                                    <div className='b3-letters'>
                                        <h1>Numero da avaliação</h1>
                                        <p className='p-b3'>Eu gostei muito dessa empresa parea</p>
                                    </div>
                                </div>

                                <p>25/10/12</p>
                            </div>

                            {input === true &&
                                <Pular> 
                                    <div className='comentario'>
                                        <textarea className='comentar'/>
                                        <button onClick={enviarReview} className='button-enviar'>Enviar</button>
                                    </div>

                                </Pular>

                            }

                            {input === false &&

                                <p className='p2-b3' onClick={showInput}>Adicionar comentário</p>

                            }

                            

                           
                        </div>

                    </div>

                    <div>
                        <div className='b4-right'>
                            <h1>Verificação</h1>
                            <hr className='linha-b3'></hr>
                            <p>5523-5475</p>
                            <p>facebook.com.br/empresa</p>
                            <p>eusougay@gmail.com</p>
                        </div>

                        <div className='b5-right'>
                            <h1>Certificações</h1>
                            <hr className='linha-b3'></hr>
                        </div>
                    </div>

                </div>





            </section>
        </main>


    )


}