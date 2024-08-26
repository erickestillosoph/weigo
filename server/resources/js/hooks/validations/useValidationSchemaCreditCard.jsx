import { currencyCode } from "@/lib/currencyCode";
import "yup-phone-lite";
import { useEffect, useState } from "react";
import * as Yup from "yup";
export const useValidationSchemaCreditCard = (values) => {
    const {
        Amount,
        Email,
        Description,
        ProcId,
        Param1,
        Param2,
        Currency,
        FirstName,
        MiddleName,
        LastName,
        Email: EmailBD,
        Address1,
        Address2,
        Country,
        City,
        State,
        ZipCode,
        TelNo,
      
    } = values;

    

    const [nameData, setNameData] = useState("undefined");
    const [currecyData, setCurrencyData] = useState("undefined");
    const [countryData, setCountryData] = useState("undefined");
    const [cityData, setCityData] = useState("undefined");
    const [stateData, setStateData] = useState("undefined");
    const [emailData, setEmailData] = useState("undefined");
    const [paramData, setParamData] = useState("undefined");
    const [zipCodeData, setZipCodeData] = useState("undefined");
    const [telNoData, setTelNoData] = useState("undefined");
    const [amountData, setAmountData] = useState("undefined");
    const [procIdData, setProcIdData] = useState("undefined");
    const [addressData, setAddressData] = useState("undefined");

    const validateName = () => {
        let response;
        if (!FirstName || !LastName || !MiddleName) {
            response = "Name is Required";
        } else if (!/^[a-zA-Z]*$/i.test(FirstName)) {
            response = "Invalid Name. Please use alphabetical characters only";
        } else if (!/^[a-zA-Z]*$/i.test(MiddleName)) {
            response = "Invalid Name. Please use alphabetical characters only";
        } else if (!/^[a-zA-Z]*$/i.test(LastName)) {
            response = "Invalid Name. Please use alphabetical characters only";
        } 
        else {
            response = "Good!";
        }
        setNameData(response);
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
    const validateParamData = () => {
        let response;
    
        if (!Param1 || !Param2) {
            response = "Param is required";
        } else {
            response = "Good!";
        }
        setParamData(response);
        return response;
    };

    const validateEmail = () => {
        let response;
        if (!Email || !EmailBD) {
            response = "Email is required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(Email)) {
            response = "Invalid email address";
        }  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(EmailBD)) {
            response = "Invalid email address";
        } else {
            response = "Good!";
        }

        setEmailData(response);
        return response;
    };

    const validateAddress = () => {
        let response;
        if (!Address1 || !Address2) {
            response = "Address is required";
        } else if (!/^[a-zA-Z0-9]*$/i.test(Address1)) {
            response = "Please enter letters and numbers";
        } else if (!/^[a-zA-Z0-9]*$/i.test(Address2)) {
            response = "Please enter letters and numbers";
        } else {
            response = "Good!";
        }
        setAddressData(response);
        return response;
    };

    const validateCity = () => {
        let response;
        if (!City) {
            response = "City is required";
        } else if (!/^[a-zA-Z]*$/i.test(City)) {
            response = "Please enter letters";
        } else {
            response = "Good!";
        }
        setCityData(response);
        return response;
    };

    const validateState = () => {
        let response;
        if (!State) {
            response = "State is required";
        } else if (!/^[a-zA-Z]*$/i.test(State)) {
            response = "Please enter letters";
        } else {
            response = "Good!";
        }

        setStateData(response);
        return response;
    };

    const validateCountry = () => {
        let response;
        if (!Country) {
            response = "Country is required";
        } else if (!/^[a-zA-Z]*$/i.test(Country)) {
            response = "Please enter letters";
        } else {
            response = "Good!";
        }
        setCountryData(response);
        return response;
    };

    const validateZipCode = () => {
        let response;
        if (!ZipCode) {
            response = "ZipCode is required";
        } else if (!/^[0-9 ]/i.test(ZipCode)) {
            response = "Please enter numbers";
        } else {
            response = "Good!";
        }
        setZipCodeData(response);
        return response;
    };

    const validateAmount = () => {
        let response;
        if (!Amount) {
            response = "Amount is required";
        } else if (!/^[0-9]/i.test(Amount)) {
            response = "Please enter numbers";
        } else if (Amount.length <= 2) {
            response = "Please input amount greater that 2 digit";
        } else {
            response = "Good!";
        }
        setAmountData(response);
        return response;
    };

    const validateCurrency = () => {
        let response;
        let valueToCheck = values.Currency;
        let countryExists = false;

        for (let i = 0; i < currencyCode.length; i++) {
            if (currencyCode[i].currency === valueToCheck) {
                countryExists = true;
                break;
            }
        }

        if (!Currency) {
            response = "Currency Code is required";
        } else if (!/^[A-Z]/i.test(Currency)) {
            response = "Please enter numbers";
        } else if (countryExists) {
            response = "Valid currency code";
        } else {
            response = "Good!";
        }
        setCurrencyData(response);
        return response;
    };

    const validateTelephone = () => {
        let response;

        if (!TelNo) {
            response = "Telephone is required";
        } else if (!/^[0-9 ]/i.test(TelNo)) {
            response = "Please enter numbers";
        } else {
            response = "Good!";
        }
        setTelNoData(response);
        return response;
    };

    useEffect(() => {
        validateEmail();
        validateAmount();
        validateCurrency();
        validateProcIdData();
        validateAddress();
        validateCity();
        validateCountry();
        validateState();
        validateName();
        validateZipCode();
        validateTelephone();
        validateParamData();
    }, [
        Amount,
        Currency,
        ProcId,
        Country,
        Address1,
        Address2,
        City,
        State,
        FirstName,
        MiddleName,
        LastName,
        Email,
        EmailBD,
        ZipCode,
        TelNo,
        Param1,
        Param2
    ]);

    const validationSchema = Yup.object({
        Amount: Yup.string().required(`${amountData}`),
        Currency: Yup.string().required(`${currecyData}`),
        Description: Yup.string(),
        Email: Yup.string().required(`${emailData}`),       
        ProcId: Yup.string().required(`${procIdData}`),        
        Param1: Yup.string(),        
        Param2: Yup.string(),        
        EmailBD: Yup.string().required(`${emailData}`),
        FirstName: Yup.string().required(`${nameData}`),
        MiddleName: Yup.string().required(`${nameData}`),
        LastName: Yup.string().required(`${nameData}`),
        Address1: Yup.string().required(`${addressData}`),
        Address2: Yup.string().required(`${addressData}`),
        City: Yup.string().required(`${cityData}`),
        State: Yup.string().required(`${stateData}`),
        Country: Yup.string().required(`${countryData}`),
        ZipCode: Yup.string().required(`${zipCodeData}`),
        TelNo: Yup.string().required(`${telNoData}`),
    
    });

    return {
        validationSchema,
    };
};
