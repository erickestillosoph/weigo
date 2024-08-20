import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useGetProfile } from "@/hooks/profile/useGetProfile";
import { useProfile } from "@/hooks/profile/useProfile";
import { useSetUseIsAuthState } from "@/state/pages/useAuthApp";
import { HomeIcon } from "@radix-ui/react-icons";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();
    const setIsAuthState = useSetUseIsAuthState();
    const { handleSubmitForm, register, onSubmit } = useProfile();
    const { userInfo } = useGetProfile();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmitForm(async () => {
            try {
                await onSubmit.mutateAsync();
            } catch (e) {
                console.error(e);
            }
        })();
    };

    const handleHome = () => {
        setIsAuthState({ authentication: true });
        navigate("/");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
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
                                <Input
                                    {...register("first_name")}
                                    value={userInfo?.first_name || ""}
                                    placeholder="First Name"
                                    type="text"
                                ></Input>
                            </div>
                            <div className="w-full flex flex-col gap-3">
                                <Label>Last Name</Label>
                                <Input
                                    {...register("last_name")}
                                    value={userInfo?.last_name || ""}
                                    placeholder="Last Name"
                                    type="text"
                                ></Input>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label>Email Adress</Label>
                            <Input
                                {...register("email")}
                                value={userInfo?.email || ""}
                                placeholder="Email"
                                type="email"
                            ></Input>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex flex-col gap-3 w-full">
                                <Label>Phone Number</Label>
                                <Input
                                    {...register("phone_number")}
                                    value={userInfo?.phone_number || ""}
                                    placeholder="Phone Number"
                                    type="number"
                                ></Input>
                            </div>
                            <div className="flex flex-col gap-3 w-full">
                                <Label>Birthday</Label>
                                <Input
                                    {...register("birthday")}
                                    defaultValue={userInfo?.birthday || ""}
                                    placeholder="Email"
                                    type="date"
                                ></Input>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex flex-col gap-3 w-full">
                                <Label>Password</Label>
                                <Input
                                    {...register("password")}
                                    type="password"
                                    autoComplete="true"
                                ></Input>
                            </div>
                            <div className="flex flex-col gap-3 w-full">
                                <Label>Confirm Password</Label>
                                <Input
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
        </>
    );
}

export default Profile;
