import { useCsrfToken } from "../token/useCsrfToken"; // Import the custom hook
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "@/lib/axios/axios";
import UrlService from "@/services/urlService";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
type Inputs = {
    email: string;
    password: string;
};

export const useLogin = () => {
    const { isLoading, error } = useCsrfToken(); // Fetch CSRF token
    const navigate = useNavigate();
    const [accessToken, setAccessToken] = useState<string>("");
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
    // const onSubmit = async () => {
    //     const url = UrlService.loginUrl();
    //     const data = {
    //         email: getValues("email"),
    //         password: getValues("password"),
    //     };

    //     await axios
    //         .post(url, data)
    //         .then((res) => {
    //             return setAccessToken(res.data.token);
    //         })
    //         .catch((err) => {
    //             throw err;
    //         });
    // };

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
            setAccessToken(data.token);
        },
        onError: (err: Error) => {
            throw err;
        },
    });

    useEffect(() => {
        if (accessToken) {
            axios.defaults.headers.common["Authorization"] =
                `Bearer ${accessToken}`;
            navigate("/profile");
        }
    }, [accessToken, navigate]);

    return {
        loadingCsrfToken: isLoading,
        errorCsrfToken: error,
        errorFormState: errors,
        register,
        handleSubmitForm: handleSubmit,
        onSubmit,
        isSubmitSuccessful,
    };
};
