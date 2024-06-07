import { useState, useEffect } from "react";
import axios from "axios";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
export default function ShowCheckout({ auth }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios
            .get("/checkout-show")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);
    if (!data) {
        return <div>Loading...</div>;
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dragonpay Settings - Payment
                </h2>
            }
        >
            <Head title="Checkout" />
            <div>
                <h1>Payment Data</h1>
                <div>
                    <h2>Parameters</h2>
                    <ul>
                        {Object.keys(data.parameters).map((key) => (
                            <li key={key}>
                                <strong>{key}:</strong> {data.parameters[key]}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>Payment URL</h2>
                    <p>{data.payment_url}</p>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
