import * as Yup from "yup";
import "yup-phone-lite";
import { useEffect, useState } from "react";

export const useValidationSchemaGuestAccount = (values) => {
    const { firstName, lastName, email, password, phone_number, date, amount } =
        values;

    const [emailData, setEmailData] = useState("undefined");
    const [amountData, setAmountData] = useState("undefined");
    const [nameData, setNameData] = useState("undefined");
    const [passwordData, setPasswordData] = useState("undefined");
    const [phoneNumberData, setPhoneNumberData] = useState("undefined");
    const [dateData, setDateData] = useState("undefined");

    const validateName = () => {
        let response;
        if (!firstName || !lastName) {
            response = "Name is Required";
        } else if (!/^[a-zA-Z]*$/i.test(firstName)) {
            response = "Invalid Name. Please use alphabetical characters only";
        } else if (!/^[a-zA-Z]*$/i.test(lastName)) {
            response = "Invalid Name. Please use alphabetical characters only";
        } else {
            response = "Good!";
        }
        setNameData(response);
        return response;
    };
    const validatePassword = () => {
        let response;
        if (!password) {
            response = "Password is Required";
        } else {
            response = "Good!";
        }
        setPasswordData(response);
        return response;
    };

    const validateEmail = () => {
        let response;
        if (!email) {
            response = "Email is required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            response = "Invalid email address";
        } else {
            response = "Good!";
        }
        setEmailData(response);
        return response;
    };

    const validateAmount = () => {
        let response;
        if (!amount) {
            response = "Amount is required";
        } else if (!/^[0-9]/i.test(amount)) {
            response = "Please enter numbers";
        } else if (amount.length <= 2) {
            response = "Please input amount greater that  2 digit";
        } else {
            response = "Good!";
        }
        setAmountData(response);
        return response;
    };

    // To refactor
    // const validatePhoneCountryCode = () => {
    //     let valueToCheck = values.countryCode;
    //     let codeExists = false;
    //     for (let i = 0; i < countryCode.length; i++) {
    //         if (countryCode[i].countryCode === valueToCheck) {
    //             countryExists = true;
    //             break;
    //         }
    //     }

    //     if (codeExists) {
    //         response = valueToCheck;
    //     }

    //     return "INVALID";
    // };

    const validatePhoneNumber = () => {
        let response;

        if (!phone_number) {
            response = "Phone Number is required";
        } else if (!/^[0-9 ]/i.test(phone_number)) {
            response = "Please enter numbers";
        } else {
            response = "Good!";
        }
        setPhoneNumberData(response);
        return response;
    };

    // To refactor
    const validateDate = () => {
        let response;
        if (!date) {
            response = "Date is required";
        } else {
            response = "Good!";
        }
        setDateData(response);
        return response;
    };

    useEffect(() => {
        validateName();
        validatePhoneNumber();
        validateAmount();
        validateEmail();
        validateDate();
    }, [amount, email, date, firstName, lastName, password, phone_number]);

    const validationSchema = Yup.object({
        firstName: Yup.string().required(`${nameData}`),
        lastName: Yup.string().required(`${nameData}`),
        email: Yup.string().required(`${emailData}`),
        password: Yup.string().required(`${passwordData}`),
        amount: Yup.string().required(`${amountData}`),
        phoneNumber: Yup.string().required(`${phoneNumberData}`),
        date: Yup.string().required(`${dateData}`),
    });

    return {
        validationSchema,
    };
};
