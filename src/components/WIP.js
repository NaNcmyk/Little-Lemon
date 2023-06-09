import restaurant from "../assets/restaurant.jpg";
import greekSalad from "../assets/greek_salad.jpg";
import bruschetta from "../assets/bruschetta.jpg";
import chef from "../assets/chef2.jpg";
import { useState } from "react";
import { useParams } from "react-router-dom";

// placeholder page for all pages "under development"
const WIP = () => {
    const { pageID } = useParams();

    const images = [restaurant, greekSalad, bruschetta, chef];
    const [currentBgImg, setCurrentBgImg] = useState(images[0]);
    const [currentPageID, setPageID] = useState(pageID);

    // change background image when user navigates to /under-construction page via a different link
    // to simulate "page change"
    if (pageID !== currentPageID) {
        setPageID(pageID);
        const newImages = images.filter(img => img !== currentBgImg);
        let newRandomImage = newImages[Math.floor(Math.random() * newImages.length)];
        setCurrentBgImg(newRandomImage);
    }

    const bgImageStyles = {
        backgroundImage: `url(${currentBgImg})`,
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