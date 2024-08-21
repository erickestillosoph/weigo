class UrlService {
    static loginUrl() {
        return "/api/weigo/login";
    }
    static register() {
        return "/api/weigo/register";
    }
    static resendLink() {
        return "/api/weigo/reverify";
    }
    static logout() {
        return "/api/weigo/logout";
    }
    static delete(uid: string) {
        return "api/weigo/delete-profile-guest/" + uid;
    }
    static forgotPassword() {
        return "api/weigo/send-reset-link";
    }
    static resetPassword() {
        return "api/weigo/reset-password-guest";
    }
    static getProfileUser(uid: string) {
        return "api/weigo/profile/" + uid;
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
