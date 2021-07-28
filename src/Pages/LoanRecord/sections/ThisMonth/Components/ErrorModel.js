/* eslint-disable jsx-a11y/anchor-is-valid */
import classes from "../ThisMonth.module.css";
import { Row, Col, Button } from "antd";
import { RiErrorWarningFill } from "react-icons/ri";

const ErrorModel = (props) => {
  const payNowHandler = (text) => {
    props.payNowHandler(text);
  };
  return (
    <div>
      <Row>
        <Col span={12}>
          <div className={classes.errorTextDiv}>
            <p className={classes.errorText}>
              <span>
                <RiErrorWarningFill />
              </span>
              There was an error with recent payment.{" "}
              <a
                onClick={() => payNowHandler("i am from try again")}
                href="#"
                className={classes.anchorText}
              >
                Please try again
              </a>
              .
            </p>
          </div>
        </Col>
        <Col span={12}>
          <div className={classes.payButtonDiv}>
            <Button
              className={classes.payButton}
              onClick={() => payNowHandler("i am from pay now")}
            >
              Pay Now
            </Button>
          </div>
        </Col>
      </Row>
      <div className={classes.borderBottom} />
    </div>
  );
};
export default ErrorModel;
