import { forwardRef } from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select/select";

interface CountryCodeName {
    index: number;
    name: string;
    code: string;
}
interface CountryCurrencyCode {
    index: number;
    name: string;
    currencyCode: string;
}
interface CountryCallingCode {
    index: number;
    name: string;
    callingCode: string;
}
interface ProcIdData {
    name: string;
    code: string;
    index: number;
}

type ScrollProps = {
    dataCountryCode?: CountryCodeName[];
    dataCurrencyCode?: CountryCurrencyCode[];
    dataPhoneCode?: CountryCallingCode[];
    dataProcId?: ProcIdData[];
    placeholder: string;
    onSelect: (value: string) => void;
};

const SelectScrollables = forwardRef<HTMLDivElement, ScrollProps>(
    (
        {
            dataCountryCode,
            dataCurrencyCode,
            dataPhoneCode,
            dataProcId,
            placeholder,
            onSelect,
            ...props
        },
        ref,
    ) => {
        return (
            <Select {...props} onValueChange={onSelect}>
                <SelectTrigger
                    ref={ref as React.ForwardedRef<HTMLButtonElement>}
                    className="w-full"
                >
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                {dataCountryCode && (
                    <SelectContent>
                        {dataCountryCode?.map((item, index) => (
                            <SelectGroup key={index}>
                                <SelectItem value={item.index + `${item.code}`}>
                                    <div className="flex gap-3">
                                        <p className="font-bold text-blue-500">
                                            {item.code}
                                        </p>
                                        <p>{item.name}</p>
                                    </div>
                                </SelectItem>
                            </SelectGroup>
                        ))}
                    </SelectContent>
                )}
                {dataCurrencyCode && (
                    <SelectContent>
                        {dataCurrencyCode?.map((item, index) => (
                            <SelectGroup key={index}>
                                <SelectItem
                                    value={item.index + `${item.currencyCode}`}
                                >
                                    <div className="flex gap-3">
                                        <p className="font-bold text-blue-500">
                                            {item.currencyCode}
                                        </p>
                                        <p>{item.name}</p>
                                    </div>
                                </SelectItem>
                            </SelectGroup>
                        ))}
                    </SelectContent>
                )}
                {dataPhoneCode && (
                    <SelectContent>
                        {dataPhoneCode?.map((item, index) => (
                            <SelectGroup key={index}>
                                <SelectItem
                                    value={item.index + `${item.callingCode}`}
                                >
                                    <div className="flex gap-3">
                                        <p className="font-bold text-blue-500">
                                            + {item.callingCode}
                                        </p>
                                        <p>{item.name}</p>
                                    </div>
                                </SelectItem>
                            </SelectGroup>
                        ))}
                    </SelectContent>
                )}
                {dataProcId && (
                    <SelectContent>
                        {dataProcId?.map((item, index) => (
                            <SelectGroup key={index}>
                                <SelectItem value={item.index + `${item.code}`}>
                                    <div className="flex gap-3">
                                        <p className="font-bold text-blue-500">
                                            {item.code}
                                        </p>
                                        <p>{item.name}</p>
                                    </div>
                                </SelectItem>
                            </SelectGroup>
                        ))}
                    </SelectContent>
                )}
            </Select>
        );
    },
);

export default SelectScrollables;
