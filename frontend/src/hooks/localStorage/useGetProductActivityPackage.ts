import {
    useIsActivityState,
    useIsCarRentalState,
    useIsInsuranceState,
    useIsProductState,
} from "@/state/common/useBooking";
import { useCallback, useEffect } from "react";

export const useGetProductActivityPackageFromLocalStorage = () => {
    const storeProduct = localStorage.getItem("productState");
    const storedActivity = localStorage.getItem("activityState");
    const storedInsurance = localStorage.getItem("insuranceState");
    const storedCarRental = localStorage.getItem("carRentalState");

    const defaultValueActivity = useIsActivityState();
    const defaultValueProduct = useIsProductState();
    const defaultValueInsurance = useIsInsuranceState();
    const defaultValueCarRental = useIsCarRentalState();

    const handleActivity = useCallback(() => {
        if (!storeProduct) {
            return [
                {
                    price: defaultValueActivity.price,
                    type: defaultValueActivity.type,
                },
            ];
        }
        const parsedData = JSON.parse(storeProduct);
        return [
            {
                price: parsedData.isActivityState.price,
                type: parsedData.isActivityState.type,
            },
        ];
    }, [storeProduct, defaultValueActivity.price, defaultValueActivity.type]);

    const handleProduct = useCallback(() => {
        if (!storedActivity) {
            return [
                {
                    price: defaultValueProduct.price,
                    type: defaultValueProduct.type,
                },
            ];
        }
        const parsedData = JSON.parse(storedActivity);
        return [
            {
                price: parsedData.isProductState.price,
                type: parsedData.isProductState.type,
            },
        ];
    }, [storedActivity, defaultValueProduct.price, defaultValueProduct.type]);
    const handleCarRental = useCallback(() => {
        if (!storedActivity) {
            return [
                {
                    price: defaultValueCarRental.price,
                    type: defaultValueCarRental.type,
                },
            ];
        }
        const parsedData = JSON.parse(storedActivity);
        return [
            {
                price: parsedData.isCarRentalState.price,
                type: parsedData.isCarRentalState.type,
            },
        ];
    }, [
        storedActivity,
        defaultValueCarRental.price,
        defaultValueCarRental.type,
    ]);
    const handleInsurance = useCallback(() => {
        if (!storedActivity) {
            return [
                {
                    price: defaultValueInsurance.price,
                    type: defaultValueInsurance.type,
                },
            ];
        }
        const parsedData = JSON.parse(storedActivity);
        return [
            {
                price: parsedData.isInsuranceState.price,
                type: parsedData.isInsuranceState.type,
            },
        ];
    }, [
        storedActivity,
        defaultValueInsurance.price,
        defaultValueInsurance.type,
    ]);

    useEffect(() => {
        handleActivity();
        handleProduct();
        handleInsurance();
        handleCarRental();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [storeProduct, storedActivity, storedCarRental, storedInsurance]);

    return {
        product: handleProduct(),
        activity: handleActivity(),
        insurance: handleInsurance(),
        carRental: handleCarRental(),
    };
};
