import { DivCard } from "./style"


const Card = (props) => {
    return(
        <DivCard>
            <div className="card" style={{backgroundImage: `url(${props.image})`}}>
                    <p className="card__header"> <img className="card__icon" alt="house emblem" src={props.icon} /> {props.name}</p>
            </div>
            <div className="card card__infos">
                <p>Specie: {props.species}</p>
                <p>Ancestry: {props.ancestry}</p>
                <p>Patronus: {props.patronus}</p>
                <p>House: {props.house}</p>
                <ul>
                    <li>Wand:</li>
                    <li>Wood: {props.wood}</li>
                    <li>Core: {props.core}</li>
                    <li>Length: {props.length}</li>
                </ul>
            </div>
        </DivCard>
    )
}

export default Card