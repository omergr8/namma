import classes from "../ThisMonth.module.css";
import { Button } from "antd";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const LoadDetail = ({ upcomingPayment, borrowerName, enrollmentType }) => {
  function formatDate(dt) {
    var d = new Date(dt);
    var result = d.toLocaleDateString("en-US", {
      year: "numeric",
      day: "2-digit",
      month: "2-digit",
    });
    return result;
  }
  const whatIsNammaHandler = () => {
    console.log("what is namma easy");
  };
  return (
    <div>
      <div className={classes.detailFlexRow}>
        <div className={classes.detailFlex}>
          <p className={classes.detailGetText}>
            You will get{" "}
            <span>
              $
              {upcomingPayment !== undefined &&
                upcomingPayment.amountInCents / 100}
            </span>{" "}
            from {borrowerName}, due{" "}
            {upcomingPayment !== undefined &&
              formatDate(upcomingPayment.paymentDate)}
          </p>
          <p className={classes.detailTotal}>
            Total $
            {upcomingPayment !== undefined &&
              upcomingPayment.loanAmountPendingInCents / 100}
            .00 left
          </p>
        </div>

        <div className={classes.enrollNammaDiv}>
          {enrollmentType === null && (
            <div className={classes.enrollNammaDiv2}>
              <a href="#" onClick={whatIsNammaHandler}>
                <p>
                  {" "}
                  <span>
                    <AiOutlineQuestionCircle />
                  </span>{" "}
                  What is Namma Easy?
                </p>
              </a>
              <Button className={classes.enrollNammaButton}>
                Enroll Namma Easy
              </Button>
              <p>Namma Easy will be applied to next transaction cycle</p>
            </div>
          )}

          <div
            className={
              enrollmentType === null
                ? classes.loanDetailButtonDiv
                : classes.loanDetailButtonDiv2
            }
          >
            <Button type="text" className={classes.loanDetailButton}>
              <p className={classes.loanDetailText}>
                View Loan Details
                <span>
                  <AiOutlineRight />
                </span>
              </p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoadDetail;
