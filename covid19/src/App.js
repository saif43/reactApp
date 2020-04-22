import React from "react";
import { Cards, CountryPicker, Chart } from "./components";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <Cards />
      <CountryPicker />
      <Chart />
    </div>
  );
};

export default App;
