import heroImage from "@/assets/images/hero/heroImage.png";
import heroImage2 from "@/assets/images/hero/heroImage2.png";
import heroImage3 from "@/assets/images/hero/heroImage3.png";
import { motion } from "framer-motion";
import { ImagesSlider } from "../../ui/acertenity/image-slider";
import { Button } from "@/components/ui/button";
import { CountryListDropdown } from "@/components/shared/countryListDropdown";
import { Currency } from "@/components/shared/currency";
import { Input } from "@/components/ui/input";

function HeroSection() {
    // const images = [
    //     "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // ];
    const countryCode = "SG";
    const images = [heroImage, heroImage2, heroImage3];

    return (
        <div className="relative ">
            <div className="flex flex-col justify-center absolute w-full gap-6 lg:top-8 md:top-8 top-24">
                <div className="2xl:w-[35%] lg:w-[70%] md:w-[80%] sm:w-[80%] w-[80%] flex flex-col mr-auto ml-auto  justify-center z-10">
                    <h3 className="text-[32px] w_heading_primary">
                        SEARCH HERE
                    </h3>
                    <Input
                        type="search"
                        className="bg-black/20 focus:outline-white active:out=none focus:shadow-[1_1_1_1px] text-white"
                    ></Input>
                </div>
                <div className="flex flex-col  sm:flex-row ml-auto mr-auto z-10 sm:gap-10 gap-1 pl-4 pr-4 justify-center items-center align-middle">
                    <Currency />
                    <div className="mt-10">
                        <h1 className="medium_text sm:block hidden md:text-6xl text_stroke_medium_text fill-none stroke-white stroke-2">
                            *
                        </h1>
                    </div>
                    <CountryListDropdown />
                </div>
            </div>
            <div className="flex flex-col xl:flex-row 2xl:flex-row lg:flex-row md:flex-col sm:flex-col justify-between items-end">
                <div className="lg:w-[50%] xl:w-[50%] 2xl:w-[50%] md:w-[100%] sm:w-[100%]  flex justify-end pr-10 pl-12 g:w-[50%] mt-14 lg:order-1 order-2">
                    <div className="lg:w-[610px] md:w-[100%] sm:w-[100%] ">
                        <div className="flex flex-col gap-10 text-left">
                            <h1 className="w_heading_primary font-bold text_hero_clamp">
                                LET LIFE ENJOY TRAVEL NOW!
                            </h1>

                            <div className="flex flex-col gap-5">
                                <p className="w_text_color text-[14px] leading-[25px]">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Maxime mollitia, molestiae
                                    quas vel sint commodi repudiandae
                                    consequuntur voluptatum laborum numquam
                                    blanditiis harum quisquam eius sed odit
                                    fugiat iusto fuga praesentium optio, eaque
                                    rerum! Provident similique
                                </p>
                                <div className="flex items-center gap-4">
                                    <Button className="focus:shadow-[0_0_0_2px]">
                                        Book Now
                                    </Button>
                                    <Button
                                        className="focus:shadow-[0_0_0_2px]"
                                        variant="outline"
                                    >
                                        View More
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[50%] md:w-[100%] sm:w-[100%] w-[100%] order-1">
                    <ImagesSlider
                        className="h-[85vh] md:justify-start justify-center"
                        images={images}
                        autoplay={true}
                    >
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: -80,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.6,
                            }}
                            className="z-50 flex flex-col md:justify-start justify-center md:items-start items-center"
                        >
                            <motion.div className="md:pl-10 pl-0">
                                <h1 className="lg:super_text_lg super_text_md text_stroke_h1 font-black leading-[1.2em]">
                                    {countryCode}
                                </h1>
                            </motion.div>
                        </motion.div>
                    </ImagesSlider>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
