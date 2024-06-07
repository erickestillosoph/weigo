import { usePage } from "@inertiajs/react";
export const useDpPreSelectingPayments = () => {
    const { d_p_pre_selecting_payments } = usePage().props;
    return {
        d_p_pre_selecting_payments,
    };
};
