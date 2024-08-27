import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import ReactCountryFlag from "react-country-flag";

import * as ScrollArea from "@radix-ui/react-scroll-area";
import { currencyOptions } from "@/lib/currencyCode";

interface CurrencyOption {
    code: string;
    countryName: string;
    countryCode: string;
}

function CountryDialog() {
    const countrySvgStyle = {
        width: "3em",
        height: "3em",
    };

    return (
        <div className="flex text-center">
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <ChevronDownIcon
                        className="text-white stroke-2 md:w-[32px] md:h-[32px]"
                        height="32px"
                        width="32px"
                    ></ChevronDownIcon>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className="z-[60] bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0" />

                    <Dialog.Content className="z-[60] h-[70vh] inline-block overflow-hidden   w-[90%] min-w-[150px] fixed inset-0 rounded-[16px] m-auto bg-gray-100 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                        <Dialog.Title className="w_heading_primary font_inter m-0 text-[20px] font-medium sm:mt-0 mt-8">
                            Select your Destination
                        </Dialog.Title>
                        <Dialog.Description className="w_text_color mt-[10px] mb-5 text-[14px] leading-normal">
                            You can make it to your destination by selecting
                        </Dialog.Description>

                        <ScrollArea.Root className="w-[100%] rounded overflow-hidden">
                            <ScrollArea.Viewport className="w-full max-h-[60vh] inline-block overflow-auto  rounded  pr-4 mb-4 ">
                                <div className="grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 mb-16">
                                    {currencyOptions.map(
                                        (variable: CurrencyOption) => (
                                            <div
                                                className="w-[100%]"
                                                key={variable.countryCode}
                                            >
                                                <Dialog.Close className="w-[100%]">
                                                    <div className="border rounded-lg p-3 flex flex-row focus:shadow-[0_0_0_2px] outline-none focus:via-slate-300 text-left gap-4 ">
                                                        <div className=" flex-row gap-4 hidden">
                                                            <ReactCountryFlag
                                                                countryCode={
                                                                    variable.countryCode
                                                                }
                                                                svg
                                                                style={
                                                                    countrySvgStyle
                                                                }
                                                            ></ReactCountryFlag>
                                                            <div className="">
                                                                <p className="text_xs">
                                                                    {
                                                                        variable.countryName
                                                                    }
                                                                </p>

                                                                <h3 className="leading-[1em] text-[1.5em] text-gray-600">
                                                                    {
                                                                        variable.countryCode
                                                                    }
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <div className="grid">
                                                            <div className="flex flox-row gap-6  focus:shadow-[0_0_0_2px]">
                                                                <ReactCountryFlag
                                                                    countryCode={
                                                                        variable.countryCode
                                                                    }
                                                                    svg
                                                                    style={
                                                                        countrySvgStyle
                                                                    }
                                                                ></ReactCountryFlag>

                                                                <h3 className="leading-[1.1em] text-[2.6em] text-gray-500">
                                                                    {
                                                                        variable.countryCode
                                                                    }
                                                                </h3>
                                                            </div>

                                                            <p className="text_xs text-gray-500">
                                                                {
                                                                    variable.countryName
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Dialog.Close>
                                            </div>
                                        ),
                                    )}
                                </div>
                            </ScrollArea.Viewport>
                            <ScrollArea.Scrollbar
                                className="flex select-none touch-none p-0.5 overflow_bg transition-colors  ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                                orientation="vertical"
                            >
                                <ScrollArea.Thumb className="flex-1 bg-mauve10/50 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
                            </ScrollArea.Scrollbar>
                            <ScrollArea.Scrollbar
                                className="flex select-none touch-none p-0.5 bg-mauve10/50 transition-colors  ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                                orientation="horizontal"
                            >
                                <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
                            </ScrollArea.Scrollbar>
                            <ScrollArea.Corner className="bg-mauve10" />
                        </ScrollArea.Root>
                        <Dialog.Close asChild>
                            <button
                                className="w_text_color hover:bg-violet4 focus:shadow-violet7 absolute top-[20px] right-[20px] inline-flex h-[32px] w-[32px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                                aria-label="Close"
                            >
                                <Cross2Icon className="md:h-[32px] md:w-[32px] w-[20px] h-[20px]" />
                            </button>
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    );
}

export default CountryDialog;
