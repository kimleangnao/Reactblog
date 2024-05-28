

import { useEffect, useState } from "react";
import SearchBox from "./components/SearchBox";

import image from "./resources/images/pexels-ann-h-1762851.jpg";
import { useParams } from "react-router-dom";



const DisplayArticle = ({hideBar=true, editingPreview=false, infoFromEditing, findWhichArticle}) => {
    const {id} = useParams();

    const [info, setInfo] = useState(
        { 
            "id": "",
            "date": "",
            "publishStatus": "",
            "inSaveDraft": "",
            "title": "",
            "section": "",
            "categories": [
           
            ],
            "content": [
            
            ]
        }
    )

    const convertToHTML = (text) => {
        let converted = ``;
        let spliText = text.split(" ");
   
        for(let i = 0; i < spliText.length; i++){
            //start
            //bold
          
            if(spliText[i] == "<<B>>"){
                //
                spliText[i] = "<span class='bold'>";
            }else if(spliText[i] == "<</B>>"){
                //
                spliText[i] = "</span>";
            }else if (spliText[i] == "<<I>>"){
                spliText[i] = "<span class='italic'>";
            }else if (spliText[i] == "<</I>>"){
                spliText[i] = "</span>";
            }else if (spliText[i] == "<<underline>>"){
                spliText[i] = "<span class='underline'>";
            }else if (spliText[i] == "<</underline>>"){
                spliText[i] = "</span>";
            }else if (spliText[i] == "<<st>>"){
                spliText[i] = "<span class='strikethrough'>";
            }else if (spliText[i] == "<</st>>"){
                spliText[i] = "</span>";
            }else if (spliText[i] == "<<marker>>"){
                spliText[i] =  "<span class='marker'>";
            }else if (spliText[i] == "<</marker>>"){
                spliText[i] = "</span>";
            }
            //end 
        }
    
        converted = spliText.join(" ")
        return converted;
    }

    const onGetActiveCategory = (categoryObject) => {
     
       if(categoryObject.active){
            console.log(categoryObject.title)
            return categoryObject.title
       }
    }
    useEffect(() => {
        if(editingPreview){
            setInfo(infoFromEditing)
        }else{
            let infoFromFakeDatabase =  findWhichArticle(id)
            setInfo(infoFromFakeDatabase) ; 
        }
        


    }, [])


    return(
        <div className="displayArticle">
            {
                hideBar ? "" :     <SearchBox />
            }
        
            <h1 className="displayArticle_title">{info.title} </h1>
            <div className="displayArticle_image">
                <img src={image} alt="not found" className="displayArticle_image_display" />
            </div>
            <div className="displayArticle_subjects">
                {
                    info.categories.filter((cate) => cate.active == true).map((cate, index) => 
                        (
                            <div key={index} className="displayArticle_subjects_button">{cate.title}</div>
                        )    
                    )
                }
            
           
            </div>
            <div className="displayArticle_text">
                {
                    info.content.map((v, i) => (
                        v.type == "paragraph" ? 
                            i == 0 ? 
                            (
                                <div 
                                    key={v.id} 
                                    className="displayArticle_text_paragraph-first"
                                    dangerouslySetInnerHTML={{ __html: convertToHTML(v.text) }}
                                >
                               
                                </div> 
                            ) : 
                            (
                            <div key={v.id} className="displayArticle_text_paragraph"  dangerouslySetInnerHTML={{ __html: convertToHTML(v.text) }}>
                       
                            </div>
                            )
                        : 
                     
                        v.type == "list" ? 
                        <ol key={i} className="displayArticle_text_list">
                            {v.text.map((t, i) => (
                        
                                <li key={i} dangerouslySetInnerHTML={{ __html: convertToHTML(t.text) }}></li>
                        
                            ))}
                        </ol>
                        :

                        v.type == "codeblock" ? 
                        
                            <pre key={i} contentEditable={false} className="displayArticle_text_pre" >
                                <code className="displayArticle_text_pre_code">
                                    {v.text}
                                </code>
                            </pre> 
                   
                        
                        :
                        v.type == "image" ? 

                            <div key={i} className="displayArticle_text_image">
                                <img src={v.text} alt="not found" className="displayArticle_text_image_inner" />
                            </div>

                        :
                        ""
                    ))
                }
               {/*

 
            


                    

               */}
                
            

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
