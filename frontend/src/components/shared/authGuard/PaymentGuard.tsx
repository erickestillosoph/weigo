import {
    useIsActivityState,
    useIsProductState,
} from "@/state/common/useBooking";
import { Navigate } from "react-router-dom";

const PaymentGuard = ({ children }: { children: JSX.Element }) => {
    const isActivityState = useIsActivityState();
    const isProductState = useIsProductState();

    if (!isActivityState.state && !isProductState.state) {
        return <Navigate to="/login-user" />;
    }

    return children;
};

export default PaymentGuard;
