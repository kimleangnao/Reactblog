



const WriteParagraph = ({writingFunction, editingSelect, id, value}) =>{

    return(
        <div className="writepage_wrapper_paragraph">
            <textarea 
                value={value} 
                onChange={(e) => writingFunction(e, id)}
                onSelect={(e) => editingSelect(e, id)}               
                placeholder="Enter text here..." 
                className="writepage_wrapper_paragraph_text" 
            >
                    
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
    )
}


export default WriteParagraph;