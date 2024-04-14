import { Instagram, Twitter } from "@/assets/icons/Icons";
import LogoText from "../../../assets/images/weigo-logo.png";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
type FooterLayoutProps = {
    className?: string;
};

function FooterLayout({ className }: FooterLayoutProps) {
    const navLinks = [
        { name: "Home", links: "#", route: "/" },
        { name: "Domestic Packages", links: "#", route: "/domestic-packages" },
        {
            name: "International Packages",
            links: "#",
            route: "/international-packages",
        },
        { name: "Activities", links: "#", route: "/activities" },
        { name: "Insurance", links: "#", route: "/insurance" },
        { name: "Visa", links: "#", route: "/visa" },
        { name: "Car Rental", links: "#", route: "/car-rental" },
        { name: "About Us", links: "#", route: "/about-us" },
        { name: "Contact", links: "#", route: "/contact" },
    ];
    return (
        <div className={cn("bg_footer", className)}>
            <div className="container  pt-12 pb-12">
                <div className="border-b border-white/25 sm:pl-0 pl-6">
                    <h3 className="text_section_h3_clamp text-white pb-10">
                        A chance to go to an adventure destination
                    </h3>
                </div>
                <div className="flex flex-col  justify-between md:flex-row sm:flex-row grid-cols-1 gap-[40px] pt-10 pb-10">
                    <div className=" sm:pl-0 pl-6">
                        <a href="#" className="flex">
                            <img
                                src={LogoText}
                                className="h-[54px] w-[120px] cursor-pointer"
                                alt="Weigo Company Logo"
                            />
                        </a>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
                        {navLinks.map((navLink, index) => (
                            <div className="flex" key={index}>
                                <NavLink to={navLink.route}>
                                    <p className=" text-white text-[14px] pl-6 pr-6 pt-3 pb-3 min-w-[200px] hover:hover_background rounded-md cursor-pointer">
                                        {navLink.name}
                                    </p>
                                </NavLink>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-row gap-5 sm:pl-0 pl-6">
                        <Instagram className="h-[24px] w-[24px] text-white cursor-pointer" />
                        <Twitter className="h-[24px] w-[24px] text-white cursor-pointer" />
                    </div>
                </div>
                <div className="sm:pl-0 pl-6">
                    <p className="text-white">Copyright @ 2024 Weigo</p>
                </div>
            </div>
        </div>
    );
}

export default FooterLayout;
