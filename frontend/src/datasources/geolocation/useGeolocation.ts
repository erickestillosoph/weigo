import axios from "axios";

import Freecurrencyapi from "@everapi/freecurrencyapi-js";
import { useCallback, useEffect, useState } from "react";
import { useIsCurrencyDataState } from "@/state/common/useCurrency";
export const useGeolocation = () => {
    const [convertedCurrency, setConvertedCurrency] = useState<{
        [key: string]: number;
    }>({ defaultKey: 0 });
    const isCurrencyDataState = useIsCurrencyDataState();
    const fetchData = useCallback(async () => {
        const response = await axios.get("https://api.ipify.org?format=json");
        const url = new URL("https://api.ipgeolocation.io/ipgeo");
        url.searchParams.append(
            "apiKey",
            process.env.REACT_APP_FREEIPGEOLOCATION_KEY || "",
        );
        url.searchParams.append("ip", response.data.ip);
        url.searchParams.append("fields", "geo,currency");

        const getApiDataResponse = await axios.get(url.toString());

        const freecurrencyapi = new Freecurrencyapi(
            process.env.REACT_APP_FREECURRENCYAPI_KEY || "",
        );
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
        currencyValue: JSON.stringify(convertedCurrency).replace(
            /[^\d.-]/g,
            "",
        ),
    };
};
