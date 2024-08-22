import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useGetProfile } from "@/hooks/profile/useGetProfile";
import { useProfile } from "@/hooks/profile/useProfile";
import { useSetUseIsAuthState } from "@/state/pages/useAuthApp";
import { HomeIcon } from "@radix-ui/react-icons";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/images/hero/heroImage.png";
import cookieService from "@/services/cookieService";
import { useLogout } from "@/hooks/auth/useLogout";
import LocalStorageService from "@/services/localStorageService";
import { useDelete } from "@/hooks/auth/useDeleteProfile";
import Loader from "@/components/shared/loader/LoaderComponent";
function Profile() {
    const navigate = useNavigate();
    const setIsAuthState = useSetUseIsAuthState();
    const {
        handleSubmitForm,
        register,
        onSubmit: { isPending, mutateAsync },
    } = useProfile();
    const { mutate: mutateLogout } = useLogout();
    const { mutate: mutateDelete } = useDelete();
    const { userInfo } = useGetProfile();
    const [isEdit, setIsEdit] = useState(true);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        handleSubmitForm(async () => {
            try {
                await mutateAsync();
                setIsEdit(true);
            } catch (e) {
                console.error(e);
            }
        })();
    };

    const handleLogout = () => {
        cookieService.remove("tokenId");
        cookieService.remove("userId");
        cookieService.remove("uuid");
        cookieService.clearAll();
        LocalStorageService.clear();
        mutateLogout();
        setIsAuthState({ authentication: true });
        window.location.replace("/");
    };

    const handleHome = () => {
        setIsAuthState({ authentication: true });
        navigate("/");
    };

    const handDelete = () => {
        mutateDelete();
        cookieService.clearAll();
        LocalStorageService.clear();
        setIsAuthState({ authentication: true });
    };

    return (
        <form onSubmit={handleSubmit} className=" h-[100vh]">
            <div className="grid grid-cols-2  h-[100vh]">
                <img src={heroImage} className="w-[50vw]  h-[100vh]" alt="" />

                <div className="grid  h-[20vh] items-center justify-center">
                    <div className="w-full flex flex-row gap-2 mt-9 mb-8">
                        <HomeIcon color="black" />
                        <Label onClick={handleHome}>Home</Label>
                    </div>

                    {isEdit && (
                        <div className="relative w-[40vw] h-[80vh]">
                            <Loader isLoading={isPending} />
                            {!isPending && (
                                <div className="w-full gap-12 ">
                                    <h3 className="text-[72px] w_heading_primary">
                                        WEIGO PROFILE
                                    </h3>
                                    <div className="flex flex-col gap-6">
                                        <div className="mt-4">
                                            <p className="!text-[14px] font-thin">
                                                Full Name
                                            </p>
                                            <div className="w-full flex gap-6 ">
                                                <div className=" flex flex-row gap-3">
                                                    <p className="!text-[20px]">
                                                        {userInfo?.first_name}
                                                    </p>
                                                    <p className="!text-[20px]">
                                                        {userInfo?.last_name}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full flex gap-2 ">
                                            <div className=" flex flex-col">
                                                <p className="!text-[14px] font-thin">
                                                    Email
                                                </p>
                                                <p className="!text-[20px]">
                                                    {userInfo?.email}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-full flex gap-6">
                                            <div className=" flex flex-col ">
                                                <p className="!text-[14px] font-thin">
                                                    Phone Number
                                                </p>
                                                <p className="!text-[20px]">
                                                    {userInfo?.phone_number}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-full flex gap-6">
                                            <div className=" flex flex-col">
                                                <p className="!text-[14px] font-thin">
                                                    Birthday
                                                </p>
                                                <p className="!text-[20px]">
                                                    {userInfo?.birthday}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-20">
                                            <div className="flex justify-between mt-6">
                                                <div className="">
                                                    <p className="!text-[14px] mb-4 font-thin">
                                                        Comeback anytime!
                                                    </p>
                                                    <Button
                                                        variant="secondary"
                                                        onClick={handleLogout}
                                                    >
                                                        Logout Account
                                                    </Button>
                                                </div>
                                                <div className="">
                                                    <p className="!text-[14px] mb-4 font-thin">
                                                        Quick Change!
                                                    </p>
                                                    <Button
                                                        onClick={() =>
                                                            setIsEdit(!isEdit)
                                                        }
                                                    >
                                                        Edit Profile
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="">
                                                <p className="!text-[14px] mb-4 font-thin">
                                                    Are you sure?
                                                </p>
                                                <Button
                                                    variant="destructive"
                                                    onClick={handDelete}
                                                >
                                                    Delete Profile
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                    {!isEdit && (
                        <div className="relative w-[30vw] h-[80vh]">
                            <Loader isLoading={isPending} />

                            {!isPending && (
                                <div className="grid  sm:gap-24 gap-32 h-[80vh] items-center justify-center">
                                    <div className="w-full flex flex-col gap-8">
                                        <h3 className="text_section_h3_clamp w_heading_primary">
                                            Edit Profile
                                        </h3>

                                        <div className="w-full flex gap-6">
                                            <div className="w-full flex flex-col gap-3">
                                                <Label>First Name</Label>
                                                <Input
                                                    {...register("first_name")}
                                                    defaultValue={
                                                        userInfo?.first_name ||
                                                        ""
                                                    }
                                                    placeholder="First Name"
                                                    type="text"
                                                ></Input>
                                            </div>
                                            <div className="w-full flex flex-col gap-3">
                                                <Label>Last Name</Label>
                                                <Input
                                                    {...register("last_name")}
                                                    defaultValue={
                                                        userInfo?.last_name ||
                                                        ""
                                                    }
                                                    placeholder="Last Name"
                                                    type="text"
                                                ></Input>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <Label>Email Adress</Label>
                                            <Input
                                                {...register("email")}
                                                defaultValue={
                                                    userInfo?.email || ""
                                                }
                                                placeholder="Email"
                                                type="email"
                                            ></Input>
                                        </div>
                                        <div className="flex gap-6">
                                            <div className="flex flex-col gap-3 w-full">
                                                <Label>Phone Number</Label>
                                                <Input
                                                    {...register(
                                                        "phone_number",
                                                    )}
                                                    defaultValue={
                                                        userInfo?.phone_number ||
                                                        ""
                                                    }
                                                    placeholder="Phone Number"
                                                    type="number"
                                                ></Input>
                                            </div>
                                            <div className="flex flex-col gap-3 w-full">
                                                <Label>Birthday</Label>
                                                <Input
                                                    {...register("birthday")}
                                                    defaultValue={
                                                        userInfo?.birthday || ""
                                                    }
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
                                        <div className="flex justify-between">
                                            <Button type="submit">
                                                Submit
                                            </Button>
                                            <Button
                                                variant="secondary"
                                                onClick={() => setIsEdit(true)}
                                            >
                                                Profile
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </form>
    );
}

export default Profile;
