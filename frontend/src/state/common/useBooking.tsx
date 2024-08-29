import {
    activityPersistEffect,
    carRentalPersistEffect,
    insurancePersistEffect,
    productPersistEffect,
} from "@/lib/localStorage/recoilStatePersistence";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
type productState = {
    type?: string;
    price?: string;
    state?: boolean;
    image?: string;
    title?: string;
    symbol?: string;
};
type activityCodeState = {
    type?: string;
    price?: string;
    state?: boolean;
    image?: string;
    title?: string;
    symbol?: string;
};
type insuranceCodeState = {
    type?: string;
    price?: string;
    state?: boolean;
    image?: string;
    title?: string;
    symbol?: string;
};
type carRentalCodeState = {
    type?: string;
    price?: string;
    state?: boolean;
    image?: string;
    title?: string;
    symbol?: string;
};

export const isProductState = atom<productState>({
    key: "isProductState",
    default: {
        type: "product",
        price: "0",
        state: false,
        image: "none",
        title: "title",
        symbol: "P",
    },
    effects_UNSTABLE: [productPersistEffect],
});
export const isInsuranceState = atom<insuranceCodeState>({
    key: "isInsuranceState",
    default: {
        type: "insurance",
        price: "0",
        state: false,
        image: "none",
        title: "title",
        symbol: "P",
    },
    effects_UNSTABLE: [insurancePersistEffect],
});
export const isCarRentalState = atom<carRentalCodeState>({
    key: "isCarRentalState",
    default: {
        type: "car",
        price: "0",
        state: false,
        image: "none",
        title: "title",
        symbol: "P",
    },
    effects_UNSTABLE: [carRentalPersistEffect],
});

export const isActivityState = atom<activityCodeState>({
    key: "isActivityState",
    default: {
        type: "product",
        price: "0",
        state: false,
        image: "none",
        title: "title",
        symbol: "P",
    },
    effects_UNSTABLE: [activityPersistEffect],
});

export const useIsProductState = () => {
    return useRecoilValue(isProductState);
};

export const useSetUseIsProductState = () => {
    return useSetRecoilState(isProductState);
};
export const useIsActivityState = () => {
    return useRecoilValue(isActivityState);
};

export const useSetUseActivityState = () => {
    return useSetRecoilState(isActivityState);
};

export const useIsInsuranceState = () => {
    return useRecoilValue(isInsuranceState);
};

export const useSetUseInsuranceState = () => {
    return useSetRecoilState(isInsuranceState);
};
export const useIsCarRentalState = () => {
    return useRecoilValue(isCarRentalState);
};

export const useSetUseCarRentalState = () => {
    return useSetRecoilState(isCarRentalState);
};
