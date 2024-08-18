import { atom, useRecoilValue, useSetRecoilState } from "recoil";
type registeredState = {
    authentication: boolean;
};
type registeredDataState = {
    email: string;
};
export const isRegisteredState = atom<registeredState>({
    key: "isRegisteredState",
    default: { authentication: true },
});

export const isRegisteredDataState = atom<registeredDataState>({
    key: "isRegisteredDataState",
    default: { email: "" },
});

export const useIsAuthState = () => {
    return useRecoilValue(isRegisteredState);
};

export const useSetUseIsAuthState = () => {
    return useSetRecoilState(isRegisteredState);
};
export const useIsRegisteredDataState = () => {
    return useRecoilValue(isRegisteredDataState);
};

export const useSetUseRegisteredDataState = () => {
    return useSetRecoilState(isRegisteredDataState);
};
