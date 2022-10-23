import styled from "styled-components";

const Page = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400&display=swap');

    margin: 0 10vw; 
    color: #fff;
    height:100%;
    background-color: ${props => props.theme.settings.bg__color};

    .page__text{
        padding-top: .8rem;
        text-align:center;
        font-family: 'Dancing Script', cursive;
        font-size: 2rem;
        color: ${props => props.theme.settings.title__color}
    }
    
    .list{
        margin-top: 2rem;
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        justify-content: space-around
    }
    
`

export default Page