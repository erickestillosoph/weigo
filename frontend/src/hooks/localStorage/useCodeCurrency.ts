import LocalStorageService from "@/services/localStorageService";
import { useCallback, useEffect, useState } from "react";
import { useGeolocation } from "../currencyGeolocation/useGeolocation";
export const useCodeCurrencyLocalStorage = () => {
    const { countryCode, currencyValue } = useGeolocation();
    const [currency, setCurrency] = useState<string>(currencyValue);
    const [code, setCode] = useState<string>(countryCode);
    const [country, setCountry] = useState<string>(countryCode);
    const countryState = LocalStorageService.getItem("countryState");
    const currencyState = LocalStorageService.getItem("currencyState");
    const currencyCodeState = LocalStorageService.getItem("currencyCodeState");
    const handleCurrency = useCallback(() => {
        setCurrency(JSON.stringify(currencyState).replace(/[^\d.-]/g, ""));
    }, [currencyState]);
    const handleCurrencyCode = useCallback(() => {
        const match = JSON.stringify(currencyCodeState).match(/[A-Z]{3}/);
        if (match) setCode(match[0]);
    }, [currencyCodeState]);
    const handleCountry = useCallback(() => {
        const match = JSON.stringify(countryState).match(/[A-Z]{2}/);
        if (match) setCountry(match[0]);
    }, [countryState]);

    useEffect(() => {
        handleCurrency();
        handleCurrencyCode();
        handleCountry();
    }, [
        handleCountry,
        handleCurrency,
        handleCurrencyCode,
        currency,
        code,
        country,
    ]);
    return {
        code,
        currency,
        country,
    };
};
