import styled from "styled-components";

const Page = styled.div`

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
        margin: 2rem 2vw 0 2vw;
        padding-bottom: 5rem;
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        justify-content: space-around
    }
    
`;

export default Page