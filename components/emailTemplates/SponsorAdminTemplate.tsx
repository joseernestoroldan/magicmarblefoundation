import React from 'react'

type invoice = {
    email: string;
    totalValue: string;
    firstName: string;
    secondName: string;
    country: string;
    address: string;
    telephone: string;
    
  };

const SponsorAdminTemplate = (invoice: invoice) => {
    
  return (
    <div>
        <h1>New Sponsor Subscribed</h1>
        <p>{invoice.firstName} {invoice.secondName} has subscribed a sponsorship</p>
        <p>Amount: {invoice.totalValue}$ </p>
        <p>Email: {invoice.email}</p>
        <p>Country: {invoice.country}</p>
        <p>Address: {invoice.address}</p>
        <p>Telephone: {invoice.telephone}</p>
    </div>
  )
}

export default SponsorAdminTemplate