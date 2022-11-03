import './index.scss'
import HeaderEmpresa from '../../../components/header-adm-empresa'
import Storage from 'local-storage'
import { useEffect, useState } from 'react'
import { listarReview } from '../../../api/paginaEmpresa'

export default function Index(){
    const [review, setReviews] = useState([]);
    
    let storage = Storage('Empresa-Logada')
    let id = storage.ID_USUARIO_EMPRESA

    async function listar(id){
        const r = await listarReview(id)
        setReviews(r)
    }


    useEffect(() => {
        listar(id);
    }, [])
        

    return(
        <main className='pg'>
            <section className="allreview">
            
                <HeaderEmpresa/>

                <div className='texts'>
                    <h1 className='title'>Reviews</h1>
                    <hr className='linha'></hr>
                </div>


            <div className='box'>
                {review.map(item => 
                    <div className='box-review'>
                        <div className='juntar'>
                            <img className='img-usuario'></img>
                                <div className='b3-letters'>
                                    <h1>{item.nome}</h1>
                                    <h4>{item.ava}</h4>
                                    <p className='p-b3'>{item.avads}</p>
                                </div>
                        </div>
                        <p>{item.dia.substr(7,3).replace("-","")}/{item.dia.substring(4,7).replace("-","")}/{item.dia.substring(0,5).replace("-","")}<br/>
                            ás {item.dia.substring(11,16)}
                        </p>
                    </div>
    
                )}
            </div>
                                
            </section>

        </main>
    )
}