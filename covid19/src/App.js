import React from "react";
import { Cards, CountryPicker, Chart } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component {
  state = { data: {}, country: "" };

  async componentDidMount() {
    this.setState({ data: await fetchData() });
  }

  handleCountryChange = async (country) => {
    await this.setState({ country });
    console.log(this.state.country);
  };

  render() {
    return (
      <div className={styles.container}>
        <Cards data={this.state.data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart />
      </div>
    );
  }
}

export default App;
