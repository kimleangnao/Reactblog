

import aboutbar from "./resources/about_bar.png"

import Subcard from "./components/Subcard.jsx"

const About = () => {
    return(
        <div className="about">
            <div className="about_bar">
                <img src={aboutbar} alt="not found" className="about_bar_img" />
            </div>
            <h1 className="about_name">Kimleang Nao</h1>
            <div className="about_subject">Font-End</div>
            <div className="about_languages">
                <Subcard text="HTML" />
                <Subcard text="CSS" />
                <Subcard text="JS" />
            </div>
            <div className="about_subject">Back-End</div>
            <div className="about_languages">
                <Subcard text="NodeJs" />
                <Subcard text="MongoDB" />
            </div>
            <div className="about_subject">Framework / Library</div>
            <div className="about_languages">
                <Subcard text="React" />
            </div>
            <div className="about_subject">Social</div>
            <div className="about_languages">
                <Subcard text="GitHub" />
                <Subcard text="X" />
            </div>
        </div>
    )
}


export default About;