import { useCsrfToken } from "../token/useCsrfToken";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import axios from "@/lib/axios/axios";
import UrlService from "@/services/urlService";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { csrfTokenState } from "@/state/auth/csrf/useCsrf";
import cookieService from "@/services/cookieService";
import { authLoginState } from "@/state/auth/useLoginState";
import {
    authenticatedStateAtom,
    authenticatedStateSelector,
} from "@/state/auth/useAuthenticated";

type Inputs = {
    email: string;
    password: string;
};

export const useLogin = () => {
    const { query } = useCsrfToken();
    const [csrfToken, setCsrfToken] = useRecoilState(csrfTokenState);
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(authLoginState);
    const setAuthState = useSetRecoilState(authenticatedStateAtom);
    const { state, destination } = useRecoilValue(authenticatedStateSelector);

    const navigate = useNavigate();
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
                setAuthState({ authentication: "login", state: true });
            }
            setCsrfToken("isCsrfToken");
            setIsLoggedIn("isLoggedIn");
        },
        onError: (err: Error) => {
            throw err;
        },
    });

    useEffect(() => {
        console.log(state);
        if (state === true) {
            console.log(isLoggedIn);
            navigate(destination);
        }
    }, [isLoggedIn, state, destination, csrfToken, navigate]);

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
