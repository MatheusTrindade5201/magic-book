import { SpellArticle } from "./style"

const Spell = (props) => {
    return(
        <SpellArticle>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </SpellArticle>
    )
}

export default Spell