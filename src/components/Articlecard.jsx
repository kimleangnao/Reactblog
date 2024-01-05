
import articlePic from "../resources/images/pexels-ann-h-1762851.jpg";

const Articlecard = ({text}) => {
    return(
        <div className="articlecard">
            <div className="articlecard_background">
                <img src={articlePic} alt="not found" className="articlecard_background_articlepic" />
            </div>
            <div className="articlecard_title">
                {text}
            </div>
        </div>
    )
}

export default Articlecard;