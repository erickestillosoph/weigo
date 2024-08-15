import Axios from "axios";

let apiDomain = process.env.NODE_ENV || ""; // Initial value for apiDomain
if (process.env.REACT_APP_WEIGO_SERVER_MODE === "testing") {
    apiDomain = process.env.REACT_APP_WEIGO_SERVER_TEST_API || "";
} else {
    apiDomain = process.env.REACT_APP_WEIGO_SERVER_PROD_API || "";
}

const axios = Axios.create({
    baseURL: apiDomain,
    headers: {
        "X-Requested-With": "XMLHttpRequest",
    },
    withCredentials: true,
    withXSRFToken: true,
});

export default axios;
