import ReactCountryFlag from "react-country-flag";
import CountryDialog from "./CountryDialog";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function CountryListDropdown() {
    const countryCode = "SG";
    const [isFontSize, setFontSize] = useState("text-[4em]");
    const [isSVGSize, setSvgSize] = useState("4em");
    const [isGapMobile, setIsGapMobile] = useState("gap-[0px]");

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 375) {
                setSvgSize("2em");
                setFontSize("text-[2em]");
                setIsGapMobile("gap-[4px]");
            } else {
                setSvgSize("4em");
                setFontSize("text-[4em]");
                setIsGapMobile("gap-[4px]");
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
                    "lg:w-[236px] sm:w-[270px] w-[100%] pl-5 pr-5 pb-2 pt-2 rounded-3xl border flex flex-col justify-start text-start border_c1 bg-white/35",
                    isGapMobile,
                )}
            >
                <p className="text-white font-medium">Choose Destination</p>
                <div className="flex lg:gap-4 gap-4 items-center align-middle">
                    <ReactCountryFlag
                        countryCode="SG"
                        svg
                        style={{ width: isSVGSize, height: isSVGSize }}
                    />

                    <h1
                        className={cn(
                            "text-white mt-[-2px] currency_h3_lineheight font-bold ",
                            isFontSize,
                        )}
                    >
                        {countryCode}
                    </h1>
                    <CountryDialog />
                </div>
            </div>
        </div>
    );
}

export default CountryListDropdown;
