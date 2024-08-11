import { Button } from "@/components/ui/button";
import LogoText from "../../../assets/images/weigo-logo.png";
import { useSetUseIsAuthState } from "@/state/pages/useAuthApp";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

function NavigationEssential() {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    const setIsAuthState = useSetUseIsAuthState();
    const toggleAuthSignIn = () => {
        setIsAuthState({ authentication: false });
        navigate("/login-user");
    };
    const toggleAuthSignUp = () => {
        setIsAuthState({ authentication: false });
        navigate("/register-user");
    };
    const handleContactUs = () => {
        navigate("/contact");
    };

    useEffect(() => {
        if (
            currentPath === "/login-user" ||
            currentPath === "/register-user" ||
            currentPath === "/reset-user"
        ) {
            setIsAuthState({ authentication: false });
        }
    }, [currentPath, setIsAuthState]);

    return (
        <div className="border-b-[0.5px] border-[rgb(100,122,250)] bg_header">
            <div className="2xl:container xl:container md:container sm:container   relative flex justify-between items-center  pt-2 pb-2">
                <div className="">
                    <img
                        src={LogoText}
                        alt="Company Logo"
                        className="w-[100px] "
                    />
                </div>

                <div className="flex gap-4">
                    <Button variant="outline" onClick={toggleAuthSignIn}>
                        SignIn
                    </Button>

                    <Button variant="outline" onClick={toggleAuthSignUp}>
                        SignUp
                    </Button>

                    <Button variant="outline" onClick={handleContactUs}>
                        Contact Us
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default NavigationEssential;
