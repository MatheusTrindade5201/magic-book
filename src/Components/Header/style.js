import styled from "styled-components";

export const HeaderPage = styled.header`
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap');

    background-color: rgb(0,0,0,.54);
    padding: .51rem 0;
    display:flex;
    align-items:center;
    gap: 5rem;

    nav{
        display:flex;
        gap: 2rem;
    }

    .NavLink {
        text-decoration:none;
        font-size:1.5rem;
        font-family: 'Dancing Script', cursive;
        color: #fff
    }
    button {
        background-color: unset;
        border:thick 1px;
        border-color:transparent;
        border-radius: 10px 0 10px 0; 
        padding: .3rem;
        font-family: 'Dancing Script', cursive;
        font-size: 1rem;
        color: #fff;
        transition: .2s        
    }
    button:hover {
        cursor: pointer;
        border-color:#fff;
    }
`;

