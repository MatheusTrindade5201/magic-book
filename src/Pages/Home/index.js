import { useEffect, useState } from "react"
import Header from "../../Components/Header"
import api from "../../Services/api";
import Page from './style'

const Home = () => {

    const [list, setList] = useState(false);

    

    useEffect(()=>{
        api.get('/characters')
        .then((response)=> setList(response.data));
        ;
    },[])


    return (
        <div>
            <Header />
            <Page>
                <div className="page__text">
                    <h1>Magic Book</h1>
                    <p>A guide for wizards and muggles!</p>
                </div>
            </Page>
        </div>
    )
}

export default Home