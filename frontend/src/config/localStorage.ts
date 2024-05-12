import { recoilLocalStorageKey } from "@/lib/localStorage/recoilStatePersistence";

export const LocalStorageKey = {
    accessToken: "accessToken",
    idToken: "idToken",
    refreshToken: "refreshToken",
    currencyToken: "currencyToken",
    destinationToken: "destinationToken",
    productToken: "productToken",
    activityToken: "activityToken",
    visaToken: "visaToken",
    insuranceToken: "insuranceToken",
    domesticPackagesToken: "domesticPackagesToken",
    internationalPackagesToken: "internationalPackagesToken",
    [recoilLocalStorageKey]: recoilLocalStorageKey,
};
