import UrlService from "@/services/urlService";
import {
    Login,
    Logout,
    Register,
    Reset,
    UpdateProfile,
    DeleteProfile,
} from "./weigoGuestTypes";
import axios from "axios";
export interface IWeigoGuest {
    login(email: string, password: string): Promise<Login>;
    reset(email: string): Promise<Reset>;
    deleteProfile(uid: string): Promise<DeleteProfile>;
    logout(): Promise<Logout>;
    register(
        first_name: string,
        last_name: string,
        email: string,
        password: string,
        password_confirmation: string,
    ): Promise<Register>;
    updateProfile(
        first_name: string,
        last_name: string,
        email: string,
        password: string,
        password_confirmation: string,
        uid: string,
    ): Promise<UpdateProfile>;
}

export class WeigoGuest implements IWeigoGuest {
    async login(email: string, password: string): Promise<Login> {
        const url = UrlService.loginUrl();
        const data = {
            email: email,
            password: password,
        };
        return axios
            .post(url, data, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                return res.data.access_token;
            })
            .catch((err) => {
                throw err;
            });
    }

    async register(
        first_name: string,
        last_name: string,
        email: string,
        password: string,
        password_confirmation: string,
    ): Promise<Reset> {
        const url = UrlService.register();
        const data = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
            password_confirmation: password_confirmation,
        };
        return axios
            .post(url, data, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                return res.data.data;
            })
            .catch((err) => {
                throw err;
            });
    }

    async reset(email: string): Promise<Reset> {
        const url = UrlService.passwordReset();
        return axios
            .post(url, email, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                return res.data.data;
            })
            .catch((err) => {
                throw err;
            });
    }

    async logout(): Promise<Logout> {
        const url = UrlService.logout();
        return axios
            .post(url, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                return res.data.data;
            })
            .catch((err) => {
                throw err;
            });
    }

    async updateProfile(
        first_name: string,
        last_name: string,
        email: string,
        password: string,
        password_confirmation: string,
        uid: string,
    ): Promise<UpdateProfile> {
        const url = UrlService.updateProfileUrl();
        const data = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
            password_confirmation: password_confirmation,
            uid: uid,
        };
        return axios
            .post(url, data, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                return res.data.data;
            })
            .catch((err) => {
                throw err;
            });
    }

    async deleteProfile(uid: string): Promise<DeleteProfile> {
        const url = UrlService.delete();
        return axios
            .post(url, uid, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                return res.data.data;
            })
            .catch((err) => {
                throw err;
            });
    }
}
