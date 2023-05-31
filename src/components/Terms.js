import { useEffect } from "react";

const Terms = () => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
    // https://stackoverflow.com/questions/71821532/scroll-to-anchor-section-of-page-in-react-router-v6
    useEffect(() => {
        const hash = window.location.hash.slice(1);
        if (hash) {
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);

    return (
        <section className="terms-container section">
            <div className="content-wrapper">
                <h1>Terms & Conditions</h1>
                <article>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere morbi leo urna molestie. Augue mauris augue neque gravida in fermentum et sollicitudin.
                    </p>
                </article>

                <article id="cancellation-policy">
                    <h3>Cancellation Policy</h3>
                    <p>
                        Vel facilisis volutpat est velit. Cras semper auctor neque vitae tempus. In iaculis nunc sed augue lacus viverra. Eu turpis egestas pretium aenean pharetra magna ac placerat. Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. Nunc non blandit massa enim. Lacus sed viverra tellus in. Quam elementum pulvinar etiam non quam. Tempor orci eu lobortis elementum nibh tellus.
                    </p>
                </article>

                <article>
                    <h3>Late Arrivals/No Shows</h3>
                    <p>
                        Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Vel turpis nunc eget lorem dolor sed viverra. Eget nunc lobortis mattis aliquam.
                    </p>
                </article>

                <article>
                    <h3>Table Allocation</h3>
                    <p>
                        Adipiscing at in tellus integer feugiat scelerisque varius morbi enim. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque.
                    </p>
                </article>

                <article>
                    <h3>Large Group Policy (8+ Guests)</h3>
                    <p>
                        Tincidunt arcu non sodales neque. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt. Lacus viverra vitae congue eu consequat ac felis donec.
                    </p>
                </article>

                <article>
                    <h3>Age Policy</h3>
                    <p>
                        Quam pellentesque nec nam aliquam sem et. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl.
                    </p>
                </article>

                <article>
                    <h3>Privacy Policy</h3>
                    <p>
                        Vitae aliquet nec ullamcorper sit amet risus nullam eget. Pretium lectus quam id leo in vitae. Non blandit massa enim nec dui nunc.
                    </p>
                    <br />
                    <p>
                        Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Turpis nunc eget lorem dolor sed viverra ipsum. Dictum non consectetur a erat nam at lectus urna duis. Lorem mollis aliquam ut porttitor leo a diam sollicitudin. Viverra suspendisse potenti nullam ac.
                    </p>
                </article>

                <article>
                    <h3>Contact Us</h3>
                    <p>
                        Please reach out to <a href="mailto:reservations@littlelemon.com?subject=Hello 😀">reservations@littlelemon.com</a> if you have further questions.
                    </p>
                </article>

            </div>
        </section>
    )
}

export default Terms;