import { useForm } from "react-hook-form";
import axios from "@/lib/axios/axios";
import UrlService from "@/services/urlService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import cookieService from "@/services/cookieService";
import { useToast } from "@/components/ui/toast/use-toast";
type Inputs = {
    uid: string;
    Amount: string;
    Email: string;
    Currency: string;
    ProcId: string;
    Description: string;
    FirstName: string;
    MiddleName: string;
    LastName: string;
    Address1: string;
    Address2: string;
    City: string;
    State: string;
    Country: string;
    ZipCode: string;
    TelNo: string;
    EmailBD: string;
};

export const useCreditCard = () => {
    const cookieUserId = cookieService.getCookieData("userId") || "";
    const queryClient = useQueryClient();
    const { toast } = useToast();
    const {
        getValues,
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm<Inputs>({
        defaultValues: {
            uid: "",
            Amount: "",
            Email: "",
            Currency: "",
            ProcId: "",
            Description: "",
            FirstName: "",
            MiddleName: "",
            LastName: "",
            Address1: "",
            Address2: "",
            City: "",
            State: "",
            Country: "",
            ZipCode: "",
            TelNo: "",
            EmailBD: "",
        },
    });

    const onSubmit = useMutation({
        mutationFn: async () => {
            const url = UrlService.dpCreditCard();
            const data = {
                Amount: getValues("Amount"),
                Email: getValues("Email"),
                Currency: getValues("Currency"),
                ProcId: getValues("ProcId"),
                Description: getValues("Description"),
                FirstName: getValues("FirstName"),
                MiddleName: getValues("MiddleName"),
                LastName: getValues("LastName"),
                Address1: getValues("Address1"),
                Address2: getValues("Address2"),
                City: getValues("City"),
                State: getValues("State"),
                Country: getValues("Country"),
                ZipCode: getValues("ZipCode"),
                TelNo: getValues("TelNo"),
                EmailBD: getValues("EmailBD"),
                uid: cookieUserId,
            };
            const response = await axios.post(url, data);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries();
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

    return {
        errorFormState: errors,
        reset,
        register,
        handleSubmitForm: handleSubmit,
        onSubmit,
        isSubmitSuccessful,
    };
};
