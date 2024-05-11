import TitleSection from "@/components/sections/titleSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/text-area";

function Contact() {
    const imgBackground = "https://source.unsplash.com/900x1200/?airplane";
    const imgAboutLeft =
        "https://source.unsplash.com/900x1200/?business-person";
    const imgAboutRight = "https://source.unsplash.com/900x1200/?office";
    return (
        <div className="flex flex-col sm:gap-24 gap-32 h-[100%]">
            <TitleSection img={imgBackground} title="Contact Us"></TitleSection>
            <div className="container grid xl:grid-cols-2 gap-12">
                <div className="w-full flex flex-col gap-8">
                    <h3 className="text_section_h3_clamp w_heading_primary">
                        GET IN TOUCH
                    </h3>
                    <form action="">
                        <div className="flex flex-col gap-6">
                            <div className="flex sm:flex-row flex-col w-full gap-6">
                                <div className="w-full flex flex-col gap-3">
                                    <Label>First Name</Label>
                                    <Input
                                        placeholder="First Name"
                                        type="text"
                                    ></Input>
                                </div>
                                <div className="w-full flex flex-col gap-3">
                                    <Label>Last Name</Label>
                                    <Input
                                        placeholder="Last Name"
                                        type="text"
                                    ></Input>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Label>Email</Label>
                                <Input placeholder="Email" type="email"></Input>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Label>Message</Label>
                                <Textarea
                                    placeholder="Message"
                                    className="h-[170px]"
                                ></Textarea>
                            </div>
                            <div className="">
                                <Button>Submit</Button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="grid grid-cols-2 gap-[32px]">
                    <div className="md:mt-32">
                        <img
                            className="w-full rounded-[24px]"
                            src={imgAboutLeft}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="w-full rounded-[24px]"
                            src={imgAboutRight}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
