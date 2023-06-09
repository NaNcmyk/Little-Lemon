import personA from "../../assets/personA.jpeg";
import personB from "../../assets/personB.jpeg";
import personC from "../../assets/personC.jpeg";
import personD from "../../assets/personD.jpeg";

const cardData = [
    {
        rating: "⭐⭐⭐⭐⭐",
        img: personA,
        name: "Luke",
        review: "Phenomenal!"
    },
    {
        rating: "⭐⭐⭐⭐⭐",
        img: personB,
        name: "Lydia",
        review: "Finger-licking good."
    },
    {
        rating: "⭐⭐⭐⭐⭐",
        img: personC,
        name: "Lola",
        review: "Superb 💋"
    },
    {
        rating: "⭐⭐⭐⭐⭐",
        img: personD,
        name: "Lenny",
        review: "Wowwwwww."
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials-container section">
            <div className="content-wrapper">

                <h2>Testimonials</h2>

                <div className="testimonials-cards">
                    {
                        cardData.map((data, i) => {
                            const { rating, img, name, review } = data;
                            return (
                                <article className="testimonials-card" key={i}>
                                    <div className="testimonials-card-info">
                                        <div>
                                            <p>Rating</p>
                                            <p>{rating}</p>
                                        </div>
                                        <div>
                                            <img src={img} alt="reviewer" loading="lazy"/>
                                            <p>{name}</p>
                                        </div>
                                        <div>
                                            <p>Review</p>
                                            <p>{review}</p>
                                        </div>
                                    </div>
                                </article>
                            );
                        })
                    }
                </div>
            </div>

        </section>
    );
}
export default Testimonials;