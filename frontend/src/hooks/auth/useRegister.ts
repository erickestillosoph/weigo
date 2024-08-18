import { useCsrfToken } from "../token/useCsrfToken";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import axios from "@/lib/axios/axios";
import UrlService from "@/services/urlService";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { csrfTokenState } from "@/state/auth/csrf/useCsrf";
import { authLoginState } from "@/state/auth/useLoginState";
import cookieService from "@/services/cookieService";
import {
    authenticatedStateAtom,
    authenticatedStateSelector,
} from "@/state/auth/useAuthenticated";
import { useSetUseRegisteredDataState } from "@/state/auth/useRegisterState";

type Inputs = {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export const useRegister = () => {
    const { query } = useCsrfToken();
    const [csrfToken, setCsrfToken] = useRecoilState(csrfTokenState);
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(authLoginState);
    const setAuthState = useSetRecoilState(authenticatedStateAtom);
    const { state, destination } = useRecoilValue(authenticatedStateSelector);
    const setUseRegisteredDataState = useSetUseRegisteredDataState();
    const navigate = useNavigate();
    const {
        getValues,
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful, isLoading, isSubmitting },
    } = useForm<Inputs>({
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            password_confirmation: "",
        },
    });

    const onSubmit = useMutation({
        mutationFn: async () => {
            const url = UrlService.register();
            const data = {
                first_name: getValues("first_name"),
                last_name: getValues("last_name"),
                email: getValues("email"),
                password: getValues("password"),
                password_confirmation: getValues("password_confirmation"),
            };
            setUseRegisteredDataState({ email: getValues("email") });
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
            if (data) setAuthState({ authentication: "register", state: true });
            setCsrfToken("isCsrfToken");
            setIsLoggedIn("isLoggedIn");
        },
        onError: (err: Error) => {
            throw err;
        },
    });

    useEffect(() => {
        if (state === true) {
            navigate(destination);
        }
    }, [isLoggedIn, state, csrfToken, navigate, destination]);

    return {
        loadingCsrfToken: query.isLoading,
        errorCsrfToken: query.error,
        errorFormState: errors,
        isLoading,
        isSubmitting,
        register,
        handleSubmitForm: handleSubmit,
        isSubmitSuccessful,
        onSubmit,
    };
};
