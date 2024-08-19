import { useForm } from "react-hook-form";
import axios from "@/lib/axios/axios";
import UrlService from "@/services/urlService";
import { useMutation } from "@tanstack/react-query";
import { useIsRegisteredDataState } from "@/state/auth/useRegisterState";

type Inputs = {
    email: string;
};

export const useResendLink = () => {
    const isRegisteredDataState = useIsRegisteredDataState();
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
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (err: Error) => {
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
