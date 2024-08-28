import TitleSection from "@/components/sections/titleSection";
import { CardListThree } from "@/components/shared/card";
import { activity } from "@/lib/placeholders/activity";
import image from "@/assets/images/titles/activity_title_image.png";
function Activities() {
    return (
        <div className="flex flex-col sm:gap-10 gap-32 h-[100%]">
            <TitleSection img={image} title="Activities"></TitleSection>
            <div className="container">
                <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-[100%] gap-[32px] flex-wrap">
                    {activity.slice(0, 6).map((activity) => (
                        <CardListThree
                            type="activity"
                            key={activity.id}
                            src={activity.src}
                            title={activity.title}
                            subTitle={activity.subTitle}
                            description={activity.description}
                            price={activity.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Activities;
