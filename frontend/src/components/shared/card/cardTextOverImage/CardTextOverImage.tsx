import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
type TextOverImageCardProps = {
    title: string;
    description: string;
    src: string;
    className?: string;
};

function CardTextOverImageCard({
    src,
    title,
    description,
    className,
}: TextOverImageCardProps) {
    return (
        <div className="relative w-full">
            <div className={(cn("w-full"), className)}>
                <div className="absolute z-20 p-6 max-w-[500px] top-0 bottom-0 left-0 right-0 flex flex-col gap-6 sm:justify-center justify-start">
                    <h5 className="text-white text_section_h5_clamp">
                        {title}
                    </h5>
                    <p className="text-white text_sm font-light sm:block hidden">
                        {description}
                    </p>
                    <div className="sm:block hidden">
                        <Button
                            className="sm:text-sm text-[12px] pt-1 pb-1 pl-2 pr-2  sm:h-10 h-[32px]"
                            variant="outline"
                        >
                            View More
                        </Button>
                    </div>
                </div>
                <div className="relative ">
                    <div className="absolute rounded-[20px] w-full h-full top-0 left-0 bg-black/50 z-10" />
                    <img className="w-full z-2" src={src} alt="Card Image" />
                </div>
            </div>
            <div className="md:hidden  mt-4 flex flex-col gap-4">
                <p className="w_text_color text_sm font-light  md:truncate md:text-wrap md:line-clamp-10 line-clamp-2 ">
                    {description}
                </p>
                <div>
                    <Button className="" variant="default">
                        View More
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CardTextOverImageCard;
