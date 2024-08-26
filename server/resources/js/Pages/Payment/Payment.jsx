import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePayments } from "@/hooks/data/usePayments";

import { Head, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Tabs from "@/Components/Tabs";
import ConfirmationModal from "@/Components/Modal/ConfirmationModal";
import InformationModal from "@/Components/Modal/InformationModal";
import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import { useAccounts } from "@/hooks/data/useAccounts";
import { useValidationSchemaCommon } from "@/hooks/validations/useValidationSchemaCommon";
import { useFormik } from "formik";
import InputError from "@/Components/InputError";
import InputDropdown from "@/Components/InputDropdown/InputDropdown";
import { procIdOptions } from "@/lib/codeListBanks";
import { Inertia } from "@inertiajs/inertia";

export default function Payment({ auth }) {
    const { current_user } = useAccounts();
    const { d_p_payments } = usePayments();
    const [payments, setPayments] = useState(d_p_payments);    
    const paymentProcIdOptions = procIdOptions;

    const [amountValue, setAmountValue]= useState('');
    const [ccyValue, setCCYValue]= useState('');
    const [emailValue, setEmailValue]= useState('');
    const [procIdValue, setProcIdValue]= useState('');
    const [descriptionValue, setDescriptionValue]= useState('');

    const [tabToggle, setTabToggle] = useState(true);
    const [confirmationUserDeletion, setConfirmingUserDeletion] =
        useState(false);
    const [infoData, setInfoData] = useState(false);
    const [isRoleAdmin, setIsRoleAdmin] = useState(false);

    const [dataToModal, setDataToModal] = useState(undefined);
    const [deleteData, setDeleteData] = useState(undefined);
    const [valuesData, setValuesData] = useState({
        Amount: "",
        Currency: "",
        Description: "",
        Email: "",
        ProcId: ""
    });
    const { validationSchema } = useValidationSchemaCommon(valuesData);

    useEffect(()=>{
        setValues({Amount: amountValue, Currency: ccyValue, Email: emailValue, ProcId: procIdValue, Description: descriptionValue});
    },[amountValue, ccyValue, emailValue, procIdValue, descriptionValue])

    const { handleSubmit, handleChange, setValues, values, touched, errors } = useFormik({
        initialValues: {
            Amount: "",
            Currency: "",
            Description: "",
            Email: "",
            ProcId: ""
        },
        validationSchema,
        onSubmit: () => {
            router.post("/payments", values);
            Inertia.reload({ only: ["d_p_payments"] });
        },
    });
    
    useEffect(() => {
        setValuesData(values);
        setPayments(d_p_payments);
        if (
            current_user.role === "superadministrator" ||
            current_user.role === "administrator"
        ) {
            setIsRoleAdmin(true);
        } else {
            setIsRoleAdmin(false);
        }
    }, [d_p_payments]);

    const closeModal = () => {
        setConfirmingUserDeletion(false);
        setInfoData(false);
    };

    const showInfoData = () => {
        return (
            <InformationModal
                data={dataToModal}
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
                onClickDelete={(id) => router.delete(`/payments/${id}`)}
            ></ConfirmationModal>
        );
    };

    return (
        <section>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Dragonpay Setting - Payments
                    </h2>
                }
            >
                <Head title="Payment" />

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white  shadow-sm sm:rounded-lg">
                            <div className="p-5">
                                <div className="hidden space-x-8 sm:-my-px sm:flex">
                                    <Tabs
                                        onClick={() => {
                                            setTabToggle(true);
                                        }}
                                        active={tabToggle}
                                        className="cursor-pointer"
                                    >
                                        Payment Information
                                    </Tabs>
                                    <Tabs
                                        onClick={() => {
                                            setTabToggle(false);
                                        }}
                                        active={!tabToggle}
                                        className="cursor-pointer"
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
                                        <tr className="border-b bg-slate-100 sticky top-0 w-full  bg-blue-gray-100 text-gray-700">
                                            <th className="border-r py-3 px-4 min-w-[40px] max-w-[170px] text-left">
                                                Email
                                            </th>
                                            <th className="border-r py-3 px-4 min-w-[20px] max-w-[50px] text-left">
                                                Currency
                                            </th>
                                            <th className="border-r py-3 px-4 min-w-[40px] max-w-[70px] text-left">
                                                Amount
                                            </th>
                                            <th className="border-r py-3 px-4 min-w-[20px] max-w-[40px] text-left">
                                                ProcId
                                            </th>                    
                                            <th className="border-r py-3 px-4 min-w-[40px] max-w-[80px] text-left">
                                                Created At
                                            </th>

                                            <th className=" py-3 px-4 text-left w-12">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="h-[100px] text-blue-gray-900">
                                        {payments
                                            .sort(
                                                (a, b) =>
                                                    new Date(b.created_at) -
                                                    new Date(a.created_at)
                                            )
                                            .map((payments, index) => (
                                                <tr
                                                    key={index}
                                                    className="max-w-xs break-words border-b border-blue-gray-200"
                                                >
                                                    <td className="border-r py-3 px-4 min-w-[40px] max-w-[170px]">
                                                        {payments.Email}
                                                    </td>
                                                    
                                                    <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px]">
                                                        {payments.Currency}
                                                    </td>
                                                    <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px]">
                                                        {payments.Amount}
                                                    </td>
                                                    <td className="border-r py-3 px-4 min-w-[40px] max-w-[40px]">
                                                        {payments.ProcId}
                                                    </td>
                                                    <td className="border-r py-3 px-4 min-w-[40px] max-w-[80px]">
                                                        {payments.created_at}
                                                    </td>

                                                    <td className="py-3 px-4 flex gap-2">
                                                        <PrimaryButton
                                                            className="bg-blue-400"
                                                            onClick={() => {
                                                                setInfoData(
                                                                    true
                                                                );
                                                                setDataToModal(
                                                                    payments
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
                                                                        payments
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
                            
                            <div className="">
                                {
                                    isRoleAdmin && (
                                        <form onSubmit={handleSubmit} hidden={tabToggle}>
                                          
                                        <div className="p-6 grid gap-4 w-full">
                                            <div className="">
                                                    <InputLabel
                                                        htmlFor="Email"
                                                        value="Email"
                                                    />
                                                    <TextInput
                                                        id="Email"
                                                        type="email"
                                                        className="mt-1 block w-full"
                                                        name="Email"
                                                        onChange={(e) => {handleChange(e); setEmailValue(e.target.value)}}
                                                    />
                                                    {touched.Email && errors.Email && (
                                                        <InputError
                                                            message={errors.Email}
                                                            className="mt-2"
                                                        />
                                                    )}
                                                </div>
                                           <div className="grid grid-cols-3 gap-4 w-full">
                                                 <div className=" w-full">
                                                    <InputLabel
                                                        htmlFor="Amount"
                                                        value="Amount"
                                                    />
                                                    <TextInput
                                                        id="Amount"
                                                        type="number"
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
                                                <div className=" w-full">
                                                    <InputLabel htmlFor="Currency" value="Currency" />
                                                    <TextInput
                                                        id="Currency"
                                                        type="text"
                                                        className="mt-1 block w-full"
                                                        name="Currency"
                                                        onChange={(e) => {handleChange(e); setCCYValue(e.target.value)}}
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
                                           </div>
                                            <div className="">
                                                <InputLabel
                                                    htmlFor="description"
                                                    value="Description"
                                                />
                                                <TextInput
                                                    id="description"
                                                    type="text"
                                                    className="mt-1 block w-full"
                                                    name="description"
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
                                        <div className="pl-6 pb-6">
                                            <PrimaryButton type="submit">
                                                Submit
                                            </PrimaryButton>
                                        </div>
                                    </form>
                                    )
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
