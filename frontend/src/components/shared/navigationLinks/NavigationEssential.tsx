import { Button } from "@/components/ui/button";
import LogoText from "../../../assets/images/weigo-logo.png";

function NavigationEssential() {
    return (
        <div className="border-b-[0.5px] border-[rgb(100,122,250)] bg_header">
            <div className="2xl:container xl:container md:container sm:container   relative flex justify-between items-center  pt-2 pb-2">
                <div className="">
                    <img
                        src={LogoText}
                        alt="Company Logo"
                        className="w-[100px] "
                    />
                </div>

                <Button variant="outline">Contact Us</Button>
            </div>
        </div>
    );
}

export default NavigationEssential;
