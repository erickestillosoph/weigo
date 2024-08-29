import TitleSection from "@/components/sections/titleSection";
import { CardCommonDefault } from "@/components/shared/card";
import image from "@/assets/images/titles/car_rental_title.png";
import { carRental } from "@/lib/placeholders/carRental";
import { useGetCurrencyFromLocalStorage } from "@/hooks/localStorage/useGetCodeCurrency";
import { useIsCurrencyState } from "@/state/common/useCurrency";
import { useSetUseCarRentalState } from "@/state/common/useBooking";
import { Button } from "@/components/ui/button";

type CarRentalType = {
    type: string;
    price: string;
    image: string;
    title: string;
    symbol: string;
};

function CarRental() {
    const { symbol } = useGetCurrencyFromLocalStorage();
    const isCurrencyState = useIsCurrencyState();
    const setCarRental = useSetUseCarRentalState();
    const handleDataOnchange = (data: CarRentalType) => {
        setCarRental({
            type: data.type,
            price: data.price,
            state: true,
            image: data.image,
            title: data.title,
            symbol: data.symbol,
        });
    };
    return (
        <div className="flex flex-col sm:gap-10 gap-32 h-[100%]">
            <TitleSection img={image} title="Car Rental"></TitleSection>
            <div className="w-[100%] container">
                <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-[100%] gap-[32px]">
                    {carRental.slice(0, 6).map((car) => (
                        <CardCommonDefault
                            key={car.id}
                            src={car.src}
                            subTitle={car.name}
                            buttonElement={
                                <Button
                                    onClick={() => {
                                        console.log("112312");
                                        handleDataOnchange({
                                            type: "car",
                                            title: car.name,
                                            image: car.src,
                                            price: (
                                                car.price *
                                                parseFloat(
                                                    isCurrencyState.value,
                                                )
                                            ).toFixed(2),
                                            symbol: symbol,
                                        });
                                    }}
                                >
                                    Book This Car
                                </Button>
                            }
                        >
                            <div className="flex flex-col gap-[16px]">
                                <div className="flex flex-row justify-between">
                                    <h3 className="!font-extrabold font_inter w_heading_secondary text-[20px]">
                                        {car.type}
                                    </h3>
                                    <h3 className="!font-extrabold font_inter w_heading_primary text-[20px]">
                                        {symbol}{" "}
                                        {(
                                            parseFloat(isCurrencyState.value) *
                                            car.price
                                        ).toFixed(2)}
                                    </h3>
                                </div>
                                <p className="w_text_color truncate text-wrap line-clamp-5">
                                    Features:
                                </p>
                                <p className="w_text_color truncate text-wrap line-clamp-5">
                                    {car.features}
                                </p>
                                <p className="w_text_color truncate text-wrap line-clamp-5">
                                    Description:
                                </p>
                                <p className="w_text_color truncate text-wrap line-clamp-5">
                                    {car.description}
                                </p>
                            </div>
                        </CardCommonDefault>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CarRental;
