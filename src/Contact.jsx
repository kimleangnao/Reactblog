
import bar from "./resources/about_bar.png"

const Contact = () => {
    return(
        <div className="contact"> 
            <div className="contact_bar"> 
                <img src={bar} alt="not found" className="contact_bar_img" />
            </div>
            <h1 className="contact_name">SEND ME MAIL</h1>
            <form action="#" className="contact_form">
                <div className="contact_form_input">
                    <div className="contact_form_input_title">
                        <div className="contact_form_input_title_text">
                            Title
                        </div>
                        <input type="text" placeholder="I like your blog." className="contact_form_input_title_input" />
                    </div>
                    <div className="contact_form_input_bodytext">
                        <div className="contact_form_input_bodytext_text">
                            Details
                        </div>
                        <textarea  placeholder="Your body text here..." className="contact_form_input_bodytext_input">
                    
                        </textarea>
                    </div>
                </div>
                <div className="contact_form_user">
                    <div className="contact_form_user_mail">
                        <div className="contact_form_user_mail_text">
                            Your Email
                        </div>
                        <input type="email" placeholder="Email@mail.com" className="contact_form_user_mail_input" />

         
                    </div>
                    <div className="contact_form_user_reason">
                        <div className="contact_form_user_reason_text">
                            Reason
                        </div>
                        <select name="reason" id="reason" className="contact_form_user_reason_select">
                            <option value="General">General</option>
                            <option value="Bug">Bug</option>
                            <option value="Communication">Communication</option>
                        </select>
         
                    </div>
                    <div className="contact_arrow">

                    </div>
                    <input type="submit" value="Send" className="contact_submit" />
                </div>
            </form>

        </div>
    )
}

export default Contact;