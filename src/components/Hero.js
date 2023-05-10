import hero from '../assets/hero.jpg'

const Hero = () => {
    return (
        <main>
            <div className='hero-container'>
                <article className='hero-info'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button>Reserve a Table</button>
                </article>
                <article className='hero-img'>
                    <img src={ hero } alt='Little Lemon appetizer' />
                </article>
            </div>
        </main>
    );
}

export default Hero;