import Loader from "@/components/shared/loader/LoaderComponent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePayment } from "@/hooks/payment/payment/usePayment";
import { useSetUseIsAuthState } from "@/state/pages/useAuthApp";
import { HomeIcon } from "@radix-ui/react-icons";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { countriesInfo } from "@/lib/countryCodePhone";
import { SelectScrollable } from "@/components/shared/selects";
import { procIdOptions } from "@/lib/procIds";

function Payment() {
    const navigate = useNavigate();
    const countryData = countriesInfo;
    const procIdData = procIdOptions;
    const setIsAuthState = useSetUseIsAuthState();
    const {
        register,
        reset,
        setValue,
        onSubmit: { mutateAsync, isPending },
        handleSubmitForm,
    } = usePayment();
    const handleHome = () => {
        setIsAuthState({ authentication: true });
        navigate("/");
    };
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSubmitForm(async () => {
            try {
                await mutateAsync();
            } catch (e) {
                console.error(e);
            }
        })();
    };

    const removeNumberFromString = (str: string) => {
        return str.replace(/\d/g, "");
    };

    const handleChangeDataCurrency = (data: string) => {
        const cleanedEvent = removeNumberFromString(data);
        setValue("Currency", cleanedEvent);
    };

    const handleChangeDataProcId = (data: string) => {
        const cleanedEvent = removeNumberFromString(data);
        setValue("ProcId", cleanedEvent);
    };
    return (
        <div className="relative h-[70vh]">
            <Loader isLoading={isPending} />
            {!isPending && (
                <div className="">
                    <div className="w-full flex flex-row gap-2 p-8">
                        <HomeIcon color="black" />
                        <Label onClick={handleHome}>Home</Label>
                    </div>
                    <div className="flex flex-col justify-center items-center h-[80vh]">
                        <div className="flex flex-col w-[80%] gap-3 ">
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-3"
                            >
                                <div className="">
                                    <h1 className="text-4xl">Payment Form</h1>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-full">
                                        <Input
                                            {...register("Email")}
                                            className="w-full"
                                            placeholder="Email"
                                        ></Input>
                                    </div>
                                    <div className="w-full">
                                        <Input
                                            {...register("Amount")}
                                            placeholder="Amount"
                                        ></Input>
                                    </div>
                                </div>
                                <div className="w-full flex gap-3">
                                    <div className="w-full">
                                        <SelectScrollable
                                            {...register("Currency")}
                                            dataCurrencyCode={countryData}
                                            placeholder="Currency"
                                            onSelect={(e) =>
                                                handleChangeDataCurrency(e)
                                            }
                                        ></SelectScrollable>
                                    </div>
                                    <div className="w-full">
                                        <SelectScrollable
                                            {...register("ProcId")}
                                            dataProcId={procIdData}
                                            placeholder="ProcId"
                                            onSelect={(e) =>
                                                handleChangeDataProcId(e)
                                            }
                                        ></SelectScrollable>
                                    </div>
                                </div>

                                <div className="">
                                    <Input
                                        {...register("Description")}
                                        placeholder="Description"
                                    ></Input>
                                </div>
                                <div className="flex justify-between">
                                    <Button className="" type="submit">
                                        Submit
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        className=""
                                        onClick={(e) => {
                                            e.preventDefault();
                                            reset();
                                        }}
                                    >
                                        Clear Form
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Payment;
