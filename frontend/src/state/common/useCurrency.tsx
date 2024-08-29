import {
    countryPersistEffect,
    currencyCodePersistEffect,
    currencyPersistEffect,
    symbolPersistEffect,
} from "@/lib/localStorage/recoilStatePersistence";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
type currencyState = {
    value: string;
};
type currencyCodeState = {
    currency: string;
};
type countryCodeState = {
    code: string;
};
type symbolCodeState = {
    symbol: string;
};
export const isCurrencyState = atom<currencyState>({
    key: "isCurrencyState",
    default: { value: "1" },
    effects_UNSTABLE: [currencyPersistEffect],
});

export const isCurrencyCodeState = atom<currencyCodeState>({
    key: "isCurrencyCodeState",
    default: { currency: "PHP" },
    effects_UNSTABLE: [currencyCodePersistEffect],
});

export const isCountryCodeState = atom<countryCodeState>({
    key: "isCountryCodeState",
    default: { code: "PH" },
    effects_UNSTABLE: [countryPersistEffect],
});
export const isSymbolCodeState = atom<symbolCodeState>({
    key: "isSymbolCodeState",
    default: { symbol: "₱" },
    effects_UNSTABLE: [symbolPersistEffect],
});

export const useIsCurrencyState = () => {
    return useRecoilValue(isCurrencyState);
};

export const useSetUseIsCurrencyState = () => {
    return useSetRecoilState(isCurrencyState);
};
export const useIsCurrencyCodeState = () => {
    return useRecoilValue(isCurrencyCodeState);
};

export const useSetUseCurrencyCodeState = () => {
    return useSetRecoilState(isCurrencyCodeState);
};
export const useIsCountryCodeState = () => {
    return useRecoilValue(isCountryCodeState);
};

export const useSetUseCountryCodeState = () => {
    return useSetRecoilState(isCountryCodeState);
};
export const useIsSymbolCodeState = () => {
    return useRecoilValue(isSymbolCodeState);
};

export const useSetUseIsSymbolCodeState = () => {
    return useSetRecoilState(isSymbolCodeState);
};
