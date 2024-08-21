import { Button } from "@/components/ui/button";
import LogoText from "../../../assets/images/weigo-logo.png";
import { useSetUseIsAuthState } from "@/state/pages/useAuthApp";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { localStorageClient } from "@/lib/localStorage/localStorageClient";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function NavigationEssential() {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    const setIsAuthState = useSetUseIsAuthState();
    const [authState, setAuthState] = useState(null);
    const [isAvatar, setIsAvatar] = useState(false);

    const commonPath = useMemo(
        () => [
            "/",
            "/about-us",
            "/domestic-packages",
            "/international-packages",
            "/insurance",
            "/activities",
            "/visa",
            "/car-rental",
            "/contact",
        ],
        [],
    );
    const authPath = useMemo(
        () => ["/reset-user", "/login-user", "/register", "/resend-link"],
        [],
    );

    const toggleAuthSignIn = () => {
        setIsAuthState({ authentication: false });
        navigate("/login-user");
    };
    const toggleAuthSignUp = () => {
        setIsAuthState({ authentication: false });
        navigate("/register");
    };
    const handleContactUs = () => {
        navigate("/contact");
    };

    const handleProfile = () => {
        navigate("/profile");
    };

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("authState");
        const isAuthPathExist = authPath.includes(currentPath);
        const isCommonPathExist = commonPath.includes(currentPath);
        if (!isCommonPathExist || isAuthPathExist) {
            setIsAuthState({ authentication: false });
        }
        if (isLoggedIn) setIsAvatar(true);
        else setIsAvatar(false);

        // Retrieve and set the localStorage value
        const storedAuthState = localStorageClient.getLoginnedLSKey();
        setAuthState(storedAuthState);
    }, [currentPath, setIsAuthState, authPath, commonPath]);

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
                    {!authState && (
                        <>
                            <Button
                                variant="outline"
                                onClick={toggleAuthSignIn}
                            >
                                SignIn
                            </Button>

                            <Button
                                variant="outline"
                                onClick={toggleAuthSignUp}
                            >
                                SignUp
                            </Button>
                        </>
                    )}
                    <Button variant="outline" onClick={handleContactUs}>
                        Contact Us
                    </Button>
                    {isAvatar && (
                        <div className="">
                            <Avatar onClick={handleProfile}>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>W</AvatarFallback>
                            </Avatar>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default NavigationEssential;
