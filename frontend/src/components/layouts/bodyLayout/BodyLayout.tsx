import { Routes, Route } from "react-router-dom";
import Home from "@/pages/home";
import AboutUs from "@/pages/aboutUs";
import Activities from "@/pages/activities";
import CarRental from "@/pages/carRental";
import Contact from "@/pages/contact";
import DomesticPackages from "@/pages/domesticPackages";
import Insurance from "@/pages/insurance";
import InternationalPackages from "@/pages/internationalPackages";
import Visa from "@/pages/visa";

function BodyLayout() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/domestic-packages" element={<CarRental />} />
                <Route path="/insurance" element={<DomesticPackages />} />
                <Route path="/insurance" element={<Insurance />} />
                <Route
                    path="/international-packages"
                    element={<InternationalPackages />}
                />
                <Route path="/visa" element={<Visa />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default BodyLayout;
