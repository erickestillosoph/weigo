import { localStoragePersistEffect } from "@/lib/localStorage/recoilStatePersistence";
import { atom } from "recoil";

export const authLoginState = atom<string>({
    key: "authLoginState",
    default: "",
    effects_UNSTABLE: [localStoragePersistEffect],
});
