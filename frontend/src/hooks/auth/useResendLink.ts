import { useForm } from "react-hook-form";
import { useEffect } from "react";
import axios from "@/lib/axios/axios";
import UrlService from "@/services/urlService";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
    authenticatedStateAtom,
    authenticatedStateSelector,
} from "@/state/auth/useAuthenticated";
import { useIsRegisteredDataState } from "@/state/auth/useRegisterState";

type Inputs = {
    email: string;
};

export const useResendLink = () => {
    const isRegisteredDataState = useIsRegisteredDataState();
    const setAuthState = useSetRecoilState(authenticatedStateAtom);
    const { state, destination } = useRecoilValue(authenticatedStateSelector);

    const navigate = useNavigate();
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
            if (data) {
                setAuthState({ authentication: "login", state: true });
            }
        },
        onError: (err: Error) => {
            throw err;
        },
    });

    useEffect(() => {
        console.log(state);
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
