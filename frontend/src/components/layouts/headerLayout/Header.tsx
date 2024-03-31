import { useEffect, useState } from "react";
import { Navigation, NavigationEssential } from "../../shared/navigationLinks";

function Header() {
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

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
        <div className="relative">
            {headerVisibible && <NavigationEssential></NavigationEssential>}
            <Navigation></Navigation>
        </div>
    );
}

export default Header;
