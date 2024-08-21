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

export const useDelete = () => {
    const cookieUuid = cookieService.getCookieData("userId") || "";
    const setAuthState = useSetRecoilState(authenticatedStateAtom);
    const { state, destination } = useRecoilValue(authenticatedStateSelector);
    const { toast } = useToast();
    const navigate = useNavigate();

    const { mutate } = useMutation({
        mutationFn: async () => {
            const url = UrlService.delete(cookieUuid);

            const response = await axios.delete(url);
            return response.data;
        },
        onSuccess: () => {
            cookieService.remove("userId");
            setAuthState({ authentication: "home", state: true });
            toast({
                variant: "default",
                draggable: true,
                duration: 1500,
                title: "Success!",
                description: "Successful deletion of your profile",
            });
        },
        onError: (err: Error) => {
            toast({
                variant: "default",
                draggable: true,
                duration: 1500,
                title: "Error Server!",
                description: "Cannot Delete Profile",
            });
            throw err;
        },
    });

    useEffect(() => {
        if (state === true) {
            navigate(destination);
        }
    }, [state, destination, navigate]);

    return {
        mutate,
    };
};
