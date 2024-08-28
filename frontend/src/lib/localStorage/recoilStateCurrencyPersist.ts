import { recoilPersist } from "recoil-persist";

export const recoilLocalStorageKey = "state";

export const { persistAtom: localStoragePersistEffect } = recoilPersist({
    key: recoilLocalStorageKey,
    storage: localStorage,
    converter: JSON,
});
