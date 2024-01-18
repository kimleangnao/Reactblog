


const WriteUpload = ({uploadingFunction, id, value}) => {
    return(
        <div className="writepage_wrapper_upload">
            <div className="writepage_wrapper_upload_text" >
                <input onChange={(e) => uploadingFunction(e, id)} value={value} placeholder="https://imgr.com" type="url" id="url" name="url" className="writepage_wrapper_upload_text_input" />
            </div>
            <div className="writepage_wrapper_upload_hold">
                <div className="writepage_wrapper_upload_hold_circle">

                </div>                    
            </div>
        </div>
    )
}

export default WriteUpload;