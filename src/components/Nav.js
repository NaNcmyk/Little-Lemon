import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { CgClose, CgMenu } from "react-icons/cg";
import { useEffect, useState } from "react";

const navInfo = ["home", "about", "menu", "reservations", "order online", "log in"];
const navRoutes = ["/", "/about", "/under-construction", "/booking", "/under-construction", "/under-construction"];

const NavDrawer = ({ expanded, isDesktop, handleClose }) => {
    return (
        <ul className={(expanded && !isDesktop) ? "nav-links-drawer active" : "nav-links-drawer"}>
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
    );
}

const NavBarItems = ({ expanded, isDesktop, handleClick }) => {
    return (
        <nav className="nav-container">
            <div className="nav-items">
                <img src={logo} alt="logo" />
                {
                    isDesktop ?
                        <ul className="nav-links">
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
                        :
                        <button className={(expanded & !isDesktop) ? "nav-menu-toggle active" : "nav-menu-toggle"} onClick={handleClick}>
                            {expanded ? <CgClose /> : <CgMenu />}
                        </button>
                }
            </div>
        </nav>
    )
}

const Nav = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => setExpanded(!expanded);
    const handleClose = () => setExpanded(false);

    const isDesktop = () => {
        if (window.innerWidth >= 1200) {
            setIsLargeScreen(true);
            // if drawer is expanded during resize--
            // reset drawer state to its original state (collapsed)
            // so that drawer is collapsed when user returns to original (smaller) screen size
            setExpanded(false);
        } else {
            setIsLargeScreen(false);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", isDesktop);
        return () => window.removeEventListener("resize", isDesktop);
    });

    // disable background scrolling while nav drawer is open
    useEffect(() => {
        if (expanded) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }, [expanded]);


    return (
        <header>
            <NavBarItems isDesktop={isLargeScreen} expanded={expanded} handleClick={handleToggle} />
            <NavDrawer expanded={expanded} isDesktop={isLargeScreen} handleClose={handleClose} />
        </header>
    );
}

export default Nav;