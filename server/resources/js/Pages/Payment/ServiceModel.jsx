import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useServiceModels } from "@/hooks/data/useServiceModels";
import { Head, router } from "@inertiajs/react";
import { useForm } from "laravel-precognition-react";
import { useEffect, useState } from "react";
import Tabs from "@/Components/Tabs";
import InformationModal from "@/Components/Modal/InformationModal";
import ConfirmationModal from "@/Components/Modal/ConfirmationModal";
import Modal from "@/Components/Modal";
import DangerButton from "@/Components/DangerButton";
import { Inertia } from "@inertiajs/inertia";
import { useAccounts } from "@/hooks/data/useAccounts";
export default function ServiceModel({ auth }) {
    const [message, setMessage] = useState("");
    const [tabToggle, setTabToggle] = useState(true);
    const { d_p_service_models } = useServiceModels();
    const [serviceModal, setServiceModal] = useState(d_p_service_models);
    const [dataToModal, setDataToModal] = useState(undefined);
    const [deleteData, setDeleteData] = useState(undefined);
    const [confirmationUserDeletion, setConfirmingUserDeletion] =
        useState(false);
    const [infoData, setInfoData] = useState(false);

    const { current_user } = useAccounts();
    const [isRoleAdmin, setIsRoleAdmin] = useState(false);

    const { data, setData, processing, errors, reset, submit, hasErrors } =
        useForm("post", "service-model", {
            amount: "",
            ccy: "",
            description: "",
            email: "",
        });
    const keys = Object.keys(errors);

    useEffect(() => {
        setServiceModal(d_p_service_models);

        if (
            current_user.role === "superadministrator" ||
            current_user.role === "administrator"
        ) {
            setIsRoleAdmin(true);
        } else {
            setIsRoleAdmin(false);
        }

        return () => {
            reset("password");
        };
    }, [d_p_service_models]);

    const handleErrorMessage = () => {
        setMessage(keys);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (hasErrors === true) {
            handleErrorMessage();
        }
        try {
            submit();
            reset();
            Inertia.reload({ only: ["d_p_service_models"] });
        } catch (error) {
            console.log("Error", error.message);
        }
    };

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
                onClickDelete={(id) => router.delete(`/service-model/${id}}`)}
            ></ConfirmationModal>
        );
    };

    console.log(message);
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
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
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
                                            <th className="border-r py-3 px-4 min-w-[40px] max-w-[90px] text-left">
                                                Email
                                            </th>
                                            <th className="border-r py-3 px-4 min-w-[40px] max-w-[90px] text-left">
                                                Amount
                                            </th>
                                            <th className="border-r py-3 px-4 min-w-[40px] max-w-[90px] text-left">
                                                Currency
                                            </th>
                                            <th className="border-r py-3 px-4 min-w-[40px] max-w-[90px] text-left">
                                                Description
                                            </th>

                                            <th className=" py-3 px-4 text-left w-12">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="h-[100px] text-blue-gray-900">
                                        {serviceModal.map((sm, index) => (
                                            <tr
                                                key={index}
                                                className="max-w-xs break-words border-b border-blue-gray-200"
                                            >
                                                <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px]">
                                                    {sm.email}
                                                </td>
                                                <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px]">
                                                    {sm.amount}
                                                </td>

                                                <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px]">
                                                    {sm.ccy}
                                                </td>
                                                <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px]">
                                                    {sm.description}
                                                </td>
                                                <td className="py-3 px-4 flex gap-2">
                                                    <PrimaryButton
                                                        className="bg-blue-400"
                                                        disabled={processing}
                                                        onClick={() => {
                                                            setInfoData(true);
                                                            setDataToModal(sm);
                                                        }}
                                                    >
                                                        Info
                                                    </PrimaryButton>

                                                    {isRoleAdmin && (
                                                        <DangerButton
                                                            className="ms-3"
                                                            disabled={
                                                                processing
                                                            }
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

                            <form onSubmit={handleSubmit} hidden={tabToggle}>
                                <div className="p-6 grid grid-cols-3 gap-4 w-full">
                                    <div className="">
                                        <InputLabel
                                            htmlFor="email"
                                            value="Email"
                                        />
                                        <TextInput
                                            id="email"
                                            type="email"
                                            value={data.email}
                                            className="mt-1 block w-full"
                                            name="email"
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="">
                                        <InputLabel
                                            htmlFor="amount"
                                            value="Amount"
                                        />
                                        <TextInput
                                            id="amount"
                                            type="text"
                                            value={data.amount}
                                            className="mt-1 block w-full"
                                            name="amount"
                                            onChange={(e) =>
                                                setData(
                                                    "amount",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="">
                                        <InputLabel htmlFor="ccy" value="CCY" />
                                        <TextInput
                                            id="ccy"
                                            type="text"
                                            value={data.ccy}
                                            className="mt-1 block w-full"
                                            name="ccy"
                                            onChange={(e) =>
                                                setData("ccy", e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="">
                                        <InputLabel
                                            htmlFor="description"
                                            value="Description"
                                        />
                                        <TextInput
                                            id="description"
                                            type="text"
                                            value={data.description}
                                            className="mt-1 block w-full"
                                            name="description"
                                            onChange={(e) =>
                                                setData(
                                                    "description",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="pl-6 pb-6">
                                    <PrimaryButton
                                        type="submit"
                                        disabled={processing}
                                    >
                                        Submit
                                    </PrimaryButton>
                                </div>
                            </form>
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
