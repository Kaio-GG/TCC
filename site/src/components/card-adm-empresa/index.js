import './index.scss'




export default function Cardadm (props){




    return(
        <div className="card">
            <div> {props.nome} </div>
            <div> {props.horas}</div>
            <div> {props.data}</div>
            <div></div>
         
            <div> props.info</div>
        </div>
    )
}