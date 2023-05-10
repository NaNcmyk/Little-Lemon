import restaurant from '../assets/restaurant.jpg'

const generalLinks = ["home", "about", "menu", "reservations", "order online", "log in"];
const contactLinks = ["address", "phone number", "email"];
const socialLinks = ["instagram", "facebook", "twitter", "tiktok"];

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">

                <img src={restaurant} alt="restaurant" />

                <div className='footer-links-groups'>
                    {/* GROUP 1 ///////////////////////////// */}
                    <div className="footer-links-group">
                        <ul>
                            {
                                generalLinks.map((data, i) => {
                                    return (
                                        <li key={i}>
                                            <a href='/'>{data}</a>
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
                                            <a href='/'>{data}</a>
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
                                            <a href='/'>{data}</a>
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