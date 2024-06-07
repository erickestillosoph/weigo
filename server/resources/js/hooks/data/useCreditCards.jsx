import { usePage } from "@inertiajs/react";
export const useDpCrediCards = () => {
    const { d_p_credit_cards } = usePage().props;
    return {
        d_p_credit_cards,
    };
};
