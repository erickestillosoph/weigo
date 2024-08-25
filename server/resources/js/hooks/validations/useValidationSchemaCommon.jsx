import { currencyCode } from "@/lib/currencyCode";
import * as Yup from "yup";
import { useEffect, useState } from "react";

export const useValidationSchemaCommon = (values) => {
    const { Email, Amount, Currency, ProcId } = values;

    const [emailData, setEmailData] = useState("undefined");
    const [amountData, setAmountData] = useState("undefined");
    const [ccyData, setCCYData] = useState("undefined");
    const [procIdData, setProcIdData] = useState("undefined");

    const validateEmail = () => {
        let response;
        if (!Email) {
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
        if (!Amount) {
            response = "Amount is required";
        } else if (!/^[0-9]/i.test(amount)) {
            response = "Please enter numbers";
        } else if (Amount.length <= 2) {
            response = "Please input amount greater that  2 digit";
        } else {
            response = "Good!";
        }
        setAmountData(response);
        return response;
    };

    const validateCurrency = () => {
        let response;
        let valueToCheck = Currency;
        let countryExists = false;

        for (let i = 0; i < currencyCode.length; i++) {
            if (currencyCode[i].currency === valueToCheck) {
                countryExists = true;
                break;
            }
        }

        if (!Currency) {
            response = "Currency is required";
        } else if (!/^[A-Z]/i.test(ccy)) {
            response = "Please enter numbers";
        } else if (countryExists) {
            response = "Valid currency code";
        } else {
            response = "Good!";
        }
        setCCYData(response);
        return response;
    };
    const validateProcIdData = () => {
        let response;
    
        if (!ProcId) {
            response = "ProcId is required";
        } else {
            response = "Good!";
        }
        setProcIdData(response);
        return response;
    };
    useEffect(() => {
        validateAmount();
        validateCurrency();
        validateEmail();
        validateProcIdData();
    }, [Amount, Currency, Email, ProcId]);

    const validationSchema = Yup.object({
        Email: Yup.string().required(`${emailData}`),
        Amount: Yup.string().required(`${amountData}`),
        Currency: Yup.string().required(`${ccyData}`),
        ProcId: Yup.string().required(`${procIdData}`),
        Description: Yup.string(),
        
    });

    return {
        validationSchema,
    };
};
