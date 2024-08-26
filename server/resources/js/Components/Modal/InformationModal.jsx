import { useEffect, useState } from "react";
import SecondaryButton from "../SecondaryButton";

export default function InformationModal({ data, onClickModal, modePay = "credit-card" | "pre-selecting" | "payment" | "service-model" | "filtered-payment" }) {
       
    const [billing_details, setBillingDetails] = useState({});
    useEffect(() => {
        if(modePay === "credit-card") setBillingDetails(data);
    },[setBillingDetails]);

    return (
        <div className="mt-2 p-6">
            <div className="overflow-x-auto max-h-[60vh] font-bold mb-5">
                Data Information 
                {
                    modePay === "credit-card" && (
                        <div className="font-bold text-green-500 text-[24px] mb-2">
                             Billing Details
                        </div>
                    )
                }
            </div>

            { modePay !== 'credit-card' && (
                 <div className="grid  pb-6 gap-4">
                 <div className="flex gap-3 ">
                     {(data.FirstName || data.LastName || data.name) && (
                         <p className="font-bold">
                             {data.FirstName} {data.LastName}
                         </p>
                     )}
                     <p> {data.Email && data.Email}</p>
                     <p className="font-bold">{data.Currency && data.Currency}</p>
                 </div>
 
                 {data.telNo && (
                     <>
                         <p className="font-bold">Telephone Number:</p>
                         <p> {data.TelNo && data.TelNo}</p>
                     </>
                 )}
                 {data.address1 && (
                     <>
                         <p className="font-bold">Address 1:</p>
                         <p> {data.Address1 && data.Address1}</p>
                     </>
                 )}
                 {data.address2 && (
                     <>
                         <p className="font-bold">Address 2:</p>
                         <p> {data.Address2 && data.Address2}</p>
                     </>
                 )}
                 {(data.City || data.Country || data.State) && (
                     <div className="flex gap-4">
                         <p>{data.City && data.City}</p>
                         <p>{data.Country && data.Country}</p>
                         <p>{data.State && data.State}</p>
                     </div>
                 )}
                 {data.Description && (
                     <>
                         <p className="font-bold">Description:</p>
                         <p> {data.Description && data.Description}</p>
                     </>
                 )}
             </div>
            ) }

            { modePay === 'credit-card' && (
                 <div className="grid  pb-6 gap-4">
                   
                   {data.Description && (
                     <div>
                         <p className="font-bold">Credit Payment Description:</p>
                         <p className="break-all"> {'->'} {data.Description && data.Description}</p>
                     </div>
                 )}
                 <div className="grid grid-cols-3 gap-3 ">
                    
                     {(billing_details.FirstName || billing_details.LastName) && (
                        <div>
                             <p>Full Name:</p>
                             <p className="font-bold break-all">
                                 {billing_details.FirstName}{' '}{billing_details.MiddleName}{' '}{billing_details.LastName}
                            </p>
                        </div>
                     )}
                     <div>
                        <p>Email:</p>
                        <p className="break-all"> {billing_details.Email && billing_details.Email}</p>
                     </div>
                     {
                       (billing_details.Country || billing_details.Currency) && (
                        <div>
                            <p>Country | Currency:</p>
                            <div className="flex gap-2">
                                <p className="font-bold">{billing_details.Country && billing_details.Country}</p>
                                |
                                <p className="font-bold text-green-600">{data.Currency && data.Currency}</p>
                            </div>
                        </div>
                       )
                     }
                 </div>

                  <div className="grid grid-cols-3 gap-3 ">
                    {billing_details.EmailBD && (
                        <div>
                            <p className="font-bold">Billing Email:</p>
                            <p className="break-all"> {billing_details.EmailBD}</p>
                        </div>
                    )}
                    {billing_details.TelNo && (
                     <div>
                         <p className="font-bold">Telephone Number:</p>
                         <p> {billing_details.TelNo}</p>
                     </div>
                 )}
                  </div>

 
                 {billing_details.Address1 && (
                     <div>
                         <p className="font-bold">Address1:</p>
                         <p> {billing_details.Address1 && billing_details.Address1}</p>
                     </div>
                 )}
                 {billing_details.Address2 && (
                     <div>
                         <p className="font-bold">Address2:</p>
                         <p> {billing_details.Address2 && billing_details.Address2}</p>
                     </div>
                 )}
                 {(billing_details.City || billing_details.Country || billing_details.State || billing_details.ZipCode) && (
                     <div className="grid grid-cols-4">
                         <div className="">
                            <p className="font-bold">City:</p>
                            <p> {billing_details.City && billing_details.City}</p>
                         </div>
                         <div className="">
                            <p className="font-bold">Country:</p>
                            <p> {billing_details.Country && billing_details.Country}</p>
                         </div>
                         <div className="">
                            <p className="font-bold">State:</p>
                            <p> {billing_details.State && billing_details.State}</p>
                         </div>
                         <div className="">
                            <p className="font-bold">ZipCode:</p>
                            <p> {billing_details.ZipCode && billing_details.ZipCode}</p>
                         </div>
                     </div>
                 )}
                
               
                 
             </div>
            ) }
            <div className="flex justify-between">
                <SecondaryButton onClick={() => onClickModal(false)}>
                    Cancel
                </SecondaryButton>
            </div>
        </div>
    );
}
