import classes from "../ThisMonth.module.css";
import { Row, Col, Button } from "antd";
import { RiErrorWarningFill } from "react-icons/ri";

const ErrorModel = () => {
  return (
    <div>
      <Row>
        <Col span={12}>
          <div className={classes.errorTextDiv}>
            <p className={classes.errorText}>
              <span>
                <RiErrorWarningFill />
              </span>
              There was an error with recent payment. Please try again.
            </p>
          </div>
        </Col>
        <Col span={12}>
          <div className={classes.payButtonDiv}>
            <Button danger className={classes.payButton}>
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
