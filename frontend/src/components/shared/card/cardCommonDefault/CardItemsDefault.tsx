import { Card, CardContent, CardImage, CardFooter } from "@/components/ui/card";
import { TrashIcon } from "@radix-ui/react-icons";

type CardItemsDefaultProps = {
    src?: string;
    title?: string;
    subTitle?: string;
    price: string;
    symbol: string;
    children?: React.ReactNode;
    buttonElement?: React.JSX.Element;
    onDelete: () => void;
};
function CardItemsDefault({
    src,
    title,
    subTitle,
    price,
    buttonElement,
    symbol,
    onDelete,
}: CardItemsDefaultProps) {
    return (
        <Card className="gap-[12px] flex h-fit !p-[4px]">
            <CardContent className=" relative p-[2px] gap-[8px] flex flex-row w-full items-center justify-between">
                <CardImage
                    src={src}
                    className="w-[30%] p-[4px] rounded-xl"
                    alt="Card Image"
                />
                <div className="flex-1">
                    <p className="!text-[14px] font-medium leading-none">
                        {title}
                    </p>
                    <p className="!text-[14px] text-muted-foreground">
                        {subTitle}
                    </p>
                    <p className="!text-[14px] text-muted-foreground">
                        {symbol} {price}
                    </p>
                </div>
                <div
                    className="absolute top-[6px] right-[8px]"
                    onClick={onDelete}
                >
                    <TrashIcon />
                </div>
            </CardContent>
            {buttonElement && (
                <CardFooter className="flex flex-col float-start">
                    {buttonElement}
                </CardFooter>
            )}
        </Card>
    );
}

export default CardItemsDefault;
