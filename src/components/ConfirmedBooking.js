import { useLocation, Link } from "react-router-dom";
import { TbCalendarPlus, TbUsers } from "react-icons/tb";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";

const ConfirmedBooking = () => {
    const location = useLocation();
    const form = location.state;

    // reformat date
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    // replace "-" delimiters with "/" to correctly output date: https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
    // e.g., an input of "2023-05-28" (incorrectly) outputs "Saturday, May 27, 2023" vs. "2023/05/28" outputs "Sunday, May 28, 2023"
    const date = new Date(form.date.replaceAll("-", "/")).toLocaleString("en-US", options);

    // reformat time
    const hour = (parseInt(form.time.split(":")[0]) + 11) % 12 + 1;
    const minutes = form.time.split(":")[1];
    const suffix = form.time.split(":")[0] >= 12 ? "PM" : "AM";
    const time = `${hour}:${minutes}${suffix}`;

    return (
        <section className="confirmation-container section">
            <div className="content-wrapper">

                <div className="confirmation-card">

                    <div className="confirmation-heading">
                        <h2>Thank you, <span>{form.firstName}</span>.</h2>
                        <p>Your table is booked!</p>
                    </div>

                    {/* embedded google map /////////////////////////////////////////// */}
                    <iframe
                        title="Google Map location"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d190353.25292512932!2d-87.8668308!3d41.8009528!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cb22da35447%3A0xd73af1e8419012da!2sEma!5e0!3m2!1sen!2sus!4v1685252587833!5m2!1sen!2sus" width="600"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>

                    <div className="confirmation-details">
                        <div className="confirmation-detail">
                            <AiOutlineCalendar />
                            <p>{date}</p>
                        </div>
                        <div className="confirmation-detail">
                            <AiOutlineClockCircle />
                            <p>{time}</p>
                        </div>
                        <div className="confirmation-detail">
                            <TbUsers />
                            <p>{form.guests} guests</p>
                        </div>
                    </div>

                    <a
                        className="confirmation-calendar"
                        href="https://calendar.google.com/calendar"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <TbCalendarPlus />
                    </a>

                </div>

                <div className="confirmation-terms">
                    <Link to="/terms/#cancellation-policy">
                        cancellation policy
                    </Link>
                    <a href="/under-construction">manage booking</a>
                </div>

            </div>
        </section>
    );
}

export default ConfirmedBooking;