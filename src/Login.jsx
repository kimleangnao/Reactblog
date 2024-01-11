
import { useEffect } from "react";
import bar from "./resources/about_bar.png"



const Login = () => {


    useEffect(() => {

        let windowScroll = setTimeout(() => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth',
            });
        }, 1000)

        return () => clearInterval(windowScroll);
     
    }, [])


    return(
        <div className="login">
            <div className="login_bar">
                <img src={bar} alt="not found" className="login_bar_img"/>
            </div>
            <h1 className="login_message">Welcome back,</h1>
            <div className="login_name">Kimleang Nao</div>

            <form action="#" id="goHere" className="login_form">
                <div className="login_form_inputs">
                    <div className="login_form_inputs_row">
                        <div className="login_form_inputs_row_title">
                            Email
                        </div>
                        <div className="login_form_inputs_row_input">
                            <input type="email" placeholder="examplemail@email.com" className="login_form_inputs_row_input_email" />
                        </div>
                    </div>
                    <div className="login_form_inputs_row">
                        <div className="login_form_inputs_row_title">
                            Password
                        </div>
                        <div className="login_form_inputs_row_input">
                            <input type="password" name="password" title="Password" autoComplete="off" className="login_form_inputs_row_input_password" />
                        </div>
                    </div>
                </div>
            
                <div className="login_form_button">
                    <div  role="button" className="login_form_button_login">
                        LOGIN
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;