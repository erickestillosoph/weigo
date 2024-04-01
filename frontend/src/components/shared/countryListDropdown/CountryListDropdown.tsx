import ReactCountryFlag from "react-country-flag";
import CountryDialog from "./CountryDialog";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function CountryListDropdown() {
    const countryCode = "SG";
    const [isSVGSize, setSVGSize] = useState("4em");
    const [isGapMobile, setIsGapMobile] = useState("gap-[14px]");

    useEffect(() => {
        const handleResize = () => {
            // const height = window.innerHeight;
            const width = window.innerWidth;
            if (width <= 375) {
                setSVGSize("2em");
                setIsGapMobile("gap-[4px]");
            } else {
                setSVGSize("4em");
                setIsGapMobile("gap-[14px]");
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
                    <ReactCountryFlag
                        countryCode={countryCode}
                        style={{
                            fontSize: isSVGSize,
                            fontFamily: "Chromatic, sans-serif",
                            fontWeight: "bold",
                            color: "#fff",
                            lineHeight: "0.2em",
                            marginTop: "-0.2em",
                        }}
                    />
                    <CountryDialog />
                </div>
            </div>
            <div className="w-[145px] lg:block hidden">&nbsp;&nbsp;</div>
        </div>
    );
}

export default CountryListDropdown;
