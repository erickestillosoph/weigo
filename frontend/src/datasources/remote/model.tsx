export type Authentication = {
    roles: string;
    token_type: string;
    access_token: string;
    user: string;
    username: string;
    refresh_token: string;
};

export type GetCountryList = {
    id: number;
    cities: string;
    code: string;
    currency: { id: number; class: string };
    isListing: boolean;
    name: string;
    dateCreated: string;
};
export type GetCityList = {
    id: number;
    name: string;
    countryId: number;
    timezoneOffset: string;
};

export type GetActivitiesList = {
    id: number;
    addressLine: string;
    city: string;
    countryId: number;
    currency: string;
    description: string;
    country: string;
    fromPrice: number;
    isInstantConfirmation: boolean;
    image: string;
    isBestSeller: boolean;
    isFavorited: boolean;
    isOpenDated: boolean;
    isOwnContracted: boolean;
    location: string;
    latitude: number;
    longitude: number;
    merchant: { name: string; id: number };
    name: string;
    operatingHours: { day: string; startHour: number; endHour: number };
    originalPrice: number;
    timeOffset: number;
};

export type GetOptionsList = {
    id: number;
    name: string;
    description: string;
    price: number;
    currency: string;
    imagePath: string;
    linkId: number;
    owner: {
        Reseller: string;
    };
};

// Temporarily not used because Api is not yet updated
export type GetPackagesList = {
    id: string;
    name: string;
    isTimePass: boolean;
    isChoicePass: boolean;
    issuanceLimit: number;
    favorited: boolean;
    variation: { enumType: string; name: string };
    imagePath: string;
    price: number;
    linkId: number;
    owner: {
        Reseller: string;
    };
    currency: string;
};

// Temporarily not used because Api is not yet updated
export type GetProductInformation = {
    originalPrice: number;
    redeemed: boolean;
    imagePath: string;
    isChoicesPass: false;
    description: string;
    settlementRate: number;
    merchantProductCode: number;
    numberOfChoice: number;
    variation: {
        enumType: string;
        name: string;
    };
    payableAmount: number;
    termsAndCondition: string;
    validityPeriod: number;
    publishedStart: string;
    lastUpdated: string;
    dateCreated: string;
    currency: string;
    id: number;
    class: string;
    lastUpdatedBy: string;
    isTimePass: boolean;
    linkId: number;
    name: string;
    changeStatus: boolean;
    SKU: string;
};
