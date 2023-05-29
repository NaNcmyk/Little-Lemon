import { render, fireEvent, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';

test('renders label for choose time dropdown', () => {
    render(<BookingForm />);
    const labelElement = screen.getByText("Choose time");
    expect(labelElement).toBeInTheDocument();
})

test('check updatedTimes dispatch', () => {
    render(<BookingForm />);

    const submitBtn = screen.getByLabelText('On Click');
    const selection = screen.getByTestId("test-element");

    const defaultTime = "17:00";
    const initialTimes = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
    ];

    fireEvent.click(submitBtn);
    expect(selection).toHaveTextContent(initialTimes.filter(t => t !== defaultTime).join(""));
})