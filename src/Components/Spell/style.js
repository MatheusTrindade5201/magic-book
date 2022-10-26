import styled from "styled-components";

export const SpellArticle = styled.article`
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap');

    background-color: ${props => props.theme.settings.spell_card};
    background-size: cover;
    background-repeat: no-repeat;
    display:flex;
    min-height: fit-content;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    padding: 1rem 2rem;
    font-family: 'Dancing Script', cursive;
    box-sizing:border-box;

    h1{
        padding-bottom: 1rem
    }

    p{
        line-height: 1.5rem;
        text-align: center
    }
`;
