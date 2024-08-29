import TitleSection from "@/components/sections/titleSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import styled from "styled-components";
import image from "@/assets/images/titles/insurance_title.png";
import heroImage from "@/assets/images/hero/heroImage.png";

function Visa() {
    // const imageData = "https://source.unsplash.com/200x200/?flag";
    return (
        <div className="flex flex-col sm:gap-24 gap-32 h-[100%]">
            <TitleSection img={image} title="Visa"></TitleSection>
            <div className="container grid gap-6">
                <p>Search country for VISA</p>
                <div className="grid xl:grid-cols-2 grid-cols-1 gap-24">
                    <div className="">
                        <div className="w-full flex flex-col gap-8">
                            <form action="">
                                <div className="w-full">
                                    <Input
                                        placeholder="Search"
                                        type="text"
                                        className="bg-gray-100 h-[48px] pl-4 pr-4"
                                    ></Input>
                                </div>
                            </form>
                            <div className="flex flex-col gap-2 border border-solid rounded-xl border-gray-200">
                                <div className="flex flex-row items-center p-3 gap-6">
                                    <img
                                        className="w-[120px] h-[120px] rounded-[14px]"
                                        src={heroImage}
                                        alt=""
                                    />
                                    <div className="flex flex-col gap-1 w-full">
                                        <p className="!text-[20px] text-blue-600 !font-extrabold">
                                            SOUTH KOREA
                                        </p>
                                        <p>Embassy Website</p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="w-full border-b border-solid border-gray-200">
                                        <div className="flex justify-between p-4">
                                            <p className="text-blue-600 !font-extrabold">
                                                Visa Type
                                            </p>
                                            <p>KR Tourist Visa</p>
                                        </div>
                                    </div>
                                    <div className="w-full border-b border-solid border-gray-200">
                                        <div className="flex justify-between p-4">
                                            <p className="text-blue-600 !font-extrabold">
                                                Processing Time
                                            </p>
                                            <p>
                                                minimum of 10 working days
                                                (Subject to Change)
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full border-b border-solid border-gray-200">
                                        <div className="flex justify-between p-4">
                                            <p className="text-blue-600 !font-extrabold">
                                                Visa Fee
                                            </p>
                                            <p>Php 900.00</p>
                                        </div>
                                    </div>
                                    <div className="w-full ">
                                        <div className="flex justify-between p-4 border-b border-solid border-gray-200">
                                            <p className="text-blue-600 !font-extrabold">
                                                Processing Fee (Visa Only)
                                            </p>
                                            <p>Php 900.00</p>
                                        </div>
                                    </div>
                                    <div className="w-full ">
                                        <div className="flex justify-between p-4 border-b border-solid border-gray-200">
                                            <p className="text-blue-600 !font-extrabold">
                                                Processing Fee (With Tours)
                                            </p>
                                            <p>Php 1,000.00</p>
                                        </div>
                                    </div>
                                    <div className="w-full ">
                                        <div className="p-4">
                                            <p className="text-blue-600 !font-extrabold">
                                                Notice
                                            </p>
                                            <div className="m-4">
                                                <ul className="list-disc">
                                                    <li className="!text-[14px]">
                                                        Visa fee for foreign
                                                        passport holders - Php
                                                        2000
                                                    </li>
                                                    <li className="!text-[14px]">
                                                        Visa processing fee is
                                                        free of charge if
                                                        availing any of our
                                                        Korea Group Tour
                                                        packages.
                                                    </li>
                                                    <li className="!text-[14px]">
                                                        Processing time and fees
                                                        are subject to change
                                                        without prior notice.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full p-4 flex flex-col gap-3">
                                        <p>
                                            *** Rates are valid for NCR branches
                                            only.
                                        </p>
                                        <div className="flex  gap-4">
                                            <Button>Requirement</Button>
                                            <Button>Application Form</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="xl:ml-[-32px]">
                            <h3 className="text_section_h3_clamp w_heading_primary">
                                KOREAN TOURIST VISA
                            </h3>
                            <div className="">
                                <p>STEP BY STEP</p>
                            </div>
                        </div>
                        <div className=" ml-[32px]">
                            <OrderedList>
                                <List>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Maxime mollitia, molestiae
                                    quas vel sint commodi repudiandae
                                    consequuntur voluptatum laborum numquam
                                    blanditiis harum quisquam eius sed odit
                                    fugiat iusto fuga praesentium optio, eaque
                                    rerum! Provident similique
                                </List>
                                <List>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Maxime mollitia, molestiae
                                    quas vel sint commodi repudiandae
                                    consequuntur voluptatum laborum numquam
                                    blanditiis harum quisquam eius sed odit
                                    fugiat iusto fuga praesentium optio, eaque
                                    rerum! Provident similique
                                </List>
                                <List>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Maxime mollitia, molestiae
                                    quas vel sint commodi repudiandae
                                    consequuntur voluptatum laborum numquam
                                    blanditiis harum quisquam eius sed odit
                                    fugiat iusto fuga praesentium optio, eaque
                                    rerum! Provident similique
                                </List>
                                <List>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Maxime mollitia, molestiae
                                    quas vel sint commodi repudiandae
                                    consequuntur voluptatum laborum numquam
                                    blanditiis harum quisquam eius sed odit
                                    fugiat iusto fuga praesentium optio, eaque
                                    rerum! Provident similique
                                </List>
                                <List>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Maxime mollitia, molestiae
                                    quas vel sint commodi repudiandae
                                    consequuntur voluptatum laborum numquam
                                    blanditiis harum quisquam eius sed odit
                                    fugiat iusto fuga praesentium optio, eaque
                                    rerum! Provident similique
                                </List>
                                <List>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Maxime mollitia, molestiae
                                    quas vel sint commodi repudiandae
                                    consequuntur voluptatum laborum numquam
                                    blanditiis harum quisquam eius sed odit
                                    fugiat iusto fuga praesentium optio, eaque
                                    rerum! Provident similique
                                </List>
                            </OrderedList>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Visa;

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
        }
    }
`;
