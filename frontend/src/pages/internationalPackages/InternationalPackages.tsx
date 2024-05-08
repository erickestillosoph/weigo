import TitleSection from "@/components/sections/titleSection";
import image from "@/assets/images/titles/domestic_international_title_image.png";
import { Button } from "@/components/ui/button";
function InternationalPackages() {
    return (
        <div className="flex flex-col gap-10">
            <TitleSection
                img={image}
                title="International Packages"
            ></TitleSection>
            <div className="container flex flex-row gap-[32px]">
                <div className="w-[70%] h-[296px] rounded-[16px] p-[24px] flex flex-col gap-[16px] bg-black/20 justify-end">
                    <h5 className="text_section_h5_clamp uppercase text-white">
                        Get Domestic Packages Now!
                    </h5>
                    <Button variant={"ghost"} className="bg-white w-fit">
                        Avail Now
                    </Button>
                </div>
                <div className="w-[30%] h-[296px] rounded-[16px] p-[24px] bg-black/50">
                    <Button variant={"ghost"} className="bg-white w-fit">
                        Promo
                    </Button>
                </div>
                <div className=""></div>
            </div>
        </div>
    );
}
export default InternationalPackages;
