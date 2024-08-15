import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSetUseIsAuthState } from "@/state/pages/useAuthApp";
import { HomeIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { FormEvent, useEffect } from "react";
import { useLogin } from "@/hooks/auth/useLogin";

function LoginUser() {
    const navigate = useNavigate();
    const {
        errorCsrfToken,
        errorFormState,
        handleSubmitForm,
        onSubmit,
        register,
    } = useLogin();

    const setIsAuthState = useSetUseIsAuthState();
    const handleHome = () => {
        setIsAuthState({ authentication: true });
        navigate("/");
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSubmitForm(() => {
            onSubmit.mutate();
        })();
    };
    useEffect(() => {
        console.log(errorCsrfToken);
        console.log(errorFormState);
    }, [errorFormState, errorCsrfToken]);
    return (
        <div>
            <div className="w-full flex flex-row gap-2 p-8">
                <HomeIcon color="black" />
                <Label onClick={handleHome}>Home</Label>
            </div>
            <div className="flex justify-center items-center h-[80vh]">
                <div className="w-[30%]">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-6"
                    >
                        <div className="">
                            <h1 className="text-4xl">Login!</h1>
                            <p>Welcome to weigo!</p>
                        </div>

                        <div className="">
                            <Input
                                placeholder="Email Adress"
                                {...register("email")}
                            ></Input>
                        </div>
                        <div className="">
                            <Input
                                placeholder="Password"
                                {...register("password")}
                            ></Input>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row gap-2 justify-center">
                                <Checkbox />
                                <Label
                                    htmlFor="terms1"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Remember Me
                                </Label>
                            </div>
                            <div>
                                <a href="/reset-user">
                                    <Label
                                        htmlFor="terms1"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Forgot Password?
                                    </Label>
                                </a>
                            </div>
                        </div>
                        <div className="">
                            <Button className="w-full" type="submit">
                                Submit
                            </Button>
                        </div>

                        <div>
                            <a href="/register-user">
                                <Label
                                    htmlFor="terms1"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    New here? Create an Account.
                                </Label>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginUser;
