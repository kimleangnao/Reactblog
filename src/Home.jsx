

import SearchBox from "./components/SearchBox";
import Subcard from "./components/Subcard";
import Articlecard from "./components/Articlecard";
import { useState } from "react";

const Home = ({infos}) => {
    //useEffect and make call to the backend to get some data back to display articles
    //fake some data
  

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
                    {
                        infos.map((v, i) => 

                        v.section == "left" ? 

                        <Articlecard key={i} text={v} /> :  ""
                       
                        )
                    }
                </div>
            
                <div className="home_articles_mid">
                    {
                        infos.map((v, i) => 
                        v.section == "mid" ? 
                        
                        <Articlecard key={i} text={v} /> :  ""
                       
                        )
                       
                    }
                 
                </div>
                <div className="home_articles_right">
                {
                        infos.map((v, i) => 
                        v.section == "right" ? 
                        
                        <Articlecard key={i} text={v} /> :  ""
                       
                        )
                        
                    }
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