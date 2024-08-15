import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCsrfToken = async () => {
    const response = await axios.get(`/sanctum/csrf-cookie?${Date.now()}`, {
        withCredentials: true,
        withXSRFToken: true,
    });

    return response.data;
};

export const useCsrfToken = () => {
    return useQuery({
        queryKey: ["csrfToken"],
        queryFn: fetchCsrfToken,
        staleTime: Infinity,
    });
};
