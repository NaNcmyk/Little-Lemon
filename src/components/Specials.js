import greekSalad from "../assets/greek_salad.jpg"
import bruschetta from "../assets/bruschetta.jpeg"
import dessert from "../assets/dessert.jpg"

const cardData = [
    {
        img: greekSalad,
        dish: "Greek Salad",
        price: "$12.99",
        description: "The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons."
    },
    {
        img: bruschetta,
        dish: "Bruschetta",
        price: "$5.99",
        description: "Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
    },
    {
        img: dessert,
        dish: "Lemon Dessert",
        price: "$5.00",
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
    }
]

const Specials = () => {
    return (
        <section className="specials-container">
            <div className="specials-heading">
                <h2>This Week's Specials!</h2>
                <button>Online Menu</button>
            </div>
            <div className="specials-cards">
                {
                    cardData.map(data => {
                        const { img, dish, price, description } = data;
                        return (
                            <article className="specials-card">
                                <img src={ img } alt={ dish } />
                                <div className="specials-card-heading">
                                    <h4>{ dish }</h4>
                                    <p>{ price }</p>
                                </div>
                                <p>{ description }</p>
                                <div>
                                    <a href="/">Order delivery</a>
                                </div>
                            </article>
                        );
                    })
                }
            </div>
        </section>
    );
}

export default Specials;