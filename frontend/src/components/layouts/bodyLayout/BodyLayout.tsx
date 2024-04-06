import AboutUs from "@/pages/aboutUs";
import Activities from "@/pages/activities";
import CarRental from "@/pages/carRental";
import Contact from "@/pages/contact";
import DomesticPackages from "@/pages/domesticPackages";
import Home from "@/pages/home";
import Insurance from "@/pages/insurance";
import InternationalPackages from "@/pages/internationalPackages";
import Visa from "@/pages/visa";

import { Routes, Route } from "react-router-dom";

function BodyLayout() {
    return (
        <div className="flex flex-col gap_200_clamp">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="about" element={<AboutUs />}></Route>
                <Route path="activities" element={<Activities />}></Route>
                <Route path="car-rental" element={<CarRental />}></Route>
                <Route path="contact" element={<Contact />}></Route>
                <Route path="insurance" element={<Insurance />}></Route>
                <Route path="visa" element={<Visa />}></Route>
                <Route
                    path="domestic-packages"
                    element={<DomesticPackages />}
                ></Route>
                <Route
                    path="international-packages"
                    element={<InternationalPackages />}
                ></Route>
            </Routes>
        </div>
    );
}

export default BodyLayout;
