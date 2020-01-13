// Import react and reactDOm libraries
import React from 'react';
import ReactDOM from 'react-dom';


// create a react comnonent 

// function based component

function getButtonName(){
    return "Click me";
}

const App = () => {
    const inputObject = {text: 'name', placeholder:'Enter you name'};
    
    return (
        <div>
            <label className="label" htmlFor="name">Name</label>
            <input type="text" placeholder={inputObject.placeholder} name={inputObject.text} id={inputObject.text}></input>
            <button type="submit" style={{backgroundColor:'blue',color:'white'}}>{getButtonName()}</button>
        </div>);
};

// take the react component and show it in browser

ReactDOM.render(<App />, document.querySelector('#root'));