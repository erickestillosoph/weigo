import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import CurrencyDialog from "./CurrencyDialog";
// Define the props interface

function Currency() {
    const currencyCountryCode = "SGP";
    const [isTextSize, setTextSize] = useState("text-[4em]");
    const [isCurrencyBG, setIsCurrencyBG] = useState("bg_header");

    useEffect(() => {
        const handleResize = () => {
            // const height = window.innerHeight;
            const width = window.innerWidth;
            if (width <= 375) {
                setTextSize("text-[2em]");
            } else {
                setTextSize("text-[4em]");
            }

            if (width <= 1023) {
                setIsCurrencyBG("bg-white/35");
            } else {
                setIsCurrencyBG("bg_header");
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="flex flex-row ">
            <div
                className={cn(
                    "lg:w-[236px] sm:w-[100%] w-[100%] pl-5 pr-5 pb-2 pt-2 rounded-3xl border flex flex-col justify-between text-start border_c1 bg_header",
                    isCurrencyBG,
                )}
            >
                <p className="text-white  font-medium">Choose Currency</p>
                <div className="flex lg:gap-4 gap-8 items-center align-middle">
                    <div>
                        <h3
                            className={cn(
                                "font-bold text-white text-[4em] currency_h3_lineheight t-[-1px] ",
                                isTextSize,
                            )}
                        >
                            {currencyCountryCode}
                        </h3>
                    </div>

                    <CurrencyDialog />
                </div>
            </div>
        </div>
    );
}

export default Currency;
