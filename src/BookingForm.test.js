import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BookingForm, BookingSlots, availableTimes } from "./components/BookingForm";
import { fetchAPI } from "./api";
import { BrowserRouter } from 'react-router-dom';

describe("test BookingForm component", () => {

    it("renders the label for choose time dropdown", () => {
        render(<BrowserRouter><BookingForm /></BrowserRouter>);
        const labelElement = screen.getByText("Choose time");
        expect(labelElement).toBeInTheDocument();
    });

    it("calls initializeTimes with the default date (today's date) if bookingData is empty.", () => {
        const initializeTimes = jest.fn();
        const bookingData = [];
        render(<BookingSlots bookingData={bookingData} initializeTimes={initializeTimes} />);
        const today = new Date();
        expect(initializeTimes).toHaveBeenCalledWith(today);
    });

    it("should return a new array of dates (of type string) from the fetchAPI function when updateTimes is dispatched via the availableTimes reducer. Only the first item in the returned array should be an empty string.", () => {
        const currentBookingData = ["", "17:00", "18:00", "19:00"];
        const selectedDate = new Date("2023-05-30");
        const action = {
            type: "update",
            payload: selectedDate
        }

        const updatedTimes = availableTimes(currentBookingData, action);
        const updatedBookingData = fetchAPI(selectedDate);

        expect(updatedTimes.length).toEqual(updatedBookingData.length + 1);
        expect(typeof updatedTimes).toBe("object"); // "object" = array in js
        updatedTimes.forEach(item => expect(typeof item).toBe("string"));
        expect(updatedTimes[0]).toBeFalsy();
        updatedTimes.slice(1, -1).forEach(item => expect(item).not.toBeFalsy());
        // check that date strings are in 24-hour time format with leading 0 (HH:MM)
        updatedTimes.slice(1, -1).forEach(item => expect(item).toMatch(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/));
    });
});