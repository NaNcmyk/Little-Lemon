import restaurant from "../assets/restaurant.jpg";
import greekSalad from "../assets/greek_salad.jpg";
import bruschetta from "../assets/bruschetta.jpeg";
import chef from "../assets/chef2.jpg";

const WIP = () => {
    const images = [restaurant, greekSalad, bruschetta, chef];
    let randomImage = images[Math.floor(Math.random() * images.length)];

    const bgImageStyles = {
        backgroundImage: `url(${randomImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "soft-light"
    }

    return (
        <>
            <section className="WIP-container section" style={bgImageStyles}>
                <div className="content-wrapper">
                    <p>This page is under construction :(</p>
                </div>
            </section>
        </>
    )
}

export default WIP;