import ReactCountryFlag from "react-country-flag";
import CountryDialog from "./CountryDialog";
function CountryListDropdown() {
    const countryCode = "SG";
    const countryCodeStyle = {
        fontSize: "4em",
        fontFamily: "Chromatic, sans-serif",
        fontWeight: "bold",
        color: "#fff",
        lineHeight: "0.2em",
        marginTop: "-0.2em",
    };
    return (
        <div className="flex flex-row ">
            <div className="lg:w-[236px] sm:w-[270px] w-[100%] pl-5 pr-5 pb-2 pt-2 rounded-3xl border flex flex-col justify-start text-start border_c1 bg-white/35">
                <p className="text-white font-medium">Choose Destination</p>
                <div className="flex lg:gap-4 gap-4 items-center align-middle">
                    <ReactCountryFlag
                        countryCode="SG"
                        svg
                        style={{ width: "4em", height: "4em" }}
                    />
                    <ReactCountryFlag
                        countryCode={countryCode}
                        style={countryCodeStyle}
                    />
                    <CountryDialog />
                </div>
            </div>
            <div className="w-[145px] lg:block hidden">&nbsp;&nbsp;</div>
        </div>
    );
}

export default CountryListDropdown;
