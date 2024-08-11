import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Logo from "../../../assets/images/weigo-logo.png";
import { NavLink } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { navLinks } from "@/lib/navigationLinks";

gsap.registerPlugin(useGSAP);

function Navigation() {
    const [isOpenMobile, setIsOpenMobile] = useState(true);
    const [isOpenTablet, setIsOpenTablet] = useState(true);

    let navDisplay: JSX.Element;
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const toggleSideMenu = () => {
        let valueX = 0;
        if (screenSize.width <= 768) {
            valueX = 0;
        }

        const sideMenuElement = document.getElementById("side-menu");
        gsap.to(sideMenuElement, {
            x: isOpenTablet ? valueX : 500,
            duration: 0.2,
        });

        setIsOpenTablet(!isOpenTablet);
    };

    const toggleMobileMenu = () => {
        let valueY = 0;
        if (screenSize.width <= 768) {
            valueY = -20;
        }

        const sideMenuElement = document.getElementById("mobile-menu");
        gsap.to(sideMenuElement, {
            y: isOpenMobile ? valueY : -600,
            duration: 0.2,
        });

        setIsOpenMobile(!isOpenMobile);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const screenMobile = () => {
        return (
            <div className="bg_header w-[100%] fixed">
                {!isOpenMobile && (
                    <div
                        className={cn(
                            "bg-black/60 fixed h-[100%] w-[100%] z-20 top-0 transition-all duration-500",
                        )}
                        onClick={toggleMobileMenu}
                    ></div>
                )}
                <div className="flex flow-col justify-between p-4 items-center">
                    <div className="w_logo">
                        <a href="#">
                            <img
                                src={Logo}
                                alt="Company Logo"
                                className=" w-[100%] h-[50px] "
                            />
                        </a>
                    </div>
                    <button
                        className="w_text_color hover:bg-blue-3007 border-2 border-white focus:shadow-blue-3007 top-[20px] right-[20px] inline-flex h-[40px] w-[40px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                        aria-label="Close"
                        onClick={toggleMobileMenu}
                    >
                        <HamburgerMenuIcon
                            width={20}
                            height={20}
                            className="text-white rounded-full"
                        />
                    </button>
                </div>
                <div
                    id="mobile-menu"
                    className="flex flex-col w-[100%] justify-center gap-4 bg-white absolute top-0 z-50 pb-8 pt-20 translate-y-[-600px]"
                >
                    <button
                        className="w_text_color hover:bg-blue-3007 focus:shadow-blue-3007 absolute top-[30px] right-[24px] inline-flex h-[40px] w-[40px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                        aria-label="Close"
                        onClick={toggleMobileMenu}
                    >
                        <Cross2Icon
                            width={20}
                            height={20}
                            className="w_text_color"
                        />
                    </button>
                    {navLinks.map((variable, index) => (
                        <div
                            className="w-[100%] text-center pt-1 pb-1 hover:w_hover_bg"
                            key={index}
                            onClick={toggleMobileMenu}
                        >
                            <NavLink onClick={scrollToTop} to={variable.route}>
                                <p className="w_text_color focus:shadow-[0_0_0_2px]">
                                    {variable.name}
                                </p>
                            </NavLink>
                        </div>
                    ))}
                    <div className="w-[100%] justify-start mt-2 pl-6 pr-6 ">
                        <Button
                            className="w-[100%] justify-center"
                            onClick={toggleMobileMenu}
                            size="sm"
                        >
                            Book Now
                        </Button>
                    </div>
                </div>
            </div>
        );
    };

    const screenTablet = () => {
        return (
            <div className="flex justify-end ">
                {!isOpenTablet && (
                    <div
                        className={cn(
                            "bg-black/60 fixed w-[100%] h-[110vh] z-20 top-0 transition-all duration-500",
                        )}
                        onClick={toggleSideMenu}
                    ></div>
                )}
                <div className="p-5 ">
                    <button
                        className="w_text_color border-2 hover:bg-blue-3007 focus:shadow-blue-3007 top-[20px] right-[20px] inline-flex h-[40px] w-[40px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                        aria-label="Close"
                        onClick={toggleSideMenu}
                    >
                        <HamburgerMenuIcon
                            width={24}
                            height={24}
                            className="text-white"
                        />
                    </button>
                </div>
                <div
                    className={cn(
                        "bg-white fixed top-0 justify-end right-0 z-20 h-[115vh] translate-x-[500px]",
                    )}
                    id="side-menu"
                >
                    <button
                        className="w_text_color hover:bg-blue-3007 focus:shadow-blue-3007 absolute top-[20px] right-[10px] inline-flex h-[40px] w-[40px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                        aria-label="Close"
                        onClick={toggleSideMenu}
                    >
                        <Cross2Icon
                            width={20}
                            height={20}
                            className="w_text_color"
                        />
                    </button>
                    <div className="flex flex-col items-end justify-start p-3 mt-14">
                        {navLinks.map((variable, index) => (
                            <NavLink to={variable.route} key={index}>
                                <div
                                    className="w-[300px] p-3 w_text_color hover:w_hover_bg rounded-lg cursor-pointer"
                                    onClick={toggleSideMenu}
                                >
                                    <p className="pl-2 pr-2 w_text_color focus:shadow-[0_0_0_2px]">
                                        {variable.name}
                                    </p>
                                </div>
                            </NavLink>
                        ))}
                        <div className="w-[300px] justify-start mt-8">
                            <Button
                                className="w-[300px] justify-center"
                                onClick={toggleSideMenu}
                            >
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const screenDesktop = () => {
        return (
            <div className="2xl:container xl:container md:container pt-4 pb-4">
                <NavigationMenu.Root className="relative z-[1] flex justify-start">
                    <NavigationMenu.List className="center m-0 flex list-none text-white p-1">
                        {navLinks.map((variable, index) => (
                            <NavigationMenu.Item key={index}>
                                <NavLink
                                    className="text-white hover:hover_background active:hover_background focus:hover_background block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
                                    to={variable.route}
                                    onClick={scrollToTop}
                                >
                                    {variable.name}
                                </NavLink>
                            </NavigationMenu.Item>
                        ))}
                    </NavigationMenu.List>

                    <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
                        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
                    </div>
                </NavigationMenu.Root>
            </div>
        );
    };

    if (screenSize.width < 767) {
        navDisplay = screenMobile();
    } else if (screenSize.width < 1024) {
        navDisplay = screenTablet();
    } else {
        navDisplay = screenDesktop();
    }

    return <>{navDisplay}</>;
}

export default Navigation;
