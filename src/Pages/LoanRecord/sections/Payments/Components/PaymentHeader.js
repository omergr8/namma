import classes from "../Payments.module.css";
import { Input } from "antd";
import { AiOutlineSearch } from "react-icons/ai";
import FilterTable from "./FilterTable";
const { Search } = Input;

const suffix = (
  <AiOutlineSearch
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
const PaymentHeader = () => {
  const onSearch = () => {};
  return (
    <div>
      <div className={classes.headerFlex}>
        <div>
          <Search
            placeholder="input search text"
            enterButton={false}
            size="large"
            prefix={suffix}
            onSearch={onSearch}
          />
        </div>
        <div>
          <FilterTable />
        </div>
      </div>
    </div>
  );
};
export default PaymentHeader;
