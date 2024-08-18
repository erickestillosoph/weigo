import cookieService from "@/services/cookieService";
import LocalStorageService from "@/services/localStorageService";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
const timestamp = Date.now();

const fetchCsrfToken = async () => {
    const storedToken = LocalStorageService.getItem("csrfToken");
    if (storedToken) {
        return storedToken;
    }
    const xsrfToken = cookieService.getCookie("XSRF-TOKEN");
    if (xsrfToken) {
        const { data } = await axios.get(`/sanctum/csrf-cookie?${timestamp}`, {
            withCredentials: true,
            withXSRFToken: true,
        });
        return data;
    }
    return null;
};

export const useCsrfToken = () => {
    const [dataToken, setDataToken] = useState<string>("");
    const query = useQuery({
        queryKey: ["csrfToken"],
        queryFn: async () => {
            const token = await fetchCsrfToken();
            setDataToken(token);
            LocalStorageService.setItem("csrfToken", JSON.stringify(token));
            return token;
        },
        staleTime: Infinity,
    });
    return { query, token: dataToken };
};
