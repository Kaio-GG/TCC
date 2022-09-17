import './index.scss';
import HederEmpresa from '../../components/header-adm-empresa';


export default function Novohorario (){


    return(
        <div className='pg-novohorario'>
            <HederEmpresa  class='hora'/>
            <div className='alinhado'>
                <h3>Novo Horario</h3>
                <div className='linha'></div>
            </div>
            <input type="date"/> 
        </div>
    )
}