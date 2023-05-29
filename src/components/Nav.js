import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { CgClose, CgMenu } from "react-icons/cg"

const navInfo = ["home", "about", "menu", "reservations", "order online", "log in"];
const navRoutes = ["/", "/about", "/under-construction", "/booking", "/under-construction", "/under-construction"];

const Nav = () => {
    return (
        <header className="section">
            <nav className="nav-container content-wrapper">
                <img src={logo} alt="logo" />
                <ul className="nav-links">
                    {
                        navInfo.map((data, i) => {
                            return (
                                <li key={i}>
                                    <Link to={ navRoutes[i] }>{data}</Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Nav;