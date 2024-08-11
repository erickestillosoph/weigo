import { atom, useRecoilValue, useSetRecoilState } from "recoil";
type authState = {
    authentication: boolean;
};
export const isAuthState = atom<authState>({
    key: "isAuthState",
    default: { authentication: true },
});

export const useIsAuthState = () => {
    return useRecoilValue(isAuthState);
};

export const useSetUseIsAuthState = () => {
    return useSetRecoilState(isAuthState);
};
