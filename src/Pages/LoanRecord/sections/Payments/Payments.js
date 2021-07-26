import classes from "./Payments.module.css";
import React, { useState, useEffect } from "react";
import PaymentHeader from "./Components/PaymentHeader";
import PaymentTable from "./Components/PaymentTable";
const Payments = ({ paymentRecord }) => {
  const [pastPaymentArray, setPastPaymentArray] = useState();
  const [upcomingPaymentArray, setUpcomingPaymentArray] = useState();
  const dateFormatter = (d) => {
    const dataDate = new Date(d);
    dataDate.setHours(0, 0, 0, 0);
    return dataDate;
  };
  const pastUpcomingFilter = (type) => {
    const currentDate = new Date();
    const paymentArray = paymentRecord;
    currentDate.setHours(0, 0, 0, 0);
    let result;
    if (type === "past") {
      result = paymentArray.filter((e) => {
        return dateFormatter(e.paymentDate) <= currentDate;
      });
    } else if (type === "upcoming") {
      result = paymentArray.filter((e) => {
        return dateFormatter(e.paymentDate) > currentDate;
      });
    }

    console.log(result);
    if (result && type === "past") {
      console.log(result);
      setPastPaymentArray(result);
    } else if (result && type === "upcoming") {
      console.log(result);
      setUpcomingPaymentArray(result);
    }
  };
  useEffect(() => {
    pastUpcomingFilter("past");
    pastUpcomingFilter("upcoming");
  }, []);
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <PaymentHeader />
        <div>
          <h2 className={classes.tableHeading}>Past Payments</h2>
          <PaymentTable paymentArray={pastPaymentArray} />
        </div>
        <div>
          <h2 className={classes.tableHeading}>Upcoming Payments</h2>
          <PaymentTable paymentArray={upcomingPaymentArray} />
        </div>
        {/* <div className={classes.borderBottom} /> */}
      </div>
    </div>
  );
};
export default Payments;
