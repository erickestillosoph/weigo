import {
    useIsCountryCodeState,
    useIsCurrencyCodeState,
    useIsCurrencyState,
    useIsSymbolCodeState,
} from "@/state/common/useCurrency";
import { useCallback, useEffect } from "react";

export const useGetCurrencyFromLocalStorage = () => {
    const storedCurrency = localStorage.getItem("currencyState");
    const storedCountry = localStorage.getItem("countryState");
    const storedCode = localStorage.getItem("currencyCodeState");
    const symbolCode = localStorage.getItem("symbolState");

    const defaultValueCurrency = useIsCurrencyState();
    const defaultValueCountry = useIsCountryCodeState();
    const defaultValueCountryCode = useIsCurrencyCodeState();
    const defaultValueSymbolCode = useIsSymbolCodeState();

    const handleCurrency = useCallback(() => {
        if (!storedCurrency) {
            return defaultValueCurrency.value;
        }
        const parsedData = JSON.parse(storedCurrency);
        return parsedData.isCurrencyState.value;
    }, [storedCurrency, defaultValueCurrency.value]);
    const handleCountry = useCallback(() => {
        if (!storedCountry) {
            return defaultValueCountry.code;
        }

        const parsedData = JSON.parse(storedCountry);
        return parsedData.isCountryCodeState.code;
    }, [storedCountry, defaultValueCountry.code]);
    const handleCode = useCallback(() => {
        if (!storedCode) {
            return defaultValueCountryCode.currency;
        }
        const parsedData = JSON.parse(storedCode);
        return parsedData.isCurrencyCodeState.currency;
    }, [storedCode, defaultValueCountryCode.currency]);
    const handleSymbol = useCallback(() => {
        if (!symbolCode) {
            return defaultValueSymbolCode.symbol;
        }
        const parsedData = JSON.parse(symbolCode);
        return parsedData.isSymbolCodeState.symbol;
    }, [symbolCode, defaultValueSymbolCode.symbol]);

    useEffect(() => {
        handleCurrency();
        handleCode();
        handleCountry();
        handleSymbol();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [storedCurrency, storedCode, storedCountry, defaultValueCurrency]);

    return {
        currency: handleCurrency(),
        country: handleCountry(),
        code: handleCode(),
        symbol: handleSymbol(),
    };
};
