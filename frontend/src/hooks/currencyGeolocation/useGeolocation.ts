import axios from "axios";

import Freecurrencyapi from "@everapi/freecurrencyapi-js";
import { useCallback, useEffect, useState } from "react";
import { useIsCurrencyCodeState } from "@/state/common/useCurrency";

export const useGeolocation = () => {
    const isCurrencyData = useIsCurrencyCodeState();
    const [convertedCurrency, setConvertedCurrency] = useState<string>("1");

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

        const freecurrencyapi = new Freecurrencyapi(freeApiKey);
        freecurrencyapi
            .latest({
                base_currency: getApiDataResponse.data.currency.code,
                currencies: String(isCurrencyData.currency),
            })
            .then((data = response.data) => {
                const stringData = JSON.stringify(data).replace(/[^\d.-]/g, "");
                setConvertedCurrency(stringData);
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isCurrencyData]);

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isCurrencyData.currency]);
    return { convertedCurrency };
};
