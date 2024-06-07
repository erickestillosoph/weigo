import { usePage } from "@inertiajs/react";
export const useServiceModels = () => {
    const { d_p_service_models } = usePage().props;
    return {
        d_p_service_models,
    };
};
