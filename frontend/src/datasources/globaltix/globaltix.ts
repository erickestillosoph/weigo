import {
    GetActivitiesList,
    GetCityList,
    GetCountryList,
    GetOptionsList,
} from "./globaltixTypes";
import axios from "axios";

export interface IWeigoGlobaltix {
    authentication(): Promise<{ access_token: string }>;
    getCountryList(): Promise<GetCountryList[]>;
    getCityList(): Promise<GetCityList[]>;
    getOptionsList(id: string, country: string): Promise<GetOptionsList[]>;
    getActivitiesList(id: string, country: string): Promise<GetActivitiesList>;
}

export class WeigoGlobaltix implements IWeigoGlobaltix {
    private readonly baseUrl: string;

    constructor() {
        this.baseUrl = process.env.REACT_APP_WEIGO_URL_API || "";
    }

    // Please refer to Authentication ( Access Token )
    async authentication(): Promise<{ access_token: string }> {
        const data = {
            username: `${process.env.REACT_APP_WEIGO_USERNAME}`,
            password: `${process.env.REACT_APP_WEIGO_PASSWORD}`,
        };
        const url = `${this.baseUrl}/auth/login`;
        return axios
            .post(url, data, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                return res.data.data.access_token;
            })
            .catch((err) => {
                throw err;
            });
    }
    // Please refer to Country / City API ( Country List )
    async getCountryList(): Promise<GetCountryList[]> {
        const url = `${this.baseUrl}/country/getAllListingCountry`;
        const auth = await this.authentication();
        return axios
            .get(url, {
                headers: {
                    Authorization: `Bearer ${auth}`,
                    "Content-Type": "application/json",
                },
                timeout: 1000,
            })
            .then((res) => {
                return res.data.data;
            })
            .catch((err) => {
                throw err;
            });
    }

    // Please refer to Country / City API ( City List )
    async getCityList(): Promise<GetCityList[]> {
        const url = `${this.baseUrl}/city/getAllCities`;
        const auth = await this.authentication();
        return axios
            .get(url, {
                headers: {
                    Authorization: `Bearer ${auth}`,
                    "Content-Type": "application/json",
                },
                timeout: 1000,
            })
            .then((res) => {
                return res.data.data;
            })
            .catch((err) => {
                throw err;
            });
    }

    // Please refer to Country / City API ( City List )
    async getOptionsList(
        id: string,
        country: string,
    ): Promise<GetOptionsList[]> {
        const url = `${this.baseUrl}/product/options?${id}&lang=${country}`;
        const auth = await this.authentication();
        return axios
            .get(url, {
                headers: {
                    Authorization: `Bearer ${auth}`,
                    "Content-Type": "application/json",
                },
                timeout: 1000,
            })
            .then((res) => {
                return res.data.data;
            })
            .catch((err) => {
                throw err;
            });
    }

    // Please refer to Product information API ( Attraction / Activity New )
    async getActivitiesList(
        id: string,
        country: string,
    ): Promise<GetActivitiesList> {
        const url = `${this.baseUrl}/product/info?id=${id}&lang=${country}`;
        const auth = await this.authentication();
        return axios
            .get(url, {
                headers: {
                    Authorization: `Bearer ${auth}`,
                    "Content-Type": "application/json",
                },
                timeout: 1000,
            })
            .then((res) => {
                return res.data.data;
            })
            .catch((err) => {
                throw err;
            });
    }
}
