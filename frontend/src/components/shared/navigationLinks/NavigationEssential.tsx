import { Button } from "@/components/ui/button";
import Logo from "../../../assets/images/weigo-company-logo.svg";

function NavigationEssential() {
    return (
        <div className="border-b-[0.5px] border-[#DFDFDF]">
            <div className="2xl:container xl:container md:container sm:container  relative flex justify-between items-center  pt-2 pb-2">
                <div className="">
                    <img
                        src={Logo}
                        alt="Company Logo"
                        className="w-[150px] h-[50px] object-cover"
                    />
                </div>

                <Button>Contact Us</Button>
            </div>
        </div>
    );
}

export default NavigationEssential;
