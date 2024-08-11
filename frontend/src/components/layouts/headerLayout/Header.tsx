import { useEffect, useState } from "react";
import { Navigation, NavigationEssential } from "../../shared/navigationLinks";
import { useIsAuthState } from "@/state/pages/useAuthApp";

function Header() {
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const isAuthState = useIsAuthState();
    const { authentication } = isAuthState;

    let headerVisibible = true;
    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    if (screenSize.width < 768) {
        headerVisibible = false;
    } else {
        headerVisibible = true;
    }
    return (
        <div className="sticky top-[-65px] z-[60]">
            {authentication && (
                <>
                    {headerVisibible && (
                        <NavigationEssential></NavigationEssential>
                    )}

                    <div className="bg_header">
                        <Navigation></Navigation>
                    </div>
                </>
            )}
        </div>
    );
}

export default Header;
