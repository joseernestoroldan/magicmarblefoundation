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

const DonationTemplate = (invoice: invoice) => {
    
  return (
    <div>
        <h1>A new donation has been done!</h1>
        <p>{invoice.firstName} {invoice.secondName} has done a new donation</p>
        <p>Amount: {invoice.totalValue}$ </p>
        <p>Email: {invoice.email}</p>
        <p>Country: {invoice.country}</p>
        <p>Address: {invoice.address}</p>
        <p>Telephone: {invoice.telephone}</p>
    </div>
  )
}

export default DonationTemplate