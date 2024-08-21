import { useForm } from "react-hook-form";
import axios from "@/lib/axios/axios";
import UrlService from "@/services/urlService";
import { useMutation } from "@tanstack/react-query";
import { useIsRegisteredDataState } from "@/state/auth/useRegisterState";
import { useToast } from "@/components/ui/toast/use-toast";

type Inputs = {
    email: string;
};

export const useResendLink = () => {
    const isRegisteredDataState = useIsRegisteredDataState();
    const { toast } = useToast();
    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
    } = useForm<Inputs>({
        defaultValues: {
            email: String(isRegisteredDataState.email),
        },
    });

    const onSubmit = useMutation({
        mutationFn: async () => {
            const url = UrlService.resendLink();
            const data = {
                email: getValues("email"),
            };
            const response = await axios.post(url, data);

            return response.data;
        },
        onSuccess: () => {
            toast({
                variant: "default",
                draggable: true,
                title: "Success!",
                duration: 1500,
                description: "Verfication Email has been sucessfully sent",
            });
        },
        onError: (err: Error) => {
            toast({
                variant: "destructive",
                draggable: true,
                duration: 1500,
                title: "Error Submitting",
                description: "Error on sending data to the server",
            });
            throw err;
        },
    });

    return {
        errorFormState: errors,
        register,
        handleSubmitForm: handleSubmit,
        isSubmitSuccessful,
        onSubmit,
    };
};
