import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { CgClose, CgMenu } from "react-icons/cg";
import { useEffect, useState } from "react";

const navInfo = ["home", "about", "menu", "reservations", "order online", "log in"];
const navRoutes = ["/", "/about", "/under-construction/menu", "/booking", "/under-construction/order-online", "/under-construction/login"];

const NavDrawerToggle = ({ showMenu, handleToggle }) => {
    if (showMenu) {
        return (
            <button
                aria-label="close navigation"
                aria-expanded="true"
                className="nav-menu-toggle active"
                onClick={handleToggle}
            >
                <CgClose aria-hidden="true" />
            </button>
        );
    } else {
        return (
            <button
                aria-controls="nav-links-list"
                aria-label="open navigation"
                aria-expanded="false"
                className="nav-menu-toggle"
                onClick={handleToggle}
            >
                <CgMenu aria-hidden="true" />
            </button>
        );
    }
}


const NavDrawer = ({ expanded, isDesktop, closeMenu }) => {
    return (
        <ul
            role="navigation"
            aria-label="Main"
            id="nav-links-list"
            className={(expanded && !isDesktop) ? "nav-links-drawer active" : "nav-links-drawer"}
        >
            {
                navInfo.map((data, i) => {
                    return (
                        <li key={i}>
                            <Link onClick={closeMenu} to={navRoutes[i]}>{data}</Link>
                        </li>
                    );
                })
            }
        </ul>
    );
}


const NavBarItems = ({ expanded, isDesktop, handleToggle }) => {
    return (
        <nav className="nav-container" aria-label="Main">
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
                        <NavDrawerToggle showMenu={expanded} handleToggle={handleToggle} />
                }
            </div>
        </nav>
    )
}

const Nav = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1200);
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => setExpanded(!expanded);
    const closeMenu = () => setExpanded(false);

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
    }, [isLargeScreen]);

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
            <NavBarItems isDesktop={isLargeScreen} expanded={expanded} handleToggle={handleToggle} />
            <NavDrawer expanded={expanded} isDesktop={isLargeScreen} closeMenu={closeMenu} />
        </header>
    );
}

export default Nav;