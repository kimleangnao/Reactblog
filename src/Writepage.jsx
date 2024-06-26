
import { useState } from "react";
import bar from "./resources/about_bar.png"
import WriteParagraph from "./components/WriteParagraph";
import WriteUpload from "./components/WriteUpload";
import WriteMakeList from "./components/WriteMakeList";
import WriteCode from "./components/WriteCode";
import DisplayArticle from "./DisplayArticle";
import { Link } from "react-router-dom";




const Writepage =  ({saveToDatabase}) => {

    // <span className="bold"> , </span> 
    // <span className="italic"> , </span> 
    // <span className="underline"> , </span> 
    // <span className="strikethrough"> , </span> 

    //testing
    //const [selecting, setselecting] = useState(true);
    const [preview, setpreview] = useState(false);
    const [selectionInfo, setselectionInfo] = useState({
    })

    const [blog, setblog] = useState({
        id: Math.floor(Math.random() * 1000000),
        date: new Date(),
        publishStatus: false,
        inSaveDraft: false,
        title: "",
        section: "right",
        categories: 
        [
            {title: "HTML", active: false},
            {title: "CSS", active: false},
            {title: "JS", active: false},
            {title: "ReactJS", active: false},
            {title: "NodeJS", active: false}
        ],
        content: []
    });


    const writeTitle = (e) => {
        e.preventDefault();
        console.log(blog)

        let copyBlog = {...blog};
        copyBlog.title = e.target.value;

        setblog(copyBlog);
    }

    const createParagraph = (e) => {
        e.preventDefault();

        let newPar = {
            id: Math.floor(Math.random() * 1000000),
            text: "",
            type: "paragraph"
        }

        let copyBlog = {...blog};
        copyBlog.content.push(newPar)
        setblog(copyBlog);
    }

    const createList = (e) => {
        e.preventDefault();

        let newList = {
            id: Math.floor(Math.random() * 1000000),
            text: [
                {
                    id : Math.floor(Math.random() * 1000000),
                    text: ""
                }
            ],
            type: "list"
        }
        let copyBlog = {...blog};
        copyBlog.content.push(newList)
        setblog(copyBlog);
    }

    const createCodeBlock = (e) => {
        e.preventDefault();

        let newCodeblock = {
            id: Math.floor(Math.random() * 1000000),
            text: ``,
            type: "codeblock"
        }

        let copyBlog = {...blog};
        copyBlog.content.push(newCodeblock);
        setblog(copyBlog);
    }

    const createImage = (e) => {
        e.preventDefault();

        let newImage = {
            id: Math.floor(Math.random() * 1000000),
            text: "",
            type: "image"
        }
        let copyBlog = {...blog};
        copyBlog.content.push(newImage);
        setblog(copyBlog);
    }

    //functionality
    const writingOnParagraph = (e, id) => {
        e.preventDefault();

        //console.log("I AM TYPING!")
        let copyBlog = {...blog};
  
        for(let i = 0; i < copyBlog.content.length; i++){
            if(id == copyBlog.content[i].id){
                copyBlog.content[i].text = e.target.value;;
            }
        }
        
        setblog(copyBlog);
    }

    const writingList = (e, outerId, index, id) => {
        e.preventDefault();
   
        let copyBlog = {...blog};

        for(let i = 0; i < copyBlog.content.length; i++){
            if(outerId == copyBlog.content[i].id){
                if(copyBlog.content[i].text[index].id == id){
                    copyBlog.content[i].text[index].text = e.target.value;
                }             
            }
        }
        setblog(copyBlog);

    }
    const addMoreBulletPointToList = (e, outerId) => {
        e.preventDefault();

        let createObject =  {
            id : Math.floor(Math.random() * 1000000),
            text: ""
        }

        let copyBlog = {...blog};

        for(let i = 0; i < copyBlog.content.length; i++){
            if(outerId == copyBlog.content[i].id){
                copyBlog.content[i].text.push(createObject)       
            }
        }
        console.log(copyBlog);
        setblog(copyBlog);
        
    }

    const writeCodeBlock = (e, outerId) => {
        e.preventDefault();
        const textarea = e.target;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;

        let copyBlog = {...blog};

        for(let i = 0; i < copyBlog.content.length; i++){
            if(outerId == copyBlog.content[i].id){
                //   
                copyBlog.content[i].text = e.target.value;
                console.log( copyBlog.content[i])
            }
        }
      

        setblog(copyBlog);
    }

    const uploadingImage = (e, outerId) => {
        e.preventDefault();

        let copyBlog = {...blog};

        for(let i = 0; i < copyBlog.content.length; i++){
            if(outerId == copyBlog.content[i].id){
                //   
                copyBlog.content[i].text = e.target.value;
                console.log(copyBlog.content[i])

            }
        }
  
        setblog(copyBlog);
    }


    //Editing Tools
    //testing
    const selectingText = (e, outerId, insideId) => {
        let info = {};
        info["start"] = e.target.selectionStart;
        info["end"] = e.target.selectionEnd;
        info["id"] = outerId;
        info["insideId"]= insideId;

        setselectionInfo(info)  
    }


    //Buttons Action
    const makeBold = (e) =>{
        //only on paragraph and list
        e.preventDefault();
        console.log("CLick BOLD!")
        if(Object.keys(selectionInfo).length != 0){
            //make sure it's not empty
            let info = {...selectionInfo};
            let id = info.id;
            let insideId = info.insideId;
            let currentBlog = {...blog};
            let startIndex = Number(info.start);
            let endIndex = Number(info.end);

         
            
            //console.log(currentBlog);
            if(insideId != undefined){
                //
                for(let i = 0; i < currentBlog.content.length; i++){
                    if(currentBlog.content[i].id == id){
                        for(let insideIndex = 0; insideIndex <  currentBlog.content[i].text.length; insideIndex++){
                            //
                            if(currentBlog.content[i].text[insideIndex].id == insideId){
                                console.log(currentBlog.content[i].text[insideIndex].text)
                                let arrayText = [...currentBlog.content[i].text[insideIndex].text];
                                arrayText.splice(startIndex, 0, '<<B>> ');
                                arrayText.splice(endIndex +1, 0 , ' <</B>> ');

                                let arrayJoin = arrayText.join("");
                                currentBlog.content[i].text[insideIndex].text = arrayJoin;
                                setblog(currentBlog);
                            }
                        }
                    }
                }
            }else{
                for(let i = 0; i < currentBlog.content.length; i++){
                    if(currentBlog.content[i].id == id){
                        let arrayText = [...currentBlog.content[i].text.split("")];
                        console.log(arrayText);
                        arrayText.splice(startIndex, 0, '<<B>> ');
                        arrayText.splice(endIndex +1, 0 , ' <</B>> ');
    
                        //console.log(arrayText)
                        let arrayJoin = arrayText.join("");
                        currentBlog.content[i].text = arrayJoin;
                        setblog(currentBlog);
                    }
                }
            }
            

            let newInfo = {};
            setselectionInfo(newInfo);
        }
        
    }

    const makeItalic = (e) => {
         //only on paragraph and list
        e.preventDefault();
        if(Object.keys(selectionInfo).length != 0){
            //make sure it's not empty
            let info = {...selectionInfo};
            let id = info.id;
            let insideId = info.insideId;
            let currentBlog = {...blog};
            let startIndex = Number(info.start);
            let endIndex = Number(info.end);


            if(insideId != undefined){
                //
                for(let i = 0; i < currentBlog.content.length; i++){
                    if(currentBlog.content[i].id == id){
                        for(let insideIndex = 0; insideIndex <  currentBlog.content[i].text.length; insideIndex++){
                            //
                            if(currentBlog.content[i].text[insideIndex].id == insideId){
                                console.log(currentBlog.content[i].text[insideIndex].text)
                                let arrayText = [...currentBlog.content[i].text[insideIndex].text];
                                arrayText.splice(startIndex, 0, '<<I>> ');
                                arrayText.splice(endIndex +1, 0 , ' <</I>> ');

                                let arrayJoin = arrayText.join("");
                                currentBlog.content[i].text[insideIndex].text = arrayJoin;
                                setblog(currentBlog);
                            }
                        }
                    }
                }
            }else{
                for(let i = 0; i < currentBlog.content.length; i++){
                    if(currentBlog.content[i].id == id){
                        let arrayText = [...currentBlog.content[i].text.split("")];
            
                        arrayText.splice(startIndex, 0, '<<I>> ');
                        arrayText.splice(endIndex +1, 0 , ' <</I>> ');
    
                        //console.log(arrayText)
                        let arrayJoin = arrayText.join("");
                        currentBlog.content[i].text = arrayJoin;
                        setblog(currentBlog);
                    }
                }
            }
           

            let newInfo = {};
            setselectionInfo(newInfo);
        }
    }

    const makeUnderline = (e) => {
         //only on paragraph and list
        e.preventDefault();
        if(Object.keys(selectionInfo).length != 0){
            //make sure it's not empty
            let info = {...selectionInfo};
            let id = info.id;
            let insideId = info.insideId;
            let currentBlog = {...blog};
            let startIndex = Number(info.start);
            let endIndex = Number(info.end);


            if(insideId != undefined){
                //
                for(let i = 0; i < currentBlog.content.length; i++){
                    if(currentBlog.content[i].id == id){
                        for(let insideIndex = 0; insideIndex <  currentBlog.content[i].text.length; insideIndex++){
                            //
                            if(currentBlog.content[i].text[insideIndex].id == insideId){
                                console.log(currentBlog.content[i].text[insideIndex].text)
                                let arrayText = [...currentBlog.content[i].text[insideIndex].text];
                                arrayText.splice(startIndex, 0, '<<underline>> ');
                                arrayText.splice(endIndex +1, 0 , ' <</underline>> ');

                                let arrayJoin = arrayText.join("");
                                currentBlog.content[i].text[insideIndex].text = arrayJoin;
                                setblog(currentBlog);
                            }
                        }
                    }
                }
            }else{
                for(let i = 0; i < currentBlog.content.length; i++){
                    if(currentBlog.content[i].id == id){
                        let arrayText = [...currentBlog.content[i].text.split("")];
            
                        arrayText.splice(startIndex, 0, '<<underline>> ');
                        arrayText.splice(endIndex +1, 0 , ' <</underline>> ');
    
                        //console.log(arrayText)
                        let arrayJoin = arrayText.join("");
                        currentBlog.content[i].text = arrayJoin;
                        setblog(currentBlog);
                    }
                }
            }

            let newInfo = {};
            setselectionInfo(newInfo);
        }

    }

    const makeStrikeThrough = (e) => {
         //only on paragraph and list
        e.preventDefault();
        if(Object.keys(selectionInfo).length != 0){
            //make sure it's not empty
            let info = {...selectionInfo};
            let id = info.id;
            let insideId = info.insideId;
            let currentBlog = {...blog};
            let startIndex = Number(info.start);
            let endIndex = Number(info.end);


            if(insideId != undefined){
                //
                for(let i = 0; i < currentBlog.content.length; i++){
                    if(currentBlog.content[i].id == id){
                        for(let insideIndex = 0; insideIndex <  currentBlog.content[i].text.length; insideIndex++){
                            //
                            if(currentBlog.content[i].text[insideIndex].id == insideId){
                                console.log(currentBlog.content[i].text[insideIndex].text)
                                let arrayText = [...currentBlog.content[i].text[insideIndex].text];
                                arrayText.splice(startIndex, 0, '<<st>> ');
                                arrayText.splice(endIndex +1, 0 , ' <</st>> ');

                                let arrayJoin = arrayText.join("");
                                currentBlog.content[i].text[insideIndex].text = arrayJoin;
                                setblog(currentBlog);
                            }
                        }
                    }
                }
            }else{
                
            for(let i = 0; i < currentBlog.content.length; i++){
                if(currentBlog.content[i].id == id){
                    let arrayText = [...currentBlog.content[i].text.split("")];
        
                    arrayText.splice(startIndex, 0, '<<st>> ');
                    arrayText.splice(endIndex +1, 0 , ' <</st>> ');

                    //console.log(arrayText)
                    let arrayJoin = arrayText.join("");
                    currentBlog.content[i].text = arrayJoin;
                    setblog(currentBlog);
                }
            }
            }

            let newInfo = {};
            setselectionInfo(newInfo);
        }
    }
    
    const makeHighlight = (e) => {
        //highlight only on paragraph, cannot on other places.
        e.preventDefault();
        e.preventDefault();
        if(Object.keys(selectionInfo).length != 0){
            //make sure it's not empty
            let info = {...selectionInfo};
            let id = info.id;
            let insideId = info.insideId;
            let currentBlog = {...blog};
            let startIndex = Number(info.start);
            let endIndex = Number(info.end);

            console.log("highlight")
            if(insideId == undefined){
                //
                for(let i = 0; i < currentBlog.content.length; i++){
                    if(currentBlog.content[i].id == id){
                        let arrayText = [...currentBlog.content[i].text];
                        arrayText.splice(startIndex, 0, '<<marker>> ');
                        arrayText.splice(endIndex +1, 0 , ' <</marker>> ');

                        let arrayJoin = arrayText.join("");
                        currentBlog.content[i].text = arrayJoin;
                        setblog(currentBlog);
                    }
                }
            }


            let newInfo = {};
            setselectionInfo(newInfo);
        }
     
    }

    const selectCategory = (e, text) => {
        e.preventDefault();
        let currentBlog = {...blog};
        for(let i = 0; i < currentBlog.categories.length; i++){
            if(currentBlog.categories[i].title == text){
                currentBlog.categories[i].active = !currentBlog.categories[i].active;
            }
        }

        if(text == "HTML" || text == "CSS"){
            currentBlog.section = "left";
        }else if (text == "ReactJS" || text == "JS" || text == "NodeJS" ){
            currentBlog.section = "mid";
        }else{
            //when nothing selected
            currentBlog.section = "right";
        }

        setblog(currentBlog);
    }

    //funtions
    const saveDraft = () =>{
        //save to draft section on database
    }
    const publishArticle = () => {
        //push to publish section on database
    }





    return(
        <div className="writepage">
           
            <div className="writepage_bar">
                <img src={bar} alt="not found" className="writepage_bar_img" />
            </div>
            <h1 className="writepage_title"> What is on your mind?...</h1>
            {
                preview ?  
                <div className="writepage_preview">
                    <DisplayArticle hideBar={true} infoFromEditing={blog} editingPreview={true} />
                    <button onClick={() => setpreview(false)} className="writepage_preview_button">Back to editing</button>
                </div>
                : 
                ""
            }
           
           {
                preview ?  
                ""
                : 
                <div className="writepage_wrapper">
                    <p className="writepage_wrapper_text">
                        Editing tools
                    </p>
                    <div className="writepage_wrapper_tools">
                        <button onClick={(e) => makeBold(e)} className="writepage_wrapper_tools_box writepage_wrapper_tools_box_bold">
                            B
                        </button>
                        <button onClick={(e) => makeItalic(e)} className="writepage_wrapper_tools_box writepage_wrapper_tools_box_italic">
                            I
                        </button>
                        <button onClick={(e) => makeUnderline(e)} className="writepage_wrapper_tools_box writepage_wrapper_tools_box_underline">
                            U
                        </button>
                        <button onClick={(e) => makeStrikeThrough(e)} className="writepage_wrapper_tools_box writepage_wrapper_tools_box_crossout">
                            S
                        </button>
                        <div role="button" tabIndex={0} onKeyDown={(e) => createParagraph(e)}  onClick={(e) => createParagraph(e)} className="writepage_wrapper_tools_box">
                            Par
                        </div>
                        <div role="button" tabIndex={0} onKeyDown={(e) => createList(e)} onClick={(e) => createList(e)} className="writepage_wrapper_tools_box">
                            List
                        </div>
                        <button onClick={(e) => makeHighlight(e)} className="writepage_wrapper_tools_box">
                            Marker
                        </button>
                        <div role="button" tabIndex={0} onKeyDown={(e) => createCodeBlock(e)} onClick={(e) => createCodeBlock(e)}  className="writepage_wrapper_tools_box">
                            CB
                        </div>
                        <div role="button" tabIndex={0} onKeyDown={(e) => createImage(e)} onClick={(e) => createImage(e)} className="writepage_wrapper_tools_box">
                            Img
                        </div>
                    </div>
                    <div className="writepage_wrapper_line"></div>
                    <div className="writepage_wrapper_title">
                        <div className="writepage_wrapper_title_text">
                            Title
                        </div>
                        <input 
                            type="text" 
                            name="title" 
                            placeholder="Write title here..." 
                            className="writepage_wrapper_title_input"
                            value={blog.title} 
                            onChange={(e) => writeTitle(e)} 
                        />
                    </div>
                    <div className="writepage_wrapper_category">
                        {
                            blog.categories.map((v, i) =>
                            <button 
                                key={i} 
                                className={v.active ? "writepage_wrapper_category_button writepage_wrapper_category_button_selected": "writepage_wrapper_category_button "}
                                onClick={(e) => selectCategory(e, v.title)}
                                >
                                    
                                    {v.title}
                            </button>   
                         )
                        }                   
                    </div>   
              
                    
                    {
                        blog.content.map((v, i) => (
                            v.type === "paragraph" ? <WriteParagraph 
                                                                    key={i} 
                                                                    writingFunction={writingOnParagraph} 
                                                                    editingSelect={selectingText} 
                                                                    id={v.id} 
                                                                    value={v.text} 
                                                                
                                                                /> : 
                            v.type == "list" ? <WriteMakeList 
                                                            key={i} writingFunction={writingList} 
                                                            addMoreBulletPoint={addMoreBulletPointToList} 
                                                            id={v.id} 
                                                            value={v.text} 
                                                            editingSelect={selectingText} 
                                                        /> : 
                            v.type == "codeblock" ? <WriteCode key={i} writingFunction={writeCodeBlock} id={v.id} value={v.text} /> : 
                            v.type == "image" ? <WriteUpload key={i} uploadingFunction={uploadingImage} id={v.id} value={v.text} /> : ""
                        ))
                    }

                

                    <div className="writepage_wrapper_buttons">
                        <Link to="/" className="writepage_wrapper_buttons_button writepage_wrapper_buttons_button_red">
                            CANCEL
                        </Link>
                        <button onClick={() => setpreview(true)} className="writepage_wrapper_buttons_button">
                            Preview
                        </button>
                        <Link onClick={() => saveToDatabase(blog)} to={`/`}  className="writepage_wrapper_buttons_button writepage_wrapper_buttons_button_green">
                            Publish
                        </Link>
                    </div>
                </div>
            }
         

        </div>
    )
}


export default Writepage;