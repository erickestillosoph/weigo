type ServiceProps = {
    title: string;
    subtitle: string;
    image: string;
};

function ServiceSection({ title, subtitle, image }: ServiceProps) {
    return (
        <div className="flex flex-col container gap-[28px]">
            <h3 className="uppercase w_heading_primary text_section_h3_clamp">
                {title}
            </h3>
            <p className="w_text_color text_sm max-w-[400px]">{subtitle}</p>
            <div>
                <img src={image} alt="" className="w-[100%]" />
            </div>
        </div>
    );
}

export default ServiceSection;
