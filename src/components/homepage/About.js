import chef1 from "../../assets/chef1.jpg";
import chef2 from "../../assets/chef2.jpg";

const About = () => {
    return (
        <section className="about-container section">
            <div className="content-wrapper">

                <div className="about-text">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>
                        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.
                    </p>
                </div>

                <div className="about-imgs">
                    <img src={ chef1 } alt="Chef at work." />
                    <img src={ chef2 } alt="Little Lemon chefs." />
                </div>

            </div>
        </section>
    );
}
export default About;