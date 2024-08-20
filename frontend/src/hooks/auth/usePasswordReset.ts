import { useCsrfToken } from "../token/useCsrfToken";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { csrfTokenState } from "@/state/auth/csrf/useCsrf";
import {
    authenticatedStateAtom,
    authenticatedStateSelector,
} from "@/state/auth/useAuthenticated";

import axios from "@/lib/axios/axios";
import UrlService from "@/services/urlService";
import { useMutation } from "@tanstack/react-query";
import cookieService from "@/services/cookieService";
import { useToast } from "@/components/ui/toast/use-toast";

export const usePasswordReset = () => {
    const { query } = useCsrfToken();
    const [csrfToken, setCsrfToken] = useRecoilState(csrfTokenState);
    const { toast } = useToast();
    const setAuthState = useSetRecoilState(authenticatedStateAtom);
    const { state, destination } = useRecoilValue(authenticatedStateSelector);

    const navigate = useNavigate();
    const {
        getValues,
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
    } = useForm<{ email: string }>({
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = useMutation({
        mutationFn: async () => {
            const url = UrlService.forgotPassword();
            const response = await axios.post(url, {
                email: String(getValues("email")),
            });
            return response.data;
        },
        onSuccess: (data) => {
            console.log(data);
            const token = JSON.stringify(data);
            const decodedData = JSON.parse(decodeURIComponent(token ?? ""));
            cookieService.set("uuid", encodeURIComponent(decodedData.token), {
                maxAge: 86400,
            });
            setAuthState({ authentication: "reset", state: false });
            setCsrfToken("isCsrfToken");
            toast({
                variant: "default",
                draggable: true,
                title: "Success!",
                description: "Successful request sent to the server",
            });
        },
        onError: (err: Error) => {
            toast({
                variant: "default",
                draggable: true,
                title: "Error!",
                description: "Error on send reset request to the server!",
            });
            throw err;
        },
    });

    useEffect(() => {
        if (state === true) {
            navigate(destination);
        }
    }, [state, destination, csrfToken, navigate]);

    return {
        loadingCsrfToken: query.isLoading,
        errorCsrfToken: query.error,
        errorFormState: errors,
        register,
        handleSubmitForm: handleSubmit,
        isSubmitSuccessful,
        onSubmit,
    };
};
