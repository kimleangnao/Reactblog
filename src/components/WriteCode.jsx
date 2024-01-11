const functionExample = 
`function plus(n1, n2){
       
    return n1+n2
}`;

const WriteCode = () => {
    return(
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

    )
}

export default WriteCode;