import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useSetUseIsAuthState } from "@/state/pages/useAuthApp";
import { HomeIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

function ThankYou() {
    const navigate = useNavigate();
    const setIsAuthState = useSetUseIsAuthState();
    const handleHome = () => {
        setIsAuthState({ authentication: true });
        navigate("/");
    };
    const handleRedirect = () => {
        setIsAuthState({ authentication: true });
        navigate("/");
    };
    return (
        <div className="w-full h-[100vh]">
            <div className="w-full flex flex-row gap-2 p-8">
                <HomeIcon color="black" />
                <Label onClick={handleHome}>Home</Label>
            </div>

            <div className="grid justify-center items-center h-[80vh]">
                <h1 className="text-[80px]">Thank You For Paying </h1>
                <div className="grid gap-[32px]">
                    <p className="text-[32px]">You're payment is successful!</p>
                    <Button variant="outline" onClick={handleRedirect}>
                        Book Again
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ThankYou;
