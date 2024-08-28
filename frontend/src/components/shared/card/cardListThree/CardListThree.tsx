import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardImage,
    CardSubTitle,
} from "@/components/ui/card";
import { useCodeCurrencyLocalStorage } from "@/hooks/localStorage/useCodeCurrency";

type CardListThreeProps = {
    src?: string;
    title?: string;
    subTitle?: string;
    description?: string;
    activity?: string;
    experience?: string;
    price: number;
    type: "product" | "activity";
};
function CardListThree({
    src,
    title,
    subTitle,
    activity,
    experience,
    description,
    type,
    price,
}: CardListThreeProps) {
    const { currency } = useCodeCurrencyLocalStorage();

    const calculatedPrice = parseFloat(currency) * price;

    return (
        <Card className="gap-[12px] flex-1">
            <CardImage src={src} className="w-[100%]" alt="Card Image" />
            <CardHeader>
                <div className="flex justify-between text-center">
                    <CardSubTitle className="font_inter w_heading_primary text-[14px]">
                        {subTitle}
                    </CardSubTitle>
                    <CardSubTitle className="font_inter text-bold w_heading_primary text-green-500 text-[20px]">
                        {calculatedPrice}
                    </CardSubTitle>
                </div>
                <CardTitle className="font_inter w_heading_secondary text-[20px]">
                    {title}
                </CardTitle>
            </CardHeader>
            {(type === "product" && (
                <CardContent className="flex flex-col gap-[16px]">
                    <div className="flex flex-col gap-[4px]">
                        <p className="w_text_color">Activities</p>
                        <p className="w_text_color">{activity}</p>
                    </div>
                    <div className="flex flex-col gap-[4px]">
                        <p className="w_text_color">Experience</p>
                        <p className="w_text_color">{experience}</p>
                    </div>
                </CardContent>
            )) ||
                (type === "activity" && (
                    <CardContent className="flex flex-col gap-[16px]">
                        <div className="flex flex-col gap-[4px]  overflow-hidden">
                            <p className="w_text_color truncate text-wrap line-clamp-5">
                                {description}
                            </p>
                        </div>
                    </CardContent>
                ))}
        </Card>
    );
}

export default CardListThree;
