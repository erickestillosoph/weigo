import { atom, useRecoilValue, useSetRecoilState } from "recoil";
type registeredState = {
    authentication: boolean;
};
export const isRegisteredState = atom<registeredState>({
    key: "isRegisteredState",
    default: { authentication: true },
});

export const useIsAuthState = () => {
    return useRecoilValue(isRegisteredState);
};

export const useSetUseIsAuthState = () => {
    return useSetRecoilState(isRegisteredState);
};
