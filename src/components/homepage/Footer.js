import restaurant from "../../assets/restaurant.jpg";
import { Link } from "react-router-dom";

const generalLinks = ["home", "about", "menu", "reservations", "order online", "log in"];
const generalRoutes = ["/", "/about", "/under-construction/menu", "/booking", "/under-construction/order-online", "/under-construction/login"]

const contactLinks = ["address", "phone number", "email"];
const contactData = ["https://goo.gl/maps/RRd65pdnBsFnzdDi8", "tel:3125275586", "mailto:reservations@littlelemon.com?subject=Hello 😀"]

const socialLinks = ["instagram", "facebook", "twitter", "tiktok"];

const Footer = () => {
    return (
        <footer className="section">
            <div className="footer-container content-wrapper">

                <div className="footer-content">
                    <img src={restaurant} alt="Little Lemon seating area" loading="lazy" />

                    <div className="footer-links-groups">
                        {/* GROUP 1: GENERAL SITE NAV ///////////////////////////// */}
                        <div className="footer-links-group" role="navigation" aria-label="Main">
                            <ul>
                                {
                                    generalLinks.map((data, i) => {
                                        return (
                                            <li key={i}>
                                                {
                                                    <Link to={generalRoutes[i]}>{data}</Link>
                                                }
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>

                        {/* GROUP 2: CONTACTS ///////////////////////////// */}
                        <div className="footer-links-group" role="navigation" aria-label="Contacts">
                            <h4>contact</h4>
                            <ul>
                                {
                                    contactLinks.map((data, i) => {
                                        return (
                                            <li key={i}>
                                                <a href={contactData[i]}>{data}</a>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>

                        {/* GROUP 3: SOCIALS ///////////////////////////// */}
                        <div className="footer-links-group" role="navigation" aria-label="Socials">
                            <h4>social media</h4>
                            <ul>
                                {
                                    socialLinks.map((data, i) => {
                                        return (
                                            <li key={i}>
                                                <a
                                                    href={`https://www.${data}.com`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {data}
                                                </a>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>

                </div>

                <small>&#169; {new Date().getFullYear()} <span>🍋 Little Lemon</span></small>

            </div>
        </footer>
    );
}

export default Footer;