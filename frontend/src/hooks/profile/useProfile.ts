import { useForm } from "react-hook-form";
import axios from "@/lib/axios/axios";
import UrlService from "@/services/urlService";
import { useMutation } from "@tanstack/react-query";
import cookieService from "@/services/cookieService";
import { useToast } from "@/components/ui/toast/use-toast";
type Inputs = {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    birthday: string;
    password: string;
    uid: string;
};

export const useProfile = () => {
    const cookieUserId = cookieService.getCookieData("userId");
    const { toast } = useToast();
    const {
        getValues,
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
    } = useForm<Inputs>({
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            birthday: "",
            phone_number: "",
            uid: cookieUserId,
        },
    });

    const onSubmit = useMutation({
        mutationFn: async () => {
            const url = UrlService.updateProfileUrl();
            const data = {
                email: getValues("email"),
                password: getValues("password"),
                first_name: getValues("first_name"),
                last_name: getValues("last_name"),
                birthday: getValues("birthday"),
                phone_number: getValues("phone_number"),
                uid: cookieUserId,
            };
            const response = await axios.post(url, data);
            return response.data;
        },
        onSuccess: (res) => {
            console.log(res);
            toast({
                variant: "default",
                draggable: true,
                title: "Succes",
                duration: 1500,
                description: "Success on sending data to the server",
            });
        },
        onError: (err: Error) => {
            toast({
                variant: "destructive",
                draggable: true,
                title: "Error Submitting",
                duration: 1500,
                description: "Error on sending data to the server",
            });
            throw err;
        },
    });

    return {
        errorFormState: errors,
        register,
        handleSubmitForm: handleSubmit,
        onSubmit,
        isSubmitSuccessful,
    };
};
