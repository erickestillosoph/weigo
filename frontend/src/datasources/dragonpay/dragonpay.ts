import axios from "axios";
import {
    CreditCard,
    FilteredPayments,
    Payment,
    PreSelectingPayments,
    ServiceModel,
} from "./dragonpayTypes";
import UrlService from "@/services/urlService";

export interface IWeigoDragonpay {
    creditCard(
        amount: string,
        ccy: string,
        description: string,
        email: string,
        firstName: string,
        lastName: string,
        address1: string,
        address2: string,
        state: string,
        city: string,
        country: string,
        zipCode: string,
        telNo: string,
    ): Promise<CreditCard>;
    payment(
        amount: string,
        ccy: string,
        description: string,
        email: string,
    ): Promise<Payment>;
    serviceModel(
        amount: string,
        ccy: string,
        description: string,
        email: string,
    ): Promise<ServiceModel>;
    filteredPayments(
        amount: string,
        ccy: string,
        description: string,
        email: string,
    ): Promise<FilteredPayments>;
    preselectingPayments(
        amount: string,
        ccy: string,
        description: string,
        email: string,
    ): Promise<PreSelectingPayments>;
}

export class WeigoDragonpay implements IWeigoDragonpay {
    async payment(
        amount: string,
        ccy: string,
        description: string,
        email: string,
    ): Promise<Payment> {
        const url = UrlService.dpPayment();
        const data = {
            amount: amount,
            ccy: ccy,
            description: description,
            email: email,
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

    async serviceModel(
        amount: string,
        ccy: string,
        description: string,
        email: string,
    ): Promise<ServiceModel> {
        const url = UrlService.dpServiceModel();
        const data = {
            amount: amount,
            ccy: ccy,
            description: description,
            email: email,
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

    async filteredPayments(
        amount: string,
        ccy: string,
        description: string,
        email: string,
    ): Promise<FilteredPayments> {
        const url = UrlService.dpFilteredPayments();
        const data = {
            amount: amount,
            ccy: ccy,
            description: description,
            email: email,
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

    async preselectingPayments(
        amount: string,
        ccy: string,
        description: string,
        email: string,
    ): Promise<PreSelectingPayments> {
        const url = UrlService.dpPreselectingPayments();
        const data = {
            amount: amount,
            ccy: ccy,
            description: description,
            email: email,
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

    async creditCard(
        amount: string,
        ccy: string,
        description: string,
        email: string,
        firstName: string,
        lastName: string,
        address1: string,
        address2: string,
        state: string,
        city: string,
        country: string,
        zipCode: string,
        telNo: string,
    ): Promise<CreditCard> {
        const url = UrlService.dpCreditCard();
        const data = {
            amount: amount,
            ccy: ccy,
            description: description,
            email: email,
            firstName: firstName,
            lastName: lastName,
            address1: address1,
            address2: address2,
            state: state,
            city: city,
            country: country,
            zipCode: zipCode,
            telNo: telNo,
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
}
