import { CardListThree } from "@/components/shared/card";
import { activity } from "@/lib/placeholders/activity";

function Activity() {
    return (
        <div className="flex flex-col w-[100%] container gap-[28px]">
            <div className="flex justify-between items-end">
                <h1 className="uppercase w_heading_primary text_section_h3_clamp">
                    Activity
                </h1>
                <a
                    className="w_heading_primary font-semibold text_section_link_clamp"
                    href="#"
                >
                    View more
                </a>
            </div>
            <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-[100%] gap-[32px] flex-wrap">
                {activity.slice(0, 3).map((activity) => (
                    <CardListThree
                        type="activity"
                        key={activity.id}
                        src={activity.src}
                        title={activity.title}
                        subTitle={activity.subTitle}
                        description={activity.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default Activity;
