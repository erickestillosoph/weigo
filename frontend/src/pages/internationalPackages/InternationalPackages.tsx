import TitleSection from "@/components/sections/titleSection";
import image from "@/assets/images/titles/domestic_international_title_image.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CardListThree } from "@/components/shared/card";
import { products } from "@/lib/placeholders/products";
function InternationalPackages() {
    const imgDomestic = "https://source.unsplash.com/1600x900/?singapore";
    const imgPromo = "https://source.unsplash.com/1600x900/?yellow-person";
    return (
        <div className="flex flex-col sm:gap-10 gap-32 h-[100%]">
            <TitleSection
                img={image}
                title="International Packages"
            ></TitleSection>
            <div className="container lg:flex-row flex flex-col gap-[32px]">
                <div className="lg:w-[70%] w-[100%] h-[296px] relative rounded-[16px] bg-black/20 ">
                    <div className="relative rounded-[16px]">
                        <img
                            className="w-full top-0 left-0 rounded-[16px] object-cover h-[296px] absolute z-10"
                            src={imgDomestic}
                            alt=""
                        />
                        <div
                            className={cn(
                                "w-full h-[296px] rounded-[16px] bg-black/50 absolute z-20",
                            )}
                        ></div>
                    </div>

                    <div className="relative z-30 flex flex-col gap-[16px] p-[24px] h-full justify-end">
                        <h5 className="text_section_h5_clamp uppercase text-white">
                            Get Domestic Packages Now!
                        </h5>
                        <Button variant={"ghost"} className="bg-white w-fit">
                            Avail Now
                        </Button>
                    </div>
                </div>
                <div className="lg:w-[30%] w-[100%] h-[296px] rounded-[16px] bg-black/50">
                    <div className="relative rounded-[16px]">
                        <img
                            className="w-full top-0 left-0 rounded-[16px]  object-cover h-[296px] absolute z-10"
                            src={imgPromo}
                            alt=""
                        />
                        <div
                            className={cn(
                                "w-full h-[296px] rounded-[16px] bg-black/50 absolute z-20",
                            )}
                        ></div>
                    </div>
                    <div className="relative z-30 flex flex-col gap-[16px] p-[24px] h-full ">
                        {/* <Button variant={"ghost"} className="bg-white w-fit">
                            Promo
                        </Button> */}
                    </div>
                </div>
            </div>
            <div className="w-[100%] container">
                <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-[100%] gap-[32px]">
                    {products.slice(0, 6).map((product) => (
                        <CardListThree
                            type="product"
                            key={product.id}
                            src={product.src}
                            title={product.title}
                            subTitle={product.subTitle}
                            activity={product.activity}
                            experience={product.experience}
                            price={product.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
export default InternationalPackages;
