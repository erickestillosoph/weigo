import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Tabs from "@/Components/Tabs";
import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import ConfirmationModal from "@/Components/Modal/ConfirmationModal";
import InformationModal from "@/Components/Modal/InformationModal";
import { useDpCrediCards } from "@/hooks/data/useCreditCards";
import { Head, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { useAccounts } from "@/hooks/data/useAccounts";
import { useFormik } from "formik";
import "react-toastify/dist/ReactToastify.css";
import { useValidationSchemaCreditCard } from "@/hooks/validations/useValidationSchemaCreditCard";
import InputError from "@/Components/InputError";
import InputDropdown from "@/Components/InputDropdown/InputDropdown";
import { procIdOptions } from "@/lib/codeListBanks";
export default function CreditCard({ auth }) {
    const { current_user } = useAccounts();
    const { d_p_credit_cards, detected_ip, user_agent } = useDpCrediCards();

    const [creditCardData, setCreditCardData] = useState(d_p_credit_cards);
    const [tabToggle, setTabToggle] = useState(true);
    const [confirmationUserDeletion, setConfirmingUserDeletion] =
        useState(false);
    const paymentProcIdOptions = procIdOptions;
    const [amountValue, setAmountValue]= useState('');
    const [currencyValue, setCurrencyValue]= useState('');
    const [emailValue, setEmailValue]= useState('');
    const [procIdValue, setProcIdValue]= useState('');
    const [param1Value, setParam1Value]= useState('');
    const [param2Value, setParam2Value]= useState('');
    const [descriptionValue, setDescriptionValue]= useState('');
    const [firstNameValue, setFirstNameValue]= useState('');        
    const [middleNameValue, setMiddleNameValue]= useState('');        
    const [lastNameValue, setLastNameValue]= useState('');        
    const [emailBDValue, setEmailBDValue]= useState('');        
    const [address1Value, setAddress1Value]= useState('');        
    const [address2Value, setAddress2Value]= useState('');        
    const [cityValue, setCityValue]= useState('');        
    const [stateValue, setStateValue]= useState('');        
    const [countryValue, setCountryValue]= useState('');        
    const [zipCodeValue, setZipCodeValue]= useState('');        
    const [telNoValue, setTelNoValue]= useState('');        

    const [infoData, setInfoData] = useState(false);
    const [isRoleAdmin, setIsRoleAdmin] = useState(false);

    const [deleteData, setDeleteData] = useState(undefined);
    const [dataToModal, setDataToModal] = useState(undefined);
    const [valuesData, setValuesData] = useState({
        Amount: "",
        Currency: "",
        Description: "",
        Email: "",
        ProcId: "",                    
        Param1: "",                    
        Param2: "",                    
        FirstName: "",
        MiddleName: "",
        LastName: "",
        EmailBD: "",
        Address1: "",
        Address2: "",
        City: "",
        State: "",
        Country: "",
        ZipCode: "",
        TelNo: "",  
        IpAddress:"",
        UserAgent:"",
                  
        
    });

    const { validationSchema } = useValidationSchemaCreditCard(valuesData);

    useEffect(()=>{
        setValues({
            Amount: amountValue, 
            Currency: currencyValue, 
            Email: emailValue, 
            ProcId: procIdValue, 
            Param1: param1Value, 
            Param2: param2Value, 
            Description: descriptionValue,
            FirstName: firstNameValue,
            MiddleName: middleNameValue,
            LastName: lastNameValue,
            Address1: address1Value,
            Address2: address2Value,
            City: cityValue,
            Country: countryValue,
            State: stateValue,
            EmailBD: emailBDValue,
            TelNo: telNoValue,
            ZipCode: zipCodeValue,
            IpAddress:detected_ip,
            UserAgent:user_agent,
        });
    },[
        amountValue, 
        currencyValue, 
        emailValue, 
        procIdValue, 
        param1Value,
        param2Value,
        descriptionValue, 
        firstNameValue, 
        lastNameValue, 
        middleNameValue, 
        address1Value,
        address2Value,
        cityValue,
        stateValue,
        countryValue,
        emailBDValue,
        telNoValue,
        zipCodeValue        
    ])


    const { handleSubmit, handleChange, setValues, values, touched, errors } = useFormik({
        initialValues: {
            Amount: "",
            Currency: "",
            Description: "",
            Email: "",
            ProcId: "", 
            Param1: "",                    
            Param2: "",                    
            FirstName: "",
            MiddleName: "",
            LastName: "",
            Email: "",
            Address1: "",
            Address2: "",
            City: "",
            State: "",
            Country: "",
            ZipCode: "",
            EmailBD: "",
            TelNo: "",   
            IpAddress:detected_ip,
            UserAgent:user_agent, 
        },
        validationSchema,
        onSubmit: () => {
            router.post("/credit-card", values);
            // Inertia.reload({ only: ["d_p_credit_cards"] });
        },
    });
    console.log(values)
    

    useEffect(() => {
        setCreditCardData(d_p_credit_cards);
        setValuesData(values);

        if (
            current_user.role === "superadministrator" ||
            current_user.role === "administrator"
        ) {
            setIsRoleAdmin(true);
        } else {
            setIsRoleAdmin(false);
        }
    }, [d_p_credit_cards]);

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        setInfoData(false);
    };

    const showInfoData = () => {
        return (
            <InformationModal
                data={dataToModal}
                modePay="credit-card"
                onClickModal={(value) => setInfoData(value)}
            ></InformationModal>
        );
    };

    const confirmationDelete = () => {
        return (
            <ConfirmationModal
                data={deleteData}
                onClickModal={(value) => {
                    setConfirmingUserDeletion(value);
                }}
                onClickDelete={(id) => {
                    router.delete(`/credit-card/${id}`);
                }}
            ></ConfirmationModal>
        );
    };

    return (
        <section>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Dragonpay Settings - Credit Card
                    </h2>
                }
            >
                <Head title="Credit Card" />

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white shadow-sm sm:rounded-lg">
                            <div className="p-5">
                                <div className="hidden space-x-8 sm:-my-px sm:flex">
                                    <Tabs
                                        onClick={() => {
                                            setTabToggle(true);
                                        }}
                                        active={tabToggle}
                                    >
                                        Credit Card Information
                                    </Tabs>

                                    <Tabs
                                        onClick={() => {
                                            setTabToggle(false);
                                        }}
                                        href="#input-data"
                                        active={!tabToggle}
                                    >
                                        Input Data
                                    </Tabs>
                                </div>
                            </div>

                            <div
                                className="mt-4 overflow-x-auto max-h-[60vh]"
                                hidden={!tabToggle}
                            >
                                <table className="min-w-full bg-white shadow-md rounded-xl text-[14px] relative">
                                    <thead className="relative">
                                        <tr className="border-b bg-slate-100 sticky top-0 w-full bg-blue-gray-100 text-gray-700">
                                     
                                            <th className="border-r py-3 px-4 min-w-[40px] max-w-[180px] text-left">
                                                Email
                                            </th>
                                            
                                            <th className="border-r py-3 px-4 min-w-[20px] max-w-[50px] text-left">
                                                Currency
                                            </th>                                       

                                            <th className="border-r py-3 px-4 min-w-[40px] max-w-[90px] text-left">
                                                Amount
                                            </th>

                                            <th className="border-r py-3 px-4 min-w-[20px] max-w-[60px] text-left">
                                                ProcId
                                            </th>

                                            
                                            <th className="border-r py-3 px-4 min-w-[40px] max-w-[90px] text-left">
                                                Created At
                                            </th>

                                            <th className=" py-3 px-4 text-left w-12">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="h-[100px] text-blue-gray-900">
                                        {creditCardData

                                            .sort(
                                                (a, b) =>
                                                    new Date(b.created_at) -
                                                    new Date(a.created_at)
                                            )

                                            .map((creditCard, index) => (
                                                <tr
                                                    key={index}
                                                    className="max-w-xs break-words border-b border-blue-gray-200"
                                                >
                                   
                                                    <td className="border-r py-3 px-4 min-w-[40px] max-w-[180px]">
                                                        {creditCard.Email}
                                                    </td>

                                                    <td className="border-r py-3 px-4 min-w-[20px] max-w-[50px]">
                                                        {creditCard.Currency}
                                                    </td>

                                                    <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px]">                                                        
                                                        {creditCard.Amount} {" "} {creditCard.Currency} 
                                                    </td>

                                                    <td className="border-r py-3 px-4 min-w-[20px] max-w-[60px]">
                                                        {creditCard.ProcId}
                                                    </td>

                                                    
                                                    <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px]">
                                                        {creditCard.created_at}
                                                    </td>

                                                    <td className="py-3 px-4 flex gap-2">
                                                        <PrimaryButton
                                                            className="bg-blue-400"
                                                            onClick={() => {
                                                                setInfoData(
                                                                    true
                                                                );

                                                                setDataToModal(
                                                                    creditCard
                                                                );
                                                            }}
                                                        >
                                                            Info
                                                        </PrimaryButton>

                                                        {isRoleAdmin && (
                                                            <DangerButton
                                                                className="ms-3"
                                                                onClick={() => {
                                                                    setConfirmingUserDeletion(
                                                                        true
                                                                    );

                                                                    setDeleteData(
                                                                        creditCard
                                                                    );
                                                                }}
                                                            >
                                                                Delete
                                                            </DangerButton>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>

                          <div>
                            {
                                isRoleAdmin && (<form onSubmit={handleSubmit} hidden={tabToggle}>
                                    <div className="p-6 grid gap-4 w-full">
                                        <div className="grid gap-4">
                                            <div className="grid grid-cols-4 gap-4">
                                                <div className="">
                                                        <InputLabel
                                                            htmlFor="Email"
                                                            value="Email"
                                                        />
                
                                                        <TextInput
                                                            id="email"
                                                            type="email"
                                                            className="mt-1 block w-full"
                                                            name="email"
                                                            onChange={(e) => {handleChange(e); setEmailValue(e.target.value)}}
                                                        />
                                                        {touched.Email && errors.Email && (
                                                            <InputError
                                                                message={errors.Email}
                                                                className="mt-2"
                                                            />
                                                        )}
                                                    </div>
        
                                                    <div className="">
                                                        <InputLabel
                                                            htmlFor="Amount"
                                                            value="Amount"
                                                        />
                
                                                        <TextInput
                                                            id="Amount"
                                                            type="number"
                                                            step="0.01"
                                                            className="mt-1 block w-full"
                                                            name="Amount"
                                                            onChange={(e) => {handleChange(e); setAmountValue(e.target.value)}}
                                                        />
                                                        {touched.Amount && errors.Amount && (
                                                            <InputError
                                                                message={errors.Amount}
                                                                className="mt-2"
                                                            />
                                                        )}
                                                    </div>

                                                    <div className="">
                                                        <InputLabel htmlFor="Currency" value="Currency" />
                
                                                        <TextInput
                                                            id="Currency"
                                                            type="text"
                                                            className="mt-1 block w-full"
                                                            name="Currency"
                                                            onChange={(e) => {handleChange(e); setCurrencyValue(e.target.value)}}
                                                        />
                                                        {touched.Currency && errors.Currency && (
                                                            <InputError
                                                                message={errors.Currency}
                                                                className="mt-2"
                                                            />
                                                        )}
                                                    </div>
                                                    <div className=" w-full">
                                                        <InputLabel
                                                            htmlFor="ProcId"
                                                            value="ProcId"
                                                        />
                                                        <InputDropdown
                                                        className="relative mt-1 block w-full"
                                                        handleChange={(e) => {handleChange(e); setProcIdValue(e);}}
                                                        data={paymentProcIdOptions}
                                                        ></InputDropdown>
                                                        {touched.ProcId &&
                                                            errors.ProcId && (
                                                                <InputError
                                                                    message={errors.ProcId}
                                                                    className="mt-2"
                                                                />
                                                            )}
                                                     </div>
                                                     <div className="">
                                                        <InputLabel htmlFor="Param1" value="Param1" />
                
                                                        <TextInput
                                                            id="Param1"
                                                            type="text"
                                                            className="mt-1 block w-full"
                                                            name="Param1"
                                                            onChange={(e) => {handleChange(e); setParam1Value(e.target.value)}}
                                                        />
                                                        {touched.Param1 && errors.Param1 && (
                                                            <InputError
                                                                message={errors.Param1}
                                                                className="mt-2"
                                                            />
                                                        )}
                                                    </div>
                                                    <div className="">
                                                        <InputLabel htmlFor="Param2" value="Param2" />
                
                                                        <TextInput
                                                            id="Param2"
                                                            type="text"
                                                            className="mt-1 block w-full"
                                                            name="Currency"
                                                            onChange={(e) => {handleChange(e); setParam2Value(e.target.value)}}
                                                        />
                                                        {touched.Param2 && errors.Param2 && (
                                                            <InputError
                                                                message={errors.Param2}
                                                                className="mt-2"
                                                            />
                                                        )}
                                                    </div>
                
                                        
                                            </div>
                                                    <div className="">
                                                    <InputLabel
                                                        htmlFor="Description"
                                                        value="Description"
                                                    />
            
                                                    <TextInput
                                                        id="Description"
                                                        type="text"
                                                        className="mt-1 block w-full"
                                                        name="Description"
                                                        onChange={(e) => {handleChange(e); setDescriptionValue(e.target.value)}}
                                                    />
                                                    {touched.Description &&
                                                        errors.Description && (
                                                            <InputError
                                                                message={errors.Description}
                                                                className="mt-2"
                                                            />
                                                        )}
                                                </div>
                                        </div>
    
                                        <div className="grid gap-4">
                                            <div className="">

                                            </div>
                                            <div className="grid gap-4 grid-cols-3">
                                                <div className="">
                                                    <InputLabel
                                                        htmlFor="FirstName"
                                                        value="FirstName"
                                                    />
            
                                                    <TextInput
                                                        id="FirstName"
                                                        type="text"
                                                        className="mt-1 block w-full"
                                                        name="FirstName"
                                                        onChange={(e) => {handleChange(e); setFirstNameValue(e.target.value)}}
                                                    />
                                                    {touched.FirstName &&
                                                        errors.FirstName && (
                                                            <InputError
                                                                message={errors.FirstName}
                                                                className="mt-2"
                                                            />
                                                        )}
                                                </div>
                                                <div className="">
                                                    <InputLabel
                                                        htmlFor="MiddleName"
                                                        value="MiddleName"
                                                    />
            
                                                    <TextInput
                                                        id="MiddleName"
                                                        type="text"
                                                        className="mt-1 block w-full"
                                                        name="MiddleName"
                                                        onChange={(e) => {handleChange(e); setMiddleNameValue(e.target.value)}}
                                                    />
                                                    {touched.MiddleName &&
                                                        errors.MiddleName && (
                                                            <InputError
                                                                message={errors.MiddleName}
                                                                className="mt-2"
                                                            />
                                                        )}
                                                </div>
            
                                                <div className="">
                                                    <InputLabel
                                                        htmlFor="LastName"
                                                        value="LastName"
                                                    />
            
                                                    <TextInput
                                                        id="LastName"
                                                        type="text"
                                                        className="mt-1 block w-full"
                                                        name="LastName"
                                                        onChange={(e) => {handleChange(e); setLastNameValue(e.target.value)}}
                                                    />
                                                    {touched.LastName &&
                                                        errors.LastName && (
                                                            <InputError
                                                                message={errors.LastName}
                                                                className="mt-2"
                                                            />
                                                        )}
                                                </div>

                                                
                                               
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="">
                                                    <InputLabel
                                                        htmlFor="TelNo"
                                                        value="Telephone Number"
                                                    />
            
                                                    <TextInput
                                                        id="TelNo"
                                                        type="number"
                                                        className="mt-1 block w-full"
                                                        name="TelNo"
                                                        onChange={(e) => {handleChange(e); setTelNoValue(e.target.value)}}
                                                    />
                                                    {touched.TelNo && errors.TelNo && (
                                                        <InputError
                                                            message={errors.TelNo}
                                                            className="mt-2"
                                                        />
                                                    )}
                                                </div>
                                                <div className="">
                                                    <InputLabel
                                                        htmlFor="EmailBD"
                                                        value="Email Billing Details"
                                                    />
            
                                                    <TextInput
                                                        id="EmailBD"
                                                        type="email"
                                                        className="mt-1 block w-full"
                                                        name="EmailBD"
                                                        onChange={(e) => {handleChange(e); setEmailBDValue(e.target.value)}}
                                                    />
                                                    {touched.EmailBD && errors.EmailBD && (
                                                        <InputError
                                                            message={errors.EmailBD}
                                                            className="mt-2"
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                 <div className="">
                                                    <InputLabel
                                                        htmlFor="Address1"
                                                        value="Address1"
                                                    />
            
                                                    <TextInput
                                                        id="Address1"
                                                        type="text"
                                                        className="mt-1 block w-full"
                                                        name="Address1"
                                                        onChange={(e) => {handleChange(e); setAddress1Value(e.target.value)}}
                                                    />
            
                                                    {touched.Address1 &&
                                                        errors.Address1 && (
                                                            <InputError
                                                                message={errors.Address1}
                                                                className="mt-2"
                                                            />
                                                        )}
                                                </div>
            
                                                <div className="">
                                                    <InputLabel
                                                        htmlFor="Address2"
                                                        value="Address2"
                                                    />
            
                                                    <TextInput
                                                        id="Address2"
                                                        type="text"
                                                        className="mt-1 block w-full"
                                                        name="Address2"
                                                        onChange={(e) => {handleChange(e); setAddress2Value(e.target.value)}}
                                                    />
            
                                                    {touched.Address2 &&
                                                        errors.Address2 && (
                                                            <InputError
                                                                message={errors.Address2}
                                                                className="mt-2"
                                                            />
                                                        )}
                                                </div>
                                              
                                            </div>
                                            <div className="grid grid-cols-4 gap-4">

                                                    <div className="">
                                                        <InputLabel
                                                            htmlFor="city"
                                                            value="City"
                                                        />
                
                                                        <TextInput
                                                            id="City"
                                                            type="text"
                                                            className="mt-1 block w-full"
                                                            name="City"
                                                            onChange={(e) => {handleChange(e); setCityValue(e.target.value)}}
                                                        />
                
                                                        {touched.City && errors.City && (
                                                            <InputError
                                                                message={errors.City}
                                                                className="mt-2"
                                                            />
                                                        )}
                                                    </div>
                
                                                    <div className="">
                                                        <InputLabel
                                                            htmlFor="State"
                                                            value="State"
                                                        />
                
                                                        <TextInput
                                                            id="State"
                                                            type="text"
                                                            className="mt-1 block w-full"
                                                            name="State"
                                                            onChange={(e) => {handleChange(e); setStateValue(e.target.value)}}
                                                        />
                
                                                        {touched.State && errors.State && (
                                                            <InputError
                                                                message={errors.State}
                                                                className="mt-2"
                                                            />
                                                        )}
                                                    </div>
                
                                                    <div className="">
                                                        <InputLabel
                                                            htmlFor="Country"
                                                            value="Country"
                                                        />
                
                                                        <TextInput
                                                            id="Country"
                                                            type="text"
                                                            className="mt-1 block w-full"
                                                            name="Country"
                                                            onChange={(e) => {handleChange(e); setCountryValue(e.target.value)}}
                                                        />
                
                                                        {touched.Country && errors.Country && (
                                                            <InputError
                                                                message={errors.Country}
                                                                className="mt-2"
                                                            />
                                                        )}
                                                    </div>
                
                                                    <div className="">
                                                        <InputLabel
                                                            htmlFor="ZipCode"
                                                            value="ZipCode"
                                                        />
                
                                                        <TextInput
                                                            id="zipCode"
                                                            type="number"
                                                            className="mt-1 block w-full"
                                                            name="zipCode"
                                                            onChange={(e) => {handleChange(e); setZipCodeValue(e.target.value)}}
                                                        />
                
                                                        {touched.ZipCode && errors.ZipCode && (
                                                            <InputError
                                                                message={errors.ZipCode}
                                                                className="mt-2"
                                                            />
                                                        )}
                                                    </div>
            
                                            </div>
                                        </div>
                                    
                                    </div>
    
                                    <div className="pl-6 pb-6 ">
                                        <PrimaryButton type="submit">
                                            Submit
                                        </PrimaryButton>
                                    </div>
                                </form>)
                            }
                          </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>

            <Modal
                show={infoData}
                onClose={closeModal}
                closeable={true}
                maxWidth="2xl"
                children={showInfoData()}
            ></Modal>

            <Modal
                show={confirmationUserDeletion}
                onClose={closeModal}
                closeable={true}
                maxWidth="sm"
                children={confirmationDelete()}
            ></Modal>
        </section>
    );
}
