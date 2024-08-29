import {
    useIsActivityState,
    useIsCarRentalState,
    useIsInsuranceState,
    useIsProductState,
} from "@/state/common/useBooking";
import { useIsCurrencyState } from "@/state/common/useCurrency";
import { useCallback, useEffect } from "react";

export const useComputationAmount = () => {
    const isCurrencyState = useIsCurrencyState();
    const isActivity = useIsActivityState();
    const isProductState = useIsProductState();
    const isInsuranceState = useIsInsuranceState();
    const isCarRentalState = useIsCarRentalState();

    const sumAmount = useCallback(() => {
        const sumPrice =
            parseFloat(isActivity.price || "0") +
            parseFloat(isProductState.price || "0") +
            parseFloat(isInsuranceState.price || "0") +
            parseFloat(isCarRentalState.price || "0");

        const calculatedAmount = sumPrice.toFixed(2);

        return calculatedAmount;
    }, [
        isProductState.price,
        isActivity.price,
        isCarRentalState.price,
        isInsuranceState.price,
    ]);

    useEffect(() => {
        sumAmount();
    }, [
        sumAmount,
        isActivity,
        isProductState,
        isCurrencyState,
        isCarRentalState,
        isInsuranceState,
    ]);

    return { amount: sumAmount() };
};
