import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
    authenticatedStateAtom,
    authenticatedStateSelector,
} from "@/state/auth/useAuthenticated";

import axios from "@/lib/axios/axios";
import UrlService from "@/services/urlService";
import { useMutation } from "@tanstack/react-query";
import cookieService from "@/services/cookieService";

type Inputs = {
    uid: string;
    password: string;
    password_confirmation: string;
};

export const usePasswordResetForm = () => {
    const cookieUuid = cookieService.getCookieData("uuid");
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
            uid: cookieUuid,
            password: "",
        },
    });

    const onSubmit = useMutation({
        mutationFn: async () => {
            const url = UrlService.resetPassword();
            const data = {
                password: String(getValues("password")),
                uid: cookieUuid,
            };
            const response = await axios.post(url, data);
            return response.data;
        },
        onSuccess: () => {
            cookieService.remove("uuid");
            setAuthState({ authentication: "password", state: true });
        },
        onError: (err: Error) => {
            throw err;
        },
    });

    useEffect(() => {
        if (state === true) {
            navigate(destination);
        }
    }, [state, destination, navigate]);

    return {
        errorFormState: errors,
        register,
        handleSubmitForm: handleSubmit,
        isSubmitSuccessful,
        onSubmit,
    };
};
