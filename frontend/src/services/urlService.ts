let apiDomain = "";
if (process.env.NODE_ENV === "production") {
    apiDomain = "http://production.api.test";
} else {
    apiDomain = "http://staging.api.test";
}

class UrlService {
    static loginUrl() {
        return apiDomain + "api/weigo/login";
    }
    static currentUserProfileUrl() {
        return apiDomain + "api/weigo/user";
    }
    static saveUserProfileUrl() {
        return apiDomain + "api/weigo/user";
    }
    static register() {
        return apiDomain + "api/weigo/register";
    }
    static logout() {
        return apiDomain + "api/weigo/logout";
    }
    static passwordReset(id: string) {
        return apiDomain + "api/weigo/reset/" + id;
    }
    static emailVerification(id: string) {
        return apiDomain + "api/weigo/email/verify/" + id;
    }
    static updateProfile() {
        return apiDomain + "api/weigo/activities";
    }
    static dpPayment() {
        return apiDomain + "api/weigo/dp-payment";
    }
    static dpCreditCard() {
        return apiDomain + "api/weigo/dp-credit-card";
    }
    static dpServiceModel() {
        return apiDomain + "api/weigo/dp-service-model";
    }
    static dpFilteredPayments() {
        return apiDomain + "api/weigo/dp-filtered-payments";
    }
    static dpPreselectingPayments() {
        return apiDomain + "api/weigo/dp-preselecting-payments";
    }
}

export default UrlService;
