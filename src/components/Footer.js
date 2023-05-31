import restaurant from "../assets/restaurant.jpg";
import { Link } from "react-router-dom";

const generalLinks = ["home", "about", "menu", "reservations", "order online", "log in"];
const generalRoutes = ["/", "/about", "/under-construction", "/booking", "/under-construction", "/under-construction"]

const contactLinks = ["address", "phone number", "email"];
const contactData = ["https://goo.gl/maps/RRd65pdnBsFnzdDi8", "tel:3125275586", "mailto:reservations@littlelemon.com?subject=Hello 😀"]

const socialLinks = ["instagram", "facebook", "twitter", "tiktok"];

const Footer = () => {
    return (
        <footer className="section">
            <div className="footer-container content-wrapper">

                <img src={restaurant} alt="restaurant" />

                <div className="footer-links-groups">
                    {/* GROUP 1 ///////////////////////////// */}
                    <div className="footer-links-group">
                        <ul>
                            {
                                generalLinks.map((data, i) => {
                                    return (
                                        <li key={i}>
                                            {
                                                <Link to={ generalRoutes[i] }>{ data }</Link>
                                            }
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>

                    {/* GROUP 2 ///////////////////////////// */}
                    <div className="footer-links-group">
                        <h4>contact</h4>
                        <ul>
                            {
                                contactLinks.map((data, i) => {
                                    return (
                                        <li key={i}>
                                            <a href={ contactData[i] }>{data}</a>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>

                    {/* GROUP 3 ///////////////////////////// */}
                    <div className="footer-links-group">
                        <h4>social media</h4>
                        <ul>
                            {
                                socialLinks.map((data, i) => {
                                    return (
                                        <li key={i}>
                                            <a
                                                href={ `https://www.${ data }.com` }
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
        </footer>
    );
}

export default Footer;