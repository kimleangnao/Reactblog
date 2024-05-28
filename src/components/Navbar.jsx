import { Link } from "react-router-dom";


const Navbar = () =>{

    return(
        <div className="navbar">
            <Link to="/" className="navbar_index active_bar">
                Thoughts
            </Link>
            <Link to="/about" className="navbar_index">
                About
            </Link>
            <Link to="/writepage" className="navbar_index">
                Write
            </Link>
        </div>
    )
}

export default Navbar;