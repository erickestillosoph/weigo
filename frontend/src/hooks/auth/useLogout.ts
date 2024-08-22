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
import { useToast } from "@/components/ui/toast/use-toast";
import LocalStorageService from "@/services/localStorageService";

export const useLogout = () => {
    const cookieUuid = cookieService.getCookieData("uuid");
    const setAuthState = useSetRecoilState(authenticatedStateAtom);
    const { state } = useRecoilValue(authenticatedStateSelector);
    const { toast } = useToast();
    const navigate = useNavigate();

    const { mutate } = useMutation({
        mutationFn: async () => {
            const url = UrlService.logout();
            const data = {
                uid: cookieUuid,
            };
            const response = await axios.post(url, data);
            return response.data;
        },
        onSuccess: () => {
            cookieService.remove("uuid");
            setAuthState({ authentication: "home", state: true });
            toast({
                variant: "default",
                draggable: true,
                duration: 1500,
                title: "Success!",
                description: "Successful request sent to the server",
            });
        },
        onError: (err: Error) => {
            toast({
                variant: "default",
                draggable: true,
                duration: 1500,
                title: "Error!",
                description: "Error on send reset request to the server!",
            });
            throw err;
        },
    });

    useEffect(() => {
        if (state === true) {
            window.location.replace("/");
            cookieService.clearAll();
            LocalStorageService.clear();
        }
    }, [state, navigate]);

    return {
        mutate,
    };
};
