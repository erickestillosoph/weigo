import { symbolPersistEffect } from "@/lib/localStorage/recoilStatePersistence";
import { atom } from "recoil";

export const symbolState = atom<string>({
    key: "symbolState",
    default: "P",
    effects_UNSTABLE: [symbolPersistEffect],
});
