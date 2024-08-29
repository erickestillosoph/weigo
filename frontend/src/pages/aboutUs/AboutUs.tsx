import TitleSection from "@/components/sections/titleSection";
import styled from "styled-components";
import image from "@/assets/images/titles/insurance_title.png";
import heroImage from "@/assets/images/hero/heroImage.png";
import heroImage2 from "@/assets/images/hero/heroImage2.png";
import heroImage3 from "@/assets/images/hero/heroImage3.png";
function AboutUs() {
    return (
        <div className="flex flex-col sm:gap-24 gap-32 h-[100%]">
            <TitleSection img={image} title="About Us"></TitleSection>
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
                                src={heroImage2}
                                alt=""
                            />
                            <img
                                className="w-full rounded-[24px]"
                                src={heroImage3}
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
                            src={heroImage}
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
        border-top: 66px solid #e2e2e2;
        width: 1px;
        left: -35px;
        top: 56px;
    }
    &:last-child::after {
        border-top: none !important;
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
