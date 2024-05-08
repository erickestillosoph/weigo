import { cn } from "@/lib/utils";

type TitleSectionProps = {
    img: string;
    title: string;
};

function TitleSection({ img, title }: TitleSectionProps) {
    return (
        <div
            className={cn(
                "w-full h-[238px] relative sm:pt-0 pt-[164px] flex flex-row justify-center items-center",
            )}
        >
            <img
                className="w-full object-cover h-[238px] absolute z-10"
                src={img}
                alt=""
            />
            <div
                className={cn("w-full h-[238px] bg-black/50 absolute z-20")}
            ></div>
            <h1 className="z-30 text-white text_section_h3_clamp uppercase text-center">
                {title}
            </h1>
        </div>
    );
}

export default TitleSection;
