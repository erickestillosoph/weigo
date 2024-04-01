import ServiceSection from "@/components/sections/serviceSection";
import { HeroSection } from "../../sections/heroSection";
import ServiceImage from "../../../assets/images/service/service-section.png";
function BodyLayout() {
    return (
        <div className="flex flex-col gap-[140px]">
            <HeroSection />
            <ServiceSection
                image={ServiceImage}
                title="Our Growing Service"
                subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi "
            />
        </div>
    );
}

export default BodyLayout;
