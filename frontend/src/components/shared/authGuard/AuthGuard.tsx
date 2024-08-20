import cookieService from "@/services/cookieService";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }: { children: JSX.Element }) => {
    const cookieTokenId = !!cookieService.getCookieData("tokenId");

    if (!cookieTokenId) {
        return <Navigate to="/login-user" />;
    }

    return children;
};

export default AuthGuard;
