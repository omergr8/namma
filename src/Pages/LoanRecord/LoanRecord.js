import classes from "./LoanRecord.module.css";
import Payments from "./sections/Payments/Payments";
import ThisMonth from "./sections/ThisMonth/ThisMonth";
import { paymentRecord, loan, serviceEnrollment } from "./data";
const LoanRecord = () => {
  const payNowHandler = (text) => {
    console.log(text);
  };
  return (
    <>
      <div className={classes.mainContainer}>
        <h2 className={classes.mainHeading}>
          {loan.purpose} Loan record with {loan.borrowerName}
        </h2>
        <ThisMonth
          paymentRecord={paymentRecord}
          loan={loan}
          serviceEnrollment={serviceEnrollment}
          payNowHandler={(text) => payNowHandler(text)}
        />
        <Payments
          paymentRecord={paymentRecord}
          payNowHandler={(text) => payNowHandler(text)}
        />
      </div>
    </>
  );
};
export default LoanRecord;
