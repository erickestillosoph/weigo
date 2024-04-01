import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { logos } from "@/lib/placeholders/logos";
export function LogoSection() {
    return (
        <div className="">
            <div className="container flex justify-center items-end mb-14">
                <h1 className="uppercase w_heading_primary text_section_h3_clamp text-center">
                    LEADERS CHOOSING WEIGO
                </h1>
            </div>
            <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={logos}
                    direction="right"
                    speed="normal"
                    cardType="image"
                    className="z-4"
                />
            </div>
        </div>
    );
}
