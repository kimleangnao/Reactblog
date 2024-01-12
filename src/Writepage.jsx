
import { useState } from "react";
import bar from "./resources/about_bar.png"
import WriteParagraph from "./components/WriteParagraph";
import WriteUpload from "./components/WriteUpload";
import WriteMakeList from "./components/WriteMakeList";
import WriteCode from "./components/WriteCode";




const Writepage =  () => {

    // <span className="Bold"> , </span> 
    // <span className="italic"> , </span> 
    // <span className="underline"> , </span> 
    // <span className="strikethrough"> , </span> 

    //testing
    const [selecting, setselecting] = useState(false);
    const {selectionInfo, setselectionInfo} = useState({
        start: "",
        end: "",
        id:""
    })

    const [blog, setblog] = useState({
        id: Math.random() * 1000000,
        date: new Date(),
        publishStatus: false,
        inSaveDraft: false,
        title: "",
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
                    text: "The floor"
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
            text: [],
            type: "image"
        }
        let copyBlog = {...blog};
        copyBlog.content.push(newImage);
        setblog(copyBlog);
    }

    //functionality
    const writingOnParagraph = (e, id) => {
    
        //
        console.log("I AM TYPING!")
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
                copyBlog.content[i].text.push(e.target.files[0]);
                console.log(copyBlog.content[i])

            }
        }
  
        setblog(copyBlog);
    }


    //Editing Tools
    //testing
    const selectingText = (e, outerId) => {
        console.log("I am editing!");

        const targetText = e.target;
        const startText = targetText.selectionStart;
        const endText = targetText.selectionEnd;
        console.log(startText, endText);

        let info = {...selectionInfo};
        info.start = startText;
        info.end = endText;
        info.id = outerId;
        setselecting(true);
    }
    //testing
    const makeBold = (e) =>{
        e.preventDefault();
        
        console.log("BOLDING");
    }






    return(
        <div className="writepage">
            <div className="writepage_bar">
                <img src={bar} alt="not found" className="writepage_bar_img" />
            </div>
            <h1 className="writepage_title"> What is on your mind?...</h1>
            <div className="writepage_wrapper">
                <p className="writepage_wrapper_text">
                    Editing tools
                </p>
                <div className="writepage_wrapper_tools">
                    <button onClick={(e) => makeBold(e)} className="writepage_wrapper_tools_box writepage_wrapper_tools_box_bold">
                        B
                    </button>
                    <div className="writepage_wrapper_tools_box writepage_wrapper_tools_box_italic">
                        I
                    </div>
                    <div className="writepage_wrapper_tools_box writepage_wrapper_tools_box_underline">
                        U
                    </div>
                    <div className="writepage_wrapper_tools_box writepage_wrapper_tools_box_crossout">
                        S
                    </div>
                    <div role="button" tabIndex={0} onKeyDown={(e) => createParagraph(e)}  onClick={(e) => createParagraph(e)} className="writepage_wrapper_tools_box">
                        Par
                    </div>
                    <div role="button" tabIndex={0} onKeyDown={(e) => createList(e)} onClick={(e) => createList(e)} className="writepage_wrapper_tools_box">
                        List
                    </div>
                    <div className="writepage_wrapper_tools_box">
                        HL
                    </div>
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
                
                {
                    blog.content.map((v, i) => (
                        v.type === "paragraph" ? <WriteParagraph key={i} writingFunction={writingOnParagraph} editingSelect={selectingText} id={v.id} value={v.text} /> : 
                        v.type == "list" ? <WriteMakeList key={i} writingFunction={writingList} addMoreBulletPoint={addMoreBulletPointToList} id={v.id} value={v.text} /> : 
                        v.type == "codeblock" ? <WriteCode key={i} writingFunction={writeCodeBlock} id={v.id} value={v.text} /> : 
                        v.type == "image" ? <WriteUpload key={i} uploadingFunction={uploadingImage} id={v.id} /> : ""
                    ))
                }

              

                <div className="writepage_wrapper_buttons">
                    <div className="writepage_wrapper_buttons_button">
                        Save to draft
                    </div>
                    <div className="writepage_wrapper_buttons_button">
                        Preview
                    </div>
                    <div className="writepage_wrapper_buttons_button writepage_wrapper_buttons_button_red">
                        Publish
                    </div>
                </div>



            </div>
        </div>
    )
}


export default Writepage;