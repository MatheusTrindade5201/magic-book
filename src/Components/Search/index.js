import { SearchDiv } from "./style"

const Search = (props) => {
    return (
        <SearchDiv>
            <input placeholder={props.placeholder} onChange={event => props.onTyped(event.target.value)}/>
        </SearchDiv>
    )
}

export default Search