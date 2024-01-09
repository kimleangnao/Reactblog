
import bar from "./resources/about_bar.png"

const Writepage =  () => {



const functionExample = 
`function plus(n1, n2){
       
    return n1+n2
}`;



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
                    <div className="writepage_wrapper_tools_box">
                        Par
                    </div>
                    <div className="writepage_wrapper_tools_box">
                        List
                    </div>
                    <div className="writepage_wrapper_tools_box">
                        HL
                    </div>
                    <div className="writepage_wrapper_tools_box">
                        C
                    </div>
                    <div className="writepage_wrapper_tools_box">
                        Img
                    </div>
                </div>
                <div className="writepage_wrapper_line"></div>
                <div className="writepage_wrapper_title">
                    <div className="writepage_wrapper_title_text">
                        Title
                    </div>
                    <input type="text" name="title" placeholder="Write title here..." className="writepage_wrapper_title_input" />
                </div>
              
                <div className="writepage_wrapper_paragraph">
                    <textarea placeholder="Enter text here..." className="writepage_wrapper_paragraph_text" >

                    </textarea>
                    <div className="writepage_wrapper_paragraph_hold">
                        <div className="writepage_wrapper_paragraph_hold_circle">
                    
                        </div>
                        <div className="writepage_wrapper_paragraph_hold_circle">
                    
                        </div>
                        <div className="writepage_wrapper_paragraph_hold_circle">
                    
                        </div>
                    </div>
                </div>
                <div className="writepage_wrapper_upload">
                    <div className="writepage_wrapper_upload_text" >
                        <input type="file" id="image" name="image" className="writepage_wrapper_upload_text_input" />
                    </div>
                    <div className="writepage_wrapper_upload_hold">
                        <div className="writepage_wrapper_upload_hold_circle">
                    
                        </div>                    
                    </div>
                </div>
                
                <div className="writepage_wrapper_list">
                    <div className="writepage_wrapper_list_text">
                        <div  className="writepage_wrapper_list_text_input">
                            <div  className="writepage_wrapper_list_text_input_order">
                                1. 
                            </div>
                            <input type="text" className="writepage_wrapper_list_text_input_text" />

                        </div>
                        <button className="writepage_wrapper_list_text_more">More</button>

                 

                    </div>
                    <div className="writepage_wrapper_list_hold">
                        <div className="writepage_wrapper_list_hold_circle">

                        </div>
                        <div className="writepage_wrapper_list_hold_circle">

                        </div>
                    </div>
                </div>

                <div className="writepage_wrapper_code">
                    <div className="writepage_wrapper_code_text">
                        <div className="writepage_wrapper_code_text_highlight">
                           {functionExample}
                        </div>
                    </div>
                    <div className="writepage_wrapper_code_hold">
                        <div className="writepage_wrapper_code_hold_circle">

                        </div>
                    </div>
                </div>


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