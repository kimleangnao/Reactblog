

import bar from "./resources/about_bar.png"
import logoRed from "./resources/logo-red.png"
import logoBlue from "./resources/logo-blue.png"
import logoYellow from "./resources/logo-yellow.png"

const Admin = () => {
    return(
        <div className="admin">
            <div className="admin_bar">
                <img src={bar} alt="not found" className="admin_bar_img"/>
            </div>

            <h1 className="admin_title">What would you like to do?...</h1>
            <div className="admin_warpper">
                <div className="admin_warpper_box">
                    <div className="admin_warpper_box_text">
                        Write a blog
                    </div>
                    <div className="admin_warpper_box_img">
                        <img src={logoRed} alt="not found" className="admin_warpper_box_img_logo" />
                    </div>
                </div>
                <div className="admin_warpper_box">
                    <div className="admin_warpper_box_text">
                            Saved Draft
                    </div>
                    <div className="admin_warpper_box_img">
                        <img src={logoYellow} alt="not found" className="admin_warpper_box_img_logo" />
                    </div>
                </div>
                <div className="admin_warpper_box">
                    <div className="admin_warpper_box_text">
                            Published
                    </div>
                    <div className="admin_warpper_box_img">
                        <img src={logoBlue} alt="not found" className="admin_warpper_box_img_logo" />
                    </div>
                </div>
            </div>
            <div className="admin_lists">
                <div className="admin_lists_column">
                    <div className="admin_lists_column_box">
                        <div className="admin_lists_column_box_text">
                            Create a blog   
                        </div>
                        <div className="admin_lists_column_box_image">
                            <img src={logoRed} alt="not found" className="admin_lists_column_box_image_logo" />

                        </div>

                    </div>

                </div>
                <div className="admin_lists_column">
                    <div className="admin_lists_column_box">
                        <div className="admin_lists_column_box_text">
                            Saved Draft : Drafting about closure
                        </div>
                        <div className="admin_lists_column_box_image">
                            <img src={logoYellow} alt="not found" className="admin_lists_column_box_image_logo" />

                        </div>

                    </div>
                    <div className="admin_lists_column_box">
                        <div className="admin_lists_column_box_text">
                            Saved Draft : Drafting about scope
                        </div>
                        <div className="admin_lists_column_box_image">
                            <img src={logoYellow} alt="not found" className="admin_lists_column_box_image_logo" />

                        </div>

                    </div>

                </div>
                <div className="admin_lists_column">
                    <div className="admin_lists_column_box">
                        <div className="admin_lists_column_box_text">
                            Published : Fonts & Colors
                        </div>
                        <div className="admin_lists_column_box_image">
                            <img src={logoBlue} alt="not found" className="admin_lists_column_box_image_logo" />

                        </div>

                    </div>
                    <div className="admin_lists_column_box">
                        <div className="admin_lists_column_box_text">
                            Published : JS overlooked features
                        </div>
                        <div className="admin_lists_column_box_image">
                            <img src={logoBlue} alt="not found" className="admin_lists_column_box_image_logo" />

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Admin;