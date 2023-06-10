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
                        aria-label="Locate Little Lemon on Google Maps."
                        title="Locate Little Lemon on Google Maps."
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d190353.25292512932!2d-87.8668308!3d41.8009528!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cb22da35447%3A0xd73af1e8419012da!2sEma!5e0!3m2!1sen!2sus!4v1685252587833!5m2!1sen!2sus" width="600"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>

                    <div className="confirmation-details">
                        <div className="confirmation-detail">
                            <AiOutlineCalendar aria-hidden="true" />
                            <p>{date}</p>
                        </div>
                        <div className="confirmation-detail">
                            <AiOutlineClockCircle aria-hidden="true" />
                            <p>{time}</p>
                        </div>
                        <div className="confirmation-detail">
                            <TbUsers aria-hidden="true" />
                            <p>{form.guests} guests</p>
                        </div>
                    </div>

                    <a
                        aria-label="Add event to calendar."
                        title="Add event to calendar."
                        className="confirmation-calendar"
                        href="https://calendar.google.com/calendar"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <TbCalendarPlus aria-hidden="true" />
                    </a>

                </div>

                <div className="confirmation-terms">
                    <Link to="/terms/#cancellation-policy">
                        cancellation policy
                    </Link>
                    <Link to="/under-construction/manage-booking">
                        manage booking
                    </Link>
                </div>

            </div>
        </section>
    );
}

export default ConfirmedBooking;