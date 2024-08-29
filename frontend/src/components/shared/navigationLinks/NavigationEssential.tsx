import { Button } from "@/components/ui/button";
import LogoText from "../../../assets/images/weigo-logo.png";
import { useSetUseIsAuthState } from "@/state/pages/useAuthApp";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { localStorageClient } from "@/lib/localStorage/localStorageClient";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RocketIcon } from "lucide-react";
import {
    useIsActivityState,
    useIsCarRentalState,
    useIsInsuranceState,
    useIsProductState,
} from "@/state/common/useBooking";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import ItemList from "@/pages/itemList/ItemList";
import { useToast } from "@/components/ui/toast/use-toast";
import { useComputationAmount } from "@/hooks/payment/computations/useComputationAmount";

function NavigationEssential() {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    const setIsAuthState = useSetUseIsAuthState();
    const [authState, setAuthState] = useState(null);
    const [isAvatar, setIsAvatar] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const isActivityState = useIsActivityState();
    const isProductState = useIsProductState();
    const isInsurance = useIsInsuranceState();
    const isCarRental = useIsCarRentalState();
    const { amount: totalAmountToPay } = useComputationAmount();

    const [rocketState, setRocketState] = useState<boolean>(false);

    const { toast } = useToast();

    useEffect(() => {
        if (isProductState.state) setRocketState(true);
        if (
            isActivityState.state === false &&
            isProductState.state === false &&
            isInsurance.state === false &&
            isCarRental.state === false
        )
            setRocketState(false);
    }, [
        isActivityState.state,
        isProductState.state,
        isInsurance.state,
        isCarRental.state,
    ]);

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
    const handleRedirect = () => {
        navigate("/login-user");
    };
    const handleHome = () => {
        navigate("/");
    };
    const handlePayment = (data: string) => {
        if (isProductState.state === true) {
            if (data === "credit") {
                navigate("/payment/credit-card");
            } else {
                navigate("/payment/payment-all");
            }
        }
        if (isProductState.state === false) {
            toast({
                variant: "destructive",
                draggable: true,
                duration: 3000,
                title: "Error Redirecting",
                description: "You need to add a Package",
            });
        }
    };

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("authState");
        const isAuthPathExist = authPath.includes(currentPath);
        const isCommonPathExist = commonPath.includes(currentPath);
        if (!isCommonPathExist || isAuthPathExist) {
            setIsAuthState({ authentication: false });
        }
        if (isLoggedIn) {
            setIsAvatar(true);
            setIsAuthenticated(true);
        } else {
            setIsAvatar(false);
            setIsAuthenticated(false);
        }

        // Retrieve and set the localStorage value
        const storedAuthState = localStorageClient.getLoginnedLSKey();
        setAuthState(storedAuthState);
    }, [currentPath, setIsAuthState, authPath, commonPath]);

    return (
        <div className="border-b-[0.5px] border-[rgb(100,122,250)] bg_header">
            <div className="2xl:container xl:container md:container sm:container   relative flex justify-between items-center  pt-2 pb-2">
                <div className="" onClick={handleHome}>
                    <img
                        src={LogoText}
                        alt="Company Logo"
                        className="w-[100px]"
                    />
                </div>

                <div className="flex gap-8">
                    <div className="">
                        {rocketState && (
                            <div>
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <div className="relative">
                                            <RocketIcon
                                                className="text-white stroke-2 md:w-[32px] md:h-[32px]"
                                                height="16px"
                                                width="16px"
                                            />
                                            <div className="absolute bg-yellow-400 text-black font-black pl-[8px] pr-[8px] pt-1 pb-1 text-[8px] rounded-full right-[-13px] bottom-[-2px]">
                                                {1}
                                            </div>
                                        </div>
                                    </SheetTrigger>
                                    <SheetContent>
                                        <SheetHeader className="pb-[12px]">
                                            <SheetTitle>
                                                Your Booking and Items
                                            </SheetTitle>
                                            <SheetDescription>
                                                <div className="flex justify-between pt-4 pb-4">
                                                    <p className="text-green-500">
                                                        Total Amount:
                                                    </p>
                                                    <p className="text-green-500 !text-[20px]">
                                                        {totalAmountToPay}
                                                    </p>
                                                </div>
                                            </SheetDescription>
                                        </SheetHeader>
                                        <div className="max-h-[80vh] overflow-y-auto">
                                            <ItemList />
                                        </div>
                                        <SheetFooter className="p-[12px] w-full">
                                            {isAuthenticated ? (
                                                <>
                                                    <SheetClose asChild>
                                                        <Button
                                                            onClick={() =>
                                                                handlePayment(
                                                                    "credit",
                                                                )
                                                            }
                                                        >
                                                            Credit Card
                                                        </Button>
                                                    </SheetClose>
                                                    <SheetClose asChild>
                                                        <Button
                                                            onClick={() =>
                                                                handlePayment(
                                                                    "payment",
                                                                )
                                                            }
                                                        >
                                                            Other Payment
                                                        </Button>
                                                    </SheetClose>
                                                </>
                                            ) : (
                                                <div className="w-full gap-[8px] grid">
                                                    <p>
                                                        To Proceed to Payment.
                                                        Please SignIn
                                                    </p>
                                                    <Button
                                                        onClick={handleRedirect}
                                                    >
                                                        Sign In
                                                    </Button>
                                                </div>
                                            )}
                                        </SheetFooter>
                                    </SheetContent>
                                </Sheet>
                            </div>
                        )}
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
                        {isAvatar && (
                            <div className="">
                                <Avatar onClick={handleProfile}>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>W</AvatarFallback>
                                </Avatar>
                            </div>
                        )}
                        <Button variant="outline" onClick={handleContactUs}>
                            Contact Us
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavigationEssential;
