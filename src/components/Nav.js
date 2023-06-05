import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { CgClose, CgMenu } from "react-icons/cg";
import { useState } from "react";

const navInfo = ["home", "about", "menu", "reservations", "order online", "log in"];
const navRoutes = ["/", "/about", "/under-construction", "/booking", "/under-construction", "/under-construction"];

const NavToggle = ({ expanded, handleClick }) => {
    return (
        <button className="nav-menu-toggle" onClick={handleClick}>
            {
                expanded ?
                    <CgClose className="nav-toggle" /> :
                    <CgMenu className="nav-toggle" />
            }
        </button>
    );
}

const Nav = () => {
    const [navIsExpanded, setNavIsExpanded] = useState(false);

    const handleClick = () => setNavIsExpanded(!navIsExpanded);
    const handleClose = () => setNavIsExpanded(false);

    return (
        <header className="section nav-glow">
            <nav className="nav-container content-wrapper">
                <div className="nav-logo">
                    <img src={logo} alt="logo" />

                    <ul className="nav-links nav-hidden">
                        {
                            navInfo.map((data, i) => {
                                return (
                                    <li key={i}>
                                        <Link to={navRoutes[i]}>{data}</Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    <NavToggle expanded={navIsExpanded} handleClick={handleClick} />

                </div>
                <ul className={navIsExpanded ? "nav-links nav-expand" : "nav-links nav-close"}>
                    {
                        navInfo.map((data, i) => {
                            return (
                                <li key={i}>
                                    <Link onClick={handleClose} to={navRoutes[i]}>{data}</Link>
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