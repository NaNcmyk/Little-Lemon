import { useState, useReducer } from 'react';
import { fetchAPI, submitAPI } from "../api.js";
import { useNavigate } from 'react-router-dom';
import { isFormValid, isInputValid, validateEmail } from '../formValidation.js';

const availableTimes = (state, action) => {
    switch (action.type) {
        case "initialize":
            const dates = fetchAPI(action.payload);
            return ["", ...dates];
        case "update":
            const updatedDates = fetchAPI(action.payload);
            return ["", ...updatedDates];
        default:
            return state;
    }
}

const BookingSlots = ({ bookingData, initializeTimes }) => {
    return <>
        {
            bookingData.length > 0 ?
            bookingData.map(time => <option key={time}>{time}</option>) :
            initializeTimes(new Date())
        }
    </>
}

const BookingForm = () => {
    const navigate = useNavigate();

    const [bookingData, dispatch] = useReducer(
        availableTimes,
        []
    );

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        date: `${new Date().getFullYear()}-${new Date().getMonth() < 10 ? `0${(new Date().getMonth() + 1)}` : (new Date().getMonth() + 1)}-${new Date().getDate()}`,
        time: "",
        guests: 2,
        occasion: "",
        isTermsChecked: false
    });

    const [isTouched, setIsTouched] = useState({
        firstName: false,
        lastName: false,
        email: false,
        time: false
    });

    const initializeTimes = (date) => {
        dispatch({
            type: "initialize",
            payload: date
        })
    }

    const updateTimes = (selection) => {
        dispatch({
            type: "update",
            payload: selection
        })
    }

    const submitForm = (form) => {
        submitAPI(form) && navigate("/confirmed-booking", { state: form });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(form);
        console.log(form);
    }

    const handleDateChange = e => {
        setForm({
            ...form,
            date: e.target.value,
            time: ""
        });
        updateTimes(new Date(e.target.value));
    }


    return (
        <form onSubmit={handleSubmit}>

            <h1>Reserve a Table</h1>

            <div className="form-details">
                {/* NAME /////////////////////////////////////////////// */}
                <div className="form-field">
                    <label htmlFor="res-fname">First Name<sup>*</sup></label>
                    <div className="form-required-field">
                        <input
                            className={(isTouched.firstName && !isInputValid(form.firstName)) ? "invalid-input" : undefined}
                            id="res-fname"
                            minLength="1"
                            onChange={e => {
                                setForm({
                                    ...form,
                                    firstName: e.target.value
                                });
                                setIsTouched({
                                    ...isTouched,
                                    firstName: true
                                });
                            }}
                            type="text"
                            value={form.firstName}
                            required
                        />
                        {(isTouched.firstName && !isInputValid(form.firstName)) && <p className="error-msg">⚠️ Please enter your first name.</p>}
                    </div>
                </div>

                <div className="form-field">
                    <label htmlFor="res-lname">Last Name<sup>*</sup></label>
                    <div className="form-required-field">
                        <input
                            className={(isTouched.lastName && !isInputValid(form.lastName)) ? "invalid-input" : undefined}
                            id="res-lname"
                            minLength="1"
                            onChange={e => {
                                setForm({
                                    ...form,
                                    lastName: e.target.value
                                });
                                setIsTouched({
                                    ...isTouched,
                                    lastName: true
                                });
                            }}
                            type="text"
                            value={form.lastName}
                            required
                        />
                        {(isTouched.lastName && !isInputValid(form.lastName)) && <p className="error-msg">⚠️ Please enter your last name.</p>}
                    </div>
                </div>

                {/* EMAIL /////////////////////////////////////////////// */}
                <div className="form-field">
                    <label htmlFor="res-email">Email<sup>*</sup></label>
                    <div className="form-required-field">
                        <input
                            className={(isTouched.email && !validateEmail(form.email)) ? "invalid-input" : undefined}
                            id="res-email"
                            onChange={e => {
                                setForm({
                                    ...form,
                                    email: e.target.value
                                });
                                setIsTouched({
                                    ...isTouched,
                                    email: true
                                });
                            }}
                            placeholder="example@domain.com"
                            type="email"
                            value={form.email}
                            required
                        />
                        {(isTouched.email && !validateEmail(form.email)) && <p className="error-msg">⚠️ Please enter a valid email address.</p>}
                    </div>
                </div>

                {/* DATE /////////////////////////////////////////////// */}
                <div className="form-field">
                    <label htmlFor="res-date">Choose date<sup>*</sup></label>
                    <div className="form-required-field">
                        <input
                            data-testid="res-date"
                            id="res-date"
                            onChange={handleDateChange}
                            type="date"
                            value={form.date}
                            required
                        />
                    </div>
                </div>

                {/* TIME /////////////////////////////////////////////// */}
                <div className="form-field">
                    <label htmlFor="res-time">Choose time<sup>*</sup></label>
                    <div className="form-required-field">
                        <select
                            className={(isTouched.time && !isInputValid(form.time)) ? "invalid-input" : undefined}
                            id="res-time"
                            onChange={e => {
                                setForm({
                                    ...form,
                                    time: e.target.value
                                });
                                setIsTouched({
                                    ...isTouched,
                                    time: true
                                });
                            }}
                            value={form.time}
                            required
                        >
                            <BookingSlots initializeTimes={initializeTimes} bookingData={bookingData} />
                        </select>
                        {(isTouched.time && !isInputValid(form.time)) && <p className="error-msg">⚠️ Please select a time from the dropdown.</p>}
                    </div>
                </div>

                {/* GUESTS /////////////////////////////////////////////// */}
                <div className="form-field">
                    <label htmlFor="guests">Number of guests<sup>*</sup></label>
                    <div className="form-required-field">
                        <input
                            id="guests"
                            onChange={e => {
                                setForm({
                                    ...form,
                                    guests: e.target.value
                                });
                            }}
                            min="1"
                            max="10"
                            placeholder="1"
                            type="number"
                            value={form.guests}
                            required
                        />
                    </div>
                </div>

                {/* OCCASION /////////////////////////////////////////////// */}
                <div className="form-field">
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        onChange={e => {
                            setForm({
                                ...form,
                                occasion: e.target.value
                            });
                        }}
                        value={form.occasion}
                    >
                        <option></option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Other</option>
                    </select>
                </div>

                {/* terms & conditions  ////////////////////////////*/}
                <div className="form-field form-terms">
                    <input
                        id="res-terms"
                        onChange={() => setForm({ ...form, isTermsChecked: !form.isTermsChecked })}
                        type="checkbox"
                        value={form.isTermsChecked}
                        required
                    />
                    <label htmlFor="res-terms">I agree to terms & conditions.<sup>*</sup></label>
                </div>

            </div>

            <input
                aria-label="On Click"
                title={isFormValid(form) ? "Submit form." : "Please complete all required fields."}
                type="submit"
                value="Book Table"
                disabled={!isFormValid(form)}
            />
        </form>
    );
}

export { BookingForm, BookingSlots, availableTimes };