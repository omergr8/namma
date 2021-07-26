import classes from "./ThisMonth.module.css";
import React, { useState, useEffect } from "react";
import ErrorModel from "./Components/ErrorModel";
import LoadDetail from "./Components/LoadDetail";
const ThisMonth = (props) => {
  const [upcomingPayment, setUpcomingPayment] = useState();
  const [errorPayment, setErrorPayment] = useState();
  const [purpose, setPurpose] = useState(props.loan.purpose);
  const [borrowerName, setBorrowerName] = useState(props.loan.borrowerName);
  const [enrollmentType, setEnrollmentType] = useState(
    props.serviceEnrollment.enrollmentType
  );
  const dateFormatter = (d) => {
    const dataDate = new Date(d);
    dataDate.setHours(0, 0, 0, 0);
    return dataDate;
  };
  const findUpcomingPayment = () => {
    const currentDate = new Date();
    const paymentArray = props.paymentRecord;
    currentDate.setHours(0, 0, 0, 0);
    // console.log(currentDate, dataDate, dataDate > currentDate);
    const result = paymentArray.find((e) => {
      return dateFormatter(e.paymentDate) > currentDate;
    });
    console.log(result);
    if (result) {
      setUpcomingPayment(result);
    }
  };
  const findErrorPayment = () => {
    const paymentArray = props.paymentRecord;
    const result = paymentArray.find((e) => {
      return e.status === "Failed";
    });
    setErrorPayment(result);
    console.log(result);
  };
  useEffect(() => {
    findUpcomingPayment();
    findErrorPayment();
  }, []);

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <h2>this month</h2>
        {errorPayment && <ErrorModel />}
        <LoadDetail
          upcomingPayment={upcomingPayment}
          purpose={purpose}
          borrowerName={borrowerName}
          enrollmentType={enrollmentType}
        />
      </div>
    </div>
  );
};
export default ThisMonth;
