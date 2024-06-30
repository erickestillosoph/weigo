import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useAccounts } from "@/hooks/data/useAccounts";
import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import Tabs from "@/Components/Tabs";
export default function Accounts({ auth }) {
    const [tabToggle, setTabToggle] = useState(true);
    const [isRole, setIsRole] = useState(false);
    const { guests, users, current_user, user } = useAccounts();
    useEffect(() => {
        if (current_user.role === "superadministrator") {
            setIsRole(true);
        } else if (current_user.role === "administrator") {
            setIsRole(false);
        } else {
            setIsRole(false);
        }
    }, []);
    console.log("guests", guests);
    console.log("users", users);
    console.log("user", user);
    console.log("users", current_user.role);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Accounts List
                </h2>
            }
            role={current_user.role}
        >
            <Head title="Accounts" />

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
                                    Guest Accounts
                                </Tabs>
                                <Tabs
                                    onClick={() => {
                                        setTabToggle(false);
                                    }}
                                    active={!tabToggle}
                                    className="cursor-pointer"
                                >
                                    Admin/Staff Accounts
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
                                            Name
                                        </th>
                                        <th className="border-r py-3 px-4 min-w-[40px] max-w-[90px] text-left">
                                            Email
                                        </th>
                                        {isRole && (
                                            <th className="border-r py-3 px-4 min-w-[40px] max-w-[90px] text-left">
                                                Password
                                            </th>
                                        )}
                                        {isRole && (
                                            <th className="border-r py-3 px-4 min-w-[40px] max-w-[90px] text-left">
                                                Phone Number
                                            </th>
                                        )}
                                        {isRole && (
                                            <th className="border-r py-3 px-4 min-w-[40px] max-w-[90px] text-left">
                                                Birthday
                                            </th>
                                        )}
                                        <th className="border-r py-3 px-4 min-w-[40px] max-w-[90px] text-left">
                                            Email Verified At
                                        </th>
                                        <th className="border-r py-3 px-4 min-w-[40px] max-w-[90px] text-left">
                                            Email Craeted At
                                        </th>
                                        <th className="border-r py-3 px-4 min-w-[40px] max-w-[90px] text-left">
                                            Email Updated At
                                        </th>

                                        <th className=" py-3 px-4 text-left min-w-[40px] max-w-[20px]">
                                            Action
                                        </th>
                                        <th className=" py-3 px-4 text-left min-w-[40px] max-w-[20px]"></th>
                                    </tr>
                                </thead>
                                <tbody className="h-[100px] text-blue-gray-900">
                                    {guests.map((guest, index) => (
                                        <tr
                                            key={index}
                                            className="max-w-xs break-words border-b border-blue-gray-200"
                                        >
                                            <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px] ">
                                                {guest.first_name}{" "}
                                                {guest.last_name}
                                            </td>
                                            <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px]  break-words">
                                                {guest.email}
                                            </td>
                                            {isRole && (
                                                <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px]">
                                                    {guest.password}
                                                </td>
                                            )}
                                            {isRole && (
                                                <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px]">
                                                    {guest.phone_number}
                                                </td>
                                            )}
                                            {isRole && (
                                                <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px]">
                                                    {guest.birthday}
                                                </td>
                                            )}
                                            <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px]">
                                                {guest.email_verified_at}
                                            </td>
                                            <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px]">
                                                {guest.created_at}
                                            </td>
                                            <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px]">
                                                {guest.updated_at}
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
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div
                            className="mt-4 overflow-x-auto max-h-[60vh]"
                            hidden={tabToggle}
                        >
                            <table className="min-w-full bg-white shadow-md rounded-xl text-[14px] relative">
                                <thead className="relative">
                                    <tr className="border-b bg-slate-100 sticky top-0 w-full  bg-blue-gray-100 text-gray-700">
                                        <th className="border-r py-3 px-4 min-w-[40px] max-w-[90px] text-left">
                                            Name
                                        </th>
                                        <th className="border-r py-3 px-4 min-w-[40px] max-w-[90px] text-left">
                                            Email
                                        </th>
                                        {isRole && (
                                            <th className="border-r py-3 px-4 min-w-[40px] max-w-[90px] text-left">
                                                Password
                                            </th>
                                        )}
                                        {isRole && (
                                            <th className="border-r py-3 px-4 min-w-[40px] max-w-[90px] text-left">
                                                Role
                                            </th>
                                        )}
                                        {isRole && (
                                            <th className="border-r py-3 px-4 min-w-[40px] max-w-[90px] text-left">
                                                Phone Number
                                            </th>
                                        )}
                                        <th className="border-r py-3 px-4 min-w-[40px] max-w-[90px] text-left">
                                            Birthday
                                        </th>
                                        <th className="border-r py-3 px-4 min-w-[40px] max-w-[90px] text-left">
                                            Created At
                                        </th>
                                        <th className="border-r py-3 px-4 min-w-[40px] max-w-[90px] text-left">
                                            Updated At
                                        </th>

                                        <th className=" py-3 px-4 text-left min-w-[40px] max-w-[20px]">
                                            Action
                                        </th>
                                        <th className=" py-3 px-4 text-left min-w-[40px] max-w-[20px]"></th>
                                    </tr>
                                </thead>
                                <tbody className="h-[100px] text-blue-gray-900">
                                    {users.map((admin, index) => (
                                        <tr
                                            key={index}
                                            className="max-w-xs break-words border-b border-blue-gray-200"
                                        >
                                            <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px] ">
                                                {admin.name}
                                            </td>
                                            <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px]  break-words">
                                                {admin.email}
                                            </td>
                                            {isRole && (
                                                <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px]">
                                                    {admin.password}
                                                </td>
                                            )}
                                            {isRole && (
                                                <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px]">
                                                    {admin.role}
                                                </td>
                                            )}
                                            {isRole && (
                                                <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px]">
                                                    {admin.phone_number}
                                                </td>
                                            )}
                                            <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px]">
                                                {admin.birthday}
                                            </td>
                                            <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px]">
                                                {admin.created_at}
                                            </td>
                                            <td className="border-r py-3 px-4 min-w-[40px] max-w-[90px]">
                                                {admin.updated_at}
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
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
