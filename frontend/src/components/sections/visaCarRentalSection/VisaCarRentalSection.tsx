import { CardTextOverImageCard } from "@/components/shared/card";
import VisaImage from "@/assets/images/visacarrental/visa.png";
import CarRentalImage from "@/assets/images/visacarrental/car-rental.png";
function VisaCarRentalSection() {
    return (
        <div className="grid grid-cols-1 gap-[32px] md:grid-cols-2 z-10 container">
            <div className="">
                <CardTextOverImageCard
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi "
                    title="HERE VISA "
                    src={VisaImage}
                ></CardTextOverImageCard>
            </div>
            <div className="">
                <CardTextOverImageCard
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi "
                    title="WE OFFER CAR RENTAL "
                    src={CarRentalImage}
                ></CardTextOverImageCard>
            </div>
        </div>
    );
}

export default VisaCarRentalSection;
