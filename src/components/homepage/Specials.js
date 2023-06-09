import greekSalad from "../../assets/greek_salad.jpg";
import bruschetta from "../../assets/bruschetta.jpg";
import dessert from "../../assets/dessert.jpg";
import { Link } from "react-router-dom";

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
];

const Specials = () => {
    return (
        <section className="section specials-container">
            <div className="content-wrapper">
                <div className="specials-heading">
                    <h2>This Week's Specials!</h2>
                    <button><Link to="/under-construction/menu">Online Menu</Link></button>
                </div>
                <div className="specials-cards">
                    {
                        cardData.map(data => {
                            const { img, dish, price, description } = data;
                            return (
                                <article key={dish} className="specials-card">

                                    <img src={ img } alt={ dish } loading="lazy"/>

                                    <div className="specials-card-content">
                                        <div className="specials-card-heading">
                                            <h4>{ dish }</h4>
                                            <p>{ price }</p>
                                        </div>

                                        <p>{ description }</p>
                                    </div>

                                    <div>
                                        <Link to="/under-construction/delivery">Order delivery</Link>
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

export default Specials;