import csrfTokenEffect from "@/hooks/token/useCsrfEffect";
import { atom } from "recoil";

export const csrfTokenState = atom({
    key: "csrfTokenState",
    default: "",
    effects: [csrfTokenEffect],
});
