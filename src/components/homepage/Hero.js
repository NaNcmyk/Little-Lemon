import hero from "../../assets/hero.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <main className="section">
            <div className="hero-container content-wrapper">
                <article className="hero-info">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button><Link to="/booking">Reserve a Table</Link></button>
                </article>
                <article className="hero-img">
                    <img src={ hero } alt="Little Lemon appetizer" />
                </article>
            </div>
        </main>
    );
}

export default Hero;