import Header from "../../Components/Header"
import Page from './style'

const Home = () => {
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