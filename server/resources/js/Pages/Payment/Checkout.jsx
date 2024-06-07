import { useState } from "react";
import axios from "axios";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
export default function Checkout({ auth }) {
    const [txnid, setTxnid] = useState("TXNID");
    const [amount, setAmount] = useState(1);
    const [ccy, setCcy] = useState("PHP");
    const [description, setDescription] = useState("Test");
    const [email, setEmail] = useState("some@merchant.ph");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.post("/checkout", {
            txnid,
            amount,
            ccy,
            description,
            email,
        });

        if (response.data.redirect_url) {
            window.location.href = response.data.redirect_url;
        }
    };

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
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={txnid}
                    onChange={(e) => setTxnid(e.target.value)}
                    placeholder="Transaction ID"
                />
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount"
                />
                <input
                    type="text"
                    value={ccy}
                    onChange={(e) => setCcy(e.target.value)}
                    placeholder="Currency"
                />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <button type="submit">Pay Now</button>
            </form>
        </AuthenticatedLayout>
    );
}
