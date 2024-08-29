import { useForm } from "react-hook-form";
import axios from "@/lib/axios/axios";
import UrlService from "@/services/urlService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import cookieService from "@/services/cookieService";
import { useToast } from "@/components/ui/toast/use-toast";
import { useComputationAmount } from "../computations/useComputationAmount";
import { useEffect, useState } from "react";
import LocalStorageService from "@/services/localStorageService";
type Inputs = {
    uid: string;
    Amount: string;
    Email: string;
    Currency: string;
    ProcId: string;
    Description: string;
};

export const usePayment = () => {
    const cookieUserId = cookieService.getCookieData("userId") || "";
    const { amount } = useComputationAmount();
    const queryClient = useQueryClient();
    const { toast } = useToast();
    const [urlState, setUrlState] = useState({ redirect: false });
    const {
        getValues,
        register,
        setValue,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm<Inputs>({
        defaultValues: {
            uid: "",
            Amount: amount,
            Email: "",
            Currency: "",
            ProcId: "",
            Description: "",
        },
    });

    const onSubmit = useMutation({
        mutationFn: async () => {
            const url = UrlService.dpPayment();
            const data = {
                Amount: amount,
                Email: getValues("Email"),
                Currency: getValues("Currency"),
                ProcId: getValues("ProcId"),
                Description: getValues("Description"),
                uid: cookieUserId,
            };
            const response = await axios.post(url, data);
            return response.data;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries();
            if (data) {
                setUrlState({ redirect: true });
            }
            toast({
                variant: "default",
                draggable: true,
                title: "Succes",
                duration: 1500,
                description: "Success on sending data to the server",
            });
        },
        onError: (err: Error) => {
            toast({
                variant: "destructive",
                draggable: true,
                title: "Error Submitting",
                duration: 1500,
                description: "Error on sending data to the server",
            });
            throw err;
        },
    });

    useEffect(() => {
        if (urlState.redirect === true) {
            window.location.replace("/thank-you");
            LocalStorageService.removeItem("productState");
            LocalStorageService.removeItem("insuranceState");
            LocalStorageService.removeItem("carRentalState");
            LocalStorageService.removeItem("activityState");
        }
    }, [urlState]);

    return {
        errorFormState: errors,
        reset,
        register,
        setValue,
        handleSubmitForm: handleSubmit,
        onSubmit,
        isSubmitSuccessful,
    };
};
