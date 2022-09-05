import React, {useState} from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../actions";
import { Switch } from 'antd';
import "antd/dist/antd.css";

import "./App.css";


const App = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="container" style={{backgroundColor: darkMode ? '#000000' : ''}}>
      <i onClick={() => { props.increment(props.count)}} className="far fa-plus-square fa-5x plus"></i>

      <h1 style={{color: darkMode ? '#FFFFFF' : ''}} className="counter">{props.count}</h1>

      <i onClick={() => {props.decrement(props.count)}} className="far fa-minus-square fa-5x minus"></i>

      <div>
        <button onClick={() => {props.reset()}} className="reset ui basic blue button">Reset</button>
      </div>

      <div>
        <Switch onChange={() => setDarkMode(!darkMode)} checkedChildren="Dark" unCheckedChildren="Bright" />
      </div>
    </div>
  );
}


const mapStateToProps = (state) => {
  console.log(state);
  return {
    count: state.counter.count,
  };
};

export default connect(mapStateToProps, { increment, decrement, reset })(App);
