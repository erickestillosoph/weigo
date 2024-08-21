import { useCsrfToken } from "../token/useCsrfToken";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "@/lib/axios/axios";
import UrlService from "@/services/urlService";
import { useMutation } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { csrfTokenState } from "@/state/auth/csrf/useCsrf";
import cookieService from "@/services/cookieService";
import { authLoginState } from "@/state/auth/useLoginState";
import { useToast } from "@/components/ui/toast/use-toast";

type Inputs = {
    email: string;
    password: string;
};

export const useLogin = () => {
    const { query } = useCsrfToken();
    const [csrfToken, setCsrfToken] = useRecoilState(csrfTokenState);
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(authLoginState);
    const [urlState, setUrlState] = useState({ redirect: false });

    const { toast } = useToast();

    const {
        getValues,
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
    } = useForm<Inputs>({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = useMutation({
        mutationFn: async () => {
            const url = UrlService.loginUrl();
            const data = {
                email: getValues("email"),
                password: getValues("password"),
            };
            const response = await axios.post(url, data);

            return response.data;
        },
        onSuccess: (data) => {
            const token = JSON.stringify(data);
            const decodedData = JSON.parse(decodeURIComponent(token ?? ""));
            cookieService.set(
                "tokenId",
                encodeURIComponent(decodedData.token),
                { maxAge: 86400 },
            );
            cookieService.set(
                "userId",
                encodeURIComponent(decodedData.user_id),
                { maxAge: 86400 },
            );
            if (data) {
                setUrlState({ redirect: true });
            }
            setCsrfToken("isCsrfToken");
            setIsLoggedIn("isLoggedIn");

            toast({
                variant: "default",
                draggable: true,
                title: "Success!",
                duration: 1500,
                description: "Your Successfully Login!",
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

    useEffect(() => {
        if (urlState.redirect === true) {
            window.location.replace("/");
        }
    }, [isLoggedIn, urlState, csrfToken]);

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
