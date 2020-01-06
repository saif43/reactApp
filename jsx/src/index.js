// Import react and reactDOm libraries
import React from 'react';
import ReactDOM from 'react-dom';


// create a react comnonent 

// function based component
const App = () => {
    return (
        <div>
            <label for="name">Enter Name</label>
            <input type="text" name="name" id="name"></input>
            <button type="submit" style={{backgroundColor:'blue',color:'white'}}>Submit</button>
        </div>);
};

// take the react component and show it in browser

ReactDOM.render(<App />, document.querySelector('#root'));