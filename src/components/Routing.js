import Homepage from "./homepage/Homepage";
import BookingPage from "./booking/BookingPage";
import About from "./homepage/About";
import WIP from "./WIP";
import Terms from "./booking/Terms";
import ConfirmedBooking from "./booking/ConfirmedBooking";
import { Routes, Route } from "react-router-dom";

const Routing = () => {
    return (
    <Routes>
        <Route path="/" element={ <Homepage /> }></Route>
        <Route path="/about" element={ <About /> }></Route>
        <Route path="/booking" element={ <BookingPage /> }></Route>
        <Route path="/under-construction" element= { <WIP /> }></Route>
        <Route path="/confirmed-booking" element= { <ConfirmedBooking /> }></Route>
        <Route path="/terms" element= { <Terms /> }></Route>
    </Routes>
    )
}

export default Routing;