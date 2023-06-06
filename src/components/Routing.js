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
        <Route exact path="/" element={ <Homepage /> }></Route>
        <Route exact path="/about" element={ <About /> }></Route>
        <Route exact path="/booking" element={ <BookingPage /> }></Route>
        <Route exact path="/under-construction/:pageID" element= { <WIP /> }></Route>
        <Route exact path="/confirmed-booking" element= { <ConfirmedBooking /> }></Route>
        <Route exact path="/terms" element= { <Terms /> }></Route>
    </Routes>
    )
}

export default Routing;