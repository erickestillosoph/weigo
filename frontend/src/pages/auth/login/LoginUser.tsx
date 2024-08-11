import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSetUseIsAuthState } from "@/state/pages/useAuthApp";
import { HomeIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";

function LoginUser() {
    const navigate = useNavigate();
    const setIsAuthState = useSetUseIsAuthState();
    const handleHome = () => {
        setIsAuthState({ authentication: true });
        navigate("/");
    };
    return (
        <div>
            <div className="w-full flex flex-row gap-2 p-8">
                <HomeIcon color="black" />
                <Label onClick={handleHome}>Home</Label>
            </div>
            <div className="flex justify-center items-center h-[80vh]">
                <div className="w-[30%]">
                    <form action="" className="flex flex-col gap-6">
                        <div className="">
                            <h1 className="text-4xl">Login!</h1>
                            <p>Welcome to weigo!</p>
                        </div>

                        <div className="">
                            <Input placeholder="Email Adress"></Input>
                        </div>
                        <div className="">
                            <Input placeholder="Password"></Input>
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
