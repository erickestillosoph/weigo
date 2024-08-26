import Loader from "@/components/shared/loader/LoaderComponent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCreditCard } from "@/hooks/payment/creditCard/useCreditCard";
import { useSetUseIsAuthState } from "@/state/pages/useAuthApp";
import { HomeIcon } from "@radix-ui/react-icons";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
function CreditCard() {
    const navigate = useNavigate();
    const setIsAuthState = useSetUseIsAuthState();
    const {
        register,
        reset,
        onSubmit: { mutateAsync, isPending },
        handleSubmitForm,
    } = useCreditCard();
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
                                    <h1 className="text-4xl">
                                        Credit Card Form
                                    </h1>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-full">
                                        <Input
                                            {...register("Email")}
                                            placeholder="Email"
                                        ></Input>
                                    </div>
                                    <div className="w-full">
                                        <Input
                                            {...register("Amount")}
                                            placeholder="Amount"
                                        ></Input>
                                    </div>
                                    <div className="w-full">
                                        <Input
                                            {...register("Currency")}
                                            placeholder="Currency"
                                        ></Input>
                                    </div>
                                    <div className="w-full">
                                        <Input
                                            {...register("ProcId")}
                                            placeholder="ProcId"
                                        ></Input>
                                    </div>
                                </div>

                                <div className="">
                                    <Input
                                        {...register("Description")}
                                        placeholder="Description"
                                    ></Input>
                                </div>

                                <div className="grid gap-3">
                                    <div className="mb-4 mt-4">
                                        <h3>Billing Details</h3>
                                    </div>
                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="">
                                            <Input
                                                {...register("FirstName")}
                                                placeholder="FirstName"
                                            ></Input>
                                        </div>
                                        <div className="">
                                            <Input
                                                {...register("MiddleName")}
                                                placeholder="MiddleName"
                                            ></Input>
                                        </div>
                                        <div className="">
                                            <Input
                                                {...register("LastName")}
                                                placeholder="LastName"
                                            ></Input>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="">
                                            <Input
                                                {...register("Address1")}
                                                placeholder="Address1"
                                            ></Input>
                                        </div>
                                        <div className="">
                                            <Input
                                                {...register("Address2")}
                                                placeholder="Address2"
                                            ></Input>
                                        </div>
                                        <div className="">
                                            <Input
                                                {...register("City")}
                                                placeholder="City"
                                            ></Input>
                                        </div>
                                        <div className="">
                                            <Input
                                                {...register("State")}
                                                placeholder="State"
                                            ></Input>
                                        </div>
                                        <div className="">
                                            <Input
                                                {...register("Country")}
                                                placeholder="Country"
                                            ></Input>
                                        </div>
                                        <div className="">
                                            <Input
                                                {...register("ZipCode")}
                                                placeholder="ZipCode"
                                            ></Input>
                                        </div>
                                        <div className="">
                                            <Input
                                                {...register("TelNo")}
                                                placeholder="TelNo"
                                            ></Input>
                                        </div>
                                        <div className="">
                                            <Input
                                                {...register("EmailBD")}
                                                placeholder="EmailBD"
                                            ></Input>
                                        </div>
                                    </div>
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

export default CreditCard;
