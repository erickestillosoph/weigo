export type Login = {
    message: string;
    token: string;
    user: {
        id: number;
        uid: string;
        first_name: string;
        last_name: string;
        phone_number: string;
        email: string;
    };
};
export type Register = {
    message: string;
};
export type Reset = {
    message: string;
};
export type Logout = {
    message: string;
};
export type UpdateProfile = {
    message: string;
};
export type DeleteProfile = {
    message: string;
};
