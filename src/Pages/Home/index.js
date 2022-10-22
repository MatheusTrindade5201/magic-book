import { useEffect, useState } from "react"
import Card from "../../Components/Card";
import Header from "../../Components/Header"
import api from "../../Services/api";
import Page from './style'
import gryffindor from '../../assets/image/Gryffindor.png'

const Home = () => {

    const [list, setList] = useState(false);

    

    useEffect(()=>{
        api.get('/characters')
        .then((response)=> setList(response.data));
        console.log(list);
    },[])

    if(!list){
        return(
            <div>
            <Header />
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
            <Header />
            <Page>
                <div className="page__text">
                    <h1>Magic Book</h1>
                    <p>A guide for wizards and muggles!</p>
                </div>
                <div className="list">
                    {list.map(character => <Card
                    image={character.image.length > 0 ? character.image : require("../../assets/image/No-Image-Placeholder.svg.png")}
                    name={character.name}
                    icon={character.house == "Gryffindor" ? require('../../assets/image/Gryffindor.png'): character.house == "Slytherin" ? require('../../assets/image/Slytherin.png') : character.house == "Hufflepuff" ? require('../../assets/image/Hufflepuff.png') : character.house == "Ravenclaw" ? require('../../assets/image/Ravenclaw.png') : ''}
                    ancestry={character.ancestry}
                    species={character.species}
                    house={character.house}
                    patronus={character.patronus}
                    wood={character.wand.wood}
                    core={character.wand.core}
                    length={character.wand.length}
                />)}
                </div>
            </Page>
        </div>
    )
}

export default Home