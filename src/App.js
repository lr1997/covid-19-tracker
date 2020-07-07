import React, { useEffect, useState } from "react";
import axios from "axios";
import { Cards, Chart, Selector } from "./components";
import { Button } from "antd";
import styles from "./App.module.css";
import "./App.css";

function App() {
  const [data, setData] = useState({
    confirmed: 0,
    deaths: 0,
    recovered: 0,
    newConfirmed: 0,
    newDeaths: 0,
    newRecoverd: 0,
  });

  useEffect(() => {
    async function fetchData() {
      const url = "https://api.covid19api.com/summary";
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const computedData = {
            confirmed: data.Global.TotalConfirmed,
            deaths: data.Global.TotalDeaths,
            recovered: data.Global.TotalRecovered,
            newConfirmed: data.Global.NewConfirmed,
            newDeaths: data.Global.NewDeaths,
            newRecovered: data.Global.NewRecovered,
          };
          setData(computedData);
        });
    }

    fetchData();
  }, []);
  return (
    <div className={styles.container}>
      <header className={styles.container}>
        <Cards data={data} />
        <Selector />
        <Chart />
      </header>
    </div>
  );
}

export default App;
