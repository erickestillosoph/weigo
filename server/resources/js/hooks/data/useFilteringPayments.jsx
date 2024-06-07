import { usePage } from "@inertiajs/react";
export const useDpFilteringPayments = () => {
    const { d_p_filtered_payments } = usePage().props;
    return {
        d_p_filtered_payments,
    };
};
