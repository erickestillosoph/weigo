import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSetUseIsAuthState } from "@/state/pages/useAuthApp";
import { HomeIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
function Reset() {
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
                <div className="w-[30%] ">
                    <form action="" className="flex flex-col gap-6">
                        <div className="">
                            <h1 className="text-4xl">Reset your password!</h1>
                            <p>
                                Fill out the email you want to reset the
                                password
                            </p>
                        </div>
                        <div className="">
                            <Input placeholder="Email Adress"></Input>
                        </div>

                        <div className="">
                            <Button className="w-full" type="submit">
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Reset;
