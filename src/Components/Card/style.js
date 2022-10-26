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
        width: 100%
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
        z-index: 1;
        display: flex;
        align-items:flex-end;
        outline: 6px solid rgb(0,0,0,.5)
    }

    .card__infos {
        overflow: hidden;
        position: absolute;
        top: 0;
        transform:translateX(.1rem);
        z-index: -1;
        transition: .3s;
        width:10px;
        height: 10px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        font-size:1rem;
    }

    .card:hover+.card__infos, .card__infos:hover {
        z-index: 2;
        background-color: rgb(0,0,0,.9);
        padding: .5rem;
        width: 150px;
        height:fit-content;
        align-items: flex-start;
        box-sizing:content-box

    }

    li{
        list-style: none
    }
`;
