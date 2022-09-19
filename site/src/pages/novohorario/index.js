import './index.scss';
import HederEmpresa from '../../components/header-adm-empresa';


export default function Novohorario (){

    let dia =  new Date();
    

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
                <div className='card1'>
                    <p>14:00</p>
                </div>
                <div className='card-novo'>
                    <p>14:00</p>
                </div>
            </div>
        </div>
    )
}