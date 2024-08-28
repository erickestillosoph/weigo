import TitleSection from "@/components/sections/titleSection";
import { CardCommonDefault } from "@/components/shared/card";
import { Button } from "@/components/ui/button";
import image from "@/assets/images/titles/insurance_title.png";
import { insurance } from "@/lib/placeholders/insurance";
import { useCodeCurrencyLocalStorage } from "@/hooks/localStorage/useCodeCurrency";
function Insurance() {
    const { currency } = useCodeCurrencyLocalStorage();

    return (
        <div className="flex flex-col sm:gap-10 gap-32 h-[100%]">
            <TitleSection img={image} title="Insurance"></TitleSection>
            <div className="w-[100%] container">
                <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-[100%] gap-[32px]">
                    {insurance.slice(0, 6).map((insurance) => (
                        <CardCommonDefault
                            key={insurance.id}
                            src={insurance.src}
                            buttonElement={<Button>Add Insurance</Button>}
                        >
                            <div className="flex flex-col gap-[16px]">
                                <div className="flex flex-row justify-between">
                                    <p className="font_inter w_heading_primary text-[14px]">
                                        {insurance.insurance_id}
                                    </p>
                                    <p className="font_inter w_heading_primary text-[14px]">
                                        {insurance.price * parseFloat(currency)}
                                    </p>
                                </div>
                                <h3 className="!font-extrabold font_inter w_heading_secondary text-[20px]">
                                    {insurance.name}
                                </h3>
                                <p className="w_text_color truncate text-wrap line-clamp-5">
                                    {insurance.description}
                                </p>
                            </div>
                        </CardCommonDefault>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Insurance;
