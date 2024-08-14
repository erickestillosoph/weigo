import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSetUseIsAuthState } from "@/state/pages/useAuthApp";
import { HomeIcon } from "@radix-ui/react-icons";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();

    const setIsAuthState = useSetUseIsAuthState();
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    const handleHome = () => {
        setIsAuthState({ authentication: true });
        navigate("/");
    };

    return (
        <form
            onSubmit={(e) => {
                handleSubmit(e);
            }}
        >
            <div className="w-full flex flex-row gap-2 p-8">
                <HomeIcon color="black" />
                <Label onClick={handleHome}>Home</Label>
            </div>
            <div className="grid  sm:gap-24 gap-32 h-[100vh] items-center justify-center">
                <div className="w-full flex flex-col gap-8">
                    <h3 className="text_section_h3_clamp w_heading_primary">
                        Edit Profile
                    </h3>

                    <div className="w-full flex gap-6">
                        <div className="w-full flex flex-col gap-3">
                            <Label>First Name</Label>
                            <Input placeholder="First Name" type="text"></Input>
                        </div>
                        <div className="w-full flex flex-col gap-3">
                            <Label>Last Name</Label>
                            <Input placeholder="Last Name" type="text"></Input>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Label>Email Adress</Label>
                        <Input placeholder="Email" type="email"></Input>
                    </div>
                    <div className="flex gap-6">
                        <div className="flex flex-col gap-3 w-full">
                            <Label>Phone Number</Label>
                            <Input
                                placeholder="Phone Number"
                                type="number"
                            ></Input>
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <Label>Birthday</Label>
                            <Input placeholder="Email" type="date"></Input>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="flex flex-col gap-3 w-full">
                            <Label>Password</Label>
                            <Input
                                placeholder="Password"
                                type="password"
                                autoComplete="true"
                            ></Input>
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <Label>Confirm Password</Label>
                            <Input
                                placeholder="Confirm Password"
                                type="password"
                                autoComplete="true"
                            ></Input>
                        </div>
                    </div>
                    <div className="">
                        <Button type="submit">Submit</Button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Profile;
