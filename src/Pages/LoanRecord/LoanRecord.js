import classes from "./LoanRecord.module.css";
import Payments from "./sections/Payments/Payments";
import ThisMonth from "./sections/ThisMonth/ThisMonth";
import { paymentRecord, loan, serviceEnrollment } from "./data";
const LoanRecord = () => {
  return (
    <>
      <div>
        <h2 className={classes.mainHeading}>
          {loan.purpose} Loan record with {loan.borrowerName}
        </h2>
        <ThisMonth
          paymentRecord={paymentRecord}
          loan={loan}
          serviceEnrollment={serviceEnrollment}
        />
        <Payments paymentRecord={paymentRecord} />
      </div>
    </>
  );
};
export default LoanRecord;
