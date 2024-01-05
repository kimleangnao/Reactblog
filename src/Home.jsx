

import SearchBox from "./components/SearchBox";
import Subcard from "./components/Subcard";
import Articlecard from "./components/Articlecard";

const Home = () => {


    return(
        <div className="home">
            <SearchBox />
            <div className="home_title">
                MY THOUGHTS
            </div>
            <div className="home_subcardWrapper">
                <Subcard text="CSS" />
                <Subcard text="HTML" />
                <Subcard text="JS" />
                <Subcard text="Node.js" />
                <Subcard text="React" />
            </div>
            <div className="home_articles">

                <div className="home_articles_left">
                    <Articlecard text="Colors and fonts" />
                    <Articlecard text="Free resources to consider" />
                </div>
                <div className="home_articles_mid">
                    <Articlecard text="Don't overuse JS" />
                </div>
                <div className="home_articles_right">
                    <Articlecard text="Simple is better" />
                </div>

            </div>

            <div className="home_ender">
                <div className="home_ender_square">

                </div>
                <div className="home_ender_diamond">

                </div>
                <div className="home_ender_circle">

                </div>
            </div>
        </div>
    )
}

export default Home;