


const WriteMakeList = ({writingFunction, addMoreBulletPoint, id, value}) => {

  
    return(
        <div className="writepage_wrapper_list">
            <div className="writepage_wrapper_list_text">
                    {
                        value.map((v, i) => (
                            <div key={i} className="writepage_wrapper_list_text_input">
                                
                                <div  className="writepage_wrapper_list_text_input_order">
                                    {i + 1}. 
                                </div>
                                <input value={v.text} onChange={(e) => writingFunction(e, id, i, v.id)} type="text" className="writepage_wrapper_list_text_input_text" />

                            </div>
                        ))
                    }
                
                <button onClick={(e) => addMoreBulletPoint(e, id)} className="writepage_wrapper_list_text_more">More</button>
            </div>
            <div className="writepage_wrapper_list_hold">
                <div className="writepage_wrapper_list_hold_circle">

                </div>
                <div className="writepage_wrapper_list_hold_circle">

                </div>
            </div>
        </div>
    )
}

export default WriteMakeList;