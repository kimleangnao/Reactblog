
import { Link } from "react-router-dom";
import articlePic from "../resources/images/pexels-ann-h-1762851.jpg";

const Articlecard = ({searched, text}) => {
   
    return(
        <Link to={`/article/${text.id}`} className={`articlecard ${searched ? "articlecard-space" : ""}`}>
            <div className="articlecard_background">
                <img src={articlePic} alt="not found" className="articlecard_background_articlepic" />
            </div>
            <div className="articlecard_title">
                {text.title}
            </div>
        </Link>
    )
}

export default Articlecard;