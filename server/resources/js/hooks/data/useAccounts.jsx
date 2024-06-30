import { usePage } from "@inertiajs/react";
export const useAccounts = () => {
    const { guests } = usePage().props;
    const users = usePage().props.users;
    const current_user = usePage().props.auth.user;
    return {
        guests,
        users,
        current_user,
    };
};
