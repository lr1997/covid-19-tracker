import React, { useEffect } from "react";
import { Select } from "antd";
const { Option } = Select;

const Selector = () => {
  useEffect(() => {
    // componentDidMount
    // console.log("ddd");
  }, []);
  return (
    <>
      <h1>Selector</h1>
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
    </>
  );
};

const handleChange = (value) => {
  console.log(`selected ${value}`);
  alert("hello");
};

export default Selector;
