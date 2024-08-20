import axios from "@/lib/axios/axios";
import { useQuery } from "@tanstack/react-query";
import cookieService from "@/services/cookieService";
import UrlService from "@/services/urlService";
import { useToast } from "@/components/ui/toast/use-toast";
import { useLocation } from "react-router-dom";
export const useGetProfile = () => {
    const location = useLocation();
    const cookieUserId = cookieService.getCookieData("userId") || "";
    const url = UrlService.getProfileUser(cookieUserId);
    const { toast } = useToast();

    const { data, isLoading, error } = useQuery({
        queryFn: async () => {
            const response = await axios.get(url);
            return response.data;
        },
        queryKey: ["userInfo", location],
    });

    if (error)
        toast({
            title: "Error",
            description: "Fetching data error",
        });

    return {
        userInfo: data,
        isLoadingUserInfo: isLoading,
        errorUserInfo: error,
    };
};
