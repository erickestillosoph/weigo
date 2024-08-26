import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useServiceModels } from "@/hooks/data/useServiceModels";
import { Head, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Tabs from "@/Components/Tabs";
import InformationModal from "@/Components/Modal/InformationModal";
import ConfirmationModal from "@/Components/Modal/ConfirmationModal";
import Modal from "@/Components/Modal";
import DangerButton from "@/Components/DangerButton";
import { useAccounts } from "@/hooks/data/useAccounts";
import { useValidationSchemaCommon } from "@/hooks/validations/useValidationSchemaCommon";
import { useFormik } from "formik";
import "react-toastify/dist/ReactToastify.css";
import { Inertia } from "@inertiajs/inertia";
import InputError from "@/Components/InputError";
import { procIdOptions } from "@/lib/codeListBanks";
import InputDropdown from "@/Components/InputDropdown/InputDropdown";

export default function ServiceModel({ auth }) {
    const { current_user } = useAccounts();
    const { d_p_service_models } = useServiceModels();
    const [serviceModal, setServiceModal] = useState(d_p_service_models);
    const serviceModelProcIdOptions = procIdOptions;

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
        ProcId: "",
    });

    useEffect(()=>{
        setValues({Amount: amountValue, Currency: ccyValue, Email: emailValue, ProcId: procIdValue, Description: descriptionValue});
    },[amountValue, ccyValue, emailValue, procIdValue, descriptionValue])


    const { validationSchema } = useValidationSchemaCommon(valuesData);

    const { handleSubmit, handleChange, setValues, values, touched, errors } = useFormik({
        initialValues: {
            Amount: "",
            Currency: "",
            Description: "",
            Email: "",
            ProcId: "",
        },
        validationSchema,
        onSubmit: () => {
            router.post("/service-model", values);
            Inertia.reload({ only: ["d_p_service_models"] });
        },
    });

    useEffect(() => {
        setServiceModal(d_p_service_models);
        setValuesData(values);
        if (
            current_user.role === "superadministrator" ||
            current_user.role === "administrator"
        ) {
            setIsRoleAdmin(true);
        } else {
            setIsRoleAdmin(false);
        }
    }, [d_p_service_models]);

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
                onClickDelete={(id) => router.delete(`/service-model/${id}`)}
            ></ConfirmationModal>
        );
    };

    return (
        <section>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Dragonpay Setting - Service Model
                    </h2>
                }
            >
                <Head title="Payment" />

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white shadow-sm sm:rounded-lg">
                            <div className="p-5">
                                <div className="hidden space-x-8 sm:-my-px sm:flex">
                                    <Tabs
                                        onClick={() => {
                                            setTabToggle(true);
                                        }}
                                        className="cursor-pointer"
                                        active={tabToggle}
                                    >
                                        Service Model Information
                                    </Tabs>
                                    <Tabs
                                        onClick={() => {
                                            setTabToggle(false);
                                        }}
                                        className="cursor-pointer"
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
                                        {serviceModal
                                            .sort(
                                                (a, b) =>
                                                    new Date(b.created_at) -
                                                    new Date(a.created_at)
                                            )
                                            .map((sm, index) => (
                                                <tr
                                                    key={index}
                                                    className="max-w-xs break-words border-b border-blue-gray-200"
                                                >
                                                    <td className="border-r py-3 px-4 min-w-[40px] max-w-[170px]">
                                                        {sm.Email}
                                                    </td>
                                                    
                                                    <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px]">
                                                        {sm.Currency}
                                                    </td>
                                                    <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px]">
                                                        {sm.Amount}
                                                    </td>
                                                    <td className="border-r py-3 px-4 min-w-[40px] max-w-[40px]">
                                                        {sm.ProcId}
                                                    </td>
                                                    <td className="border-r py-3 px-4 min-w-[40px] max-w-[80px]">
                                                        {sm.created_at}
                                                    </td>

                                                    <td className="py-3 px-4 flex gap-2">
                                                        <PrimaryButton
                                                            className="bg-blue-400"
                                                            onClick={() => {
                                                                setInfoData(
                                                                    true
                                                                );
                                                                setDataToModal(
                                                                    sm
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
                                                                        sm
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
                                {isRoleAdmin && (
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
                                            <div className="w-full">
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
                                            <div className="">
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
                                                    data={serviceModelProcIdOptions}
                                                    ></InputDropdown>
                                                    {touched.procId &&
                                                        errors.procId && (
                                                            <InputError
                                                                message={errors.procId}
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
                                ) }
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
