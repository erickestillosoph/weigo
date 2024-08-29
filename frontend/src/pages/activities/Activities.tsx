import TitleSection from "@/components/sections/titleSection";
import { CardListThree } from "@/components/shared/card";
import { activity } from "@/lib/placeholders/activity";
import image from "@/assets/images/titles/activity_title_image.png";
import { useSetUseActivityState } from "@/state/common/useBooking";

interface ActivityClickParams {
    type: string;
    price: string;
    symbol: string;
    image: string;
    title: string;
}
function Activities() {
    const isActivity = useSetUseActivityState();
    const handleClick = ({
        type,
        price,
        image,
        title,
        symbol,
    }: ActivityClickParams) => {
        isActivity({
            type: type,
            price: price,
            state: true,
            image: image,
            title: title,
            symbol: symbol,
        });
    };
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
                            onClick={({ price, type, image, title, symbol }) =>
                                handleClick({
                                    price,
                                    type,
                                    image,
                                    title,
                                    symbol,
                                })
                            }
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Activities;
