import { recoilPersist } from "recoil-persist";

export const recoilLocalStorageKey = "authState";

export const { persistAtom: localStoragePersistEffect } = recoilPersist({
    key: recoilLocalStorageKey,
    storage: localStorage,
    converter: JSON,
});
