import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useWeigoSettings } from "@/hooks/data/useWeigoSettings";
import { Head } from "@inertiajs/react";
import { useForm } from "laravel-precognition-react";
import { useEffect, useState } from "react";

export default function WeigoSettings({ auth }) {
    const { d_p_weigo_settings } = useWeigoSettings();
    const [weigoSettings, setWeigoSettings] = useState(d_p_weigo_settings);

    const { data, setData, processing, errors, submit, hasErrors } = useForm(
        "post",
        "update-weigo-dp-settings",
        {
            txnid: undefined,
            merchant_id: undefined,
            uid: d_p_weigo_settings[0].uid,
        }
    );

    useEffect(() => {
        setWeigoSettings(d_p_weigo_settings[0]);
    }, [d_p_weigo_settings]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            submit();
            Inertia.reload({ only: ["d_p_weigo_settings"] });
        } catch (error) {
            console.log("Error", error.message);
        }
    };

    return (
        <section>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Weigo Dragonpay Setting
                    </h2>
                }
            >
                <Head title="Payment" />

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <form onSubmit={handleSubmit}>
                                <div className="p-6 grid grid-cols-3 gap-4 w-full">
                                    <div className="">
                                        <InputLabel
                                            htmlFor="txnid"
                                            value="TXNID"
                                        />
                                        <TextInput
                                            id="txnid"
                                            type="text"
                                            placeholder={weigoSettings.txnid}
                                            className="mt-1 block w-full"
                                            name="txnid"
                                            onChange={(e) =>
                                                setData("txnid", e.target.value)
                                            }
                                        />
                                        <InputError
                                            message={errors.txnid}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="">
                                        <InputLabel
                                            htmlFor="merchant_id"
                                            value="MERCHANT ID"
                                        />
                                        <TextInput
                                            id="merchant_id"
                                            type="text"
                                            placeholder={
                                                weigoSettings.merchant_id
                                            }
                                            className="mt-1 block w-full"
                                            name="merchant_id"
                                            onChange={(e) =>
                                                setData(
                                                    "merchant_id",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.merchant_id}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                                <div className="pl-6 pb-6">
                                    <PrimaryButton type="submit">
                                        Submit
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </section>
    );
}
