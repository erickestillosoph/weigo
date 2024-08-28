import { currencyCodePersistEffect } from "@/lib/localStorage/recoilStatePersistence";
import { atom } from "recoil";

export const currencyCodeState = atom<string>({
    key: "currencyCodeState",
    default: "PHP",
    effects_UNSTABLE: [currencyCodePersistEffect],
});
