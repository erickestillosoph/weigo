import axios from "axios";
import urlService from "./urlService";
import cookieService from "./cookieService";

const expiresAt = 60 * 24;

interface Credentials {
    username: string;
    password: string;
}

interface LoginResponse {
    access_token: string;
    // Add other properties if needed
}

class AuthService {
    async doUserLogin(credentials: Credentials) {
        try {
            const response = await axios.post(
                urlService.loginUrl(),
                credentials,
            );
            return response.data;
        } catch (error) {
            console.error("Error message", error);
            return false;
        }
    }
    handleLoginSuccess(response: LoginResponse, remember: boolean) {
        if (!remember) {
            const options = { path: "/" };
            cookieService.set("access_token", response.access_token, options);
            return true;
        }

        const date = new Date();
        date.setTime(date.getTime() + expiresAt * 60 * 1000);
        const options = { path: "/", expires: date };
        cookieService.set("access_token", response.access_token, options);
        return true;
    }
}

export default new AuthService();
