import { LocalStorageKey } from "@/config/localStorage";

interface ILocalStorageClient {
    setAccessToken(accessToken: string): void;
    getAccessToken(): string | null;
    setIdToken(idToken: string): void;
    getIdToken(): string | null;
    setRefreshToken(refreshToken: string): void;
    getRefreshToken(): string | null;
    setCurrencyId(currencyToken: string): void;
    getCurrencyId(): string | null;
    removeCurrencyId(): void;
    setDestinationId(destinationToken: string): void;
    getDestinationId(): string | null;
    removeDestinationId(): void;
    setProductId(productToken: string): void;
    getProductId(): string | null;
    removeProductId(): void;
    setDestinationId(destinationToken: string): void;
    getDestinationId(): string | null;
    removeDestinationId(): void;
    setActivityId(activityToken: string): void;
    getActivityId(): string | null;
    removeActivityId(): void;
    setVisaId(visaToken: string): void;
    getVisaId(): string | null;
    removeVisaId(): void;
    setInsuranceId(insuranceToken: string): void;
    getInsuranceId(): string | null;
    removeInsuranceId(): void;
    setDomesticPackagesId(domesticPackagesToken: string): void;
    getDomesticPackagesId(): string | null;
    removeDomesticPackagesId(): void;
    setInternationalPackagesId(internationalPackagesToken: string): void;
    getInternationalPackagesId(): string | null;
    removeInternationalPackagesId(): void;
    removeAll(): void;
}

class LocalStorageClient implements ILocalStorageClient {
    setAccessToken(accessToken: string): void {
        localStorage.setItem(LocalStorageKey.accessToken, accessToken);
    }
    getAccessToken(): string | null {
        return localStorage.getItem(LocalStorageKey.accessToken);
    }
    removeAccessToken(): void {
        localStorage.removeItem(LocalStorageKey.accessToken);
    }
    setIdToken(idToken: string): void {
        localStorage.setItem(LocalStorageKey.idToken, idToken);
    }
    getIdToken(): string | null {
        return localStorage.getItem(LocalStorageKey.idToken);
    }
    removeIdToken(): void {
        localStorage.removeItem(LocalStorageKey.idToken);
    }
    setRefreshToken(refreshToken: string): void {
        localStorage.setItem(LocalStorageKey.refreshToken, refreshToken);
    }
    getRefreshToken(): string | null {
        return localStorage.getItem(LocalStorageKey.refreshToken);
    }
    removeRefreshToken(): void {
        localStorage.removeItem(LocalStorageKey.refreshToken);
    }
    setCurrencyId(currencyToken: string): void {
        localStorage.setItem(LocalStorageKey.currencyToken, currencyToken);
    }
    getCurrencyId(): string | null {
        return localStorage.getItem(LocalStorageKey.currencyToken);
    }
    removeCurrencyId(): void {
        localStorage.removeItem(LocalStorageKey.currencyToken);
    }
    setDestinationId(destinationToken: string): void {
        localStorage.setItem(
            LocalStorageKey.destinationToken,
            destinationToken,
        );
    }
    getDestinationId(): string | null {
        return localStorage.getItem(LocalStorageKey.destinationToken);
    }
    removeDestinationId(): void {
        localStorage.removeItem(LocalStorageKey.destinationToken);
    }
    setProductId(productToken: string): void {
        localStorage.setItem(LocalStorageKey.productToken, productToken);
    }
    getProductId(): string | null {
        return localStorage.getItem(LocalStorageKey.productToken);
    }
    removeProductId(): void {
        localStorage.removeItem(LocalStorageKey.productToken);
    }
    setActivityId(activityToken: string): void {
        localStorage.setItem(LocalStorageKey.activityToken, activityToken);
    }
    getActivityId(): string | null {
        return localStorage.getItem(LocalStorageKey.activityToken);
    }
    removeActivityId(): void {
        localStorage.removeItem(LocalStorageKey.activityToken);
    }
    setVisaId(visaToken: string): void {
        localStorage.setItem(LocalStorageKey.visaToken, visaToken);
    }
    getVisaId(): string | null {
        return localStorage.getItem(LocalStorageKey.visaToken);
    }
    removeVisaId(): void {
        localStorage.removeItem(LocalStorageKey.visaToken);
    }
    setInsuranceId(insuranceToken: string): void {
        localStorage.setItem(LocalStorageKey.insuranceToken, insuranceToken);
    }
    getInsuranceId(): string | null {
        return localStorage.getItem(LocalStorageKey.insuranceToken);
    }
    removeInsuranceId(): void {
        localStorage.removeItem(LocalStorageKey.insuranceToken);
    }
    setDomesticPackagesId(domesticPackagesToken: string): void {
        localStorage.setItem(
            LocalStorageKey.domesticPackagesToken,
            domesticPackagesToken,
        );
    }
    getDomesticPackagesId(): string | null {
        return localStorage.getItem(LocalStorageKey.domesticPackagesToken);
    }
    removeDomesticPackagesId(): void {
        localStorage.removeItem(LocalStorageKey.domesticPackagesToken);
    }
    setInternationalPackagesId(internationalPackagesToken: string): void {
        localStorage.setItem(
            LocalStorageKey.internationalPackagesToken,
            internationalPackagesToken,
        );
    }
    getInternationalPackagesId(): string | null {
        return localStorage.getItem(LocalStorageKey.internationalPackagesToken);
    }
    removeInternationalPackagesId(): void {
        localStorage.removeItem(LocalStorageKey.internationalPackagesToken);
    }
    removeAll(): void {
        Object.values(LocalStorageKey).forEach((value) => {
            localStorage.removeItem(value);
        });
    }
}

export const localStorageClient = new LocalStorageClient();
