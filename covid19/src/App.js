import React from "react";
import { Cards, CountryPicker, Chart } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component {
  state = { data: {} };

  async componentDidMount() {
    this.setState({ data: await fetchData() });
  }

  render() {
    return (
      <div className={styles.container}>
        <Cards data={this.state.data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
