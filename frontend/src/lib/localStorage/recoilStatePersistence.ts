import { recoilPersist } from "recoil-persist";

export const recoilLocalStorageKey = "recoilLocalStorage";

export const { persistAtom: localStoragePersistEffect } = recoilPersist({
    key: recoilLocalStorageKey,
    storage: localStorage,
    converter: JSON,
});
