import { atom, selector } from "recoil";

type authenticationState = {
    authentication:
        | "login"
        | "register"
        | "logout"
        | "delete"
        | "update"
        | "reset"
        | "resend"
        | "undefined";
    state: boolean;
};

export const authenticatedStateAtom = atom<authenticationState>({
    key: "isAuthenticatedAtom",
    default: { authentication: "undefined", state: false },
});

export const authenticatedStateSelector = selector({
    key: "isAuthenticatedData",
    get: ({ get }) => {
        const { authentication, state } = get(authenticatedStateAtom);

        switch (authentication) {
            case "login":
                return { state, destination: "/" };
            case "register":
                return { state, destination: "/login-user" };
            case "update":
                return { state, destination: "/profile" };
            case "reset":
                return { state, destination: "/login-user" };
            case "resend":
                return { state, destination: "/resend-link" };
            case "logout":
                return { state, destination: "/" };
            case "delete":
                return { state, destination: "/" };
            default:
                return { state, destination: "/" };
        }
    },
});
