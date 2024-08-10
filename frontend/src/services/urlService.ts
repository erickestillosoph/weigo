let apiDomain = process.env.NODE_ENV; // Initial value for apiDomain
if (process.env.NODE_ENV === "production") {
    apiDomain = process.env.REACT_APP_WEIGO_SERVER_PROD_API;
} else {
    apiDomain = process.env.REACT_APP_WEIGO_SERVER_TESTING_API;
}

class UrlService {
    static loginUrl() {
        return apiDomain + "api/weigo/login";
    }
    static register() {
        return apiDomain + "api/weigo/register";
    }
    static logout() {
        return apiDomain + "api/weigo/logout";
    }
    static delete() {
        return apiDomain + "api/weigo/delete";
    }
    static passwordReset() {
        return apiDomain + "api/weigo/send-reset-link";
    }
    static emailVerification(email: string) {
        return apiDomain + "api/weigo/email/verify/" + email;
    }
    static currentUserProfileUrl() {
        return apiDomain + "api/weigo/user";
    }
    static updateProfileUrl() {
        return apiDomain + "api/weigo/edit-profile";
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
