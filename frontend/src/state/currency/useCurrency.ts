import { currencyPersistEffect } from "@/lib/localStorage/recoilStatePersistence";
import { atom } from "recoil";

export const currencyState = atom<string>({
    key: "currencyState",
    default: "PH",
    effects_UNSTABLE: [currencyPersistEffect],
});
