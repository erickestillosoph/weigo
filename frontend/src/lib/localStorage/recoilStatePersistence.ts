import { recoilPersist } from "recoil-persist";

export const recoilLocalStorageKey = "authState";
export const currencyStorageKey = "currencyState";
export const countryStorageKey = "countryState";
export const symbolStorageKey = "symbolState";
export const currencyCodeStorageKey = "currencyCodeState";
export const currencyCodeCountryDataStorageKey = "dataCodeCountry";

export const { persistAtom: localStoragePersistEffect } = recoilPersist({
    key: recoilLocalStorageKey,
    storage: localStorage,
    converter: JSON,
});
export const { persistAtom: currencyPersistEffect } = recoilPersist({
    key: currencyStorageKey,
    storage: localStorage,
    converter: JSON,
});
export const { persistAtom: countryPersistEffect } = recoilPersist({
    key: countryStorageKey,
    storage: localStorage,
    converter: JSON,
});
export const { persistAtom: symbolPersistEffect } = recoilPersist({
    key: symbolStorageKey,
    storage: localStorage,
    converter: JSON,
});
export const { persistAtom: currencyCodePersistEffect } = recoilPersist({
    key: currencyCodeStorageKey,
    storage: localStorage,
    converter: JSON,
});
export const { persistAtom: isCurrencyCodeCountryDataPersistEffect } =
    recoilPersist({
        key: currencyCodeCountryDataStorageKey,
        storage: localStorage,
        converter: JSON,
    });
