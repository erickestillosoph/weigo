import { currencyPersistEffect } from "@/lib/localStorage/recoilStatePersistence";
import { atom } from "recoil";

export const currencyState = atom<string>({
    key: "currencyState",
    default: "1",
    effects_UNSTABLE: [currencyPersistEffect],
});
