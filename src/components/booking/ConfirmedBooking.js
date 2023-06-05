import { useLocation, Link } from "react-router-dom";
import { TbCalendarPlus, TbUsers } from "react-icons/tb";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { reformatDate, reformatTime } from "../../utils";

const ConfirmedBooking = () => {
    const location = useLocation();
    const form = location.state;
    const date = reformatDate(form.date);
    const time = reformatTime(form.time);

    return (
        <section className="confirmation-container section">
            <div className="content-wrapper">

                <div className="confirmation-card">

                    <div className="confirmation-heading">
                        <h2>Thank you, <span>{form.firstName}</span>.</h2>
                        <p>Your table is booked!</p>
                    </div>

                    {/* embedded google map (placeholder) /////////////////////////////////////////// */}
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