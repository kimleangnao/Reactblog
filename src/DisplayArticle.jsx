

import SearchBox from "./components/SearchBox";

import image from "./resources/images/pexels-ann-h-1762851.jpg";
import imageInner from "./resources/images/pexels-aleksandar-pasaric-3280211.jpg";


const DisplayArticle = () => {
    return(
        <div className="displayArticle">
            <SearchBox />
            <h1 className="displayArticle_title">Colors and Fonts </h1>
            <div className="displayArticle_image">
                <img src={image} alt="not found" className="displayArticle_image_display" />
            </div>
            <div className="displayArticle_subjects">
                <div className="displayArticle_subjects_button">
                    HTML
                </div>
                <div className="displayArticle_subjects_button">
                    CSS
                </div>
            </div>
            <div className="displayArticle_text">
                <div className="displayArticle_text_paragraph-first">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras placerat tortor orci, 
                    eget interdum massa sagittis vitae. In malesuada viverra felis dictum placerat. 
                    Vestibulum eget pharetra metus. Duis ut odio in est accumsan convallis.In id est 
                    eget justo finibus iaculis. Nam et sapien orci. Praesent id nisi tincidunt, accumsan lacus at, 
                    tincidunt massa. Integer faucibus eleifend volutpat. Fusce vel laoreet enim.
                </div>  
                <div className="displayArticle_text_paragraph">
                    Mauris imperdiet nec eros eu imperdiet. Aliquam erat volutpa t. 
                    Nulla fringilla elementum vulputate. In vulputate in ex eu aliquam. 
                    Suspendisse id tortor laoreet, varius eros vitae, vehicula purus. 
                    Etiam nec felis ligula. Nullam semper placerat turpis, non maximus metus. Fusce eu tristique quam.
                </div>  
                <div className="displayArticle_text_paragraph">
                    Morbi lorem ex, mollis a lacus et, consequat porta urna. Aliquam tellus dui, 
                    malesuada sed venenatis eget, luctus et arcu. Nulla finibus eros et est molestie efficitur. 
                    Vestibulum quis justo ac metus volutpat tempor sed quis ligula. 
                    Ut vel lorem odio. Ut varius ante eget aliquet vulputate. Proin dictum magna maximus orci efficitur varius. 
                    Cras ut felis scelerisque, blandit nunc eu, volutpat sem.
                </div>  
                <ol className="displayArticle_text_list">
                        <li>Font-family: font-family: 'IBM Plex Mono', monospace;</li>
                        <li>Font-family: font-family: 'Inter', sans-serif;</li>
                        <li>Font-family: font-family: 'Roboto', sans-serif;</li>
                </ol>
                <div className="displayArticle_text_paragraph">
                    Mauris imperdiet nec eros eu imperdiet. Aliquam erat volutpa t. 
                    Nulla fringilla elementum vulputate. In vulputate in ex eu aliquam. 
                    Suspendisse id tortor laoreet, varius eros vitae, vehicula purus. 
                    Etiam nec felis ligula. Nullam semper placerat turpis, non maximus metus. Fusce eu tristique quam.
                </div>  
                <div className="displayArticle_text_paragraph">
                    Morbi lorem ex, mollis a lacus et, consequat porta urna. Aliquam tellus dui, 
                    malesuada sed venenatis eget, luctus et arcu. Nulla finibus eros et est molestie efficitur. 
                    Vestibulum quis justo ac metus volutpat tempor sed quis ligula. 
                    Ut vel lorem odio. Ut varius ante eget aliquet vulputate. Proin dictum magna maximus orci efficitur varius. 
                    Cras ut felis scelerisque, blandit nunc eu, volutpat sem.
                </div>  
                <div className="displayArticle_text_image">
                    <img src={imageInner} alt="not found" className="displayArticle_text_image_inner" />
                </div>
                <div className="displayArticle_text_paragraph">
                    Mauris imperdiet nec eros eu imperdiet. Aliquam erat volutpa t. 
                    Nulla fringilla elementum vulputate. In vulputate in ex eu aliquam. 
                    Suspendisse id tortor laoreet, varius eros vitae, vehicula purus. 
                    Etiam nec felis ligula. Nullam semper placerat turpis, non maximus metus. Fusce eu tristique quam.
                </div>  
                <div className="displayArticle_text_paragraph">
                    Morbi lorem ex, mollis a lacus et, consequat porta urna. Aliquam tellus dui, 
                    malesuada sed venenatis eget, luctus et arcu. Nulla finibus eros et est molestie efficitur. 
                    Vestibulum quis justo ac metus volutpat tempor sed quis ligula. 
                    Ut vel lorem odio. Ut varius ante eget aliquet vulputate. Proin dictum magna maximus orci efficitur varius. 
                    Cras ut felis scelerisque, blandit nunc eu, volutpat sem.
                </div>  
                <div className="displayArticle_text_paragraph">
                    Mauris imperdiet nec eros eu imperdiet. Aliquam erat volutpa t. 
                    Nulla fringilla elementum vulputate. In vulputate in ex eu aliquam. 
                    Suspendisse id tortor laoreet, varius eros vitae, vehicula purus. 
                    Etiam nec felis ligula. Nullam semper placerat turpis, non maximus metus. Fusce eu tristique quam.
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

export default DisplayArticle;
