import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Modal, Button, Checkbox, DatePicker, Space } from "antd";
import { filterApi } from "../../../../../constants/filter";
import classes from "../Payments.module.css";
const FilterTable = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [withdrawlChecked, setWithdrawlChecked] = useState(false);
  const [depositChecked, setDepositChecked] = useState(false);
  const [loremChecked, setLoremChecked] = useState(false);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const history = useHistory();
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
    const filtered = filterApi(
      fromDate,
      toDate,
      withdrawlChecked,
      depositChecked,
      loremChecked
    );
    console.log(filtered);
    let url;
    if (filtered === undefined) {
      url = `/api/v1/customers/{{cid}}/paymentSchedule?status=Completed`;
      history.push("?status=Completed");
    } else {
      url = `/api/v1/customers/{{cid}}/paymentSchedule${filtered}`;
      history.push(filtered);
    }
    console.log(url, history);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);

    if (e.target.name === "withdrawl") {
      setWithdrawlChecked(!withdrawlChecked);
    } else if (e.target.name === "deposit") {
      setDepositChecked(!depositChecked);
    } else if (e.target.name === "lorem") {
      setLoremChecked(!loremChecked);
    }
  }
  function onChangeDate(date, dateString, type) {
    console.log(date, dateString, type);
    if (type === "from") {
      setFromDate(date);
    } else if (type === "to") {
      setToDate(date);
    }
  }

  const handleClearAll = () => {
    setWithdrawlChecked(false);
    setDepositChecked(false);
    setLoremChecked(false);
    setFromDate(null);
    setToDate(null);
  };
  const footer = (
    <div className={classes.footerRowFlex}>
      <div>
        <Button
          onClick={handleClearAll}
          type="text"
          className={classes.clearButton}
        >
          Clear All
        </Button>
      </div>
      <div className={classes.footerRowFlex2}>
        <Button
          key="back"
          onClick={handleCancel}
          type="text"
          className={classes.cancelButton}
        >
          Cancel
        </Button>

        <Button key="submit" className={classes.applyButton} onClick={handleOk}>
          Apply
        </Button>
      </div>
    </div>
  );
  return (
    <>
      <Button onClick={showModal} size="large" className={classes.filterButton}>
        Filters
      </Button>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={360}
      >
        <div className={classes.transactionType}>
          <h2 className={classes.filterHead}>Transaction Type</h2>
          <div className={classes.transactionCheck}>
            <Space direction="vertical">
              <Checkbox
                onChange={onChange}
                name="withdrawl"
                checked={withdrawlChecked}
              >
                Withdrawl
              </Checkbox>
              <Checkbox
                onChange={onChange}
                name="deposit"
                checked={depositChecked}
              >
                Deposit
              </Checkbox>
              <Checkbox onChange={onChange} name="lorem" checked={loremChecked}>
                Lorem Ipsum
              </Checkbox>
            </Space>
          </div>
        </div>
        <div className={classes.filterDate}>
          <h2 className={classes.filterHead2}>Date</h2>
          <div className={classes.filterDatePicker}>
            <div className={classes.datePickerCol}>
              <p>From</p>
              <DatePicker
                onChange={(moment, dt) => onChangeDate(moment, dt, "from")}
                name="from"
                value={fromDate}
              />
            </div>
            <div className={classes.datePickerCol}>
              <p>To</p>
              <DatePicker
                onChange={(moment, dt) => onChangeDate(moment, dt, "to")}
                name="to"
                value={toDate}
              />
            </div>
          </div>
        </div>

        <div className={classes.footerDiv}>{footer}</div>
      </Modal>
    </>
  );
};
export default FilterTable;
