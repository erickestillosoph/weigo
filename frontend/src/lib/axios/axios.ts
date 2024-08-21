import cookieService from "@/services/cookieService";
import Axios from "axios";

let apiDomain = process.env.NODE_ENV || "";
if (process.env.REACT_APP_WEIGO_SERVER_MODE === "testing") {
    apiDomain = process.env.REACT_APP_WEIGO_SERVER_TEST_API || "";
} else {
    apiDomain = process.env.REACT_APP_WEIGO_SERVER_PROD_API || "";
}

const getBearerToken = () => {
    const cookieToken = cookieService.getCookieData("tokenId");
    if (!cookieToken) {
        return " ";
    }

    const decodedCookieToken = decodeURI(JSON.stringify(cookieToken));
    const parseCookieToken = JSON.parse(decodedCookieToken);

    return parseCookieToken;
};

const axios = Axios.create({
    baseURL: apiDomain,
    headers: {
        "X-Requested-With": "XMLHttpRequest",
        Authorization: `Bearer ${getBearerToken()}`,
        "Content-Type": "application/json",
    },
    withCredentials: true,
    withXSRFToken: true,
});

// Function to update the Authorization header
export const updateAuthorizationHeader = () => {
    axios.defaults.headers["Authorization"] = `Bearer ${getBearerToken()}`;
};

export default axios;
