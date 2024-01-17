

const WriteCode = ({writingFunction, value, id,}) => {



    return(
        <div className="writepage_wrapper_code">
            <div className="writepage_wrapper_code_text">
                <textarea value={value} onChange={(e) => writingFunction(e, id)} className="writepage_wrapper_code_text_highlight">
                    
                </textarea>
            </div>
            <div className="writepage_wrapper_code_hold">
                <div className="writepage_wrapper_code_hold_circle">

                </div>
            </div>
        </div>

    )
}

export default WriteCode;