import { countryPersistEffect } from "@/lib/localStorage/recoilStatePersistence";
import { atom } from "recoil";

export const countryState = atom<string>({
    key: "countryState",
    default: "PH",
    effects_UNSTABLE: [countryPersistEffect],
});
