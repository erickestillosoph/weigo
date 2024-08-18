import LocalStorageService from "@/services/localStorageService";
import { AtomEffect } from "recoil";

const csrfTokenEffect: AtomEffect<string> = ({ setSelf, onSet }) => {
    // Load the token from localStorage

    const savedToken = LocalStorageService.getItem("csrfToken");
    if (savedToken != null) {
        setSelf(savedToken as string);
    }

    // Save the token to localStorage whenever it changes
    onSet((newValue, _, isReset) => {
        if (isReset) {
            LocalStorageService.removeItem("csrfToken");
        } else {
            LocalStorageService.setItem("csrfToken", newValue);
        }
    });
};

export default csrfTokenEffect;
