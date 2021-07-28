import classes from "../Payments.module.css";
import React, { useState, useEffect } from "react";
import { Table, Button, Tooltip, Anchor } from "antd";
import { AiOutlineRight } from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";
import moment from "moment";

function formatDate(dt) {
  var d = new Date(dt);
  var result = d.toLocaleDateString("en-US", {
    year: "numeric",
    day: "2-digit",
    month: "2-digit",
  });
  return result;
}
const wordReplacement = (word, amount) => {
  if (word.includes("Monthly Payment")) {
    return word.replace("Monthly Payment", `$${amount}`);
  } else {
    return word;
  }
};

const PaymentTable = ({ paymentArray, payNowHandler }) => {
  const [items, setItems] = useState(6);
  const [paginatedData, setPaginatedData] = useState(
    paymentArray ? paymentArray.slice(0, 3) : null
  );
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  const errorText = (
    <p className={classes.toolText}>
      There was an error with this payment. Please{" "}
      <a href="#" onClick={() => payNowHandler("from col try again")}>
        try again.
      </a>
    </p>
  );
  const columns = [
    {
      title: "DATE",
      dataIndex: "paymentDate",
      render: (dt) => <h2 className={classes.colDate}>{formatDate(dt)}</h2>,
      sorter: {
        compare: (a, b) =>
          moment(a.paymentDate).unix() - moment(b.paymentDate).unix(),
      },
    },
    {
      title: "STATUS",
      dataIndex: "status",
      render: (text) =>
        text === "Failed" ? (
          <p className={classes.statusItemText}>
            {text}{" "}
            <span>
              <Tooltip placement="right" title={errorText} color="#E06956">
                <RiErrorWarningFill />
              </Tooltip>
            </span>
          </p>
        ) : (
          <p className={classes.statusItemText2}>{text}</p>
        ),
    },
    {
      title: "DESCRIPTION",
      dataIndex: "description",
      // render: (text, record) =>
      //   wordReplacement(text, record.amountInCents / 100),
    },
    {
      title: "PAYMENT METHOD",
      dataIndex: "paymentMethod",
      sorter: {
        compare: (a, b) => a.paymentMethod.length - b.paymentMethod.length,
      },
    },
    {
      title: "AMOUNT",
      dataIndex: "amount",
      render: (text, record) => (
        <div>
          {record.amountInCents > 0 ? (
            <p className={classes.positiveAmount}>
              +${record.amountInCents / 100}.00
            </p>
          ) : (
            <p className={classes.negativeAmount}>
              -${Math.abs(record.amountInCents) / 100}.00
            </p>
          )}
          {record.loanAmountPendingInCents !== null && (
            <p className={classes.availableText}>
              ${record.loanAmountPendingInCents / 100}.00 left
            </p>
          )}
        </div>
      ),
      sorter: {
        compare: (a, b) => a.amountInCents - b.amountInCents,
        multiple: 1,
      },
    },
  ];
  const loadMore = () => {
    const oldItem = items;
    setItems(oldItem + 3);
    const slicedData = paymentArray.slice(0, items);
    setPaginatedData(slicedData);
  };

  useEffect(() => {
    if (paymentArray !== undefined) {
      setPaginatedData(paymentArray.slice(0, 3));
    }
  }, [paymentArray]);
  return (
    <div className={classes.paymentTableDiv}>
      <Table
        rowClassName={(record, index) =>
          record.status === "Failed" && classes.failRow
        }
        className={classes.paymentTable}
        columns={columns}
        pagination={false}
        dataSource={paginatedData}
        onChange={onChange}
      />
      {paymentArray && paginatedData
        ? paginatedData.length !== paymentArray.length && (
            <div className={classes.viewMoreButtonDiv}>
              <Button
                type="text"
                className={classes.viewMoreButton}
                onClick={loadMore}
              >
                <p className={classes.viewMoreText}>
                  View More
                  <span>
                    <AiOutlineRight />
                  </span>
                </p>
              </Button>
            </div>
          )
        : null}
    </div>
  );
};
export default PaymentTable;
