import styled from "styled-components";

export const HeaderPage = styled.header`
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap');
    div{
        background-color: rgb(0,0,0,.54);
        padding: .51rem 1rem;
        display:flex;
        align-items:center;
        gap: 5rem;
        justify-content: space-between;
    }
    

    nav{
        display:flex;
        gap: 2rem;
    }

    .mobile{
        display: none
    }

    .mobile-button {
        display: none
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

    @media screen and (max-width: 900px) {
        position:relative;  

        div{
            gap: 0;
        }

        .desktop{
            display:none
        }

        .header__logo {
            width: 50%;
            max-width: 250px
        }

        .mobile-button {
            display:block;
            font-size: 2rem;
            order: 2;
            color: ${props => props.theme.settings.text}
        }

        .activated{
            z-index: 2;
            position:absolute;
            width: 100%;
            background-color: rgb(0,0,0,.9);
            display:flex;
            flex-direction: column;
            text-align:center;
            padding: 2rem;
            box-sizing:border-box
        }

    }
`;

