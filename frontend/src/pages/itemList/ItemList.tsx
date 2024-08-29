import CardItemsDefault from "@/components/shared/card/cardCommonDefault/CardItemsDefault";
import { Button } from "@/components/ui/button";
import LocalStorageService from "@/services/localStorageService";
import {
    useIsActivityState,
    useIsCarRentalState,
    useIsInsuranceState,
    useIsProductState,
    useSetUseActivityState,
    useSetUseCarRentalState,
    useSetUseInsuranceState,
    useSetUseIsProductState,
} from "@/state/common/useBooking";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

function ItemList() {
    const setProduct = useSetUseIsProductState();
    const setActivity = useSetUseActivityState();
    const setInsurance = useSetUseInsuranceState();
    const setCarRental = useSetUseCarRentalState();
    const isProduct = useIsProductState();
    const isActivity = useIsActivityState();
    const isInsurance = useIsInsuranceState();
    const isCarRental = useIsCarRentalState();
    const navigate = useNavigate();
    const handleDelete = useCallback(
        (data: string) => {
            if (data === "product") {
                LocalStorageService.removeItem("productState");
                setProduct({ state: false });
            }
            if (data === "insurance") {
                LocalStorageService.removeItem("insuranceState");
                setInsurance({ state: false });
            }
            if (data === "car") {
                LocalStorageService.removeItem("carRentalState");
                setCarRental({ state: false });
            }
            if (data === "activity") {
                LocalStorageService.removeItem("activityState");
                setActivity({ state: false });
            }
        },
        [setActivity, setCarRental, setInsurance, setProduct],
    );
    const handleRedirect = (data: string) => {
        if (data === "product") navigate("/domestic-packages");
        else if (data === "activity") navigate("/activities");
        else if (data === "insurance") navigate("/insurance");
        else if (data === "car") navigate("/car-rental");
    };
    return (
        <div className="grid gap-[12px]">
            {!isProduct.state && (
                <div>
                    <p>You need to book a Product!</p>
                    <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleRedirect("product")}
                    >
                        Get Product
                    </Button>
                </div>
            )}
            {isProduct.state && (
                <div className="grid gap-[8px]">
                    <div>
                        <p>Product Trip</p>
                    </div>
                    <div className="grid gap-[12px]">
                        <CardItemsDefault
                            price={isProduct.price!}
                            symbol={isProduct.symbol!}
                            src={isProduct.image}
                            title={isProduct.title}
                            onDelete={() => handleDelete("product")}
                        ></CardItemsDefault>
                    </div>
                </div>
            )}
            {!isActivity.state && (
                <div>
                    <p>Check out more Activities!</p>
                    <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleRedirect("activity")}
                    >
                        Activities
                    </Button>
                </div>
            )}
            {isActivity.state && (
                <div className="grid gap-[8px]">
                    <div>
                        <p>Activities</p>
                    </div>
                    <div className="grid gap-[12px]">
                        <CardItemsDefault
                            price={isActivity.price!}
                            title={isActivity.title!}
                            symbol={isActivity.symbol!}
                            src={isActivity.image}
                            onDelete={() => handleDelete("activity")}
                        ></CardItemsDefault>
                    </div>
                </div>
            )}
            {!isInsurance.state && (
                <div>
                    <p>You need an insurance!</p>
                    <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleRedirect("insurance")}
                    >
                        Insurance
                    </Button>
                </div>
            )}
            {isInsurance.state && (
                <div className="grid gap-[8px]">
                    <div>
                        <p>Insurance</p>
                    </div>
                    <div className="grid gap-[12px]">
                        <CardItemsDefault
                            price={isInsurance.price!}
                            title={isInsurance.title!}
                            symbol={isInsurance.symbol!}
                            src={isInsurance.image}
                            onDelete={() => handleDelete("insurance")}
                        ></CardItemsDefault>
                    </div>
                </div>
            )}
            {!isCarRental.state && (
                <div>
                    <p>You have an option to rent a car.</p>
                    <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleRedirect("car")}
                    >
                        Car Rental
                    </Button>
                </div>
            )}
            {isCarRental.state && (
                <div className="grid gap-[8px]">
                    <div>
                        <p>Car Rental</p>
                    </div>
                    <div className="grid gap-[12px]">
                        <CardItemsDefault
                            price={isCarRental.price!}
                            title={isCarRental.title!}
                            symbol={isCarRental.symbol!}
                            src={isCarRental.image}
                            onDelete={() => handleDelete("car")}
                        ></CardItemsDefault>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ItemList;
