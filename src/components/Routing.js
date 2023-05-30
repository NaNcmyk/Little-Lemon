import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import About from "./About";
import WIP from "./WIP";
import ConfirmedBooking from "./ConfirmedBooking";
import { Routes, Route } from "react-router-dom";

const Routing = () => {
    return (
    <Routes>
        <Route path="/" element={ <Homepage /> }></Route>
        <Route path="/about" element={ <About /> }></Route>
        <Route path="/booking" element={ <BookingPage /> }></Route>
        <Route path="/under-construction" element= { <WIP /> }></Route>
        <Route path="/confirmed-booking" element= { <ConfirmedBooking /> }></Route>
    </Routes>
    )
}

export default Routing;