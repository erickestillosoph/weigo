import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useDpCrediCards } from "@/hooks/data/useCreditCards";
import { Head } from "@inertiajs/react";
import { useForm } from "laravel-precognition-react";
import { useEffect, useState } from "react";
import Tabs from "@/Components/Tabs";
export default function CreditCard({ auth }) {
    const [message, setMessage] = useState("");
    const [tabToggle, setTabToggle] = useState(true);
    const { d_p_credit_cards } = useDpCrediCards();
    const { data, setData, processing, errors, reset, submit, hasErrors } =
        useForm("post", "credit-card", {
            amount: "",
            txnid: "",
            ccy: "",
            description: "",
            email: "email@gmail.com",
            param2: "",
            param1: "",
            merchantId: "",
            password: "",
            firstName: "",
            lastName: "",
            address1: "",
            address2: "",
            city: "",
            state: "",
            country: "",
            zipCode: "",
            telNo: "",
        });
    const keys = Object.keys(errors);
    // const values = Object.values(errors);
    const [count, setCount] = useState(0);
    console.log(hasErrors);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
        return () => {
            reset("password");
        };
    }, []);
    const handleErrorMessage = () => {
        setMessage(keys);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setCount(count + 1);
        if (hasErrors === true) {
            handleErrorMessage();
        }
        try {
            submit();
        } catch (error) {
            console.log(error.config);
            console.log("Error", error.message);
        }
    };

    console.log(message);
    return (
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
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
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
                                    <tr className="border-b bg-slate-100 sticky top-0 w-full  bg-blue-gray-100 text-gray-700">
                                        <th className="border-r py-3 px-4 min-w-[40px] max-w-[120px] text-left">
                                            Name
                                        </th>
                                        <th className="border-r py-3 px-4 min-w-[40px] max-w-[90px] text-left">
                                            Merchant ID
                                        </th>
                                        <th className="border-r py-3 px-4 min-w-[40px] max-w-[90px] text-left">
                                            Password
                                        </th>
                                        <th className="border-r py-3 px-4 min-w-[40px] max-w-[90px] text-left">
                                            Amount
                                        </th>
                                        <th className="border-r py-3 px-4 min-w-[40px] max-w-[90px] text-left">
                                            Telephone
                                        </th>
                                        <th className="border-r py-3 px-4 min-w-[40px] max-w-[90px] text-left">
                                            TXNID
                                        </th>
                                        <th className="border-r py-3 px-4 min-w-[40px] max-w-[90px] text-left">
                                            Currency
                                        </th>
                                        <th className="border-r py-3 px-4 min-w-[40px] max-w-[90px] text-left">
                                            Description
                                        </th>

                                        <th className=" py-3 px-4 text-left min-w-[40px] max-w-[20px]">
                                            Action
                                        </th>
                                        <th className=" py-3 px-4 text-left min-w-[40px] max-w-[20px]"></th>
                                    </tr>
                                </thead>
                                <tbody className="h-[100px] text-blue-gray-900">
                                    {d_p_credit_cards.map(
                                        (creditCard, index) => (
                                            <tr
                                                key={index}
                                                className="max-w-xs break-words border-b border-blue-gray-200"
                                            >
                                                <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px] ">
                                                    {creditCard.firstName}{" "}
                                                    {creditCard.lastName}
                                                </td>
                                                <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px] ">
                                                    {creditCard.merchantId}
                                                </td>
                                                <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px]  break-words">
                                                    {creditCard.password}
                                                </td>
                                                <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px]">
                                                    {creditCard.amount}
                                                </td>
                                                <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px]">
                                                    {creditCard.telNo}
                                                </td>
                                                <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px]">
                                                    {creditCard.txnid}
                                                </td>
                                                <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px]">
                                                    {creditCard.ccy}
                                                </td>
                                                <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px]">
                                                    {creditCard.description}
                                                </td>

                                                <td className="py-3 px-4">
                                                    <a
                                                        href="#"
                                                        className="font-medium text-blue-600 hover:text-blue-800"
                                                    >
                                                        Edit
                                                    </a>
                                                </td>
                                                <td className="py-3 px-4">
                                                    <a
                                                        href="#"
                                                        className="font-medium text-blue-600 hover:text-blue-800"
                                                    >
                                                        Delete
                                                    </a>
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
                                    <InputLabel htmlFor="txnid" value="TXNID" />
                                    <TextInput
                                        id="txnid"
                                        type="text"
                                        value={data.txnid}
                                        name="txnid"
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("txnid", e.target.value)
                                        }
                                    />
                                </div>
                                <div className="">
                                    <InputLabel
                                        htmlFor="merchantId"
                                        value="MERCHANT ID"
                                    />
                                    <TextInput
                                        id="merchantId"
                                        type="text"
                                        value={data.merchantId}
                                        className="mt-1 block w-full"
                                        name="merchantId"
                                        onChange={(e) =>
                                            setData(
                                                "merchantId",
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                                <div className="">
                                    <InputLabel
                                        htmlFor="password"
                                        value="MERCHANT KEY/PASSWORD"
                                    />
                                    <TextInput
                                        id="password"
                                        type="password"
                                        value={data.password}
                                        className="mt-1 block w-full"
                                        name="password"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                    />
                                </div>
                                <div className="">
                                    <InputLabel htmlFor="email" value="Email" />
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
                                            setData("amount", e.target.value)
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

                                <div className="">
                                    <InputLabel
                                        htmlFor="param1"
                                        value="Param1"
                                    />
                                    <TextInput
                                        id="param1"
                                        type="text"
                                        value={data.param1}
                                        className="mt-1 block w-full"
                                        name="param1"
                                        onChange={(e) =>
                                            setData("param1", e.target.value)
                                        }
                                    />
                                </div>
                                <div className="">
                                    <InputLabel
                                        htmlFor="param2"
                                        value="Param2"
                                    />
                                    <TextInput
                                        id="param2"
                                        type="text"
                                        value={data.param2}
                                        className="mt-1 block w-full"
                                        name="param2"
                                        onChange={(e) =>
                                            setData("param2", e.target.value)
                                        }
                                    />
                                </div>

                                <div className="">
                                    <InputLabel
                                        htmlFor="firstName"
                                        value="FIRSTNAME"
                                    />
                                    <TextInput
                                        id="firstName"
                                        type="text"
                                        value={data.firstName}
                                        className="mt-1 block w-full"
                                        name="firstName"
                                        onChange={(e) =>
                                            setData("firstName", e.target.value)
                                        }
                                    />
                                </div>
                                <div className="">
                                    <InputLabel
                                        htmlFor="lastName"
                                        value="LASTNAME"
                                    />
                                    <TextInput
                                        id="lastName"
                                        type="text"
                                        value={data.lastName}
                                        className="mt-1 block w-full"
                                        name="lastName"
                                        onChange={(e) =>
                                            setData("lastName", e.target.value)
                                        }
                                    />
                                </div>

                                <div className="">
                                    <InputLabel
                                        htmlFor="address1"
                                        value="ADDRESS1"
                                    />
                                    <TextInput
                                        id="address1"
                                        type="text"
                                        value={data.address1}
                                        className="mt-1 block w-full"
                                        name="address1"
                                        onChange={(e) =>
                                            setData("address1", e.target.value)
                                        }
                                    />
                                </div>
                                <div className="">
                                    <InputLabel
                                        htmlFor="address2"
                                        value="ADDRESS2"
                                    />
                                    <TextInput
                                        id="address2"
                                        type="text"
                                        value={data.address2}
                                        className="mt-1 block w-full"
                                        name="address2"
                                        onChange={(e) =>
                                            setData("address2", e.target.value)
                                        }
                                    />
                                </div>
                                <div className="">
                                    <InputLabel htmlFor="city" value="CITY" />
                                    <TextInput
                                        id="city"
                                        type="text"
                                        value={data.city}
                                        className="mt-1 block w-full"
                                        name="city"
                                        onChange={(e) =>
                                            setData("city", e.target.value)
                                        }
                                    />
                                </div>
                                <div className="">
                                    <InputLabel htmlFor="state" value="STATE" />
                                    <TextInput
                                        id="state"
                                        type="text"
                                        value={data.state}
                                        className="mt-1 block w-full"
                                        name="state"
                                        onChange={(e) =>
                                            setData("state", e.target.value)
                                        }
                                    />
                                </div>
                                <div className="">
                                    <InputLabel
                                        htmlFor="country"
                                        value="COUNTRY"
                                    />
                                    <TextInput
                                        id="country"
                                        type="text"
                                        value={data.country}
                                        className="mt-1 block w-full"
                                        name="country"
                                        onChange={(e) =>
                                            setData("country", e.target.value)
                                        }
                                    />
                                </div>
                                <div className="">
                                    <InputLabel
                                        htmlFor="zipCode"
                                        value="ZIP CODE"
                                    />
                                    <TextInput
                                        id="zipCode"
                                        type="text"
                                        value={data.zipCode}
                                        className="mt-1 block w-full"
                                        name="zipCode"
                                        onChange={(e) =>
                                            setData("zipCode", e.target.value)
                                        }
                                    />
                                </div>
                                <div className="">
                                    <InputLabel
                                        htmlFor="telNo"
                                        value="TEL NO"
                                    />
                                    <TextInput
                                        id="telNo"
                                        type="text"
                                        value={data.telNo}
                                        className="mt-1 block w-full"
                                        name="telNo"
                                        onChange={(e) =>
                                            setData("telNo", e.target.value)
                                        }
                                    />
                                </div>
                                <div className="">
                                    <PrimaryButton
                                        type="submit"
                                        disabled={processing}
                                    >
                                        Submit
                                    </PrimaryButton>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
