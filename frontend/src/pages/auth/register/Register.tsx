import Loader from "@/components/shared/loader/LoaderComponent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRegister } from "@/hooks/auth/useRegister";
import { useSetUseIsAuthState } from "@/state/pages/useAuthApp";
import { HomeIcon } from "@radix-ui/react-icons";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
function Register() {
    const navigate = useNavigate();
    const setIsAuthState = useSetUseIsAuthState();
    const {
        register,
        onSubmit: { mutateAsync, isPending },
        handleSubmitForm,
    } = useRegister();
    const handleHome = () => {
        setIsAuthState({ authentication: true });
        navigate("/");
    };
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSubmitForm(async () => {
            try {
                await mutateAsync();
            } catch (e) {
                console.error(e);
            }
        })();
    };

    return (
        <div className="relative h-[70vh]">
            <Loader isLoading={isPending} />
            {!isPending && (
                <div className="">
                    <div className="w-full flex flex-row gap-2 p-8">
                        <HomeIcon color="black" />
                        <Label onClick={handleHome}>Home</Label>
                    </div>
                    <div className="flex flex-col justify-center items-center h-[80vh]">
                        <div className="flex flex-col w-[30%] gap-3 ">
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-3"
                            >
                                <div className="">
                                    <h1 className="text-4xl">Join us!</h1>
                                    <p>Fill up the form</p>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-full">
                                        <Input
                                            {...register("first_name")}
                                            placeholder="First Name"
                                        ></Input>
                                    </div>
                                    <div className="w-full">
                                        <Input
                                            {...register("last_name")}
                                            placeholder="Last Name"
                                        ></Input>
                                    </div>
                                </div>
                                <div className="">
                                    <Input
                                        {...register("email")}
                                        placeholder="Email Address"
                                    ></Input>
                                </div>
                                <div className="">
                                    <Input
                                        {...register("password")}
                                        placeholder="Password"
                                    ></Input>
                                </div>
                                <div className="">
                                    <Input
                                        {...register("password_confirmation")}
                                        placeholder="Password Confirmation"
                                    ></Input>
                                </div>
                                <div className="">
                                    <Button className="w-full" type="submit">
                                        Submit
                                    </Button>
                                </div>
                                <div>
                                    <a href="/login-user">
                                        <Label
                                            htmlFor="terms1"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Had an Account Already? Click here.
                                        </Label>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Register;
