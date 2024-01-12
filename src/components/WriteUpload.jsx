


const WriteUpload = ({uploadingFunction, id,}) => {
    return(
        <div className="writepage_wrapper_upload">
            <div className="writepage_wrapper_upload_text" >
                <input onChange={(e) => uploadingFunction(e, id)} multiple type="file" id="image" name="image" className="writepage_wrapper_upload_text_input" />
            </div>
            <div className="writepage_wrapper_upload_hold">
                <div className="writepage_wrapper_upload_hold_circle">

                </div>                    
            </div>
        </div>
    )
}

export default WriteUpload;