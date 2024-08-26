import { Label } from "@/components/ui/label";
import { useSetUseIsAuthState } from "@/state/pages/useAuthApp";
import { HomeIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

function Payment() {
    const navigate = useNavigate();
    const setIsAuthState = useSetUseIsAuthState();
    const handleHome = () => {
        setIsAuthState({ authentication: true });
        navigate("/");
    };
    return (
        <div className="w-full h-[100vh]">
            <div className="w-full flex flex-row gap-2 p-8">
                <HomeIcon color="black" />
                <Label onClick={handleHome}>Home</Label>
            </div>

            <div className="flex justify-center items-center h-[80vh]">
                <h1 className="text-[80px]">404 Not Found</h1>
            </div>
        </div>
    );
}

export default Payment;
