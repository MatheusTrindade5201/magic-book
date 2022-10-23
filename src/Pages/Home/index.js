import { useEffect, useState } from "react"
import Card from "../../Components/Card";
import Header from "../../Components/Header"
import api from "../../Services/api";
import Page from './style'

const Home = () => {

    const [list, setList] = useState(false);

    

    useEffect(()=>{
        api.get('/characters')
        .then((response)=> setList(response.data));
        console.log(list);
    },[list])

    if(!list){
        return(
            <div>
            <Page>
                <div className="page__text">
                    <h1>Magic Book</h1>
                    <p>A guide for wizards and muggles!</p>
                    <p>Loading...</p>
                </div>
                
            </Page>
        </div>
        )
    }
    return (
        <div>
            <Page>
                <div className="page__text">
                    <h1>Magic Book</h1>
                    <p>A guide for wizards and muggles!</p>
                </div>
                <div className="list">
                    {list.map(character => <Card
                    image={character.image.length > 0 ? character.image : require("../../assets/image/No-Image-Placeholder.svg.png")}
                    name={character.name}
                    icon={character.house === "Gryffindor" ? require('../../assets/image/Gryffindor.png'): character.house === "Slytherin" ? require('../../assets/image/Slytherin.png') : character.house === "Hufflepuff" ? require('../../assets/image/Hufflepuff.png') : character.house === "Ravenclaw" ? require('../../assets/image/Ravenclaw.png') : ''}
                    ancestry={(character.ancestry).charAt(0).toUpperCase()+(character.ancestry).slice(1)}
                    species={(character.species).charAt(0).toUpperCase()+(character.species).slice(1)}
                    house={character.house}
                    patronus={(character.patronus).charAt(0).toUpperCase()+(character.patronus).slice(1)}
                    wood={(character.wand.wood).charAt(0).toUpperCase()+(character.wand.wood).slice(1)}
                    core={(character.wand.core).charAt(0).toUpperCase()+(character.wand.core).slice(1)}
                    length={character.wand.length}
                />)}
                </div>
            </Page>
        </div>
    )
}

export default Home