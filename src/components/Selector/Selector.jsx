import React, { useEffect, useState } from "react";
import { Select } from "antd";
const { Option } = Select;

const Selector = (props) => {
  const [options, setOptions] = useState([]);

  // const children = [];

  useEffect(() => {
    // const fetchAPI = async () => {
    // setCountries(await fetchCountries());
    // };

    // fetchAPI();

    const children = [];

    console.log(props.data.countries);

    props.data.countries.forEach((element) => {
      console.log(element.Country);
    });

    setOptions();
  }, []);

  // setOptions(children);
  // // useEffect(() => {
  // //   const children = [];
  // //   props.data.countries.forEach((element) => {
  // //     children.push(
  // //       <Option value={element.Country} key={element.CountryCode}>
  // //         {element.Country}
  // //       </Option>
  // //     );
  // //   });

  // //   setOptions(children);
  // // }, [props.data.countries]);

  return (
    <>
      <h1>Selector</h1>
      {/* <h2>{options[0].Country}</h2> */}
      {props.data.countries[0].Country}
      <Select
        defaultValue="Global"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="Global">Global</Option>
        <Option value="Global">Global</Option>
        <Option value="Global">Global</Option>
      </Select>
    </>
  );
};

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

export default Selector;
