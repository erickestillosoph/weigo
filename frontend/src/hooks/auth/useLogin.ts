import { useCsrfToken } from "../token/useCsrfToken";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import axios from "@/lib/axios/axios";
import UrlService from "@/services/urlService";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { csrfTokenState } from "@/state/pages/csrf/useCsrf";
import cookieService from "@/services/cookieService";
import LocalStorageService from "@/services/localStorageService";
import { authLoginState } from "@/state/auth/useLoginState";

type Inputs = {
    email: string;
    password: string;
};

export const useLogin = () => {
    const { query } = useCsrfToken();
    const [csrfToken, setCsrfToken] = useRecoilState(csrfTokenState);
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(authLoginState);

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
            console.log(decodedData.token);
            console.log(decodedData.user_id);
            LocalStorageService.setItem("tokenId", decodedData.token);
            LocalStorageService.setItem("userId", decodedData.user_id);
            cookieService.set("tokenId", encodeURIComponent(decodedData.token));
            cookieService.set(
                "userId",
                encodeURIComponent(decodedData.user_id),
            );
            setCsrfToken("isCsrfToken");
            setIsLoggedIn("isLoggedIn");
        },
        onError: (err: Error) => {
            throw err;
        },
    });

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/profile");
        }
    }, [isLoggedIn, csrfToken, navigate]);

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
