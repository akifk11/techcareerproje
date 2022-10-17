import React, { useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import axios from "axios";

const CustomerDetails = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    axios
      .get(`https://northwind.vercel.app/api/customers/${id}`)
      .then((res) => {
        setCustomer(res.data);
      });
  }, []);

  console.log(customer);

  return (
    <div>
      <h1>Müşteri idsi: {customer.id}</h1>
      <h1>Şirket Adı:{customer.companyName}</h1>
      <h1>Yetkili Adı: {customer.contactName}</h1>
      <h1>Yetkili Ünvanı: {customer.contactTitle}</h1>
    </div>
  );
};

export default CustomerDetails;
