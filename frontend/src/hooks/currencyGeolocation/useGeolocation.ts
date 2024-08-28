import axios from "axios";

import Freecurrencyapi from "@everapi/freecurrencyapi-js";
import { useCallback, useEffect, useState } from "react";
import { useIsCurrencyDataState } from "@/state/common/useCurrency";
export const useGeolocation = () => {
    const [convertedCurrency, setConvertedCurrency] = useState<{
        [key: string]: number;
    }>({ defaultKey: 0 });
    const [countryCode, setCountryCode] = useState("PH");
    const isCurrencyDataState = useIsCurrencyDataState();

    const fetchData = useCallback(async () => {
        const ipFreeCurrencyURL = process.env.REACT_APP_FREECURRENCYAPI_URL!;
        const ipGeolocationURL = process.env.REACT_APP_FREEIPGEOLOCATION_URL!;
        const freeApiKey = process.env.REACT_APP_FREECURRENCYAPI_KEY!;

        const response = await axios.get(ipFreeCurrencyURL);
        const url = new URL(ipGeolocationURL);

        url.searchParams.append(
            "apiKey",
            String(process.env.REACT_APP_FREEIPGEOLOCATION_KEY),
        );
        url.searchParams.append("ip", response.data.ip);
        url.searchParams.append("fields", "geo,currency");

        const getApiDataResponse = await axios.get(url.toString());
        console.log(getApiDataResponse.data);
        setCountryCode(getApiDataResponse.data.currency.symbol);
        const freecurrencyapi = new Freecurrencyapi(freeApiKey);
        freecurrencyapi
            .latest({
                base_currency: getApiDataResponse.data.currency.code,
                currencies: String(isCurrencyDataState.currency),
            })
            .then((data = response.data) => {
                setConvertedCurrency(data);
            });
    }, [isCurrencyDataState.currency]);

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isCurrencyDataState.currency]);

    return {
        countryCode,
        currencyValue: JSON.stringify(convertedCurrency).replace(
            /[^\d.-]/g,
            "",
        ),
    };
};
