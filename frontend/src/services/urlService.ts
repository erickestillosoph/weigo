class UrlService {
    static loginUrl() {
        return "/api/weigo/login";
    }
    static register() {
        return "/api/weigo/register";
    }
    static logout() {
        return "/api/weigo/logout";
    }
    static delete() {
        return "api/weigo/delete";
    }
    static passwordReset() {
        return "api/weigo/send-reset-link";
    }
    static emailVerification(email: string) {
        return "api/weigo/email/verify/" + email;
    }
    static currentUserProfileUrl() {
        return "api/weigo/user";
    }
    static updateProfileUrl() {
        return "api/weigo/edit-profile";
    }
    static dpPayment() {
        return "api/weigo/dp-payment";
    }
    static dpCreditCard() {
        return "api/weigo/dp-credit-card";
    }
    static dpServiceModel() {
        return "api/weigo/dp-service-model";
    }
    static dpFilteredPayments() {
        return "api/weigo/dp-filtered-payments";
    }
    static dpPreselectingPayments() {
        return "api/weigo/dp-preselecting-payments";
    }
}

export default UrlService;
