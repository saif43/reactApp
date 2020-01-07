// Import react and reactDOm libraries
import React from 'react';
import ReactDOM from 'react-dom';


// create a react comnonent 

// function based component

function getPlaceHolder(){
    return 'Type your name';
}

const App = () => {
    const buttonName = "Click me";
    return (
        <div>
            <label for="name">Name</label>
            <input type="text" placeholder={{getPlaceHolder()}} name="name" id="name"></input>
            <button type="submit" style={{backgroundColor:'blue',color:'white'}}>{{buttonName}}</button>
        </div>);
};

// take the react component and show it in browser

ReactDOM.render(<App />, document.querySelector('#root'));