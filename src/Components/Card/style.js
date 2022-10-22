import styled from "styled-components";

export const DivCard = styled.div`
    width:150px;
    position: relative;

    .card__header{
        display: flex;
        align-items:center;
        gap: .5rem;
        background-color: rgb(0,0,0,.5);
        padding: .3rem;
    }

    .card__icon {
        display:inline-block;
        width: 35px;
        height: 35px
    }

    img[src=""],
    img:not([src]) {
        display: none;
    }
    
    .card{
        height: 200px;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: 1
    }

    .card__infos {
        overflow: hidden;
        position: absolute;
        top: 0;
        transform:translateX(.2rem);
        z-index: -1;
        transition: .3s;
        width:10px;
        height: 10px;
        display: flex;
        flex-direction: column;
        gap: .5rem
    }

    .card:hover+.card__infos, .card__infos:hover {
        transform: translateX(rem);
        z-index: 2;
        background-color: rgb(0,0,0,.9);
        padding: 1rem;
        width: 100%;
        height: 100%
    }

    li{
        list-style: none
    }
`