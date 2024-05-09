import TitleSection from "@/components/sections/titleSection";
import styled from "styled-components";

function AboutUs() {
    const imgAboutLeft =
        "https://source.unsplash.com/900x1200/?business-person";
    const imgAboutRight = "https://source.unsplash.com/900x1200/?office";
    const imgHWW = "https://source.unsplash.com/900x600/?employees";
    const imgBackground = "https://source.unsplash.com/900x1200/?airplane";
    return (
        <div className="flex flex-col sm:gap-24 gap-32 h-[100%]">
            <TitleSection img={imgBackground} title="About Us"></TitleSection>
            <div className="container grid gap-16">
                <div className="grid xl:grid-flow-col  gap-[32px]">
                    <div className="col-span-3 xl:order-1 order-2 grid xl:gap-8 gap-8">
                        <h3 className="text_section_h3_clamp w_heading_primary">
                            WHO WE ARE
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maxime mollitia, molestiae quas vel sint
                            commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit
                            fugiat iusto fuga praesentium optio, eaque rerum!
                            Provident similique
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maxime mollitia, molestiae quas vel sint
                            commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit
                            fugiat iusto fuga praesentium optio, eaque rerum!
                            Provident similique
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maxime mollitia, molestiae quas vel sint
                            commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit
                            fugiat iusto fuga praesentium optio, eaque rerum!
                            Provident similique
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maxime mollitia, molestiae quas vel sint
                            commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit
                            fugiat iusto fuga praesentium optio, eaque rerum!
                            Provident similique
                        </p>
                    </div>
                    <div className="w-full xl:order-2 order-1 col-span-3">
                        <div className="grid grid-cols-2 gap-[32px]">
                            <img
                                className="w-full rounded-[24px]"
                                src={imgAboutLeft}
                                alt=""
                            />
                            <img
                                className="w-full rounded-[24px]"
                                src={imgAboutRight}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="">
                    <h3 className="text_section_h3_clamp w_heading_primary">
                        HOW WE WORK
                    </h3>
                </div>
                <div className="grid xl:grid-flow-col  gap-[80px]">
                    <div className="">
                        <img
                            className="w-full rounded-[24px]"
                            src={imgHWW}
                            alt=""
                        />
                    </div>
                    <div className="">
                        <OrderedList>
                            <List>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Maxime mollitia, molestiae
                                quas vel sint commodi repudiandae consequuntur
                                voluptatum laborum numquam blanditiis harum
                                quisquam eius sed odit fugiat iusto fuga
                                praesentium optio, eaque rerum! Provident
                                similique
                            </List>
                            <List>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Maxime mollitia, molestiae
                                quas vel sint commodi repudiandae consequuntur
                                voluptatum laborum numquam blanditiis harum
                                quisquam eius sed odit fugiat iusto fuga
                                praesentium optio, eaque rerum! Provident
                                similique
                            </List>
                            <List>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Maxime mollitia, molestiae
                                quas vel sint commodi repudiandae consequuntur
                                voluptatum laborum numquam blanditiis harum
                                quisquam eius sed odit fugiat iusto fuga
                                praesentium optio, eaque rerum! Provident
                                similique
                            </List>
                            <List>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Maxime mollitia, molestiae
                                quas vel sint commodi repudiandae consequuntur
                                voluptatum laborum numquam blanditiis harum
                                quisquam eius sed odit fugiat iusto fuga
                                praesentium optio, eaque rerum! Provident
                                similique
                            </List>
                        </OrderedList>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;

const OrderedList = styled.ol`
    // list-style-type: decimal;
    counter-reset: section;
    padding-left: 1rem;
    ::marker {
        color: #fca311;
        z-index: 1;
    }
`;

const List = styled.li`
    margin-bottom: 1rem;
    padding-left: 1.6rem;
    position: relative;
    &::before {
        counter-increment: section;
        content: counter(section, decimal-leading-zero);
        font-size: 1em;
        font-weight: bold;
        color: #fff;
        position: absolute;
        top: 0.5em;
        left: -3.5em;
        background: #1a72fa;
        padding: 10px 12px;
        border-radius: 50%;
    }
    &::after {
        content: "";
        position: absolute;
        display: block;
        border-top: 70px solid #e2e2e2;
        width: 1px;
        left: -35px;
        top: 50px;
    }
    @media (max-width: 1280px) {
        &::before {
            position: absolute;
            top: 0.5em;
            left: -2em;
        }
        &::after {
            left: -10px;
            top: 50px;
            border-top: 0px solid #e2e2e2 !important;
        }
    }
`;
