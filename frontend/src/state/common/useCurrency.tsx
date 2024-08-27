import { atom, useRecoilValue, useSetRecoilState } from "recoil";
type currencyState = {
    state: boolean;
};
type currencyDataState = {
    currency: string;
    code: string;
};
export const isCurrencyState = atom<currencyState>({
    key: "isCurrencyState",
    default: { state: true },
});

export const isCurrencyDataState = atom<currencyDataState>({
    key: "isCurrencyDataState",
    default: { currency: "PHP", code: "PH" },
});

export const useIsCurrencyState = () => {
    return useRecoilValue(isCurrencyState);
};

export const useSetUseIsCurrencyState = () => {
    return useSetRecoilState(isCurrencyState);
};
export const useIsCurrencyDataState = () => {
    return useRecoilValue(isCurrencyDataState);
};

export const useSetUseCurrencyDataState = () => {
    return useSetRecoilState(isCurrencyDataState);
};
