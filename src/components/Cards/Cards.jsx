import React, { useEffect } from "react";
import { Card, Row, Col } from "antd";
// import styles from "./Cards.module.css";

const Cards = (props) => {
  // useEffect(() => {
  //   console.log("Card");
  //   console.log(props.data);
  //   console.log("Card");
  // });
  return (
    <>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="确诊" style={{ width: 300 }}>
            总数<p>{props.data.confirmed}</p>
            新增<p>{props.data.newConfirmed}</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="死亡" style={{ width: 300 }}>
            总数<p>{props.data.deaths}</p>
            新增<p>{props.data.newDeaths}</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="治愈" style={{ width: 300 }}>
            总数<p>{props.data.recovered}</p>
            新增<p>{props.data.newRecovered}</p>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Cards;
