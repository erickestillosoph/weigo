import { usePage } from "@inertiajs/react";
export const usePayments = () => {
    const { d_p_payments } = usePage().props;
    return {
        d_p_payments,
    };
};
