
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
            id: Math.random() * 1000000,
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
            id: Math.random() * 1000000,
            text: "",
            type: "list"
        }
        let copyBlog = {...blog};
        copyBlog.content.push(newList)
        setblog(copyBlog);
    }

    const createCodeBlock = (e) => {
        e.preventDefault();

        let newCodeblock = {
            id: Math.random() * 1000000,
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
            id: Math.random() * 1000000,
            text: "",
            type: "image"
        }
        let copyBlog = {...blog};
        copyBlog.content.push(newImage);
        setblog(copyBlog);
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
                    <div className="writepage_wrapper_tools_box writepage_wrapper_tools_box_bold">
                        B
                    </div>
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
                        C
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
                        v.type === "paragraph" ? <WriteParagraph key={i} /> : 
                        v.type == "list" ? <WriteMakeList key={i} /> : 
                        v.type == "codeblock" ? <WriteCode key={i} /> : 
                        v.type == "image" ? <WriteUpload key={i} /> : ""
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