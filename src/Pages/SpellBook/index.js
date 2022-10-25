import { useEffect, useState } from "react"
import Card from "../../Components/Card";
import Search from "../../Components/Search";
import Spell from "../../Components/Spell";
import api from "../../Services/api";
import Page from '../style'

const SpellBook = () => {

    const [list, setList] = useState(false);
    const [spellName, setSpellName] = useState('')

    

    useEffect(()=>{
        api.get('/spells')
        .then((response)=> setList(response.data));
        console.log(list);
    },[])

    if(!list){
        return(
            <div>
            <Page>
                <div className="page__text">
                    <h1>Magic Book</h1>
                    <p>A guide for wizards and muggles!</p>
                    <Search />
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
                    <Search placeholder={'Accio Spell...'}
                    onTyped={value => setSpellName(value)}/>
                </div>
                <div className="list">
                    {list.filter(spell => spell.name.toUpperCase().includes(spellName.toUpperCase())).map(spell => <Spell
                    key={spell.name}
                    name={spell.name}
                    description={spell.description}
                />)}
                </div>
            </Page>
        </div>
    )
}

export default SpellBook