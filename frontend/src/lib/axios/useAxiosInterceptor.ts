import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axiosInstance from "@/lib/axios/axios"; // Import the axios instance
import cookieService from "@/services/cookieService";

const getBearerToken = () => {
    const cookieToken = cookieService.getCookieData("tokenId");
    if (!cookieToken) {
        return " ";
    }

    const decodedCookieToken = decodeURI(JSON.stringify(cookieToken));
    const parseCookieToken = JSON.parse(decodedCookieToken);

    return parseCookieToken;
};

const useAxiosInterceptor = () => {
    const location = useLocation();
    localStorage.setItem("hasReloaded", "true");

    useEffect(() => {
        const token = getBearerToken();

        axiosInstance.defaults.headers.common["X-Requested-With"] =
            "XMLHttpRequest";
        axiosInstance.defaults.headers.common["Content-Type"] =
            "application/json";
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
        // if (localStorage.getItem("hasReloaded")) {
        //     window.location.reload();
        // }
    }, [location]);
};

export default useAxiosInterceptor;
