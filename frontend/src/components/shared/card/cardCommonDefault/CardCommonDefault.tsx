import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardImage,
    CardSubTitle,
    CardFooter,
} from "@/components/ui/card";

type CardCommonDefaultProps = {
    src?: string;
    title?: string;
    subTitle?: string;
    children?: React.ReactNode;
    buttonElement?: React.JSX.Element;
};
function CardCommonDefault({
    src,
    title,
    subTitle,
    children,
    buttonElement,
}: CardCommonDefaultProps) {
    return (
        <Card className="gap-[12px] flex-1">
            <CardImage src={src} className="w-[100%]" alt="Card Image" />
            <CardHeader>
                <CardSubTitle className="font_inter w_heading_primary text-[14px]">
                    {subTitle}
                </CardSubTitle>
                <CardTitle className="font_inter w_heading_secondary text-[20px]">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-[16px]">
                {children}
            </CardContent>
            <CardFooter className="flex flex-col float-start">
                {buttonElement}
            </CardFooter>
        </Card>
    );
}

export default CardCommonDefault;
