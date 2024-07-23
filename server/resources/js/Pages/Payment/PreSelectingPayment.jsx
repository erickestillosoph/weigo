import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useDpPreSelectingPayments } from "@/hooks/data/usePreSelectingPayments";
import { Head, router } from "@inertiajs/react";
import { useForm } from "laravel-precognition-react";
import { useEffect, useState } from "react";
import Tabs from "@/Components/Tabs";
import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import ConfirmationModal from "@/Components/Modal/ConfirmationModal";
import InformationModal from "@/Components/Modal/InformationModal";
import { Inertia } from "@inertiajs/inertia";
import { useAccounts } from "@/hooks/data/useAccounts";

export default function PreSelectingPayment({ auth }) {
    const [message, setMessage] = useState("");
    const [tabToggle, setTabToggle] = useState(true);
    const [dataToModal, setDataToModal] = useState(undefined);
    const [deleteData, setDeleteData] = useState(undefined);
    const { d_p_pre_selecting_payments } = useDpPreSelectingPayments();
    const [preselectingPayments, setPreselectingPayments] = useState(
        d_p_pre_selecting_payments
    );
    const [confirmationUserDeletion, setConfirmingUserDeletion] =
        useState(false);
    const [infoData, setInfoData] = useState(false);

    const { current_user } = useAccounts();
    const [isRoleAdmin, setIsRoleAdmin] = useState(false);

    const { data, setData, processing, errors, reset, submit, hasErrors } =
        useForm("post", "pre-selecting-payments", {
            amount: "",
            ccy: "",
            description: "",
            email: "",
        });
    const keys = Object.keys(errors);

    useEffect(() => {
        setPreselectingPayments(d_p_pre_selecting_payments);

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
    }, [d_p_pre_selecting_payments]);
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
            Inertia.reload({ only: ["d_p_pre_selecting_payments"] });
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
                onClickDelete={(id) =>
                    router.delete(`/pre-selecting-payments/${id}}`)
                }
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
                        Dragonpay Setting - Pre Selecting Payment
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
                                        active={tabToggle}
                                        className="cursor-pointer"
                                    >
                                        PreSelecting Payments
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
                                        {preselectingPayments.map(
                                            (payments, index) => (
                                                <tr
                                                    key={index}
                                                    className="max-w-xs break-words border-b border-blue-gray-200"
                                                >
                                                    <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px]">
                                                        {payments.email}
                                                    </td>
                                                    <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px]">
                                                        {payments.amount}
                                                    </td>
                                                    <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px]">
                                                        {payments.ccy}
                                                    </td>
                                                    <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px]">
                                                        {payments.description}
                                                    </td>

                                                    <td className="py-3 px-4 flex gap-2">
                                                        <PrimaryButton
                                                            className="bg-blue-400"
                                                            disabled={
                                                                processing
                                                            }
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
                                                                disabled={
                                                                    processing
                                                                }
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
                                            )
                                        )}
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
