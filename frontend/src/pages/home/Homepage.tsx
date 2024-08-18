import ServiceSection from "@/components/sections/serviceSection";
import HeroSection from "@/components/sections/heroSection";
import ServiceImage from "@/assets/images/service/service-section.png";
import Product from "@/components/sections/productSection";
import Activity from "@/components/sections/activitySection";
import LogoSection from "@/components/sections/logoSection";
import VisaCarRentalSection from "@/components/sections/visaCarRentalSection";
import { useEffect } from "react";
import { useSetUseIsAuthState } from "@/state/pages/useAuthApp";

function Home() {
    const setIsAuthState = useSetUseIsAuthState();

    useEffect(() => {
        setIsAuthState({ authentication: true });
    }, [setIsAuthState]);
    return (
        <div className="flex  flex-col gap_200_clamp">
            <HeroSection />
            <ServiceSection
                image={ServiceImage}
                title="Our Growing Service"
                subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi "
            />
            <Product />
            <Activity />
            <LogoSection />
            <VisaCarRentalSection />
        </div>
    );
}

export default Home;
